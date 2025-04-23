import { useEffect } from "react";
import Options from "./Options";
import Radios from "./Radios";

export default function Level3({ hierarchyData, generatePairs, responsesLevel3, setResponsesLevel3 }) {

    const perbandinganAlternatif = generatePairs(hierarchyData.alternatives);
    const kriteriaTunggal = hierarchyData.criteria.filter(
        (criterion) => criterion.subCriteria.length === 0
    );
    const subCriteria = hierarchyData.criteria.flatMap((criterion) =>
        criterion.subCriteria.map((subCriterion) => ({
            ...subCriterion
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


    return (
        <div className="overflow-x-auto rounded-box bg-base-100">
            <p>Level 3</p>
            {allSubCriteria.map((subcriteria, index) => (
                <table className="table table-auto mb-6" key={subcriteria.name}>
                    <thead>
                        <tr className="text-white">
                            <th
                                colSpan={3}
                                className="text-center border max-w-2xs whitespace-normal"
                            >
                                Berdasarkan sub-kriteria "{subcriteria.name}",
                                dalam menentukan , alternatif strategis manakah
                                yang lebih penting dari perbandingan
                                alternatif-alternatif strategis berikut ini?
                            </th>
                            <th className="border text-center">
                                Berapa Tingkat Kepentingannya ?
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {perbandinganAlternatif.map((alternatif, subIndex) => (
                            <tr key={subIndex} className="text-center">
                                <td className={`border ${
                                                responsesLevel3.kriteria[index]
                                                    ?.jawaban[subIndex]
                                                    ?.selected == alternatif[0].name
                                                    ? "text-green-500"
                                                    : ""
                                            }`}>{alternatif[0].name}</td>
                                <td className="border">
                                    <div className="flex justify-center items-center gap-5">
                                        <Radios
                                            index={index}
                                            subIndex={subIndex}
                                            onChange={handleRadioChange}
                                            radio1={alternatif[0].name}
                                            radio2={alternatif[1].name}
                                            name={`radio-${index}-${subIndex}`}
                                            selected={responsesLevel3.kriteria[index]?.jawaban[subIndex]?.selected}
                                        />
                                    </div>
                                </td>
                                <td className={`border ${
                                                responsesLevel3.kriteria[index]
                                                    ?.jawaban[subIndex]
                                                    ?.selected == alternatif[1].name
                                                    ? "text-green-500"
                                                    : ""
                                            }`}>{alternatif[1].name}</td>
                                <td className="border">
                                    <Options
                                        onChange={handleSelectChange}
                                        index={index}
                                        subIndex={subIndex}
                                        element1={alternatif[0].name}
                                        element2={alternatif[1].name}
                                        selectedElement={
                                            responsesLevel3.kriteria[index]
                                                ?.jawaban[subIndex]?.selected
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ))}
        </div>
    );
}
