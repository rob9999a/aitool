import React, { useState } from 'react';
import Navbar from '../../Component/Website/Header/Navbar';

const Freelanceturnai = () => {
    const [activeTab, setActiveTab] = useState(0);

    const sections = [
        {
            title: "Shift Your Mindset",
            content: "Stop thinking of AI as competition. Think of it as a powerful assistant that multiplies your output and creativity. The most successful freelancers see AI as a collaborator rather than a replacement.",
            icon: "🧠"
        },
        {
            title: "Master the Tools",
            content: "Don't just dabble. Learn to use AI tools like ChatGPT, Notion AI, or Jasper deeply. Customize prompts, integrate workflows, and automate routine tasks to free up your time for high-value work.",
            icon: "🛠️"
        },
        {
            title: "Focus on Human Skills",
            content: "AI can write, analyze data, and generate ideas — but it can't replicate your emotional intelligence, intuition, and personal touch. Use these to build trust and long-term client relationships.",
            icon: "🤝"
        },
        {
            title: "Innovate Your Services",
            content: "Use AI to create new offerings — faster content production, data-driven strategies, or personalized marketing campaigns. Stand out by blending AI's speed with your creativity.",
            icon: "💡"
        },
        {
            title: "Keep Learning & Adapting",
            content: "The AI landscape evolves rapidly. Stay curious, experiment often, and refine your approach based on what works. Set aside time each week to explore new AI capabilities.",
            icon: "📚"
        }
    ];

    return (
        <>
            <Navbar></Navbar>


            <div className="min-h-screen bg-gradient-to-br from-white-50 to-indigo-100 py-16 px-4 sm:px-6 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="div-template text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            How Freelancers Can Turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI from a Threat</span> into Their <span className="underline decoration-yellow-400">Biggest Advantage</span>
                        </h1>

                        <div className="max-w-2xl mx-auto">
                            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                                In today's fast-paced digital world, many freelancers see AI as a looming threat — a "job stealer" that might replace their hard-earned skills. But the truth is the opposite.
                            </p>

                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 shadow-xl border-2 border-white/20 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-white text-center">
                                    AI is the greatest opportunity freelancers have ever had to level up and dominate their markets.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="p-6 md:p-10">
                            <div className="flex flex-wrap gap-4 mb-8">
                                {sections.map((section, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`flex items-center px-4 py-3 rounded-lg transition-all ${activeTab === index
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                                            : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                                            }`}
                                    >
                                        <span className="text-xl mr-2">{section.icon}</span>
                                        <span className="font-medium">{section.title}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 mb-8 transition-all duration-300">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                    <span className="mr-3">{sections[activeTab].icon}</span>
                                    {sections[activeTab].title}
                                </h3>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {sections[activeTab].content}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl border border-blue-200 dark:border-gray-600">
                                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3">AI Threat Mindset</h3>
                                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-red-500 mr-2">✘</span>
                                            Fear of replacement
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-500 mr-2">✘</span>
                                            Avoiding new technologies
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-500 mr-2">✘</span>
                                            Competing on price alone
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-500 mr-2">✘</span>
                                            Stagnant skill development
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl border border-green-200 dark:border-gray-600">
                                    <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-3">AI Advantage Mindset</h3>
                                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2">✔</span>
                                            Embracing AI as a collaborator
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2">✔</span>
                                            Continuous learning and adaptation
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2">✔</span>
                                            Focusing on high-value human skills
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-2">✔</span>
                                            Creating innovative service offerings
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-6 md:px-10 py-8">
                            <div className="max-w-3xl mx-auto text-center">
                                <p className="text-2xl font-bold text-white mb-4">
                                    Remember: The biggest threat isn't AI. It's ignoring it.
                                </p>
                                <p className="text-xl text-blue-100">
                                    By embracing AI strategically, freelancers don't just survive — they thrive, scaling their businesses and delivering higher value than ever before.
                                </p>
                                <button className="mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg">
                                    Start Your AI Advantage Journey
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-block bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500 dark:border-yellow-600 p-4 rounded-lg mb-8">
                            <p className="text-yellow-700 dark:text-yellow-300 text-lg italic">
                                "The freelancers who will thrive in the AI era aren't those who fear technology, but those who harness it to amplify their unique human talents."
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 mt-10">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md w-48 text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">2.5x</div>
                                <p className="text-gray-700 dark:text-gray-300">Potential productivity increase</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md w-48 text-center">
                                <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
                                <p className="text-gray-700 dark:text-gray-300">Time saved on routine tasks</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md w-48 text-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">3x</div>
                                <p className="text-gray-700 dark:text-gray-300">More clients served</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Freelanceturnai;