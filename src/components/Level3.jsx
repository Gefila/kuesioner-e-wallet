import Options from "./Options";

export default function Level3({ allSubCriteria, perbandinganAlternatif }) {
    return (
        <div className="overflow-x-auto rounded-box bg-base-100">
            <p>Level 3</p>
            {allSubCriteria.map((subcriteria) => (
                <table className="table table-auto mb-6">
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
                        {perbandinganAlternatif.map((alternatif, index) => (
                            <tr key={index} className="text-center">
                                <td className="border">{alternatif[0].name}</td>
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
                                <td className="border">{alternatif[1].name}</td>
                                <td className="border">
                                    <Options />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ))}
        </div>
    );
}
