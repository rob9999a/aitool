import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { FaRobot, FaChartLine, FaLightbulb, FaCogs, FaDollarSign, FaSyncAlt } from 'react-icons/fa';
import Navbar from '../../Component/Website/Header/Navbar';

const Howmuch = () => {
    const [automationLevel, setAutomationLevel] = useState(50);
    const [businessSize, setBusinessSize] = useState('small');

    const calculatePotential = () => {
        let base = 0;
        if (businessSize === 'small') base = 2000;
        if (businessSize === 'medium') base = 10000;
        if (businessSize === 'large') base = 50000;

        return Math.round(base * (automationLevel / 100));
    };

    return (



        <>

            <Navbar></Navbar>


            <Helmet>
                <title>How Much Money Could You Make if AI Automated Your Entire Business?</title>
                <meta
                    name="description"
                    content="Discover the potential earnings when AI takes over your entire business operations. Learn strategies, tools, and success stories of AI-powered automation generating profits."
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Fyrexia AI" />
                <html lang="en" />

                {/* Open Graph */}
                <meta property="og:title" content="How Much Money Could You Make if AI Automated Your Entire Business?" />
                <meta
                    property="og:description"
                    content="Explore the possibilities of AI automating your business from start to finish. See how entrepreneurs are making significant income with AI-driven workflows."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/ai-automated-business" />
                <meta property="og:image" content="https://fyrexia.co.uk/images/ai-business-automation.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="How Much Money Could You Make if AI Automated Your Entire Business?" />
                <meta
                    name="twitter:description"
                    content="Learn how AI automation can transform your business and increase your profits. Discover real examples and tools that help generate revenue automatically."
                />
                <meta name="twitter:image" content="https://fyrexia.co.uk/images/ai-business-automation.jpg" />
                <meta name="twitter:site" content="@FyrexiaAI" />
            </Helmet>


            <div className="min-h-screen bg-white font-sans">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="div-template text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            How Much Money Could You Make if AI Automated Your Entire Business?
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                            The question that changes everything about entrepreneurship
                        </p>

                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-sm max-w-3xl mx-auto">
                            <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
                                "Imagine if AI handled every single part of your business — from product research to customer service. How much would you make?"
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center gap-2">
                                    <FaRobot /> Calculate Your Potential
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Automation Benefits */}
                <div className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Here's What Happens When You Let AI Take Over
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Transform your business with complete automation
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Benefit 1 */}
                            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <FaLightbulb className="text-blue-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">1. Product Research & Selection</h3>
                                <p className="text-gray-700 mb-4">
                                    AI scans millions of data points to identify the hottest products your audience will love. No more guessing. No more wasted time.
                                </p>
                                <div className="flex items-center gap-2 text-blue-600">
                                    <FaSyncAlt /> <span className="font-medium">Automated</span>
                                </div>
                            </div>

                            {/* Benefit 2 */}
                            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <FaCogs className="text-purple-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">2. Content Creation on Autopilot</h3>
                                <p className="text-gray-700 mb-4">
                                    Product descriptions, sales copy, email sequences — AI writes it all in minutes, perfectly tailored to convert visitors into customers.
                                </p>
                                <div className="flex items-center gap-2 text-purple-600">
                                    <FaSyncAlt /> <span className="font-medium">Automated</span>
                                </div>
                            </div>

                            {/* Benefit 3 */}
                            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <FaChartLine className="text-amber-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">3. Automated Marketing & Ads</h3>
                                <p className="text-gray-700 mb-4">
                                    AI designs high-converting ads, chooses the best audience, and optimizes campaigns 24/7 to get the most sales for the lowest cost.
                                </p>
                                <div className="flex items-center gap-2 text-amber-600">
                                    <FaSyncAlt /> <span className="font-medium">Automated</span>
                                </div>
                            </div>

                            {/* Benefit 4 */}
                            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <FaCogs className="text-green-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">4. Seamless Sales Funnel</h3>
                                <p className="text-gray-700 mb-4">
                                    From landing pages to checkout and follow-up emails — AI builds and manages it all, nurturing every visitor to buy.
                                </p>
                                <div className="flex items-center gap-2 text-green-600">
                                    <FaSyncAlt /> <span className="font-medium">Automated</span>
                                </div>
                            </div>

                            {/* Benefit 5 */}
                            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <FaRobot className="text-red-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">5. Order Fulfillment & Support</h3>
                                <p className="text-gray-700 mb-4">
                                    AI-powered systems track orders, manage inventory, and handle customer inquiries instantly, freeing you from manual work.
                                </p>
                                <div className="flex items-center gap-2 text-red-600">
                                    <FaSyncAlt /> <span className="font-medium">Automated</span>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center">
                                        <FaDollarSign className="text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold">The Results</h3>
                                </div>
                                <div className="mb-6">
                                    <p className="text-xl mb-4">With full automation:</p>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-400">✓</span> $1,000+/week within days
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-400">✓</span> $5,000+ monthly passive income
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-green-400">✓</span> Six-figure businesses within months
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Income Calculator */}
                <div className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 md:p-12">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    Calculate Your AI Automation Income Potential
                                </h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    See how much you could earn by automating your business
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold mb-4">Business Size</h3>
                                        <div className="grid grid-cols-3 gap-4">
                                            <button
                                                className={`px-4 py-3 rounded-lg border-2 ${businessSize === 'small' ? 'bg-blue-100 border-blue-500 text-blue-700' : 'border-gray-300'}`}
                                                onClick={() => setBusinessSize('small')}
                                            >
                                                Small
                                            </button>
                                            <button
                                                className={`px-4 py-3 rounded-lg border-2 ${businessSize === 'medium' ? 'bg-blue-100 border-blue-500 text-blue-700' : 'border-gray-300'}`}
                                                onClick={() => setBusinessSize('medium')}
                                            >
                                                Medium
                                            </button>
                                            <button
                                                className={`px-4 py-3 rounded-lg border-2 ${businessSize === 'large' ? 'bg-blue-100 border-blue-500 text-blue-700' : 'border-gray-300'}`}
                                                onClick={() => setBusinessSize('large')}
                                            >
                                                Large
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold mb-4">
                                            Automation Level: <span className="text-blue-600">{automationLevel}%</span>
                                        </h3>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={automationLevel}
                                            onChange={(e) => setAutomationLevel(e.target.value)}
                                            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                        <div className="flex justify-between text-sm text-gray-600 mt-2">
                                            <span>Manual</span>
                                            <span>Full Automation</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-5xl font-bold text-blue-600 mb-2">
                                            ${calculatePotential().toLocaleString()}
                                        </div>
                                        <p className="text-xl font-medium text-gray-700 mb-6">Potential Monthly Revenue</p>

                                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white max-w-xs mx-auto">
                                            <p className="font-bold mb-2">With {automationLevel}% automation:</p>
                                            <p className="text-lg">
                                                {automationLevel >= 70
                                                    ? "You're on track for passive income!"
                                                    : automationLevel >= 40
                                                        ? "You're automating key processes"
                                                        : "You're just getting started"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why It Works */}
                <div className="py-16 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Why AI Automation Works So Well
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                The competitive advantage of AI-powered businesses
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                                <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
                                    <FaChartLine className="text-blue-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Never Sleeps</h3>
                                <p className="text-gray-700">
                                    AI works 24/7/365, capturing sales from all time zones while you sleep or relax.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                                <div className="bg-green-100 p-4 rounded-full inline-block mb-6">
                                    <FaCogs className="text-green-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Zero Mistakes</h3>
                                <p className="text-gray-700">
                                    Automated systems eliminate human error in order processing, inventory, and customer service.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                                <div className="bg-purple-100 p-4 rounded-full inline-block mb-6">
                                    <FaRobot className="text-purple-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Continuous Optimization</h3>
                                <p className="text-gray-700">
                                    AI constantly tests and improves your marketing, sales, and operations for better results.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
                            <p className="text-2xl font-bold mb-6">
                                "You focus on scaling and strategy, while AI handles the repetitive tasks"
                            </p>
                        </div>
                    </div>
                </div>



                {/* Final Thought */}
                <div className="py-16 bg-gray-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            The Future of Entrepreneurship
                        </h2>

                        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-8 rounded-xl mb-10">
                            <p className="text-2xl font-bold italic">
                                "The future of entrepreneurship is AI-powered automation. The question isn't if AI will run your business — it's how much money you'll make when it does."
                            </p>
                        </div>

                        <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-colors">
                            Start Your AI Automation Journey
                        </button>
                    </div>
                </div>


            </div>

        </>
    );
};

export default Howmuch;