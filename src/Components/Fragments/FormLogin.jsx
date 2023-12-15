import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        e.preventDefault();
        console.log(e.target.email.value);
    }

    return (
        <div>
            <form onSubmit={handleEmailChange}>
                <InputForm
                    text="email"
                    type="email"
                    placeholder="example@gmail.com"
                    name="email"
                    onChange={handleEmailChange}
                />
                <InputForm
                    text="password"
                    type="password"
                    placeholder="*******"
                    name="placeholder"
                />

                <Button variant="bg-blue-700" text="Kirim" type="submit"/>          
            </form>
        </div>
    )
}

export default FormLogin;