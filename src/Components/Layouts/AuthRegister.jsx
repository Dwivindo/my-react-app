import Button from "../Elements/Button";
import RegisterLogin from "../Fragments/RegisterLogin";
import { Link } from "react-router-dom";

const AuthRegister = (props) => {
    const {children} = props;
    return (
    <div className='app flex justify-center items-center min-h-screen gap-2'>
        <div className="w-full max-w-xs">
        <   h1 className="text-3xl font-bold mb-2 text-blue-300">{children}</h1>
            <p className="font-medium text-slate-500">Please enter you detail</p>
            <RegisterLogin />   
            <Button variant="bg-blue-700" text="Register"/>
            <p className="block mt-3 font-md text-center">
                Have an account ? 
                <Link to="/login" className="text-blue-900 font-bold"> Login</Link>
            </p>
        </div>
    </div>
    )
}

export default AuthRegister;