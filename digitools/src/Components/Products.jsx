import React from 'react';
import { use } from 'react';
import Card from './Card';

const Products = ({ ProductsInfo, setcartCount, cartCount }) => {

    const ProductjsonData = use(ProductsInfo);
    return (
        <div className='w-full min-h-250 px-20 mx-auto flex justify-center items-center'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">

                {ProductjsonData.map((productInfo) => <Card productInfo={productInfo} setcartCount={setcartCount} cartCount={cartCount} />)}
            </div>
        </div>
    );
};

export default Products;