import React from 'react';
import banner from '../assets/banner.png'

const Herosection = () => {
    return (
        <div className='w-full flex-1  py-10 px-14  flex flex-col lg:flex-row gap-2 justify-around items-center'>


            <div className='flex flex-col gap-3'>
                <div className="badge badge-soft badge-primary">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>

                    New: AI-Powered Tools Available</div>
                <h1 className='text-5xl font-bold'>Supercharge Your
                    Digital Workflow</h1>
                <p>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. Explore Products
                </p>

                <div>
                    <button className='btn btn-primary  mr-3'>Explore Product</button>
                    <button className='btn rounded-full'>Watch demo</button>
                </div>

            </div>
            <div className='max-h-120 h-full' >

                <img src={banner} alt="" className='h-full ' />

            </div>
        </div>
    );
};

export default Herosection;