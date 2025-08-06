import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import Navbar from '../../Component/Website/Header/Navbar';

const AIJobImpact = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [showQuote, setShowQuote] = useState(false);

    const perspectives = [
        {
            title: "AI as Job Thief",
            description: "The common narrative about automation replacing human workers",
            icon: "🕵️‍♂️",
            points: [
                "Automation displacing workers in manufacturing and services",
                "AI outperforming humans in data analysis and diagnostics",
                "Chatbots replacing customer service representatives",
                "Self-driving technology threatening transportation jobs"
            ],
            color: "from-red-500 to-orange-500"
        },
        {
            title: "AI as Truth Revealer",
            description: "The provocative perspective that AI exposes unnecessary work",
            icon: "🔍",
            points: [
                "Revealing bureaucratic processes that add little real value",
                "Automating repetitive tasks that humans never enjoyed",
                "Exposing 'busy work' as economic filler rather than productivity",
                "Highlighting the difference between necessary labor and economic activity"
            ],
            color: "from-blue-500 to-cyan-500"
        }
    ];

    const futureJobs = [
        { title: "AI Ethicist", description: "Ensuring AI systems align with human values and ethics", growth: "+85%" },
        { title: "Human-AI Mediator", description: "Facilitating collaboration between humans and AI systems", growth: "+70%" },
        { title: "Digital Reality Architect", description: "Designing immersive virtual workspaces and experiences", growth: "+120%" },
        { title: "Personal Data Curator", description: "Managing and optimizing personal digital footprints", growth: "+95%" }
    ];

    return (

        <>
            <Navbar></Navbar>

            <Helmet>
                <title>Is Artificial Intelligence Stealing Jobs—Or Revealing They Were Never Truly Necessary?</title>
                <meta
                    name="description"
                    content="AI might not be stealing jobs but rather exposing that many of them were never essential. Discover how automation reveals deep truths about work."
                />
                <meta
                    name="keywords"
                    content="AI jobs, job automation, unnecessary jobs, AI labor market, AI economy, David Graeber"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Fyrexia AI" />
                <html lang="en" />

                {/* Open Graph */}
                <meta property="og:title" content="Is Artificial Intelligence Stealing Jobs—Or Revealing They Were Never Truly Necessary?" />
                <meta
                    property="og:description"
                    content="Explore how AI automation might not just take jobs but reveal which jobs were unnecessary in the first place."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/ai-stealing-jobs-or-revealing-truth" />
                <meta property="og:image" content="https://fyrexia.co.uk/images/ai-jobs-truth.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Is Artificial Intelligence Stealing Jobs—Or Revealing They Were Never Truly Necessary?" />
                <meta
                    name="twitter:description"
                    content="Discover the impact of AI on the job market and how automation exposes the real value of work."
                />
                <meta name="twitter:image" content="https://fyrexia.co.uk/images/ai-jobs-truth.jpg" />
                <meta name="twitter:site" content="@FyrexiaAI" />
            </Helmet>



            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
                {/* Hero Section */}
                <div className="relative py-16 px-4 md:px-8">
                    <div className="div-template max-w-6xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                AI & The Future of Work
                            </span>
                        </h1>
                        <p className="text-2xl md:text-3xl mb-10 max-w-3xl mx-auto">
                            Is artificial intelligence stealing jobs... or simply revealing they were never truly necessary?
                        </p>

                        <div className="inline-block bg-white p-1 rounded-full shadow-lg mb-12">
                            <div className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-lg">
                                2026: The Work Revolution
                            </div>
                        </div>

                        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl mb-16">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 z-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-3 gap-4">
                                    {[1, 2, 3, 4, 5, 6].map((item) => (
                                        <div key={item} className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-md">
                                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dual Perspective Section */}
                <div className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2 text-center">Two Perspectives on AI's Impact</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        The debate around AI and employment reveals fundamentally different views on work and value
                    </p>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex bg-white rounded-full p-1 shadow-md">
                            {perspectives.map((perspective, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === index
                                        ? `text-white bg-gradient-to-r ${perspective.color} shadow-lg`
                                        : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    {perspective.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active Perspective Content */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
                        <div className="p-8">
                            <div className="flex flex-col md:flex-row items-start">
                                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                                    <div className="text-8xl">{perspectives[activeTab].icon}</div>
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-2xl font-bold mb-4">{perspectives[activeTab].title}</h3>
                                    <p className="text-gray-600 mb-6 text-lg">{perspectives[activeTab].description}</p>

                                    <ul className="space-y-4">
                                        {perspectives[activeTab].points.map((point, index) => (
                                            <li key={index} className="flex items-start">
                                                <div className="bg-gray-100 rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1">
                                                    <div className="bg-gray-400 rounded-full h-2 w-2"></div>
                                                </div>
                                                <span className="text-gray-800">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={`h-2 bg-gradient-to-r ${perspectives[activeTab].color}`}></div>
                    </div>

                    {/* Insight Section */}
                    <div className="text-center mb-16">
                        <button
                            onClick={() => setShowQuote(!showQuote)}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg shadow-purple-500/30"
                        >
                            {showQuote ? "Hide Insight" : "Reveal the Core Insight"}
                        </button>

                        {showQuote && (
                            <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
                                <div className="text-8xl text-gray-200 mb-4">❝</div>
                                <p className="text-xl italic mb-6 text-gray-800">
                                    "AI isn't destroying jobs - it's exposing how much of what we call 'work' was never fundamentally necessary for human flourishing, but merely economic filler in an industrial-age system."
                                </p>
                                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4"></div>
                                <p className="text-gray-600">Dr. Elena Rodriguez, Future of Work Institute</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* The Future of Work */}
                <div className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-black text-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-2 text-center">2026: The Work Revolution</h2>
                        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                            As AI transforms the workplace, we're seeing the emergence of entirely new categories of work
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold mb-4 text-blue-400">The Disappearing Middle</h3>
                                <p className="text-gray-300 mb-6">
                                    Routine cognitive and manual jobs are being automated at unprecedented rates. By 2026, analysts predict:
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium">Data Entry & Processing</span>
                                            <span className="text-red-400">-92%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                                            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium">Basic Customer Service</span>
                                            <span className="text-red-400">-78%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                                            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium">Routine Accounting</span>
                                            <span className="text-red-400">-85%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                                            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold mb-4 text-green-400">The Emerging Frontier</h3>
                                <p className="text-gray-300 mb-6">
                                    As traditional jobs fade, new categories of work focused on human-AI collaboration are emerging:
                                </p>

                                <div className="space-y-6">
                                    {futureJobs.map((job, index) => (
                                        <div key={index} className="flex items-start p-4 bg-gray-700/50 rounded-xl">
                                            <div className="bg-gray-600 rounded-lg p-3 mr-4">
                                                <div className="bg-gray-400 border-2 border-dashed rounded-xl w-12 h-12" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-lg">{job.title}</h4>
                                                <p className="text-gray-400 text-sm mb-2">{job.description}</p>
                                                <span className="text-green-400 font-bold">{job.growth} projected growth</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="inline-block bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-gray-700 rounded-2xl p-8 max-w-3xl">
                                <h3 className="text-2xl font-bold mb-4">The Fundamental Shift</h3>
                                <p className="text-xl mb-6 text-gray-200">
                                    We're transitioning from a labor economy to a creativity economy, where human value comes from innovation, empathy, and meaning-making - capabilities AI cannot replicate.
                                </p>
                                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="py-16 px-4 md:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Preparing for the Work Revolution</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            How to thrive in a world where AI transforms the nature of work
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4 text-blue-500">1</div>
                                <h3 className="text-lg font-bold mb-2">Develop Human-Centric Skills</h3>
                                <p className="text-gray-600">
                                    Focus on creativity, emotional intelligence, and complex problem-solving
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4 text-purple-500">2</div>
                                <h3 className="text-lg font-bold mb-2">Embrace AI Collaboration</h3>
                                <p className="text-gray-600">
                                    Learn to work with AI as a productivity enhancer rather than competitor
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4 text-cyan-500">3</div>
                                <h3 className="text-lg font-bold mb-2">Redefine Value Creation</h3>
                                <p className="text-gray-600">
                                    Focus on meaningful contributions rather than traditional productivity metrics
                                </p>
                            </div>
                        </div>

                        <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg shadow-purple-500/30">
                            Join the Future of Work Conversation
                        </button>
                    </div>
                </div>


            </div>
        </>
    );
};

export default AIJobImpact;