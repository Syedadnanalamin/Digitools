import React from "react";


const Footer = () => {
    return (
        <footer className="bg-[#0B1324] text-gray-300 py-16 px-6 md:px-20">

            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

                {/* Logo + Desc */}
                <div className="md:col-span-2">
                    <h1 className="text-2xl font-bold text-white">DigiTools</h1>
                    <p className="mt-4 text-sm text-gray-400 max-w-sm">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>

                {/* Product */}
                <div>
                    <h2 className="text-white font-semibold mb-4">Product</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Features</li>
                        <li className="hover:text-white cursor-pointer">Pricing</li>
                        <li className="hover:text-white cursor-pointer">Templates</li>
                        <li className="hover:text-white cursor-pointer">Integrations</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h2 className="text-white font-semibold mb-4">Company</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Blog</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                        <li className="hover:text-white cursor-pointer">Press</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h2 className="text-white font-semibold mb-4">Resources</h2>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Documentation</li>
                        <li className="hover:text-white cursor-pointer">Help Center</li>
                        <li className="hover:text-white cursor-pointer">Community</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

            </div>

            {/* Social + Bottom */}
            <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Copyright */}
                <p className="text-sm text-gray-400">
                    © 2026 Digitools. All rights reserved.
                </p>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <div className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer">
                        {/* facebook logo */}
                    </div>
                    <div className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer">
                        {/* github logo */}
                    </div>
                    <div className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer">
                        {/* x logo */}
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-6 text-sm text-gray-400">
                    <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer">Terms of Service</span>
                    <span className="hover:text-white cursor-pointer">Cookies</span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;