import Radios from "./Radios";
import SelectKepentingan from "./SelectKepentingan";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function Level3({
    hierarchyData,
    generatePairs,
    responsesLevel3,
    setResponsesLevel3,
}) {
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
        console.log(responsesLevel3);
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
        <div className="overflow-x-auto p-5">
            <Button className="pointer-events-none" variant="neutral">
                LEVEL 3 : PERBANDINGAN ALTERNATIF STRATEGIS
            </Button>
            {allSubCriteria.map((subcriteria, index) => (
                <Card
                    key={index}
                    className="overflow-x-auto w-full max-w-7xl mx-auto my-4 p-4 rounded-lg shadow-lg bg-white"
                >
                    <Card>
                        <p className="text-center text-lg font-bold px-1">
                            {`${subcriteria.penjelasan}`}
                        </p>
                    </Card>
                    <table className="table table-auto" key={subcriteria.name}>
                        <thead>
                            <tr className="text-black bg-main">
                                <th
                                    colSpan={3}
                                    className="text-center border-2 max-w-5xs whitespace-normal p-4"
                                >
                                    Berdasarkan sub-kriteria "{subcriteria.name}
                                    ", dalam menentukan , alternatif strategis
                                    manakah yang lebih penting dari perbandingan
                                    alternatif-alternatif strategis berikut ini?
                                </th>
                                <th className="border-2 text-center">
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
                                        <td className={`border-2 p-4`}>
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
                                            <div className="flex justify-center items-center gap-5">
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
                                        <td className="border-2 p-2">
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
        </div>
    );
}
