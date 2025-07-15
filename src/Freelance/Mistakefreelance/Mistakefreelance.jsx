import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../../Component/Website/Header/Navbar';

export default function FreelancerAIMistakeCard() {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    return (

        <>
            <Helmet>
                <title>The AI Mistake That's Costing Freelancers Clients</title>
                <meta
                    name="description"
                    content="Many freelancers are losing clients due to a critical AI mistake. Learn what it is and how to avoid it to stay competitive in the freelance market."
                />
                <meta
                    name="keywords"
                    content="AI mistake freelancers, losing freelance clients, freelancer tips, AI in freelancing, freelance client retention"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://yourwebsite.com/ai-mistake-freelancers" />
                <meta property="og:title" content="The AI Mistake That's Costing Freelancers Clients" />
                <meta
                    property="og:description"
                    content="Many freelancers are losing clients due to a critical AI mistake. Discover how to avoid it and keep your freelance business growing."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yourwebsite.com/ai-mistake-freelancers" />
                <meta property="og:site_name" content="YourWebsiteName" />
            </Helmet>
            <Navbar></Navbar>


            <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black py-16 px-4">
                <div className="max-w-7xl mx-auto rounded-2xl border border-gray-300 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white dark:bg-gray-800">

                    {/* Header with animated gradient */}
                    <div className="bg-gradient-to-r from-red-600 to-orange-500 p-6 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                        <h1 className="text-2xl md:text-3xl font-bold text-white relative z-10">
                            ⚡ The AI Mistake That's Costing Freelancers Clients
                        </h1>
                        <p className="text-orange-100 mt-2 relative z-10">
                            And how to fix it immediately
                        </p>
                    </div>

                    <div className="p-6 md:p-8 space-y-8 text-gray-800 dark:text-gray-100">
                        {/* Intro */}
                        <div className="text-center py-4">
                            <div className="inline-block bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-4 py-1 rounded-full text-sm mb-4">
                                Critical Mistake Alert
                            </div>
                            <p className="text-lg font-medium">
                                Most freelancers treat AI like a <span className="font-bold text-red-600">magic trick</span> instead of a <span className="font-bold text-green-600">toolbox</span>.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* The Mistake Section */}
                            <div
                                className={`border-l-4 ${activeSection === 0 ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-gray-200'} rounded-r-lg p-4 cursor-pointer transition-all`}
                                onClick={() => toggleSection(0)}
                            >
                                <h2 className="flex items-center text-xl font-bold text-red-600">
                                    <span className="mr-2">⚠️</span> The Biggest Mistake
                                    <span className="ml-auto text-sm">{activeSection === 0 ? '▲' : '▼'}</span>
                                </h2>
                                {activeSection === 0 && (
                                    <div className="mt-3 pl-2 space-y-3 animate-fadeIn">
                                        <p>They try AI once, get mediocre results, and give up:</p>
                                        <ul className="list-disc list-inside space-y-1 marker:text-red-500">
                                            <li>Try ChatGPT to write a post</li>
                                            <li>Generate a logo with Midjourney</li>
                                            <li>Test one caption generator</li>
                                        </ul>
                                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg italic">
                                            "Eh. It's okay. Not that special."
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* The Reality Section */}
                            <div
                                className={`border-l-4 ${activeSection === 1 ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/10' : 'border-gray-200'} rounded-r-lg p-4 cursor-pointer transition-all`}
                                onClick={() => toggleSection(1)}
                            >
                                <h2 className="flex items-center text-xl font-bold text-orange-600">
                                    <span className="mr-2">🔍</span> The Reality They Miss
                                    <span className="ml-auto text-sm">{activeSection === 1 ? '▲' : '▼'}</span>
                                </h2>
                                {activeSection === 1 && (
                                    <div className="mt-3 pl-2 space-y-3 animate-fadeIn">
                                        <p>AI isn't a button—it's a <strong>system</strong> that requires:</p>
                                        <ul className="list-disc list-inside space-y-1 marker:text-orange-500">
                                            <li>Proper prompting techniques</li>
                                            <li>Integration with your existing skills</li>
                                            <li>Iterative refinement in your workflow</li>
                                        </ul>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-700 dark:to-gray-800 p-4 rounded-lg">
                                                <h3 className="font-bold text-red-600">🚫 Wrong Approach</h3>
                                                <p>"Write a complete blog post for me"</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-700 dark:to-gray-800 p-4 rounded-lg">
                                                <h3 className="font-bold text-green-600">✅ Right Approach</h3>
                                                <p>"Generate 5 bullet points about X, then expand point 3 with an example"</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* The Smart Way Section */}
                            <div
                                className={`border-l-4 ${activeSection === 2 ? 'border-green-500 bg-green-50 dark:bg-green-900/10' : 'border-gray-200'} rounded-r-lg p-4 cursor-pointer transition-all`}
                                onClick={() => toggleSection(2)}
                            >
                                <h2 className="flex items-center text-xl font-bold text-green-600">
                                    <span className="mr-2">💡</span> The Smart Way to Use AI
                                    <span className="ml-auto text-sm">{activeSection === 2 ? '▲' : '▼'}</span>
                                </h2>
                                {activeSection === 2 && (
                                    <div className="mt-3 pl-2 space-y-3 animate-fadeIn">
                                        <p>Ask these strategic questions:</p>
                                        <ul className="list-disc list-inside space-y-2 marker:text-green-500">
                                            <li>✅ Can this speed up my research phase?</li>
                                            <li>✅ Can it generate better starting points for my work?</li>
                                            <li>✅ Can it automate my repetitive tasks?</li>
                                        </ul>
                                        <div className="mt-4">
                                            <p className="font-medium">Now AI becomes your:</p>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {['Assistant', 'Researcher', 'Editor', 'Manager', 'Repurposer'].map((role, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm"
                                                    >
                                                        {role}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Mindset Shift Section */}
                            <div
                                className={`border-l-4 ${activeSection === 3 ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10' : 'border-gray-200'} rounded-r-lg p-4 cursor-pointer transition-all`}
                                onClick={() => toggleSection(3)}
                            >
                                <h2 className="flex items-center text-xl font-bold text-blue-600">
                                    <span className="mr-2">🧠</span> The Critical Mindset Shift
                                    <span className="ml-auto text-sm">{activeSection === 3 ? '▲' : '▼'}</span>
                                </h2>
                                {activeSection === 3 && (
                                    <div className="mt-3 pl-2 space-y-3 animate-fadeIn">
                                        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-lg py-2">
                                            "I don't use AI to replace myself—I use it to multiply myself."
                                        </blockquote>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                            <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-lg">
                                                <h3 className="font-bold text-red-600 flex items-center">
                                                    <span className="mr-2">👎</span> Before AI
                                                </h3>
                                                <ul className="mt-2 space-y-1">
                                                    <li>5 hours per project</li>
                                                    <li>3 clients max</li>
                                                    <li>$50/hour rate ceiling</li>
                                                </ul>
                                            </div>
                                            <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-lg">
                                                <h3 className="font-bold text-green-600 flex items-center">
                                                    <span className="mr-2">👍</span> With AI System
                                                </h3>
                                                <ul className="mt-2 space-y-1">
                                                    <li>2 hours per project</li>
                                                    <li>8+ clients possible</li>
                                                    <li>$100+/hour value pricing</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Action Plan Section */}
                            <div
                                className={`border-l-4 ${activeSection === 4 ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/10' : 'border-gray-200'} rounded-r-lg p-4 cursor-pointer transition-all`}
                                onClick={() => toggleSection(4)}
                            >
                                <h2 className="flex items-center text-xl font-bold text-purple-600">
                                    <span className="mr-2">🚀</span> Your 3-Step Action Plan
                                    <span className="ml-auto text-sm">{activeSection === 4 ? '▲' : '▼'}</span>
                                </h2>
                                {activeSection === 4 && (
                                    <div className="mt-3 pl-2 space-y-4 animate-fadeIn">
                                        <div className="flex items-start">
                                            <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">1</div>
                                            <div className="ml-3">
                                                <h3 className="font-bold">Identify one repetitive task</h3>
                                                <p className="text-sm">(e.g., email responses, research summaries)</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">2</div>
                                            <div className="ml-3">
                                                <h3 className="font-bold">Automate it with AI tools</h3>
                                                <p className="text-sm">(ChatGPT for content, Zapier for workflows)</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">3</div>
                                            <div className="ml-3">
                                                <h3 className="font-bold">Refine weekly</h3>
                                                <p className="text-sm">(Spend 30 mins every Friday improving your system)</p>
                                            </div>
                                        </div>

                                        <div className="mt-4 p-4 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg">
                                            <p className="font-medium">💡 Pro Tip:</p>
                                            <p>Track your time savings each week. Most freelancers save 10+ hours monthly within 30 days.</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Final Thought */}
                            <div className="text-center py-6 border-t border-gray-200 dark:border-gray-700 mt-4">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    🚀 The Ultimate Truth
                                </h2>
                                <div className="max-w-2xl mx-auto">
                                    <p className="text-lg font-medium mb-4">
                                        Freelancers who just <span className="text-red-600">test AI randomly</span> stay stuck.
                                    </p>
                                    <p className="text-lg font-medium mb-6">
                                        Those who <span className="text-green-600">build systems with AI</span> scale fast.
                                    </p>
                                    <div className="bg-gradient-to-r from-gray-900 to-black dark:from-gray-700 dark:to-gray-800 text-white p-6 rounded-xl">
                                        <p className="text-xl italic">
                                            So... are you <span className="text-yellow-400">playing</span> or <span className="text-green-400">building</span>?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center py-6">
                            <button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
                                Get My AI Freelancer Toolkit
                            </button>
                            <p className="text-gray-600 dark:text-gray-400 mt-4">
                                Join 12,000+ freelancers who added AI to their workflow
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}