import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

import Navbar from '../../Component/Website/Header/Navbar';

const Yourtrader = () => {
    const [activeScene, setActiveScene] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const sceneElements = document.querySelectorAll('.scene');
            sceneElements.forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
                    setActiveScene(index + 1);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (


        <>

            <Helmet>
                <title>Are AI-Generated Ideas Killing Creativity — or Supercharging It?</title>
                <meta
                    name="description"
                    content="Are machines replacing imagination, or enhancing it? Discover how creatives are using AI not as a crutch, but as a catalyst — and why the future of creativity isn’t artificial, it’s amplified."
                />
                <meta name="robots" content="index, follow" />
                <html lang="en" />

                {/* Open Graph */}
                <meta property="og:title" content="Are AI-Generated Ideas Killing Creativity — or Supercharging It?" />
                <meta property="og:description" content="AI is shaking up art, design, and storytelling. But is it helping or hurting creativity? Find out through this eye-opening perspective." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yourwebsite.com/ai-creativity-story" />
                <meta property="og:image" content="https://yourwebsite.com/images/ai-vs-creativity.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Are AI-Generated Ideas Killing Creativity — or Supercharging It?" />
                <meta name="twitter:description" content="AI doesn’t have a soul — but it might spark yours. Discover how artists are using it to think bigger, not smaller." />
                <meta name="twitter:image" content="https://yourwebsite.com/images/ai-vs-creativity.jpg" />
            </Helmet>
            <Navbar></Navbar>





            <div className="min-h-screen bg-white font-sans text-gray-800 overflow-x-hidden">
                {/* Hero Section */}
                <div className="relative py-16 px-4 text-center bg-blue-50">
                    <div className="div-template max-w-7xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Can a Beginner with $100 and AI Beat Traditional Traders?
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-4xl mx-auto">
                            The showdown between human intuition and machine intelligence
                        </p>

                        {/* Static trading chart */}
                        <div className="mt-12 h-24 bg-white border border-gray-200 rounded-lg p-2 max-w-7xl mx-auto">
                            <div className="flex items-end h-full space-x-1">
                                {[...Array(30)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="bg-blue-400 rounded-t"
                                        style={{
                                            width: '8px',
                                            height: `${Math.random() * 60 + 20}px`
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scene Navigation */}
                <div className="sticky top-4 z-50 flex justify-center my-8">
                    <div className="flex bg-white shadow rounded-lg p-1 gap-1 border border-gray-200">
                        {[1, 2, 3, 4].map(num => (
                            <button
                                key={num}
                                onClick={() => {
                                    document.getElementById(`scene-${num}`).scrollIntoView({ behavior: 'smooth' });
                                    setActiveScene(num);
                                }}
                                className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold ${activeScene === num
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Scene 1 */}
                <div
                    id="scene-1"
                    className="scene py-16 px-4 border-b border-gray-100"
                >
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center mb-8">
                            <div className="text-4xl mr-4 text-blue-500">🎬</div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                                Scene 1: The Rookie
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <p className="text-gray-700 mb-4">He had no degree.<br />No Wall Street background.<br />No Bloomberg terminal.</p>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                                            <div className="text-3xl text-yellow-500">💻</div>
                                            <p className="text-sm mt-1 text-gray-600">Cracked laptop</p>
                                        </div>
                                        <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                                            <div className="text-3xl text-green-500">💰</div>
                                            <p className="text-sm mt-1 text-gray-600">$100</p>
                                        </div>
                                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                            <div className="text-3xl text-blue-500">🔍</div>
                                            <p className="text-sm mt-1 text-gray-600">Curiosity</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <p className="text-gray-700 mb-4">He asked ChatGPT:</p>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <p className="text-blue-600">"How do I start trading with no experience?"</p>
                                    </div>
                                    <p className="mt-4 text-gray-600">It answered with a strategy, a breakdown, and even code.</p>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="bg-white border border-gray-200 rounded-xl w-64 h-80 flex items-center justify-center shadow-sm">
                                    <div className="text-center">
                                        <div className="text-4xl text-blue-500 mb-4">👨‍💻</div>
                                        <p className="text-sm text-gray-500">AI-Powered Beginner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scene 2 */}
                <div
                    id="scene-2"
                    className="scene py-16 px-4 border-b border-gray-100"
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-8">
                            <div className="text-4xl mr-4 text-blue-500">🤯</div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                                Scene 2: The Discovery
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="flex justify-center">
                                <div className="bg-white border border-gray-200 rounded-xl w-64 h-80 flex items-center justify-center shadow-sm">
                                    <div className="text-center p-4">
                                        <div className="text-4xl text-blue-500 mb-4">🤖</div>
                                        <p className="text-lg font-bold mb-2 text-gray-800">Trading Bot</p>
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">24/7</span>
                                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">No Panic</span>
                                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">No Greed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <p className="text-gray-700 mb-4">He didn't want to gamble.<br />He wanted logic.</p>
                                    <p className="text-gray-700 mb-4">So he fed AI tools with:</p>

                                    <div className="grid grid-cols-2 gap-4">
                                        <DataPill icon="📈" label="Market data" />
                                        <DataPill icon="🕰️" label="Price history" />
                                        <DataPill icon="🕯️" label="Candlestick patterns" />
                                        <DataPill icon="💬" label="Social sentiment" />
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                                    <p className="font-bold mb-2 text-gray-800">In 48 hours, he had something Wall Street traders fear:</p>
                                    <p className="text-gray-700">A bot that didn't sleep.<br />Didn't panic.<br />Didn't break rules.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scene 3 */}
                <div
                    id="scene-3"
                    className="scene py-16 px-4 border-b border-gray-100"
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-8">
                            <div className="text-4xl mr-4 text-blue-500">⚔️</div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                                Scene 3: The Showdown
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                            {/* Traditional Trader */}
                            <div className="bg-white rounded-xl p-6 border border-red-100 shadow-sm">
                                <div className="text-center mb-6">
                                    <h3 className="text-lg font-bold mb-2 text-red-500">Traditional Trader</h3>
                                    <div className="w-16 h-1 bg-red-400 mx-auto mb-4"></div>
                                    <p className="text-sm text-gray-500">7 years experience</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-red-100 p-2 rounded-lg">
                                            <div className="text-2xl text-red-500">📊</div>
                                        </div>
                                        <p className="text-gray-700">Morning ritual: Charts, Coffee, CNBC</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="bg-red-100 p-2 rounded-lg">
                                            <div className="text-2xl text-red-500">⏳</div>
                                        </div>
                                        <p className="text-gray-700">Manual market scanning</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="bg-red-100 p-2 rounded-lg">
                                            <div className="text-2xl text-red-500">😓</div>
                                        </div>
                                        <p className="text-gray-700">Emotional decision making</p>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <p className="text-center font-bold text-gray-800">By week's end:</p>
                                    <div className="flex justify-center mt-4">
                                        <div className="text-3xl font-bold text-red-500">$120</div>
                                    </div>
                                </div>
                            </div>

                            {/* AI Rookie */}
                            <div className="bg-white rounded-xl p-6 border border-green-100 shadow-sm">
                                <div className="text-center mb-6">
                                    <h3 className="text-lg font-bold mb-2 text-green-600">AI-Powered Beginner</h3>
                                    <div className="w-16 h-1 bg-green-500 mx-auto mb-4"></div>
                                    <p className="text-sm text-gray-500">$100 starting capital</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-lg">
                                            <div className="text-2xl text-green-600">⚡</div>
                                        </div>
                                        <p className="text-gray-700">Scanning 50 markets simultaneously</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-lg">
                                            <div className="text-2xl text-green-600">🎯</div>
                                        </div>
                                        <p className="text-gray-700">Finding small, low-risk trades</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-lg">
                                            <div className="text-2xl text-green-600">⏱️</div>
                                        </div>
                                        <p className="text-gray-700">Executing faster than human blink</p>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <p className="text-center font-bold text-gray-800">By week's end:</p>
                                    <div className="flex justify-center mt-4">
                                        <div className="text-3xl font-bold text-green-600">$236</div>
                                        <span className="text-sm text-gray-500 self-end ml-2">(passively)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-block bg-green-50 p-6 rounded-xl border border-green-200">
                                <p className="font-bold text-gray-800">The AI beginner made <span className="text-green-600">97% more profit</span><br />with no experience and 1/100th the resources</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scene 4 */}
                <div
                    id="scene-4"
                    className="scene py-16 px-4 border-b border-gray-100"
                >
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center mb-8">
                            <div className="text-4xl mr-4 text-blue-500">🧠</div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                                Scene 4: The Truth Hits
                            </h2>
                        </div>

                        <div className="bg-white p-8 rounded-xl border border-blue-100 shadow-sm mb-12">
                            <p className="text-gray-700 mb-6">The beginner didn't "beat" the trader in skill.<br />He beat him in discipline. Execution. Speed. Data.</p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <QualityCard icon="🎯" title="Discipline" />
                                <QualityCard icon="⚡" title="Execution" />
                                <QualityCard icon="🚀" title="Speed" />
                                <QualityCard icon="📊" title="Data" />
                            </div>

                            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-center text-gray-700">
                                    Because the AI didn't have to guess.<br />
                                    Didn't chase pumps.<br />
                                    Didn't get emotional.
                                </p>
                            </div>
                        </div>

                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <div className="inline-block bg-blue-50 p-6 rounded-xl border border-blue-200">
                                <p className="font-bold text-gray-800">Final Insight:</p>
                                <p className="text-gray-700 mt-4">
                                    In 2025, trading isn't about who's smartest.<br />
                                    It's about who's most automated.
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-500 rounded-xl p-1 max-w-2xl mx-auto">
                            <div className="bg-white rounded-xl p-6 text-center">
                                <p className="font-bold mb-6 text-gray-800">
                                    $100 + AI + determination = <span className="text-blue-500">competitive advantage</span>
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 mb-4">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                        <div className="text-2xl text-blue-500">💰</div>
                                        <p className="text-sm text-gray-600">$100</p>
                                    </div>
                                    <div className="text-2xl text-gray-400 self-center">+</div>
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                        <div className="text-2xl text-purple-500">🤖</div>
                                        <p className="text-sm text-gray-600">AI</p>
                                    </div>
                                    <div className="text-2xl text-gray-400 self-center">+</div>
                                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                                        <div className="text-2xl text-yellow-500">💪</div>
                                        <p className="text-sm text-gray-600">Determination</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blueprint Section */}
                <div className="py-16 px-4 bg-gray-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                                Want the Blueprint?
                            </h2>
                            <p className="text-lg max-w-4xl mx-auto text-gray-600">
                                Everything you need to start with $100 and AI
                            </p>
                        </div>

                        <div className="bg-white rounded-xl border border-blue-100 p-8 mb-12 shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-lg font-bold mb-4 text-gray-800">What's Included:</h3>
                                    <ul className="space-y-4">
                                        <BlueprintItem icon="🤖" text="AI tools for beginners" />
                                        <BlueprintItem icon="📊" text="Simple trading bots" />
                                        <BlueprintItem icon="💡" text="How to start with $100 or less" />
                                        <BlueprintItem icon="📝" text="Free strategy template" />
                                    </ul>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="relative mb-8">
                                        <div className="bg-white border border-gray-200 rounded-xl w-48 h-64 flex items-center justify-center shadow-sm">
                                            <div className="text-center p-4">
                                                <div className="text-4xl text-blue-500 mb-4">📈</div>
                                                <p className="text-sm text-gray-600">AI Trading Blueprint</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-sm flex items-center gap-2"
                                    >
                                        Get the free AI Trading Starter Kit
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-block bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                                <p className="font-bold mb-6 text-gray-800">Final Thoughts:</p>
                                <p className="text-gray-700 mb-4">
                                    The age of the human edge is evolving.<br />
                                    Welcome to the age of augmented intelligence.
                                </p>
                                <p className="font-bold mt-8 text-blue-600">
                                    The future belongs to those who can leverage both human creativity and machine efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Reusable components
const DataPill = ({ icon, label }) => (
    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
        <div className="text-xl">{icon}</div>
        <span className="text-gray-700">{label}</span>
    </div>
);

const QualityCard = ({ icon, title }) => (
    <div className="bg-white p-4 rounded-lg text-center border border-gray-100 shadow-sm">
        <div className="text-2xl mb-2">{icon}</div>
        <p className="font-bold text-gray-800">{title}</p>
    </div>
);

const BlueprintItem = ({ icon, text }) => (
    <li className="flex items-center gap-3 text-gray-700">
        <div className="text-xl">{icon}</div>
        <span>{text}</span>
    </li>
);

export default Yourtrader;