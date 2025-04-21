export default function Options({
    onChange,
    element1,
    element2,
    index,
    selectedElement,
    subIndex=undefined,
}) {
    let notSelectedElement = selectedElement === element1 ? element2 : element1;
    return (
        <select
            onChange={(e) => onChange(index, e.target.value, subIndex)}
            className="select select-bordered w-full max-w-xs"
            disabled={selectedElement === undefined}
            defaultValue={"0"}
        >
            <option disabled value="0">
                Berapa Tingkat Kepentingannya ?
            </option>
            <option value="1">
                1 -{" "}
                {`${selectedElement} dan ${notSelectedElement} Sama Penting`}
            </option>
            <option value="2">2</option>
            <option value="3">
                {`3 - ${selectedElement} sedikit lebih penting daripada ${notSelectedElement}`}
            </option>
            <option value="4">4</option>
            <option value="5">
                {`5 - ${selectedElement} lebih penting daripada ${notSelectedElement}`}
            </option>
            <option value="6">6</option>
            <option value="7">
                {`7 - ${selectedElement} jelas sangat penting daripada ${notSelectedElement}`}
            </option>
            <option value="8">8</option>
            <option value="9">
                {`9 - ${selectedElement} mutlak sangat penting daripada ${notSelectedElement}`}
            </option>
        </select>
    );
}
