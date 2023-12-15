const Label = (props) => {
    const {htmlFor, text} = props;
    return (
        <label
            htmlFor={htmlFor} 
            className="block text-slate-700 font-bold mb-2 text-sm">
            {text}
        </label>
    )
}

export default Label;