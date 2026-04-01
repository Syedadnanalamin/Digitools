import React from 'react';
import { use } from 'react';
import Card from './Card';

const Products = ({ ProductsInfo }) => {

    const ProductjsonData = use(ProductsInfo);
    return (
        <div className='w-full px-20 mx-auto flex justify-center items-center'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 justify-center'>

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </div>
    );
};

export default Products;