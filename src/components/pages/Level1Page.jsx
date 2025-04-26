import Radios from "../Radios";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import SelectKepentingan from "../SelectKepentingan";
import { useEffect, useState } from "react";
import DialogPetunjuk from "../DialogPetunjuk";

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
        return (
            responsesLevel1.jawaban.every(
                (jawaban) =>
                    jawaban?.selected && jawaban?.tingkatKepentingan > 0
            ) && perbandinganKriteria.length == responsesLevel1.jawaban.length
        );
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

            <Card className="overflow-x-auto w-full max-w-7xl mx-auto my-4 p-4 rounded-lg shadow-lg bg-white max-md:max-w-[100%] max-md:text-xs">
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
