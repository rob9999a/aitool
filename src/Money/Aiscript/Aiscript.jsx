import React from 'react';
import { Helmet } from "react-helmet";
import { FaCheck, FaPlay, FaDownload, FaRobot } from 'react-icons/fa';
import Navbar from '../../Component/Website/Header/Navbar';

const AIDropshippingPage = () => {
    return (

        <>

            <Navbar></Navbar>

            <Helmet>
                {/* Page Title */}
                <title>What Happens When AI Does Everything — Product, Copy, Ads, and Fulfillment?</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Imagine a business where AI picks the product, writes high-converting copy, designs the ad, and fulfills every order — all while you relax. Discover the future of fully automated eCommerce and how it’s changing the game."
                />

                {/* SEO Basics */}
                <meta name="robots" content="index, follow" />
                <html lang="en" />



            </Helmet>



            <div className="min-h-screen bg-white text-gray-900 font-sans">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="div-template text-center">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            <span className="block">What happens when AI chooses the product,</span>
                            <span className="block">writes the copy, creates the ad,</span>
                            <span className="block text-blue-600">and fulfills the orders?</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                            All while you chill? Here's exactly how it works...
                        </p>


                    </div>
                </div>

                {/* Video Placeholder */}
                <div className="bg-gray-100 py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
                                <div className="text-center p-8">
                                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-6 mb-6">
                                        <FaRobot className="text-white text-6xl mx-auto" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Watch AI Build a Business</h3>
                                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                                        See how AI can create a profitable store in minutes
                                    </p>
                                    <button className="mt-8 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg flex items-center gap-2 mx-auto">
                                        <FaPlay /> Play Video
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Steps Section */}
                <div className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Made $1,000 in 3 Weeks with AI</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Zero experience, no team, and no inventory - just AI doing all the work
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Step 1 */}
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                                        1
                                    </div>
                                    <h3 className="text-xl font-bold">Product Discovery</h3>
                                </div>
                                <div className="mb-4">
                                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                                        ChatGPT / SellTheTrend AI
                                    </div>
                                    <p className="text-gray-700 italic">
                                        "ChatGPT gave me 5 hot products trending in 2025 — I picked one."
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <FaCheck /> <span className="font-medium">AI Does It</span>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-purple-100 text-purple-800 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                                        2
                                    </div>
                                    <h3 className="text-xl font-bold">Copywriting + Branding</h3>
                                </div>
                                <div className="mb-4">
                                    <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                                        ChatGPT + Copy.ai
                                    </div>
                                    <p className="text-gray-700 italic">
                                        "I asked ChatGPT to write product descriptions, ad copy, and emails in 2 minutes."
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <FaCheck /> <span className="font-medium">AI Does It</span>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-amber-100 text-amber-800 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                                        3
                                    </div>
                                    <h3 className="text-xl font-bold">Store Setup</h3>
                                </div>
                                <div className="mb-4">
                                    <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                                        Durable AI / Shopify
                                    </div>
                                    <p className="text-gray-700 italic">
                                        "Used Durable.co — typed 3 words — store was live."
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <FaCheck /> <span className="font-medium">AI Does It</span>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-red-100 text-red-800 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                                        4
                                    </div>
                                    <h3 className="text-xl font-bold">Ad Creation</h3>
                                </div>
                                <div className="mb-4">
                                    <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                                        Pictory + AdCreative.ai
                                    </div>
                                    <p className="text-gray-700 italic">
                                        "Uploaded product info — AI made scroll-stopping ads in minutes."
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <FaCheck /> <span className="font-medium">AI Does It</span>
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-green-100 text-green-800 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                                        5
                                    </div>
                                    <h3 className="text-xl font-bold">Orders + Fulfillment</h3>
                                </div>
                                <div className="mb-4">
                                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                                        DSers / AutoDS
                                    </div>
                                    <p className="text-gray-700 italic">
                                        "Connected to AliExpress. When someone buys? AI does the rest."
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <FaCheck /> <span className="font-medium">AI Does It</span>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-8 text-white">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
                                        <FaRobot className="text-xl" />
                                    </div>
                                    <h3 className="text-xl font-bold">The Results</h3>
                                </div>
                                <div className="mb-6">
                                    <div className="text-4xl font-bold mb-2">$1,000+</div>
                                    <p className="text-blue-100">in sales in less than 3 weeks</p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-2">
                                        <FaCheck /> No paid designer
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheck /> No tech skills
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheck /> No inventory
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheck /> All AI-powered from A to Z
                                    </li>
                                </ul>
                                <div className="text-center">
                                    <div className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-bold">
                                        Fully Automated Business
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Scene */}
                <div className="py-16 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            "So yeah... What happens when AI runs your business?
                        </h2>
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-3xl font-bold p-8 rounded-xl mb-10 inline-block">
                            You chill. It sells.
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold mb-6">🚀 Want to launch your own AI-powered business in 1 weekend?</h3>
                            <p className="text-xl text-gray-700 mb-8">
                                Grab the AI Dropshipping Starter Pack – free tools, free setup guide, zero experience needed.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                    <FaDownload /> Download Free Kit
                                </button>
                                <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

                        <div className="space-y-6">
                            <div className="border border-gray-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-3">How much does it cost to start?</h3>
                                <p className="text-gray-700">
                                    You can start with as little as $50-$100 for your initial ads. The AI tools mentioned have free tiers or trials,
                                    and store platforms like Shopify have introductory offers.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-3">Do I need any technical skills?</h3>
                                <p className="text-gray-700">
                                    Absolutely not! That's the beauty of this approach. The AI tools are designed to be used by beginners with no
                                    coding or design experience. Everything is point-and-click or text-based commands.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-3">How much time does it take?</h3>
                                <p className="text-gray-700">
                                    You can set up your store in one weekend. Once running, you'll only need to spend 1-2 hours per day monitoring
                                    and optimizing. The AI handles the heavy lifting of product selection, content creation, and order fulfillment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Build Your AI-Powered Business?
                        </h2>
                        <p className="text-xl mb-10 max-w-2xl mx-auto">
                            Get started today with our free AI Dropshipping Starter Kit
                        </p>

                        <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl max-w-2xl mx-auto mb-10">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-green-400" /> Step-by-step video tutorials
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-green-400" /> Pre-built store templates
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-green-400" /> AI prompt library
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-green-400" /> Ad scripts and templates
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-green-400" /> Automation setup guides
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-green-400" /> Free tool recommendations
                                </li>
                            </ul>
                        </div>

                        <button className="px-10 py-5 bg-white text-blue-600 font-bold text-xl rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-3 mx-auto">
                            <FaDownload className="text-xl" /> Get Your Free Starter Kit Now
                        </button>
                        <p className="mt-4 text-blue-200">No credit card required • Instant access</p>
                    </div>
                </div>


            </div>

        </>
    );
};

export default AIDropshippingPage;