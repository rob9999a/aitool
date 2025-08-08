import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../Header/Navbar';

const Contact = () => {
    return (
        <>

            <Helmet>
                <title>Fyrexia AI - Discover AI Tools That Transform Your Business</title>

                <meta
                    name="description"
                    content="Explore the hottest AI tools and strategies that are reshaping automation, content creation, marketing, and more with Fyrexia AI."
                />
                <meta
                    name="keywords"
                    content="AI tools, automation, content creation, Fyrexia, GPT, AI strategies"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Fyrexia AI" />

                {/* Open Graph */}
                <meta property="og:title" content="Fyrexia AI - Discover AI Tools That Transform Your Business" />
                <meta property="og:description" content="AI tools that boost productivity and growth." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fyrexia.co.uk/contact" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Fyrexia AI - Discover AI Tools That Transform Your Business" />
                <meta name="twitter:description" content="Explore the best AI tools for automation, content, and innovation." />
            </Helmet>

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
                        jirkovik@gmail.com
                    </a>
                </div>
            </div>
        </>
    );
};

export default Contact;
