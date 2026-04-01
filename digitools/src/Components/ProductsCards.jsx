import Products from './Products';
import Cart from './Cart';
import { useState } from 'react';
const ProductsInfo = fetch('/products.json').then((res) => res.json());
const ProductsCards = ({ cartCount, setcartCount }) => {
    const [ProductCartToggle, setProductCartToggle] = useState("products")



    return (
        <div className='w-full flex flex-col justify-center items-center gap-3'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <h1 className='text-4xl'>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.</p>
            </div>

            <div className='mx-auto flex gap-3'>
                <button className={`btn ${ProductCartToggle === "products" && "btn-primary"}`} onClick={() => setProductCartToggle("products")}>Products</button>
                <button className={`btn ${ProductCartToggle === "cart" && "btn-primary"}`} onClick={() => setProductCartToggle("cart")}>Cart({cartCount.length})</button>
            </div>

            {ProductCartToggle === "products" ? <Products ProductsInfo={ProductsInfo} setcartCount={setcartCount} cartCount={cartCount} /> : <Cart cartCount={cartCount} />}

        </div>
    );
};

export default ProductsCards;