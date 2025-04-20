import Options from "./Options";

export default function Level2({ hierarchyData, perbandinganSubKriteria }) {
    return (
        <div className="overflow-x-auto rounded-box border bg-base-100">
            <p>Level 2</p>
            {hierarchyData.criteria.map((criterion, index) => (
                <div
                    key={index}
                    className="overflow-x-auto rounded-box border bg-base-100 mb-10"
                >
                    <p>{criterion.name}</p>
                    <table className="table table-auto">
                        <thead>
                            <tr className="text-white">
                                <th
                                    colSpan={3}
                                    className="text-center border max-w-2xs whitespace-normal"
                                >
                                    Dalam menentukan e-Wallet Terbaik Untuk
                                    Transaksi Digital Bagi Mahasiswa,
                                    subkriteria manakah yang lebih penting
                                    dibandingkan subkriteria-subkriteria berikut
                                    ?
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
                                        <td className="border">
                                            {pair[0].name}
                                        </td>
                                        <td className="border">
                                            <div className="flex justify-center items-center gap-5">
                                                <input
                                                    type="radio"
                                                    name={`subkriteria-${index}-${subIndex}`}
                                                    value="1"
                                                />
                                                <input
                                                    type="radio"
                                                    name={`subkriteria-${index}-${subIndex}`}
                                                    value="1"
                                                />
                                            </div>
                                        </td>
                                        <td className="border">
                                            {pair[1].name}
                                        </td>
                                        <td className="border">
                                            <Options />
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
