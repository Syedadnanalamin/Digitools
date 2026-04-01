import React from 'react';

const CTAsection = () => {
    return (
        <div>
            <div className="w-full rounded-2xl py-28 flex justify-center items-center
                    bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 text-white">

                <div className="text-center max-w-3xl px-5">

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Ready To Transform Your Workflow?
                    </h1>

                    {/* Subtext */}
                    <p className="mt-5 text-lg text-white/80">
                        Join thousands of professionals who are already using Digitools to work smarter.
                        <br />
                        Start your free trial today.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

                        {/* Primary Button */}
                        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold 
                             hover:scale-105 hover:shadow-lg transition duration-300">
                            Explore Products
                        </button>

                        {/* Secondary Button */}
                        <button className="border border-white px-8 py-3 rounded-full font-semibold 
                             hover:bg-white hover:text-purple-600 transition duration-300">
                            View Pricing
                        </button>

                    </div>

                    {/* Footer Text */}
                    <p className="mt-8 text-sm text-white/70">
                        14-day free trial • No credit card required • Cancel anytime
                    </p>

                </div>
            </div>

        </div>
    );
};

export default CTAsection;