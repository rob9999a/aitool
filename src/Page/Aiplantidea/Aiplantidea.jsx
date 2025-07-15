import React, { useState } from 'react';
import { Helmet } from "react-helmet";

import Navbar from '../../Component/Website/Header/Navbar';

const AIIdeaInfluence = () => {
    const [revealThought, setRevealThought] = useState(false);
    const [showExample, setShowExample] = useState(false);


    return (

        <>
            <Navbar></Navbar>



            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 p-4">
                <div className="div-template  max-w-6xl mx-auto">
                    {/* Header */}
                    <header className="text-center py-12">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Can AI Plant Ideas in Our Minds?
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Exploring how artificial intelligence might subtly influence our thoughts without our conscious awareness
                        </p>
                    </header>

                    {/* Main Visualization */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-6">
                            <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden border border-gray-200">
                                {/* AI Brain */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="relative">
                                        <div className="w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-80"></div>
                                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                            <div className="text-white text-4xl font-bold">AI</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Thought bubbles */}
                                <div className="absolute top-10 right-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md opacity-90">
                                    <span className="text-xs text-center px-2">Buy this!</span>
                                </div>
                                <div className="absolute bottom-16 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md opacity-90">
                                    <span className="text-xs text-center px-2">Try now</span>
                                </div>
                                <div className="absolute bottom-8 left-8 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md opacity-90">
                                    <span className="text-xs text-center px-2">You need this</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-800">The Subtle Influence of Algorithms</h2>
                            <p className="text-lg mb-4">
                                AI systems are designed to understand and predict human behavior. Through personalized content,
                                recommendation systems, and carefully crafted interfaces, they can subtly guide our thoughts
                                and decisions without our conscious awareness.
                            </p>
                            <button
                                onClick={() => setRevealThought(!revealThought)}
                                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300"
                            >
                                {revealThought ? "Hide Example" : "Show How It Works"}
                            </button>
                        </div>
                    </div>

                    {/* Revealed Thought Section */}
                    {revealThought && (
                        <div className="bg-white rounded-2xl shadow-lg p-6 mb-16 border border-purple-200 transition-all duration-500">
                            <h3 className="text-2xl font-bold mb-4 text-purple-700">How AI Plants Ideas</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                                    <div className="text-4xl text-blue-500 mb-4">1</div>
                                    <h4 className="text-xl font-semibold mb-2">Personalized Content</h4>
                                    <p className="text-gray-700">
                                        AI algorithms show you content tailored to your interests, gradually shaping your preferences
                                        and priorities without you noticing the influence.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                                    <div className="text-4xl text-purple-500 mb-4">2</div>
                                    <h4 className="text-xl font-semibold mb-2">Repetition & Priming</h4>
                                    <p className="text-gray-700">
                                        By repeatedly showing similar messages or products, AI creates familiarity that makes ideas
                                        feel more natural and "your own".
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-xl">
                                    <div className="text-4xl text-pink-500 mb-4">3</div>
                                    <h4 className="text-xl font-semibold mb-2">Social Validation</h4>
                                    <p className="text-gray-700">
                                        Showing how many others have liked or purchased something creates social proof that influences
                                        your decisions subconsciously.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Real-World Example */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white mb-16">
                        <h2 className="text-3xl font-bold mb-6">Real-World Example: Shopping Habits</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="text-lg mb-4">
                                    Imagine you briefly looked at hiking boots online. AI algorithms notice this and begin showing you:
                                </p>

                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <div className="bg-white text-purple-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">✓</div>
                                        <span>Hiking boot ads on every website</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-white text-purple-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">✓</div>
                                        <span>"Top 10 hiking destinations" articles</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-white text-purple-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">✓</div>
                                        <span>Social media posts from hiking enthusiasts</span>
                                    </li>
                                </ul>

                                <p className="text-lg">
                                    Within days, you find yourself planning a hiking trip, believing it was entirely your idea.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-4 shadow-2xl">
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-64 flex flex-col">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="bg-gray-200 rounded-full w-10 h-10"></div>
                                        <div className="text-gray-800 font-bold">Social Media Feed</div>
                                        <div className="bg-gray-200 rounded-full w-10 h-10"></div>
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-lg">
                                            <div className="text-gray-800 text-sm">Sponsored: Top-rated hiking boots on sale!</div>
                                        </div>
                                        <div className="bg-gray-100 p-3 rounded-lg">
                                            <div className="text-gray-800 text-sm">Your friend visited Glacier National Park</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Protection Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-center">How to Protect Your Mind</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="border-l-4 border-purple-500 pl-6">
                                <h3 className="text-xl font-semibold mb-3">Critical Awareness</h3>
                                <p className="text-gray-700 mb-4">
                                    Regularly ask yourself: "Why am I seeing this content?" and "Who benefits from me having this idea?"
                                </p>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <p className="font-medium">Ask yourself:</p>
                                    <p className="italic">"Did I independently come up with this desire, or has it been suggested to me repeatedly?"</p>
                                </div>
                            </div>

                            <div className="border-l-4 border-blue-500 pl-6">
                                <h3 className="text-xl font-semibold mb-3">Algorithm Transparency</h3>
                                <p className="text-gray-700 mb-4">
                                    Adjust privacy settings and clear your history periodically to break out of algorithmic filter bubbles.
                                </p>
                                <div className="flex space-x-4">
                                    <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-sm transition-colors">
                                        Clear History
                                    </button>
                                    <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-sm transition-colors">
                                        Disable Tracking
                                    </button>
                                    <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-sm transition-colors">
                                        Reset Interests
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Demo */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">Try It Yourself</h2>
                        <p className="text-xl mb-6">Can you spot the planted idea?</p>

                        <button
                            onClick={() => setShowExample(true)}
                            className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 mb-6"
                        >
                            Reveal Hidden Influence
                        </button>

                        {showExample && (
                            <div className="bg-white text-gray-800 rounded-xl p-6 max-w-2xl mx-auto animate-fadeIn">
                                <h3 className="text-2xl font-bold mb-4 text-purple-700">Did you notice?</h3>
                                <p className="text-lg mb-4">
                                    Throughout this page, I've used the color purple in gradients and highlights.
                                    Without realizing it, this might have made you more receptive to ideas about
                                    creativity, imagination, and innovation.
                                </p>
                                <p className="text-lg">
                                    This subtle color psychology is just one way ideas can be "planted" through
                                    design choices that AI systems optimize for engagement.
                                </p>
                            </div>
                        )}
                    </div>


                </div>
            </div>
        </>
    );
};

export default AIIdeaInfluence;