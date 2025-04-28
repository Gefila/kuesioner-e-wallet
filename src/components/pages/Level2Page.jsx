import Radios from "../Radios";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import SelectKepentingan from "../SelectKepentingan";
import { useEffect, useState } from "react";
import DialogPetunjuk from "../DialogPetunjuk";

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
                        className="overflow-x-auto w-full max-w-7xl mx-auto my-4 p-4 rounded-lg shadow-lg bg-white max-md:max-w-[100%] max-md:text-xs"
                    >
                        <Card>
                            <p className="text-center text-lg font-bold px-1 max-md:text-xs">
                                {`${criterion.penjelasan}`}
                            </p>
                        </Card>
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
