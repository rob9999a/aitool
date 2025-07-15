import React from 'react';
import Navbar from '../../Component/Website/Header/Navbar';
import './Trustai.css'

const AITrustPage = () => {
    return (

        <>
            <Navbar></Navbar>



            <div className="min-h-screen bg-white text-gray-800">
                {/* Hero Section */}
                <div className="div-template bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Do We Trust <span className="text-blue-600">Artificial Intelligence</span><br />
                            More Than Our <span className="text-indigo-600">Own Minds</span>?
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-10">
                            Exploring the balance between human cognition and machine intelligence in decision-making
                        </p>

                        {/* Interactive Stats */}
                        <div className="flex flex-wrap justify-center gap-8 mb-12">
                            <div className="bg-white p-6 rounded-xl shadow-md w-48">
                                <div className="text-5xl font-bold text-blue-600 mb-2">72%</div>
                                <p>Trust AI for complex decisions</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md w-48">
                                <div className="text-5xl font-bold text-indigo-600 mb-2">58%</div>
                                <p>Doubt their own judgment</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md w-48">
                                <div className="text-5xl font-bold text-purple-600 mb-2">81%</div>
                                <p>Believe AI is more objective</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI vs Human Mind Comparison */}
                <div className="max-w-6xl mx-auto py-16 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* AI Section */}
                        <div className="bg-blue-50 rounded-2xl p-8 shadow-lg border border-blue-100">
                            <div className="flex items-center mb-6">
                                <div className="bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center mr-4">
                                    <span className="text-2xl">AI</span>
                                </div>
                                <h2 className="text-3xl font-bold text-blue-800">Why We Trust AI</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Data-Driven Decisions</h3>
                                        <p className="text-gray-700">AI processes massive datasets beyond human capacity, leading to insights we perceive as more objective.</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Perceived Objectivity</h3>
                                        <p className="text-gray-700">We believe AI lacks human biases, though algorithms can inherit creators' prejudices.</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Consistency</h3>
                                        <p className="text-gray-700">AI provides consistent outputs, unlike humans who are affected by emotions and fatigue.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Human Mind Section */}
                        <div className="bg-indigo-50 rounded-2xl p-8 shadow-lg border border-indigo-100">
                            <div className="flex items-center mb-6">
                                <div className="bg-indigo-600 text-white rounded-full w-14 h-14 flex items-center justify-center mr-4">
                                    <span className="text-2xl">HM</span>
                                </div>
                                <h2 className="text-3xl font-bold text-indigo-800">Why We Doubt Ourselves</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="bg-indigo-100 rounded-full p-3 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Emotional Influence</h3>
                                        <p className="text-gray-700">We recognize how emotions can cloud judgment, making us question our decisions.</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="bg-indigo-100 rounded-full p-3 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Information Overload</h3>
                                        <p className="text-gray-700">Modern life overwhelms us with data, making us feel inadequate to process it all.</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="bg-indigo-100 rounded-full p-3 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Cognitive Biases</h3>
                                        <p className="text-gray-700">Awareness of confirmation bias, anchoring, and other mental shortcuts erodes self-trust.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Representation */}
                <div className="bg-gray-50 py-16 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">The Trust Balance</h2>

                        <div className="relative h-64 mb-12">
                            {/* AI Trust Meter */}
                            <div className="absolute left-0 bottom-0 w-1/2 h-56 bg-gradient-to-t from-blue-200 to-blue-500 rounded-t-xl border border-blue-300">
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-center">
                                    <div className="text-xl font-bold text-blue-700">AI Trust</div>
                                    <div className="text-2xl font-bold mt-1">72%</div>
                                </div>
                            </div>

                            {/* Human Trust Meter */}
                            <div className="absolute right-0 bottom-0 w-1/2 h-40 bg-gradient-to-t from-indigo-200 to-indigo-500 rounded-t-xl border border-indigo-300">
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-center">
                                    <div className="text-xl font-bold text-indigo-700">Self Trust</div>
                                    <div className="text-2xl font-bold mt-1">58%</div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-64 w-0.5 bg-gray-300"></div>
                        </div>

                        <div className="text-center max-w-2xl mx-auto">
                            <p className="text-lg mb-6">
                                This visual represents how people tend to trust AI systems (72%) more than their own judgment (58%)
                                in complex decision-making scenarios, according to recent studies.
                            </p>
                            <p className="text-lg">
                                The gap highlights our tendency to overvalue algorithmic objectivity while undervaluing human intuition and contextual understanding.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Key Takeaways */}
                <div className="max-w-6xl mx-auto py-16 px-4">
                    <h2 className="text-3xl font-bold text-center mb-4">Finding the Balance</h2>
                    <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        The most effective approach combines the strengths of both artificial intelligence and human cognition
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-blue-500 text-5xl font-bold mb-4">01</div>
                            <h3 className="text-xl font-semibold mb-3">Complementary Strengths</h3>
                            <p className="text-gray-700">
                                Use AI for data processing and pattern recognition, while reserving human judgment for ethical considerations and contextual understanding.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-blue-500 text-5xl font-bold mb-4">02</div>
                            <h3 className="text-xl font-semibold mb-3">Critical Evaluation</h3>
                            <p className="text-gray-700">
                                Always question AI outputs. Understand the data sources, potential biases in training data, and limitations of the algorithm.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-blue-500 text-5xl font-bold mb-4">03</div>
                            <h3 className="text-xl font-semibold mb-3">Develop Self-Awareness</h3>
                            <p className="text-gray-700">
                                Recognize your cognitive biases without letting them undermine confidence in your expertise and intuition.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Final Thought */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <blockquote className="text-2xl md:text-3xl italic mb-8">
                            "The real question isn't whether machines think but whether humans do."
                        </blockquote>
                        <p className="text-xl font-light">- B.F. Skinner</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AITrustPage;