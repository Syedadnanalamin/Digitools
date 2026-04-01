import React from "react";

const Pricing = () => {
    return (
        <div className="w-full py-20 bg-gray-50 flex flex-col items-center">

            {/* Heading */}
            <div className="text-center max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Simple, Transparent Pricing
                </h1>
                <p className="text-gray-500 mt-3">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 w-[85%]">

                {/* Starter */}
                <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col justify-between
                        hover:shadow-lg transition duration-300">

                    <div>
                        <h2 className="font-semibold text-lg">Starter</h2>
                        <p className="text-gray-400 text-sm mt-1">Perfect for getting started</p>

                        <h1 className="text-3xl font-bold mt-4">
                            $0<span className="text-sm font-normal text-gray-500">/Month</span>
                        </h1>

                        <ul className="mt-5 space-y-2 text-sm text-gray-600">
                            <li>✔ Access to 10 free tools</li>
                            <li>✔ Basic templates</li>
                            <li>✔ Community support</li>
                            <li>✔ 1 project per month</li>
                        </ul>
                    </div>

                    <button className="mt-6 bg-gradient-to-r from-purple-500 to-indigo-500 
                             text-white py-2 rounded-full font-medium hover:opacity-90 transition">
                        Get Started Free
                    </button>
                </div>

                {/* Pro (Highlighted) */}
                <div className="relative rounded-2xl p-8 flex flex-col justify-between text-white
                        bg-gradient-to-br from-purple-600 to-indigo-600
                        hover:scale-105 transition duration-300 shadow-lg">

                    {/* Badge */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 
                          text-xs font-semibold px-3 py-1 rounded-full text-gray-800">
                        Most Popular
                    </div>

                    <div>
                        <h2 className="font-semibold text-lg">Pro</h2>
                        <p className="text-sm opacity-80 mt-1">Best for professionals</p>

                        <h1 className="text-3xl font-bold mt-4">
                            $29<span className="text-sm font-normal opacity-80">/Month</span>
                        </h1>

                        <ul className="mt-5 space-y-2 text-sm">
                            <li>✔ Access to all premium tools</li>
                            <li>✔ Unlimited templates</li>
                            <li>✔ Priority support</li>
                            <li>✔ Unlimited projects</li>
                            <li>✔ Cloud sync</li>
                            <li>✔ Advanced analytics</li>
                        </ul>
                    </div>

                    <button className="mt-6 bg-white text-purple-600 py-2 rounded-full font-medium 
                             hover:bg-gray-100 transition">
                        Start Pro Trial
                    </button>
                </div>

                {/* Enterprise */}
                <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col justify-between
                        hover:shadow-lg transition duration-300">

                    <div>
                        <h2 className="font-semibold text-lg">Enterprise</h2>
                        <p className="text-gray-400 text-sm mt-1">For teams and businesses</p>

                        <h1 className="text-3xl font-bold mt-4">
                            $99<span className="text-sm font-normal text-gray-500">/Month</span>
                        </h1>

                        <ul className="mt-5 space-y-2 text-sm text-gray-600">
                            <li>✔ Everything in Pro</li>
                            <li>✔ Team collaboration</li>
                            <li>✔ Custom integrations</li>
                            <li>✔ Dedicated support</li>
                            <li>✔ SLA guarantee</li>
                            <li>✔ Custom branding</li>
                        </ul>
                    </div>

                    <button className="mt-6 bg-gradient-to-r from-purple-500 to-indigo-500 
                             text-white py-2 rounded-full font-medium hover:opacity-90 transition">
                        Contact Sales
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Pricing;