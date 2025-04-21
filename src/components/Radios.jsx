export default function Radios({ onChange, index, radio1, radio2, subIndex, name }) {
    return (
        <div className="flex justify-center items-center gap-5">
            <input type="radio" name={name} value={radio1} onChange={()=>onChange(index, radio1, subIndex)}/>
            <input type="radio" name={name} value={radio2} onChange={()=>onChange(index, radio2, subIndex)} />
        </div>
    );
}
