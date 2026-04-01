import React from 'react';
import Producimages from '../assets/products/productsImage';
import { toast } from 'react-toastify';
const Cartcreator = ({ cart, cartCount, setcartCount }) => {

    const removeCart = () => {

        const afterRemovecart = cartCount.filter((val) => cart.title != val.title)
        setcartCount(afterRemovecart)

        toast.error('Cart has been removed', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });


    }





    return (
        <>
            <div className='flex flex-col lg:flex-row justify-between bg-gray-100 shadow p-10 rounded-xl'>

                <div className='flex gap-3'>
                    <img src={Producimages[cart.image]} alt="" className='h-7' />
                    <div>
                        <h1>{cart.title}</h1>
                        <p><span className='font-semibold text-[#627382]'>${cart.price.amount}</span></p>
                    </div>
                </div>

                <button className='btn btn-primary' onClick={removeCart}>Remove</button>
            </div>

        </>
    );
};

export default Cartcreator;