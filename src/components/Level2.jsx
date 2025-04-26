import { useEffect } from "react";
import Options from "./Options";
import Radios from "./Radios";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import SelectKepentingan from "./SelectKepentingan";

export default function Level2({
    hierarchyData,
    generatePairs,
    responsesLevel2,
    setResponsesLevel2,
}) {
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

    return (
        <div className="overflow-x-auto p-5">
            <Button className="pointer-events-none" variant="neutral">
                Level 2
            </Button>
            {hierarchyData.criteria.map((criterion, index) =>
                criterion.subCriteria.length > 0 ? (
                    <Card
                        key={index}
                        className="overflow-x-auto w-full max-w-7xl mx-auto my-4 p-4 rounded-lg shadow-lg bg-white"
                    >
                        <Card>
                            <p className="text-center text-lg font-bold px-1">
                                {`${criterion.penjelasan}`}
                            </p>
                        </Card>
                        <table className="table table-auto">
                            <thead>
                                <tr className="text-black bg-main">
                                    <th
                                        colSpan={3}
                                        className="text-center border-2 max-w-5xs whitespace-normal p-4"
                                    >
                                        {`Berdasarkan kriteria "${criterion.name}", sub-kriteria manakah yang lebih penting dari perbandingan sub-kriteria – sub-kriteria berikut ?`}
                                    </th>
                                    <th className="border-2 text-center">
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
                                            <td className={`border-2 p-4`}>
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
                                            <td className="border-2 p-2">
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
        </div>
    );
}
