import { useEffect } from "react";
import Options from "./Options";
import Radios from "./Radios";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import SelectKepentingan from "./SelectKepentingan";

export default function Level1({
    generatePairs,
    hierarchyData,
    responsesLevel1,
    setResponsesLevel1,
}) {
    const perbandinganKriteria = generatePairs(hierarchyData.criteria);

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

    return (
        <div className="overflow-x-auto p-5">
            <Button className="pointer-events-none" variant="neutral">
                Level 1
            </Button>
            <Card className="overflow-x-auto w-full max-w-7xl mx-auto my-4 p-4 rounded-lg shadow-lg bg-white">
                <table className="table table-auto">
                    <thead>
                        <tr className="text-black bg-main">
                            <th
                                colSpan={3}
                                className="text-center border-2 max-w-5xs whitespace-normal p-4"
                            >
                                Dalam menentukan e-Wallet Terbaik Untuk
                                Transaksi Digital Bagi Mahasiswa, kriteria
                                manakah yang lebih penting dibandingkan
                                kriteria-kriteria berikut ?
                            </th>
                            <th className="border-2 text-center">
                                Berapa Tingkat Kepentingannya ?
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {perbandinganKriteria.map((pair, index) => (
                            <tr key={index} className="text-center">
                                <td className={`border-2 p-4`}>
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
                                <td className="border-2 p-2">
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
        </div>
    );
}
