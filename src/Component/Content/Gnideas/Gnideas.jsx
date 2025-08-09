import React from 'react';
import Navbar from '../../Website/Header/Navbar';
import { Helmet } from "react-helmet";

const Gnideas = () => {
    return (

        <>

            <Helmet>
                <title>The Power of Human + AI Collaboration | Fyrexia AI Tools</title>
                <meta
                    name="description"
                    content="Explore the synergy between human creativity and AI technology to craft compelling narratives and innovative solutions."
                />
                <meta
                    name="keywords"
                    content="Human AI Collaboration, AI Creativity, Narrative Crafting, AI Tools, Fyrexia"
                />
                <meta property="og:title" content="The Power of Human + AI Collaboration" />
                <meta
                    property="og:description"
                    content="Where technology meets creativity to craft compelling narratives."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fyrexia.co.uk/ai-gn-ideas" />
                <link rel="canonical" href="https://fyrexia.co.uk/ai-gn-ideas" />
            </Helmet>


            <Navbar></Navbar>

            <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header Section */}
                    <header className="text-center mb-16">
                        <h1 className="div-template text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            How To Combine <span className="text-blue-600">Human</span> Storytelling with <span className="text-pink-600">AI</span>-Generated Ideas
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            The Power of Human + AI Collaboration: Where technology meets creativity to craft compelling narratives
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="relative w-64 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full">
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-4 border-purple-500">
                                    <span className="text-purple-500 font-bold">+</span>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Collaboration Visual */}
                    <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-8 mb-16 shadow-lg border border-gray-200">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            {/* Human Strengths */}
                            <div className="flex-1 text-center bg-white p-6 rounded-xl shadow-md border border-blue-100 transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">🧠</span>
                                </div>
                                <h3 className="text-xl font-bold text-blue-700 mb-3">Human Strengths</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span> Emotional Connection
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span> Personal Experience
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span> Authentic Voice
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span> Meaning & Context
                                    </li>
                                </ul>
                            </div>

                            {/* Synergy */}
                            <div className="hidden md:flex flex-col items-center justify-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                    +
                                </div>
                                <div className="mt-4 text-center text-gray-600 italic">
                                    Collaboration<br />Synergy
                                </div>
                            </div>

                            {/* AI Strengths */}
                            <div className="flex-1 text-center bg-white p-6 rounded-xl shadow-md border border-pink-100 transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">🤖</span>
                                </div>
                                <h3 className="text-xl font-bold text-pink-700 mb-3">AI Strengths</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span> Instant Ideation
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span> Data Processing
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span> Pattern Recognition
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span> Unlimited Variations
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Process Steps */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The Collaborative Process</h2>

                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                    <span className="text-2xl font-bold text-blue-700">1</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Generate Raw Ideas with AI</h3>
                                    <p className="text-gray-700">
                                        Use AI tools to brainstorm topics, outlines, and hooks quickly. AI excels at producing a large volume of ideas at lightning speed, breaking through creative blocks.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                    <span className="text-2xl font-bold text-green-700">2</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Filter & Select What Resonates</h3>
                                    <p className="text-gray-700">
                                        Critically review AI-generated ideas for alignment with your values and audience. Not every AI idea fits - keep only what genuinely inspires you.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-500">
                                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                                    <span className="text-2xl font-bold text-yellow-700">3</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Add Your Voice & Emotions</h3>
                                    <p className="text-gray-700">
                                        Inject personal stories, tone, and sensory details. This is where you transform AI-generated clay into human art by adding authenticity and emotional depth.
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                                    <span className="text-2xl font-bold text-purple-700">4</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Craft Narrative Arc</h3>
                                    <p className="text-gray-700">
                                        Build story structure with conflict, transformation, and resolution. Use AI outlines as skeletons, then add the human flesh that makes stories compelling.
                                    </p>
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-pink-500">
                                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center shrink-0">
                                    <span className="text-2xl font-bold text-pink-700">5</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Edit & Refine</h3>
                                    <p className="text-gray-700">
                                        Polish the combined content for flow and engagement. Ensure clarity, remove jargon, and align with your brand voice to create a seamless narrative.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Thought */}
                    <div className="bg-gradient-to-r from-blue-500 to-pink-600 rounded-2xl p-8 text-center text-white shadow-xl">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-2xl font-bold mb-4">The Perfect Collaboration</h2>
                            <blockquote className="text-xl italic mb-6">
                                "AI generates the clay, human hands sculpt the masterpiece. Together, they create stories that move hearts and minds."
                            </blockquote>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <div className="bg-black bg-opacity-20 rounded-lg py-3 px-6">
                                    <span className="font-bold">AI Role:</span> Heavy brainstorming & data processing
                                </div>
                                <div className="bg-black bg-opacity-20 rounded-lg py-3 px-6">
                                    <span className="font-bold">Human Role:</span> Narrative crafting & meaning-making
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gnideas;