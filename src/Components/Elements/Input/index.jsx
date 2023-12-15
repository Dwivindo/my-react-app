import Input from "./input";
import Label from "./label";

const InputForm = (props) => {
    const {text, name, type, placeholder} = props;
    return (
        <div className="mb-6 mt-2">
            <Label htmlFor={name} text={text}/>
            <Input 
                name={name} 
                type={type} 
                placeholder={placeholder}/>
        </div>
    )
}

export default InputForm;