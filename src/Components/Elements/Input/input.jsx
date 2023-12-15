const Input = (props) => { 
    const {type, placeholder} = props;
    return (
        <input 
            type={type} 
            className="text-sm border w-full rounded py-2 px-3 text-slate-700" 
            placeholder={placeholder}
            />           
    )
}

export default Input;