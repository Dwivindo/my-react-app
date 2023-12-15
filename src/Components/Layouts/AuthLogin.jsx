import FormLogin from "../Fragments/FormLogin";
import { Link } from "react-router-dom";

const AuthLogin = (props) => {
    const {children} = props;

    return (
    <div className='app flex justify-center items-center min-h-screen gap-2'>
        <div className="w-full max-w-xs">
        <   h1 className="text-3xl font-bold mb-2 text-blue-300">{children}</h1>
            <p className="font-medium text-slate-500">Please enter you detail</p>
            <FormLogin />   
            <p className="block mt-3 font-md text-center">
                Don't have an account ? 
                <Link to="/register" className="text-blue-900 font-bold"> Sign Up</Link>
            </p>
        </div>
    </div>
    )
}

export default AuthLogin;