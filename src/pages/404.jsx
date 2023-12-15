import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div className="flex justify-center items-center min-h-screen flex-col gap-2">
            <h2 className="text-3xl font-bold">OOP!</h2>
            <h4>Alamat yang anda tuju tidak tersedia</h4>
            <h2>Silahkan Kembali</h2>
        </div>
    )
}

export default ErrorPage;