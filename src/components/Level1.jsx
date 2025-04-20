import Options from "./Options";

export default function Level1({ perbandinganKriteria }) {
    return (
        <div className="overflow-x-auto rounded-box border bg-base-100">
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
                            <td className="border">{pair[0].name}</td>
                            <td className="border">
                                <div className="flex justify-center items-center gap-5">
                                    <input
                                        type="radio"
                                        name={`kriteria-${index}`}
                                        value="1"
                                    />
                                    <input
                                        type="radio"
                                        name={`kriteria-${index}`}
                                        value="1"
                                    />
                                </div>
                            </td>
                            <td className="border">{pair[1].name}</td>
                            <td className="border">
                                <Options />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
