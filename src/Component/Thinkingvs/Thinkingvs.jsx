import React, { useState } from 'react';
import { FaBrain, FaLightbulb, FaCogs, FaRobot, FaChessKing, FaRocket } from 'react-icons/fa';
import Navbar from '../Website/Header/Navbar';

const ThinkingVsPrompting = () => {
    const [activeTab, setActiveTab] = useState('thinking');

    return (

        <>
            <Navbar></Navbar>


            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-4">
                    <div className="div-template max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                            <span className="text-yellow-300">Thinking</span> vs <span className="text-green-300">Prompting</span>
                        </h1>
                        <p className="text-2xl md:text-3xl mb-8 max-w-4xl mx-auto">
                            Which Is the New Content Creation Skill?
                        </p>
                        <div className="bg-yellow-500 text-blue-900 inline-block px-6 py-3 rounded-full font-bold text-xl">
                            The Future Creator's Dilemma
                        </div>
                    </div>
                </div>

                {/* The Dilemma Section */}
                <section className="py-16 px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                The Content Creator's Dilemma
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <div className="text-center mb-10">
                                <div className="inline-block bg-blue-100 p-4 rounded-full mb-6">
                                    <FaBrain className="text-blue-600 text-4xl" />
                                </div>
                                <p className="text-xl md:text-2xl text-gray-700 mb-6">
                                    In a world where AI can write, design, edit, and schedule —<br />
                                    What exactly is your job as a creator?
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                                    <h3 className="text-xl font-bold mb-3">For Years:</h3>
                                    <p className="text-lg">The most valuable skill was <span className="font-bold">thinking</span> — ideas, hooks, audience needs</p>
                                </div>

                                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                                    <h3 className="text-xl font-bold mb-3">Now:</h3>
                                    <p className="text-lg">AI tools can do this in seconds, raising the question:</p>
                                    <p className="text-xl font-bold mt-3">"Is prompting replacing thinking?"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tab Navigation */}
                <div className="max-w-3xl mx-auto px-4 mb-12">
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => setActiveTab('thinking')}
                            className={`flex items-center px-6 py-4 rounded-full transition-all ${activeTab === 'thinking'
                                ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
                                : 'bg-white border border-gray-300 hover:bg-blue-50'
                                }`}
                        >
                            <FaBrain className="mr-2 text-lg" />
                            <span className="font-medium text-lg">The Classic Skill: Thinking</span>
                        </button>

                        <button
                            onClick={() => setActiveTab('prompting')}
                            className={`flex items-center px-6 py-4 rounded-full transition-all ${activeTab === 'prompting'
                                ? 'bg-green-600 text-white shadow-lg transform -translate-y-1'
                                : 'bg-white border border-gray-300 hover:bg-green-50'
                                }`}
                        >
                            <FaRobot className="mr-2 text-lg" />
                            <span className="font-medium text-lg">The New Skill: Prompting</span>
                        </button>
                    </div>
                </div>

                {/* Content Sections */}
                <section className="py-8 px-4">
                    <div className="max-w-5xl mx-auto">
                        {/* Thinking Section */}
                        {activeTab === 'thinking' && (
                            <div className="bg-blue-50 rounded-2xl shadow-xl p-8">
                                <div className="text-center mb-10">
                                    <div className="inline-block bg-white p-4 rounded-full mb-6">
                                        <FaBrain className="text-blue-600 text-5xl" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Thinking: The Creator's Classic Skill</h2>
                                    <p className="text-xl text-gray-700">Thinking used to be everything</p>
                                </div>

                                <div className="bg-white rounded-xl p-6 mb-8">
                                    <h3 className="text-xl font-bold mb-4 text-blue-700">What Traditional Thinking Required:</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 text-blue-700 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                                1
                                            </div>
                                            <p className="text-gray-700">Knowing your audience intimately</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 text-blue-700 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                                2
                                            </div>
                                            <p className="text-gray-700">Brainstorming original ideas from scratch</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 text-blue-700 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                                3
                                            </div>
                                            <p className="text-gray-700">Crafting angles, outlines, and scripts manually</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 text-blue-700 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                                4
                                            </div>
                                            <p className="text-gray-700">Building everything from a blank page</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-xl">
                                    <p className="text-xl font-bold text-center">
                                        "Creativity meant grinding — through silence, pressure, and self-doubt."
                                    </p>
                                    <p className="text-center text-lg mt-4">
                                        Thinking was the edge. You either had it... or you didn't.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Prompting Section */}
                        {activeTab === 'prompting' && (
                            <div className="bg-green-50 rounded-2xl shadow-xl p-8">
                                <div className="text-center mb-10">
                                    <div className="inline-block bg-white p-4 rounded-full mb-6">
                                        <FaRobot className="text-green-600 text-5xl" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Prompting: The New Creative Skill</h2>
                                    <p className="text-xl text-gray-700">Structured thinking turned into a repeatable skill</p>
                                </div>

                                <div className="bg-white rounded-xl p-6 mb-8">
                                    <h3 className="text-xl font-bold mb-4 text-green-700">What Modern Prompting Requires:</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-green-100 text-green-700 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                                1
                                            </div>
                                            <p className="text-gray-700">Understanding how to frame requests effectively</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-green-100 text-green-700 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                                2
                                            </div>
                                            <p className="text-gray-700">Getting specific tones, outcomes, or emotions</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-green-100 text-green-700 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                                3
                                            </div>
                                            <p className="text-gray-700">Iterating and refining until results feel human-level</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-green-100 text-green-700 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                                4
                                            </div>
                                            <p className="text-gray-700">Structuring thinking into actionable AI commands</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-xl">
                                    <p className="text-xl font-bold text-center">
                                        "Prompting isn't just typing. It's thinking with structure."
                                    </p>
                                    <p className="text-center text-lg mt-4">
                                        Everyone has AI access, but not everyone gets great results.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* The Secret Section */}
                <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-block bg-yellow-100 p-4 rounded-full mb-6">
                                <FaLightbulb className="text-yellow-600 text-4xl" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                The Creator's Secret
                            </h2>
                            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                        </div>

                        <div className="bg-white/10 rounded-2xl p-8">
                            <p className="text-2xl md:text-3xl text-center mb-10 font-bold">
                                "Prompting doesn't replace thinking — it multiplies it."
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white/20 p-6 rounded-xl">
                                    <div className="text-center mb-4">
                                        <FaBrain className="text-yellow-300 text-3xl mx-auto" />
                                    </div>
                                    <p className="text-center">You still need storytelling sense</p>
                                </div>
                                <div className="bg-white/20 p-6 rounded-xl">
                                    <div className="text-center mb-4">
                                        <FaChessKing className="text-yellow-300 text-3xl mx-auto" />
                                    </div>
                                    <p className="text-center">You still need creative judgment</p>
                                </div>
                                <div className="bg-white/20 p-6 rounded-xl">
                                    <div className="text-center mb-4">
                                        <FaLightbulb className="text-yellow-300 text-3xl mx-auto" />
                                    </div>
                                    <p className="text-center">You still need vision and direction</p>
                                </div>
                            </div>

                            <div className="mt-12 text-center">
                                <h3 className="text-2xl font-bold mb-6">The Modern Creator's Workflow:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                                    <div className="bg-blue-700 p-4 rounded-lg">
                                        <p className="font-bold">Think like a strategist</p>
                                    </div>
                                    <div className="bg-green-700 p-4 rounded-lg">
                                        <p className="font-bold">Prompt like an engineer</p>
                                    </div>
                                    <div className="bg-yellow-600 p-4 rounded-lg">
                                        <p className="font-bold">Create like a machine</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-16 px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Who Wins in 2025?
                            </h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Old-School Thinker */}
                            <div className="bg-blue-50 rounded-2xl shadow-xl p-8 border-4 border-blue-200">
                                <div className="text-center mb-8">
                                    <div className="inline-block bg-blue-200 p-4 rounded-full mb-6">
                                        <FaBrain className="text-blue-700 text-4xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Old-School Thinker</h3>
                                </div>

                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="bg-blue-200 text-blue-800 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                            ✓
                                        </div>
                                        <p className="text-gray-700">Original mind and creative instincts</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-200 text-blue-800 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                            ✘
                                        </div>
                                        <p className="text-gray-700">Slow output, heavy manual effort</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-200 text-blue-800 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                            ✘
                                        </div>
                                        <p className="text-gray-700">Limited by individual capacity</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-200 text-blue-800 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                            ✘
                                        </div>
                                        <p className="text-gray-700">Struggles with content volume demands</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Prompt-First Creator */}
                            <div className="bg-green-50 rounded-2xl shadow-xl p-8 border-4 border-green-200 relative">
                                <div className="absolute top-0 right-0 bg-green-500 text-white px-6 py-2 rounded-bl-lg font-bold">
                                    ADVANTAGE
                                </div>

                                <div className="text-center mb-8">
                                    <div className="inline-block bg-green-200 p-4 rounded-full mb-6">
                                        <FaCogs className="text-green-700 text-4xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Prompt-First Creator</h3>
                                </div>

                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="bg-green-200 text-green-800 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                            ✓
                                        </div>
                                        <p className="text-gray-700">Clear mental models for content</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-green-200 text-green-800 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                            ✓
                                        </div>
                                        <p className="text-gray-700">Leverages AI for speed and scale</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-green-200 text-green-800 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                            ✓
                                        </div>
                                        <p className="text-gray-700">Focuses on curation and refinement</p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-green-200 text-green-800 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                                            ✓
                                        </div>
                                        <p className="text-gray-700">Systematic approach to execution</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <div className="bg-white rounded-xl shadow-lg p-6 inline-block max-w-2xl">
                                <p className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                    "Prompting is the interface between your creativity and the machine's potential."
                                </p>
                                <p className="text-lg text-gray-700">
                                    The bottleneck is no longer ideas — it's execution.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Verdict */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Final Verdict
                            </h2>
                            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                        </div>

                        <div className="bg-white/10 rounded-2xl p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-yellow-500 text-blue-900 px-8 py-2 font-bold transform rotate-12 translate-x-8 -translate-y-4">
                                BOTH ARE ESSENTIAL
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-center mb-8">
                                    Thinking still matters. But prompting is how you make your thinking useful.
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                    <div className="bg-white/20 p-6 rounded-xl text-center">
                                        <div className="bg-blue-500 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
                                            <FaBrain className="text-2xl" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-3">Think Clearly</h4>
                                        <p>Develop your strategic vision</p>
                                    </div>

                                    <div className="bg-white/20 p-6 rounded-xl text-center">
                                        <div className="bg-green-500 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
                                            <FaCogs className="text-2xl" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-3">Prompt Precisely</h4>
                                        <p>Master AI communication</p>
                                    </div>

                                    <div className="bg-white/20 p-6 rounded-xl text-center">
                                        <div className="bg-yellow-500 text-blue-900 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
                                            <FaRocket className="text-2xl" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-3">Ship Consistently</h4>
                                        <p>Execute at scale</p>
                                    </div>
                                </div>

                                <div className="mt-12 text-center">
                                    <p className="text-xl md:text-2xl font-bold">
                                        In 2025 and beyond, the most powerful creators will master both
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="bg-white rounded-2xl shadow-xl p-10">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Master the Future of Content Creation
                            </h3>
                            <p className="text-xl text-gray-700 mb-8">
                                Develop both your thinking and prompting skills to stay ahead in the AI era
                            </p>
                            <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform">
                                Start Your Prompting Journey
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ThinkingVsPrompting;