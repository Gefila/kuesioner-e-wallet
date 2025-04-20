export default function Options({ onChange }) {
    return (
        <select
            name=""
            id=""
            className="select select-bordered w-full max-w-xs"
        >
            <option value="1">1 - Kedua Elemen Sama Penting</option>
            <option value="2">2 - </option>
            <option value="3">
                3 - Elemen yang satu sedikit lebih penting daripada yang lainnya
            </option>
            <option value="4">4</option>
            <option value="5">
                5 - Elemen yang satu lebih penting daripada yang lainnya
            </option>
            <option value="6">6</option>
            <option value="7">
                7 - Elemen yang satu jelas sangat penting daripada elemen yang
                lainnya
            </option>
            <option value="8">8</option>
            <option value="9">
                9 - Elemen yang satu mutlak sangat penting daripada elemen yang
                lainnya
            </option>
        </select>
    );
}
