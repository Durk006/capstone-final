import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/" className="text-white">
                                    <img src="../doctor.jpg" alt="Logo" className="h-8" />
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Home</Link>
                                <Link href="/doctors" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Doctors</Link>
                                <Link href="/schedule" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Schedule</Link>
                                <Link href="/services" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Services</Link>
                                <Link href="/about" className="text-white hover:bg-white hover:text-black rounded-lg p-2">About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <h1 className="text-3xl font-bold">Welcome to Our Clinic</h1>
                {/* Other content goes here */}
            </div>

            {/* Footer */}
            <footer className="bg-black text-white py-4">
                <div className="max-w-7xl mx-auto text-center">
                    <Link href="/" className="hover:bg-white hover:text-black rounded-lg p-2">Contact Us</Link>
                </div>
            </footer>
        </div>
    );
};

export default Home;
