import { useEffect, useState } from "react";
import Radios from "../Radios";
import SelectKepentingan from "../SelectKepentingan";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import DialogPetunjuk from "../DialogPetunjuk";
import DataConsistency from "../InfoConsistency";
import InfoConsistency from "../InfoConsistency";

export default function Level3({
    hierarchyData,
    generatePairs,
    responsesLevel3,
    setResponsesLevel3,
    handleSubmit,
}) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const perbandinganAlternatif = generatePairs(hierarchyData.alternatives);
    const kriteriaTunggal = hierarchyData.criteria.filter(
        (criterion) => criterion.subCriteria.length === 0
    );
    const subCriteria = hierarchyData.criteria.flatMap((criterion) =>
        criterion.subCriteria.map((subCriterion) => ({
            ...subCriterion,
        }))
    );
    const allSubCriteria = [...subCriteria, ...kriteriaTunggal];

    function handleRadioChange(index, value, subIndex) {
        setResponsesLevel3((prev) => {
            const updated = [...prev.kriteria];

            if (!updated[index]) {
                updated[index] = {
                    subCriteriaName: allSubCriteria[index].name,
                    jawaban: [],
                };
            }

            const existingAnswer = updated[index].jawaban[subIndex] || {};
            updated[index].jawaban[subIndex] = {
                ...existingAnswer,
                tingkatKepentingan: existingAnswer.tingkatKepentingan || 0,
                pilihan: [
                    perbandinganAlternatif[subIndex][0].name,
                    perbandinganAlternatif[subIndex][1].name,
                ],
                selected: value,
            };

            return { ...prev, kriteria: updated };
        });
    }

    function handleSelectChange(index, value, subIndex) {
        setResponsesLevel3((prev) => {
            const updated = [...prev.kriteria];

            if (!updated[index]) {
                updated[index] = {
                    kriteriaName: hierarchyData.criteria[index].name,
                    jawaban: [],
                };
            }

            const existingAnswer = updated[index].jawaban[subIndex] || {};
            updated[index].jawaban[subIndex] = {
                ...existingAnswer,
                tingkatKepentingan: parseInt(value),
            };

            return { ...prev, kriteria: updated };
        });
    }

    function isAllFilled() {
        const subKriteriaCount = allSubCriteria.length;
        const isUndefined = responsesLevel3.kriteria?.some(
            (kriteria) => kriteria === undefined
        );
        if (isUndefined) return;
        return (
            responsesLevel3.kriteria.every((kriteria) =>
                kriteria.jawaban?.every(
                    (jawaban) => jawaban.tingkatKepentingan !== 0
                )
            ) && subKriteriaCount == responsesLevel3.kriteria.length
        );
    }

    function isFilled(index) {
        if(responsesLevel3.kriteria[index]?.jawaban.length !== perbandinganAlternatif.length) return;
        return (
            responsesLevel3.kriteria[index]?.jawaban?.every(
                (jawaban) => jawaban.tingkatKepentingan !== 0
            )
        );
    }


    function checkInconsistency(data,index) {
        if(!isFilled(index)) return ;
        const alternatives = hierarchyData.alternatives.map((alt) => alt.name);
        const matrix = Array.from({ length: alternatives.length }, () =>
            Array(alternatives.length).fill(1)
    );

        data.jawaban.forEach(({ tingkatKepentingan, pilihan, selected }) => {
            const [alt1, alt2] = pilihan;
            const i = alternatives.indexOf(alt1);
            const j = alternatives.indexOf(alt2);

            if (selected === alt1) {
                matrix[i][j] = tingkatKepentingan;
                matrix[j][i] = 1 / tingkatKepentingan;
            } else {
                matrix[i][j] = 1 / tingkatKepentingan;
                matrix[j][i] = tingkatKepentingan;
            }
        });

        return ahpConsistencyCheck(matrix)
    }

    function ahpConsistencyCheck(matrix) {
        const n = matrix.length;
        const RI_VALUES = {
            1: 0.00, 2: 0.00, 3: 0.58, 4: 0.90,
            5: 1.12, 6: 1.24, 7: 1.32, 8: 1.41, 9: 1.45, 10: 1.49
        };
    
        // Step 1: Hitung bobot prioritas (menggunakan rata-rata geometri)
        const weights = matrix.map(row => {
            const product = row.reduce((a, b) => a * b, 1);
            return Math.pow(product, 1 / n);
        });
    
        // Normalisasi bobot
        const weightSum = weights.reduce((a, b) => a + b, 0);
        const normalizedWeights = weights.map(w => w / weightSum);
    
        // Step 2: Hitung λ_max
        const lambdaMax = matrix.map((row, i) =>
            row.reduce((sum, val, j) => sum + val * normalizedWeights[j], 0) / normalizedWeights[i]
        ).reduce((a, b) => a + b, 0) / n;
    
        // Step 3: Hitung CI dan CR
        const CI = (lambdaMax - n) / (n - 1);
        const RI = RI_VALUES[n] || 1.49; // fallback RI jika n > 10
        const CR = CI / RI;
    
        return {
            weights: normalizedWeights,
            lambdaMax: lambdaMax.toFixed(3),
            CI: CI.toFixed(3),
            CR: CR.toFixed(3),
            isConsistent: CR < 0.1
        };
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Kuesioner E-Wallet - Level 3";
    }, []);

    return (
        <div className="overflow-x-auto p-5 flex flex-col items-center w-full max-md:p-2">
            <div className="flex justify-between w-full max-w-7xl mx-auto max-md:max-w-[100%]">
                <Button
                    className="pointer-events-none self-start"
                    variant="neutral"
                >
                    <span className="max-md:hidden">
                        LEVEL 3 : PERBANDINGAN ALTERNATIF STRATEGIS
                    </span>
                    LEVEL 3
                </Button>
                <DialogPetunjuk
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                />
            </div>
            {allSubCriteria.map((subcriteria, index) => (
                <Card
                    key={index}
                    className="overflow-x-auto w-full max-w-7xl mx-auto my-4 p-4 gap-3 rounded-lg shadow-lg bg-white max-md:max-w-[100%] max-md:text-xs"
                >
                    <Card>
                        <p className="text-center text-lg font-bold px-1 max-md:text-xs">
                            {`${subcriteria.penjelasan}`}
                        </p>
                    </Card>
                    <InfoConsistency data={checkInconsistency(responsesLevel3.kriteria[index],index)}/>
                    <table className="table table-auto" key={subcriteria.name}>
                        <thead>
                            <tr className="text-black bg-main">
                                <th
                                    colSpan={3}
                                    className="text-center border-2 w-[65%] whitespace-normal p-4 max-md:p-1"
                                >
                                    Berdasarkan sub-kriteria "{subcriteria.name}
                                    ", dalam menentukan , alternatif strategis
                                    manakah yang lebih penting dari perbandingan
                                    alternatif-alternatif strategis berikut ini?
                                </th>
                                <th className="border-2 text-center max-md:p-1">
                                    Berapa Tingkat Kepentingannya ?
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {perbandinganAlternatif.map(
                                (alternatif, subIndex) => (
                                    <tr
                                        key={subIndex}
                                        className="text-center bg-background"
                                    >
                                        <td
                                            className={`border-2 p-4 max-md:p-1`}
                                        >
                                            <p
                                                className={` ${
                                                    responsesLevel3.kriteria[
                                                        index
                                                    ]?.jawaban[subIndex]
                                                        ?.selected ==
                                                    alternatif[0].name
                                                        ? "text-green-500"
                                                        : ""
                                                }`}
                                            >
                                                {alternatif[0].name}
                                            </p>
                                        </td>
                                        <td className="border-2">
                                            <div className="flex justify-center items-center">
                                                <Radios
                                                    index={index}
                                                    subIndex={subIndex}
                                                    onChange={handleRadioChange}
                                                    radio1={alternatif[0].name}
                                                    radio2={alternatif[1].name}
                                                    name={`radio-${index}-${subIndex}`}
                                                    selected={
                                                        responsesLevel3
                                                            .kriteria[index]
                                                            ?.jawaban[subIndex]
                                                            ?.selected
                                                    }
                                                />
                                            </div>
                                        </td>
                                        <td className={`border-2`}>
                                            <p
                                                className={` ${
                                                    responsesLevel3.kriteria[
                                                        index
                                                    ]?.jawaban[subIndex]
                                                        ?.selected ==
                                                    alternatif[1].name
                                                        ? "text-green-500"
                                                        : ""
                                                }`}
                                            >
                                                {alternatif[1].name}
                                            </p>
                                        </td>
                                        <td className="border-2 p-2 max-md:p-1">
                                            <SelectKepentingan
                                                onChange={handleSelectChange}
                                                index={index}
                                                subIndex={subIndex}
                                                element1={alternatif[0].name}
                                                element2={alternatif[1].name}
                                                selectedElement={
                                                    responsesLevel3.kriteria[
                                                        index
                                                    ]?.jawaban[subIndex]
                                                        ?.selected
                                                }
                                            />
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </Card>
            ))}
            <Button
                onClick={() => handleSubmit()}
                className={"w-2xl max-md:max-w-[90%]"}
                disabled={!isAllFilled()}
            >
                Kirim Kuesioner
            </Button>
        </div>
    );
}
