import Radios from "../Radios";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import SelectKepentingan from "../SelectKepentingan";
import { useEffect, useState } from "react";
import DialogPetunjuk from "../DialogPetunjuk";
import InfoConsistency from "../InfoConsistency";

export default function Level2({
    hierarchyData,
    generatePairs,
    responsesLevel2,
    setResponsesLevel2,
    handleLevelChange,
}) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const perbandinganSubKriteria = hierarchyData.criteria.map((criterion) =>
        generatePairs(criterion.subCriteria)
    );

    function handleRadioChange(index, value, subIndex) {
        setResponsesLevel2((prev) => {
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
                tingkatKepentingan: existingAnswer.tingkatKepentingan || 0,
                pilihan: [
                    perbandinganSubKriteria[index][subIndex][0].name,
                    perbandinganSubKriteria[index][subIndex][1].name,
                ],
                selected: value,
            };

            return { ...prev, kriteria: updated };
        });
    }

    function handleSelectChange(index, value, subIndex) {
        setResponsesLevel2((prev) => {
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
        const kriteriaCount = hierarchyData.criteria.filter(
            (item) => item.subCriteria.length > 0
        ).length;
        const isUndefined = responsesLevel2.kriteria?.some(
            (kriteria) => kriteria === undefined
        );
        if (isUndefined) return;

        return (
            responsesLevel2.kriteria?.every((kriteria) =>
                kriteria.jawaban?.every(
                    (jawaban) => jawaban.tingkatKepentingan !== 0
                )
            ) && kriteriaCount == responsesLevel2.kriteria.length
        );
    }

    function isFilled(index) {
        if (
            responsesLevel2.kriteria[index]?.jawaban.length !==
            perbandinganSubKriteria[index].length
        )
            return;
        return responsesLevel2.kriteria[index]?.jawaban?.every(
            (jawaban) => jawaban.tingkatKepentingan !== 0
        );
    }


    function checkInconsistency(data, index) {
        if (!isFilled(index)) return;
        const subCriteria = hierarchyData.criteria[index].subCriteria.map(
            (criterion) => criterion.name
        );
        const matrix = Array.from({ length: subCriteria.length }, () =>
            Array(subCriteria.length).fill(1)
        );

        data.jawaban.forEach(({ tingkatKepentingan, pilihan, selected }) => {
            const [alt1, alt2] = pilihan;
            const i = subCriteria.indexOf(alt1);
            const j = subCriteria.indexOf(alt2);

            if (selected === alt1) {
                matrix[i][j] = tingkatKepentingan;
                matrix[j][i] = 1 / tingkatKepentingan;
            } else {
                matrix[i][j] = 1 / tingkatKepentingan;
                matrix[j][i] = tingkatKepentingan;
            }
        });

        return ahpConsistencyCheck(matrix);
    }

    function ahpConsistencyCheck(matrix) {
        const n = matrix.length;
        const RI_VALUES = {
            1: 0.0,
            2: 0.0,
            3: 0.58,
            4: 0.9,
            5: 1.12,
            6: 1.24,
            7: 1.32,
            8: 1.41,
            9: 1.45,
            10: 1.49,
        };

        // Step 1: Hitung bobot prioritas (menggunakan rata-rata geometri)
        const weights = matrix.map((row) => {
            const product = row.reduce((a, b) => a * b, 1);
            return Math.pow(product, 1 / n);
        });

        // Normalisasi bobot
        const weightSum = weights.reduce((a, b) => a + b, 0);
        const normalizedWeights = weights.map((w) => w / weightSum);

        // Step 2: Hitung λ_max
        const lambdaMax =
            matrix
                .map(
                    (row, i) =>
                        row.reduce(
                            (sum, val, j) => sum + val * normalizedWeights[j],
                            0
                        ) / normalizedWeights[i]
                )
                .reduce((a, b) => a + b, 0) / n;

        // Step 3: Hitung CI dan CR
        const CI = (lambdaMax - n) / (n - 1);
        const RI = RI_VALUES[n] || 1.49; // fallback RI jika n > 10
        const CR = CI / RI;

        return {
            weights: normalizedWeights,
            lambdaMax: lambdaMax.toFixed(3),
            CI: CI.toFixed(3),
            CR: CR.toFixed(2),
            isConsistent: CR < 0.1,
        };
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Kuesioner E-Wallet - Level 2";
    }, []);

    return (
        <div className="overflow-x-auto p-5 flex flex-col items-center w-full max-md:p-2">
            <div className="flex justify-between w-full max-w-7xl mx-auto max-md:max-w-[100%]">
                <Button
                    className="pointer-events-none self-start"
                    variant="neutral"
                >
                    <span className="max-md:hidden">
                        LEVEL 2 : PERBANDINGAN SUB-KRITERIA
                    </span>
                    LEVEL 2
                </Button>
                <DialogPetunjuk
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                />
            </div>
            {hierarchyData.criteria.map((criterion, index) =>
                criterion.subCriteria.length > 0 ? (
                    <Card
                        key={index}
                        className="overflow-x-auto w-full max-w-7xl mx-auto my-4 gap-3 p-4 rounded-lg shadow-lg bg-white max-md:max-w-[100%] max-md:text-xs"
                    >
                        <Card>
                            <p className="text-center text-lg font-bold px-1 max-md:text-xs">
                                {`${criterion.penjelasan}`}
                            </p>
                        </Card>
                        <InfoConsistency
                            data={checkInconsistency(
                                responsesLevel2.kriteria[index],
                                index
                            )}
                        />

                        <table className="table table-auto">
                            <thead>
                                <tr className="text-black bg-main">
                                    <th
                                        colSpan={3}
                                        className="text-center border-2 w-[65%] whitespace-normal p-4 max-md:p-1"
                                    >
                                        {`Berdasarkan kriteria "${criterion.name}", sub-kriteria manakah yang lebih penting dari perbandingan sub-kriteria – sub-kriteria berikut ?`}
                                    </th>
                                    <th className="border-2 text-center max-md:p-1">
                                        Berapa Tingkat Kepentingannya ?
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {perbandinganSubKriteria[index]?.map(
                                    (pair, subIndex) => (
                                        <tr
                                            key={subIndex}
                                            className="text-center bg-background"
                                        >
                                            <td
                                                className={`border-2 p-4 max-md:p-1`}
                                            >
                                                <p
                                                    className={` ${
                                                        responsesLevel2
                                                            .kriteria[index]
                                                            ?.jawaban[subIndex]
                                                            ?.selected ==
                                                        pair[0].name
                                                            ? "text-green-500"
                                                            : ""
                                                    }`}
                                                >
                                                    {pair[0].name}
                                                </p>
                                            </td>
                                            <td className="border-2">
                                                <Radios
                                                    index={index}
                                                    subIndex={subIndex}
                                                    onChange={handleRadioChange}
                                                    selected={
                                                        responsesLevel2
                                                            .kriteria[index]
                                                            ?.jawaban[subIndex]
                                                            ?.selected
                                                    }
                                                    radio1={pair[0].name}
                                                    radio2={pair[1].name}
                                                    name={`radio-${index}-${subIndex}`}
                                                />
                                            </td>
                                            <td className={`border-2`}>
                                                <p
                                                    className={` ${
                                                        responsesLevel2
                                                            .kriteria[index]
                                                            ?.jawaban[subIndex]
                                                            ?.selected ==
                                                        pair[1].name
                                                            ? "text-green-500"
                                                            : ""
                                                    }`}
                                                >
                                                    {pair[1].name}
                                                </p>
                                            </td>
                                            <td className="border-2 p-2 max-md:p-1">
                                                <SelectKepentingan
                                                    onChange={
                                                        handleSelectChange
                                                    }
                                                    index={index}
                                                    subIndex={subIndex}
                                                    element1={pair[0].name}
                                                    element2={pair[1].name}
                                                    selectedElement={
                                                        responsesLevel2
                                                            .kriteria[index]
                                                            ?.jawaban[subIndex]
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
                ) : null
            )}
            <Button
                onClick={() => handleLevelChange(2)}
                className={"w-2xl max-md:max-w-[90%]"}
                disabled={!isAllFilled()}
            >
                Selanjutnya
            </Button>
        </div>
    );
}
