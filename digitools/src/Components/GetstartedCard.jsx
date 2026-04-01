import React from 'react';
import user from '../assets/user.png';
import Package from '../assets/package.png';
import rocket from '../assets/rocket.png';

const GetstartedCard = () => {
    return (
        <div className="w-full py-10 bg-gray-50 flex flex-col items-center">

            {/* Heading */}
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl font-bold text-gray-900">
                    Get Started In 3 Steps
                </h1>
                <p className="text-gray-500 mt-3">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 w-[80%]">

                {/* Card 1 */}
                <div className="group relative bg-white rounded-2xl shadow-sm p-10 text-center 
                hover:shadow-xl hover:-translate-y-2 transition duration-300">

                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-500 
                    text-white text-sm font-semibold px-3 py-1 rounded-full
                    group-hover:scale-110 transition">
                        01
                    </div>

                    <div className="w-24 h-24 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-6 
                    overflow-hidden group-hover:scale-110 transition">
                        <img src={user} alt="" className="w-12 h-12 object-contain" />
                    </div>

                    <h2 className="text-lg font-semibold group-hover:text-purple-600 transition">
                        Create Account
                    </h2>

                    <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="group relative bg-white rounded-2xl shadow-sm p-10 text-center 
                hover:shadow-xl hover:-translate-y-2 transition duration-300">

                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-500 
                    text-white text-sm font-semibold px-3 py-1 rounded-full
                    group-hover:scale-110 transition">
                        02
                    </div>

                    <div className="w-24 h-24 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-6 
                    overflow-hidden group-hover:scale-110 transition">
                        <img src={Package} alt="" className="w-12 h-12 object-contain" />
                    </div>

                    <h2 className="text-lg font-semibold group-hover:text-purple-600 transition">
                        Choose Products
                    </h2>

                    <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                        Browse our catalog and select the tools that fit your needs.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="group relative bg-white rounded-2xl shadow-sm p-10 text-center 
                hover:shadow-xl hover:-translate-y-2 transition duration-300">

                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-500 
                    text-white text-sm font-semibold px-3 py-1 rounded-full
                    group-hover:scale-110 transition">
                        03
                    </div>

                    <div className="w-24 h-24 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-6 
                    overflow-hidden group-hover:scale-110 transition">
                        <img src={rocket} alt="" className="w-12 h-12 object-contain" />
                    </div>

                    <h2 className="text-lg font-semibold group-hover:text-purple-600 transition">
                        Start Creating
                    </h2>

                    <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                        Download and start using your premium tools immediately.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default GetstartedCard;