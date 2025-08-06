import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { FaRobot, FaLightbulb, FaChartLine, FaClock, FaCogs, FaCheck, FaTimes, FaHandshake, FaDownload, FaPlayCircle } from 'react-icons/fa';
import Navbar from '../../Component/Website/Header/Navbar';

const AISilentPartner = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (


        <>
            <Helmet>
                <title>Are You Ready to Let AI Be Your Silent Business Partner?</title>
                <meta
                    name="description"
                    content="Let artificial intelligence handle the hard work while you focus on growth. Discover how AI can automate, scale, and silently power your business — 24/7. Are you ready to partner with the future?"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Fyrexia AI" />
                <html lang="en" />

                {/* Open Graph for Facebook/LinkedIn */}
                <meta property="og:title" content="Are You Ready to Let AI Be Your Silent Business Partner?" />
                <meta
                    property="og:description"
                    content="AI is the ultimate partner: no salary, no sleep, just results. See how entrepreneurs are using automation to earn more by doing less."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/ai-business-partner" />
                <meta property="og:image" content="https://fyrexia.co.uk/images/ai-silent-partner.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Are You Ready to Let AI Be Your Silent Business Partner?" />
                <meta
                    name="twitter:description"
                    content="Discover how AI can automate your business and work for you 24/7. Zero burnout. Just pure, scalable growth."
                />
                <meta name="twitter:image" content="https://fyrexia.co.uk/images/ai-silent-partner.jpg" />
                <meta name="twitter:site" content="@FyrexiaAI" />
            </Helmet>

            <Navbar></Navbar>





            <div className="min-h-screen bg-white font-sans text-gray-800">


                {/* Hero Section */}
                <section className="py-12 md:py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="div-template text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                🤖 Are You Ready to Let AI Be Your <span className="text-blue-600">Silent Business Partner</span>?
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                                In 2025, your most loyal, efficient, and tireless business partner might not be human — it might be AI.
                            </p>

                        </div>
                    </div>
                </section>

                {/* The Big Idea */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="md:w-1/2">
                                <div className="bg-blue-600 p-3 rounded-full inline-block mb-6">
                                    <FaLightbulb className="text-white text-2xl" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">🧠 The Big Idea</h2>
                                <p className="text-xl mb-6">
                                    Let's face it: the world of business has changed. You don't need a big office, expensive tools, or even a team.
                                </p>
                                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                                    <p className="text-xl font-bold">
                                        "But is it really possible to let AI run the core of your business while you focus on growth?"
                                    </p>
                                </div>
                            </div>
                            <div className="md:w-1/2 mt-8 md:mt-0">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl transform rotate-6"></div>
                                    <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="bg-blue-100 p-3 rounded-full">
                                                <FaRobot className="text-blue-600 text-2xl" />
                                            </div>
                                            <h3 className="text-xl font-bold">AI Business Partnership</h3>
                                        </div>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3">
                                                <FaCheck className="text-green-500 mt-1" />
                                                <span>24/7 operation without breaks</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <FaCheck className="text-green-500 mt-1" />
                                                <span>Zero emotional decisions</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <FaCheck className="text-green-500 mt-1" />
                                                <span>No salary or equity required</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <FaCheck className="text-green-500 mt-1" />
                                                <span>Constant optimization and learning</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Story */}
                <section id="story" className="py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">💼 My Journey to AI Partnership</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                From struggling solo entrepreneur to having an AI business partner
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* The Struggle */}
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-red-100 p-3 rounded-full">
                                        <FaTimes className="text-red-600 text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold">The Struggle</h3>
                                </div>
                                <p className="mb-6">
                                    "A few months ago, I was doing everything myself:"
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <FaTimes className="text-red-500 mt-1" />
                                        <span>Writing product descriptions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaTimes className="text-red-500 mt-1" />
                                        <span>Editing images</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaTimes className="text-red-500 mt-1" />
                                        <span>Trying to build a website</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaTimes className="text-red-500 mt-1" />
                                        <span>Running ads that didn't convert</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaTimes className="text-red-500 mt-1" />
                                        <span>Answering customer questions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaTimes className="text-red-500 mt-1" />
                                        <span className="font-bold">Failing</span>
                                    </li>
                                </ul>
                                <div className="mt-8 bg-red-100 p-4 rounded-lg">
                                    <p className="font-bold text-red-700">
                                        "I was exhausted, overwhelmed, and stuck."
                                    </p>
                                </div>
                            </div>

                            {/* The Shift */}
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <FaRobot className="text-blue-600 text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold">The Transformation</h3>
                                </div>
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-xl mb-8">
                                    <p className="text-xl font-bold">
                                        "I made one decision that changed everything:"
                                    </p>
                                </div>
                                <p className="text-xl font-bold mb-8 text-center">
                                    👉 I stopped doing everything manually and started letting AI handle what it's good at.
                                </p>
                                <div className="flex justify-center">
                                    <div className="bg-blue-100 p-4 rounded-full">
                                        <FaHandshake className="text-blue-600 text-4xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Shift */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">⚙️ What AI Took Over</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                My new silent partner handles these critical business functions
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-lg overflow-hidden">
                                <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                                    <tr>
                                        <th className="py-4 px-6 text-left">Business Task</th>
                                        <th className="py-4 px-6 text-left">AI Solution</th>
                                        <th className="py-4 px-6 text-left">Time Saved</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-4 px-6 font-medium">Product Research</td>
                                        <td className="py-4 px-6">ChatGPT, SellTheTrend</td>
                                        <td className="py-4 px-6 text-green-600 font-bold">3+ hours/day</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-4 px-6 font-medium">Store Creation</td>
                                        <td className="py-4 px-6">Durable, Shopify + AI</td>
                                        <td className="py-4 px-6 text-green-600 font-bold">2 weeks → 2 days</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-4 px-6 font-medium">Copywriting</td>
                                        <td className="py-4 px-6">Copy.ai, Jasper</td>
                                        <td className="py-4 px-6 text-green-600 font-bold">100% automated</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-4 px-6 font-medium">Ad Creative</td>
                                        <td className="py-4 px-6">AdCreative.ai, Pictory</td>
                                        <td className="py-4 px-6 text-green-600 font-bold">6 hours → 20 min</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-4 px-6 font-medium">Customer Support</td>
                                        <td className="py-4 px-6">Tidio AI, GPT Bot</td>
                                        <td className="py-4 px-6 text-green-600 font-bold">24/7 replies</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-4 px-6 font-medium">Order Fulfillment</td>
                                        <td className="py-4 px-6">DSers / AutoDS</td>
                                        <td className="py-4 px-6 text-green-600 font-bold">Fully automated</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Results */}
                <section id="results" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">📈 The Results (Real Numbers)</h2>
                            <p className="text-xl opacity-90 max-w-2xl mx-auto">
                                What happened within the first 30 days of partnering with AI
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                                <div className="text-4xl font-bold mb-2">$5,372</div>
                                <p>in revenue</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                                <div className="text-4xl font-bold mb-2">131</div>
                                <p>orders processed</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                                <div className="text-4xl font-bold mb-2">80+</div>
                                <p>hours saved</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                                <div className="text-4xl font-bold mb-2">94%</div>
                                <p>support automated</p>
                            </div>
                        </div>

                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                            <p className="text-xl mb-8">
                                "😴 I started sleeping full nights again and regained my work-life balance"
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold mb-4">By month 2, I had:</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="text-green-400 mt-1" />
                                            <span>Doubled my profit margin</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="text-green-400 mt-1" />
                                            <span>Reduced workload by 90%</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="text-green-400 mt-1" />
                                            <span>Created a business that runs even when I don't touch it</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="relative w-48 h-48">
                                        <div className="absolute inset-0 bg-white/20 rounded-full flex items-center justify-center">
                                            <div className="text-center">
                                                <FaChartLine className="text-4xl mb-4" />
                                                <p className="font-bold">Business Growth</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Silent Partner */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">🤫 Why "Silent Partner"?</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                The perfect business partner you've been looking for
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-300">
                            <p className="text-xl font-bold text-center mb-8">
                                "Because AI doesn't complain, take vacations, make emotional decisions, ask for equity, or sleep"
                            </p>

                            <div className="flex justify-center mb-8">
                                <div className="bg-blue-100 p-6 rounded-full">
                                    <FaCogs className="text-blue-600 text-4xl" />
                                </div>
                            </div>

                            <p className="text-2xl font-bold text-center text-blue-600">
                                "It just works — constantly optimizing, writing, testing, improving, and scaling."
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Truth */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-6 mb-12">
                            <div className="bg-amber-500 p-4 rounded-full">
                                <FaLightbulb className="text-white text-2xl" />
                            </div>
                            <h2 className="text-3xl font-bold">⚡ The Truth About Modern Business</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
                                <h3 className="text-xl font-bold mb-6 text-red-700">The Hard Way</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <FaTimes className="text-red-500 mt-1" />
                                        <span>Manual processes that drain your energy</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaTimes className="text-red-500 mt-1" />
                                        <span>Limited by human capacity and working hours</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaTimes className="text-red-500 mt-1" />
                                        <span>Higher operational costs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaTimes className="text-red-500 mt-1" />
                                        <span>Slower growth and scalability</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                                <h3 className="text-xl font-bold mb-6 text-green-700">The AI Way</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <FaCheck className="text-green-500 mt-1" />
                                        <span>Automated workflows that run 24/7</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaCheck className="text-green-500 mt-1" />
                                        <span>Scalable beyond human limitations</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaCheck className="text-green-500 mt-1" />
                                        <span>Lower operational costs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaCheck className="text-green-500 mt-1" />
                                        <span>Exponential growth potential</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-xl text-center">
                            <p className="text-xl font-bold">
                                "Most people are still building their business the hard way. Others are letting AI build with them — or for them."
                            </p>
                        </div>
                    </div>
                </section>


                {/* Final Thought */}
                <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            🧠 Final Thought
                        </h2>

                        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-8 rounded-xl mb-10">
                            <p className="text-2xl font-bold italic">
                                "So… are you ready to let AI be your silent business partner?"
                            </p>
                        </div>

                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            "Because honestly… it already is for thousands of people. The only question is: Will it work for you — or against you?"
                        </p>

                        <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-colors">
                            Partner with AI Today
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AISilentPartner;