const Input = ({id, text, value, handleValue}) => {
    return (
        <>
            <label htmlFor={id} className="">  {text} </label>
            <input type="text" id={id} value={value} onChange={handleValue}/>
        </>
    )
}

export default Input;