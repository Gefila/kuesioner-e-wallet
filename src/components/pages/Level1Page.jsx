import Radios from "../Radios";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import SelectKepentingan from "../SelectKepentingan";
import { useEffect, useState } from "react";
import DialogPetunjuk from "../DialogPetunjuk";
import InfoConsistency from "../InfoConsistency";

export default function Level1({
    generatePairs,
    hierarchyData,
    responsesLevel1,
    setResponsesLevel1,
    handleLevelChange,
}) {
    const perbandinganKriteria = generatePairs(hierarchyData.criteria);
    const [isOpenModal, setIsOpenModal] = useState(true);

    function handleRadioChange(index, value) {
        const update = [...responsesLevel1.jawaban];
        update[index] = {
            ...update[index],
            pilihan: [
                perbandinganKriteria[index][0].name,
                perbandinganKriteria[index][1].name,
            ],
            tingkatKepentingan:
                responsesLevel1.jawaban[index]?.tingkatKepentingan || 0,
            selected: value,
        };
        setResponsesLevel1((prev) => ({
            ...prev,
            jawaban: update,
        }));
    }

    function handleSelectChange(index, value) {
        const update = [...responsesLevel1.jawaban];
        update[index] = {
            ...update[index],
            tingkatKepentingan: parseInt(value),
        };
        setResponsesLevel1((prev) => ({
            ...prev,
            jawaban: update,
        }));
    }

    function isAllFilled() {
        const isUndefined = responsesLevel1.jawaban?.some(
            (jawaban) => jawaban === undefined
        );
        if (isUndefined) return;
        return (
            responsesLevel1.jawaban.every(
                (jawaban) =>
                    jawaban?.selected && jawaban?.tingkatKepentingan > 0
            ) && perbandinganKriteria.length == responsesLevel1.jawaban.length
        );
    }

    function isFilled() {
        if(responsesLevel1.jawaban.length !== perbandinganKriteria.length) return;
        const isUndefined = responsesLevel1.jawaban?.some(
            (jawaban) => jawaban === undefined
        );
        if (isUndefined) return;
        return responsesLevel1.jawaban?.every(
            (jawaban) => jawaban.tingkatKepentingan !== 0
        );
    }


    function checkInconsistency(data) {
        if(!isFilled()) return ;
        const kriteria = hierarchyData.criteria.map((crit) => crit.name);
        const matrix = Array.from({ length: kriteria.length }, () =>
            Array(kriteria.length).fill(1)
        );

        data.forEach(({ tingkatKepentingan, pilihan, selected }) => {
            const [alt1, alt2] = pilihan;
            const i = kriteria.indexOf(alt1);
            const j = kriteria.indexOf(alt2);

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
            CR: CR.toFixed(3),
            isConsistent: CR < 0.1,
        };
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Kuesioner E-Wallet - Level 1";
    }, []);

    return (
        <div className="overflow-x-auto p-5 flex flex-col items-center w-full max-md:p-2">
            <div className="flex justify-between w-full max-w-7xl mx-auto max-md:max-w-[100%]">
                <Button
                    className="pointer-events-none self-start"
                    variant="neutral"
                >
                    <span className="max-md:hidden">
                        LEVEL 1 : PERBANDINGAN KRITERIA
                    </span>
                    LEVEL 1
                </Button>
                <DialogPetunjuk
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                />
            </div>

            <Card className="overflow-x-auto w-full max-w-7xl mx-auto my-4 p-4 rounded-lg shadow-lg gap-3 bg-white max-md:max-w-[100%] max-md:text-xs">
                <InfoConsistency
                    data={checkInconsistency(
                        responsesLevel1.jawaban
                    )}
                />
                <table className="table table-auto">
                    <thead>
                        <tr className="text-black bg-main">
                            <th
                                colSpan={3}
                                className="text-center border-2 w-[60%] whitespace-normal p-4 max-md:p-1"
                            >
                                Dalam menentukan e-Wallet Terbaik Untuk
                                Transaksi Digital Bagi Mahasiswa, kriteria
                                manakah yang lebih penting dibandingkan
                                kriteria-kriteria berikut ?
                            </th>
                            <th className="border-2 text-center max-md:p-1">
                                Berapa Tingkat Kepentingannya ?
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-background">
                        {perbandinganKriteria.map((pair, index) => (
                            <tr key={index} className="text-center">
                                <td className={`border-2 p-4 max-md:p-1`}>
                                    <p
                                        className={` ${
                                            responsesLevel1.jawaban[index]
                                                ?.selected == pair[0].name
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
                                        onChange={handleRadioChange}
                                        radio1={pair[0].name}
                                        radio2={pair[1].name}
                                        name={`radio-${index}`}
                                        selected={
                                            responsesLevel1.jawaban[index]
                                                ?.selected
                                        }
                                    />
                                </td>
                                <td className={`border-2`}>
                                    <p
                                        className={` ${
                                            responsesLevel1.jawaban[index]
                                                ?.selected == pair[1].name
                                                ? "text-green-500"
                                                : ""
                                        }`}
                                    >
                                        {pair[1].name}
                                    </p>
                                </td>
                                <td className="border-2 p-2 max-md:p-1">
                                    <SelectKepentingan
                                        onChange={handleSelectChange}
                                        index={index}
                                        element1={pair[0].name}
                                        element2={pair[1].name}
                                        selectedElement={
                                            responsesLevel1.jawaban[index]
                                                ?.selected
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
            <Button
                onClick={() => handleLevelChange(1)}
                className={"w-2xl max-md:max-w-[90%]"}
                disabled={!isAllFilled()}
            >
                Selanjutnya
            </Button>
        </div>
    );
}
