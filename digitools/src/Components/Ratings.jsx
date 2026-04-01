import React from 'react';

const Ratings = () => {
    return (
        <div className='text-white bg-primary p-8 flex justify-around items-center w-full rounded '>
            <div>
                <p className='text-4xl'>50K+</p>
                <p>Active Users</p>
            </div>

            <div>
                <p className='text-4xl'>200+</p>
                <p>Premium Tools</p>
            </div>
            <div>
                <p className='text-4xl'>4.9</p>
                <p>Ratings</p>
            </div>

        </div>
    );
};

export default Ratings;