export default function SelectKepentingan({
    onChange,
    element1,
    element2,
    index,
    selectedElement,
    subIndex = undefined,
}) {

    const notSelectedElement =
        selectedElement === element1 ? element2 : element1;

    return (
        <select
            className="border rounded p-2 w-full bg-white"
            onChange={(e) => onChange(index, e.target.value, subIndex)}
            disabled={selectedElement === undefined}
            defaultValue={"0"}
        >
            <option value="0" disabled>
                Pilih Tingkat Kepentingan
            </option>
            <option value="1">
                {`1 - ${selectedElement} dan ${notSelectedElement} Sama Penting`}
            </option>
            <option value="2">2 - diantara 1 dan 3</option>
            <option value="3">
                {`3 - ${selectedElement} sedikit lebih penting daripada ${notSelectedElement}`}
            </option>
            <option value="4">4 - diantara 3 dan 5</option>
            <option value="5">
                {`5 - ${selectedElement} lebih penting daripada ${notSelectedElement}`}
            </option>
            <option value="6">6 - diantara 5 dan 7</option>
            <option value="7">
                {`7 - ${selectedElement} jelas sangat penting daripada ${notSelectedElement}`}
            </option>
            <option value="8">8 - diantara 7 dan 9</option>
            <option value="9">
                {`9 - ${selectedElement} mutlak sangat penting daripada ${notSelectedElement}`}
            </option>
        </select>
    );
}
