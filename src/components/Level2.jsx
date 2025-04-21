import { useEffect} from "react";
import Options from "./Options";
import Radios from "./Radios";

export default function Level2({ hierarchyData, generatePairs, responsesLevel2, setResponsesLevel2 }) {

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

    useEffect(() => {
        console.log(responsesLevel2);
    }, [responsesLevel2]);

    return (
        <div className="overflow-x-auto bg-base-100">
            <p>Level 2</p>
            {hierarchyData.criteria.map((criterion, index) => (
                <div
                    key={index}
                    className="overflow-x-auto rounded-box border bg-base-100 mb-10"
                >
                    <table className="table table-auto">
                        <thead>
                            <tr className="text-white">
                                <th
                                    colSpan={3}
                                    className="text-center border max-w-2xs whitespace-normal"
                                >
                                    {`Berdasarkan kriteria "${criterion.name}", sub-kriteria manakah yang lebih penting dari perbandingan sub-kriteria – sub-kriteria berikut ?`}
                                </th>
                                <th className="border text-center">
                                    Berapa Tingkat Kepentingannya ?
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {perbandinganSubKriteria[index].map(
                                (pair, subIndex) => (
                                    <tr key={subIndex} className="text-center">
                                        <td
                                            className={`border ${
                                                responsesLevel2.kriteria[index]
                                                    ?.jawaban[subIndex]
                                                    ?.selected == pair[0].name
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                        >
                                            {pair[0].name}
                                        </td>
                                        <td className="border">
                                            <Radios
                                                index={index}
                                                subIndex={subIndex}
                                                onChange={handleRadioChange}
                                                radio1={pair[0].name}
                                                radio2={pair[1].name}
                                                name={`radio-${index}-${subIndex}`}
                                            />
                                        </td>
                                        <td
                                            className={`border ${
                                                responsesLevel2.kriteria[index]
                                                    ?.jawaban[subIndex]
                                                    ?.selected == pair[1].name
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                        >
                                            {pair[1].name}
                                        </td>
                                        <td className="border">
                                            <Options
                                                onChange={handleSelectChange}
                                                index={index}
                                                subIndex={subIndex}
                                                element1={pair[0].name}
                                                element2={pair[1].name}
                                                selectedElement={
                                                    responsesLevel2.kriteria[
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
                </div>
            ))}
        </div>
    );
}
