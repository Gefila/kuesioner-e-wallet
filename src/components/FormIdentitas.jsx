export default function FormIdentitas({ identitas, setIdentitas }) {
    function handleOnChange(e) {
        const { name, value } = e.target;
        setIdentitas((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    return (
        <div className="container mx-auto p-4 ">
            <form className="space-y-4">
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white"
                    >
                        Nama Lengkap
                    </label>
                    <input
                        type="text"
                        id="nama"
                        name="nama"
                        required
                        value={identitas?.nama}
                        onChange={handleOnChange}
                        className="input"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="nim"
                        className="block text-sm font-medium text-white"
                    >
                        Jenis Kelamin
                    </label>
                    <select
                        id="jenisKelamin"
                        name="jenisKelamin"
                        required
                        value={
                            identitas?.jenisKelamin
                                ? identitas.jenisKelamin
                                : ""
                        }
                        onChange={handleOnChange}
                        className="input"
                    >
                        <option value="" disabled>
                            Pilih Jenis Kelamin
                        </option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="asalKampus"
                        className="block text-sm font-medium text-white"
                    >
                        Asal Kampus
                    </label>
                    <input
                        type="asalKampus"
                        id="asalKampus"
                        name="asalKampus"
                        required
                        value={identitas?.asalKampus}
                        onChange={handleOnChange}
                        className="input"
                    />
                </div>
            </form>
        </div>
    );
}
