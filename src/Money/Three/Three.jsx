import React from 'react';
import { Helmet } from "react-helmet";
import { FaRobot, FaMoneyBillWave, FaShoppingCart, FaPalette, FaAd, FaBrain, FaPlayCircle, FaDownload } from 'react-icons/fa';
import Navbar from '../../Component/Website/Header/Navbar';

const Stepmoney = () => {
    return (


        <>

            <Helmet>
                <title>How I Made Money While Sleeping — Thanks to AI Automation</title>
                <meta
                    name="description"
                    content="Discover how I generated passive income using artificial intelligence — even while I slept. Learn the exact tools, strategies, and automation that helped me turn AI into a money-making machine."
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Fyrexia AI" />
                <html lang="en" />

                {/* Open Graph (Facebook/LinkedIn/etc) */}
                <meta property="og:title" content="How I Made Money While Sleeping — Thanks to AI Automation" />
                <meta
                    property="og:description"
                    content="Step-by-step breakdown of how AI helped me build a passive income stream. Zero inventory. Full automation."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/ai-passive-income" />
                <meta property="og:image" content="https://fyrexia.co.uk/images/ai-sleep-money.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="How I Made Money While Sleeping — Thanks to AI Automation" />
                <meta
                    name="twitter:description"
                    content="Discover how I used AI to earn money while I slept. Automation, tools, and strategies revealed."
                />
                <meta name="twitter:image" content="https://fyrexia.co.uk/images/ai-sleep-money.jpg" />
                <meta name="twitter:site" content="@FyrexiaAI" />
            </Helmet>




            <Navbar></Navbar>


            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="div-template text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
                            <FaMoneyBillWave /> <span className="font-bold">Passive Income Case Study</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            <span className="block">How I Made Money While Sleeping</span>
                            <span className="block text-blue-600">Thanks to AI</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                            Discover how AI tools can generate income 24/7 while you dream
                        </p>


                    </div>
                </div>

                {/* The Story */}
                <div className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <FaRobot className="text-blue-600 text-2xl" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">The Night That Changed Everything</h2>
                            </div>

                            <div className="space-y-6 text-gray-700 text-lg">
                                <p className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
                                    "It was 2:46 AM. I was asleep. My phone buzzed."
                                </p>

                                <div className="bg-gray-100 p-4 rounded-lg flex flex-col gap-2">
                                    <div className="bg-green-100 p-3 rounded-lg flex items-center gap-3">
                                        <FaMoneyBillWave className="text-green-600" />
                                        <span className="font-bold">"New Order Received – $49.99"</span>
                                    </div>
                                    <div className="bg-green-100 p-3 rounded-lg flex items-center gap-3">
                                        <FaMoneyBillWave className="text-green-600" />
                                        <span className="font-bold">"Another Order – $24.99"</span>
                                    </div>
                                </div>

                                <p>
                                    "That night, I made over $300 while dreaming."
                                </p>

                                <div className="bg-blue-100 p-4 rounded-lg">
                                    <p className="font-bold text-blue-800">No paid ads. No phone calls. No product handling.</p>
                                </div>

                                <p className="text-2xl font-bold text-center my-8">
                                    How? <span className="text-blue-600">AI was doing everything while I slept</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI Stack Section */}
                <div className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                The AI Stack That Ran My Business While I Slept
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                These tools worked 24/7 to generate income completely autonomously
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* ChatGPT */}
                            <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <FaBrain className="text-green-600 text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold">1. ChatGPT – The Brain 🧠</h3>
                                </div>
                                <p className="text-gray-700 mb-4">Used for:</p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        Finding winning products
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        Writing product descriptions
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        Creating ad copy & headlines
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        Generating email sequences
                                    </li>
                                </ul>
                                <div className="text-blue-600 font-medium">Try it →</div>
                            </a>

                            {/* Durable.co */}
                            <a href="https://durable.co" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <FaShoppingCart className="text-blue-600 text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold">2. Durable.co – Instant Website 🌐</h3>
                                </div>
                                <p className="text-gray-700 mb-6">
                                    "I literally typed in my business idea, and Durable created a full website — layout, text, design — all with AI."
                                </p>
                                <div className="text-blue-600 font-medium">Build yours free →</div>
                            </a>

                            {/* Leonardo/Midjourney */}
                            <a href="https://leonardo.ai" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-purple-100 p-3 rounded-full">
                                        <FaPalette className="text-purple-600 text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold">3. Leonardo.Ai – Visual Creator 🎨</h3>
                                </div>
                                <p className="text-gray-700 mb-6">
                                    "Generated stunning product images I used for my store and ads."
                                </p>
                                <div className="text-blue-600 font-medium">Create images →</div>
                            </a>

                            {/* AdCreative.ai */}
                            <a href="https://www.adcreative.ai" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-amber-100 p-3 rounded-full">
                                        <FaAd className="text-amber-600 text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold">4. AdCreative.ai – Ad Generator 📣</h3>
                                </div>
                                <p className="text-gray-700 mb-6">
                                    "Designed professional ad banners, headlines, and calls-to-action. I connected it with Facebook Ads & started seeing results in 48 hours."
                                </p>
                                <div className="text-blue-600 font-medium">Free trial →</div>
                            </a>

                            {/* AutoDS */}
                            <a href="https://www.autods.com" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-red-100 p-3 rounded-full">
                                        <FaRobot className="text-red-600 text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold">5. AutoDS – Automated Fulfillment 📦</h3>
                                </div>
                                <p className="text-gray-700 mb-6">
                                    "When a customer ordered, AutoDS placed the order on AliExpress without me doing anything."
                                </p>
                                <div className="text-blue-600 font-medium">Sign up →</div>
                            </a>

                            {/* Results */}
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center">
                                        <FaMoneyBillWave className="text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold">The Results</h3>
                                </div>
                                <div className="mb-6">
                                    <div className="text-4xl font-bold mb-2">$1,000+</div>
                                    <p className="text-blue-200">in 2.5 weeks while sleeping</p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> No 18-hour workdays
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> No product handling
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> No customer service calls
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> Fully automated income
                                    </li>
                                </ul>
                                <p className="text-center italic">
                                    "AI was doing the lifting — I was just steering the ship."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>






            </div>
        </>

    );
};

export default Stepmoney;