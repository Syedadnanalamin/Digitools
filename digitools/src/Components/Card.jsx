import React, { useState } from 'react';
import Producimages from '../assets/products/productsImage';
import { toast } from 'react-toastify';
const Card = ({ productInfo, setcartCount, cartCount }) => {

    const [isProductadded, setisProductadded] = useState(false);



    const trackCount = () => {


        setcartCount([...cartCount, productInfo])
        toast.success('Added to the cart', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });

        setisProductadded(true);
    }

    const getTagStyle = (tag) => {
        if (tag === "Best Seller") return "bg-orange-100 text-orange-500";
        if (tag === "Popular") return "bg-purple-100 text-purple-500";
        if (tag === "New") return "bg-green-100 text-green-500";
        return "bg-gray-100 text-gray-500";
    };




    return (
        <div>
            <div className="card max-w-120 h-full  bg-base-100 shadow-sm">
                <div className="card-body  flex flex-col justify-between">

                    <div className="flex justify-end">
                        <span className={`badge badge-xs badge-warning ${getTagStyle(productInfo.tag)}`}>
                            {productInfo.tag}
                        </span>
                    </div>



                    <div className="flex flex-col gap-2">
                        <div className='h-6 w-6'>
                            <img src={Producimages[productInfo.image]} alt="" />
                        </div>
                        <h2 className="text-3xl font-bold">{productInfo.title}</h2>

                    </div>
                    <div >
                        <p className='mb-1'>{productInfo.description}</p>
                        <span className="text-xl font-bold ">${productInfo.price.amount}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>High-resolution image generation</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Customizable style templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Batch processing capabilities</span>
                        </li>

                    </ul>
                    <div className="mt-6">
                        <button className={`btn btn-primary border-none btn-block rounded-full ${isProductadded == true && "bg-green-500"}`} onClick={() => trackCount()}>{isProductadded == false ? "Buy Now" : "Added"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;