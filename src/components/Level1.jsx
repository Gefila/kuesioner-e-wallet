import { useEffect, useState } from "react";
import Options from "./Options";
import Radios from "./Radios";

export default function Level1({ generatePairs, hierarchyData }) {
    const [responsesLevel1, setResponsesLevel1] = useState({
        level: 1,
        jawaban: [],
    });
    const perbandinganKriteria = generatePairs(hierarchyData.criteria);

    function handleRadioChange(index, value) {
        const update = [...responsesLevel1.jawaban];
        update[index] = {
            ...update[index],
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

    useEffect(() => {
        console.log(responsesLevel1);
    }, [responsesLevel1]);

    return (
        <div className="overflow-x-auto rounded-box bg-base-100">
            <p>Level 1</p>
            <table className="table table-auto">
                <thead>
                    <tr className="text-white">
                        <th
                            colSpan={3}
                            className="text-center border max-w-2xs whitespace-normal"
                        >
                            Dalam menentukan e-Wallet Terbaik Untuk Transaksi
                            Digital Bagi Mahasiswa, kriteria manakah yang lebih
                            penting dibandingkan kriteria-kriteria berikut ?
                        </th>
                        <th className="border text-center">
                            Berapa Tingkat Kepentingannya ?
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {perbandinganKriteria.map((pair, index) => (
                        <tr key={index} className="text-center">
                            <td
                                className={`border ${
                                    responsesLevel1.jawaban[index]?.selected ==
                                    pair[0].name
                                        ? "text-green-500"
                                        : ""
                                }`}
                            >
                                {pair[0].name}
                            </td>
                            <td className="border">
                                <Radios
                                    index={index}
                                    onChange={handleRadioChange}
                                    radio1={pair[0].name}
                                    radio2={pair[1].name}
                                />
                            </td>
                            <td
                                className={`border ${
                                    responsesLevel1.jawaban[index]?.selected ==
                                    pair[1].name
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
                                    element1={pair[0].name}
                                    element2={pair[1].name}
                                    selectedElement={
                                        responsesLevel1.jawaban[index]?.selected
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
