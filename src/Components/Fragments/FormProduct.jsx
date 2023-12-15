import Button from "../Elements/Button";

const FormProduct = (props) => {
    const {children} = props
    return (
        <div className="w=full max-w-sm bg-black border border-gray-200 shadow rounded-lg px-5 py-5">
            {children}
        </div>
    )
}

const Header = (props) => {
    const {url} = props

    return (
        <a href="#">
            <img src={url} alt="product" />
        </a>
    )
}

const Body = (props) => {
    const {text, name} = props
    return (
        <div className="text-white mt-3">
            <h3 className="text-2xl font-semibold">{name}</h3>
            <p className="mt-2">{text}</p>
        </div>
    )
}

const Footer = (props) => {
    const {price} = props
    return (
        <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">{price}</span>
            <Button variant="bg-blue-700" text="Add to Cart"/>
        </div>
    )
}

FormProduct.Header = Header;
FormProduct.Body = Body;
FormProduct.Footer = Footer;

export default FormProduct;