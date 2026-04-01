import Products from './Products';
import Cart from './Cart';
import { useState } from 'react';
const ProductsInfo = fetch('/products.json').then((res) => res.json());
const ProductsCards = () => {
    const [ProductCartToggle, setProductCartToggle] = useState("products")
    console.log(ProductCartToggle);


    return (
        <div className='w-full flex flex-col justify-center items-center gap-3'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <h1 className='text-4xl'>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.</p>
            </div>

            <div className='mx-auto flex gap-3'>
                <button className={`btn ${ProductCartToggle === "products" && "btn-primary"}`} onClick={() => setProductCartToggle("products")}>Products</button>
                <button className={`btn ${ProductCartToggle === "cart" && "btn-primary"}`} onClick={() => setProductCartToggle("cart")}>Cart(0)</button>
            </div>

            {ProductCartToggle === "products" ? <Products ProductsInfo={ProductsInfo} /> : <Cart />}

        </div>
    );
};

export default ProductsCards;