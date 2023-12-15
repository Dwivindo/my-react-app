import InputForm from "../Elements/Input";

const RegisterLogin = () => {
    return (
        <div>
        <form action="">
            <InputForm
                text="Fullname"
                type="text"
                placeholder="Masukkan nama lengkap"
                name="text"
            />
            <InputForm
                text="Email"
                type="email"
                placeholder="example@gmail.com"
                name="email"
            />          
            <InputForm
                text="Password"
                type="password"
                placeholder="********"
                name="password"
            />          
            <InputForm
                text="Confirm Password"
                type="password"
                placeholder="********"
                name="password"
            />          
        </form>
    </div>
    )
}

export default RegisterLogin;