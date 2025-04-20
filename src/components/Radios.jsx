export default function Radios({ onChange, index, radio1, radio2 }) {
    return (
        <div className="flex justify-center items-center gap-5">
            <input type="radio" name={index} value={radio1} onChange={()=>onChange(index, radio1)}/>
            <input type="radio" name={index} value={radio2} onChange={()=>onChange(index, radio2)} />
        </div>
    );
}
