import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function SelectKepentingan({
    onChange,
    element1,
    element2,
    index,
    selectedElement,
    subIndex = undefined,
}) {
    let notSelectedElement = selectedElement === element1 ? element2 : element1;
    return (
        <Select
            onValueChange={(value) => onChange(index, value, subIndex)}
            disabled={selectedElement === undefined}
        >
            <SelectTrigger className="w-xs">
                <SelectValue placeholder="Pilih Tingkat Kepentingan" />
            </SelectTrigger>
            <SelectContent className="w-xs">
                <SelectGroup>
                    <SelectLabel>Tingkat Kepentingan</SelectLabel>
                    <SelectItem value="1">
                        {`1 - ${selectedElement} dan ${notSelectedElement} Sama Penting`}
                    </SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">
                        {`3 - ${selectedElement} sedikit lebih penting daripada ${notSelectedElement}`}
                    </SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">
                        {`5 - ${selectedElement} lebih penting daripada ${notSelectedElement}`}
                    </SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="7">
                        {`7 - ${selectedElement} jelas sangat penting daripada ${notSelectedElement}`}
                    </SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="9">
                        {`9 - ${selectedElement} mutlak sangat penting daripada ${notSelectedElement}`}
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
