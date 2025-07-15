import React from 'react';
import Navbar from '../Header/Navbar';

const Contact = () => {
    return (
        <>
            <Navbar></Navbar>

            <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center px-6 sm:px-12 md:px-24 lg:px-40">
                <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md text-center">
                    <h1 className="text-5xl font-extrabold text-indigo-700 mb-8">
                        Contact Us
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Have questions or want to get in touch? Email us at:
                    </p>
                    <a
                        href="mailto:support@aitoolshub.com"
                        className="text-indigo-600 font-semibold underline text-xl hover:text-indigo-800 transition"
                    >
                        support@aitoolshub.com
                    </a>
                </div>
            </div>
        </>
    );
};

export default Contact;
