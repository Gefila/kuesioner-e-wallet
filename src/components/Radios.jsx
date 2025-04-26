export default function Radios({ onChange, index, radio1, radio2, subIndex, name, selected }) {
    return (
        <div className="flex justify-center items-center gap-5 max-md:gap-2 px-1">
            <input type="radio" name={name} value={radio1} checked={radio1 == selected} onChange={()=>onChange(index, radio1, subIndex)}/>
            <input type="radio" name={name} value={radio2} checked={radio2 == selected} onChange={()=>onChange(index, radio2, subIndex)} />
        </div>
    );
}
