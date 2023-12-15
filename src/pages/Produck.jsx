import FormProduct from "../Components/Fragments/FormProduct";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        image: "../public/asset/shoes1.jpg",
        price: "1.000.000",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quae ipsam corporis earum quia dolores repellendus doloribus totam iste saepe molestias incidunt nobis doloremque natus dolore ducimus labore, explicabo necessitatibus."
    },
    {
        id: 2,
        name: "Celana Baru",
        image: "../public/asset/shoes1.jpg",
        price: "12.000.000",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quae ipsam corporis earum quia dolores repellendus doloribuss."
    }
]

const handleLogout = () => {
    localStorage.removeItem("Email");
}

const Product = () => {
    return (
        <>
            <div className="flex justify-end w-full py-3 bg-blue-700">
                <div className="px-3 py-3 bg-stone-900 me-5">
                    <a href="/login" className="text-white font-bold " onClick={handleLogout}>Log Out</a>
                </div>
            </div>
            <div className="flex justify-center gap-2">
                {products.map((product) => (
                <FormProduct key={product.id}> 
                    <FormProduct.Header 
                        url={product.image}
                    />
                    <FormProduct.Body 
                        text={product.description} 
                        name={product.name}
                    />
                    <FormProduct.Footer 
                        price={product.price}
                    />
                </FormProduct>
                ))}
            </div>
        </>

    )
}

export default Product;