import React from 'react';
import Producimages from '../assets/products/productsImage';
const Cartcreator = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row justify-between bg-gray-100 shadow p-10 rounded-xl'>

                <div className='flex gap-3'>
                    <img src={Producimages.designTool} alt="" className='h-7' />
                    <div>
                        <h1>Ai writing pro</h1>
                        <p><span className='font-semibold text-[#627382]'>19$</span></p>
                    </div>
                </div>

                <button className='btn btn-primary'>Remove</button>
            </div>

        </>
    );
};

export default Cartcreator;