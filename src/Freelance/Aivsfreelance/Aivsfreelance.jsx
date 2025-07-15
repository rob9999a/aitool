import React, { useState } from 'react';
import Navbar from '../../Component/Website/Header/Navbar';

const AIVsFreelancers = () => {
    const [activeScene, setActiveScene] = useState(1);

    const scenes = [
        {
            id: 1,
            title: "The Fear Every Freelancer Feels",
            content: "You're scrolling LinkedIn seeing posts about AI replacing freelancers... and the fear kicks in: 'Am I being replaced?'",
            bg: "bg-red-50",
            border: "border-red-200",
            emoji: "😰"
        },
        {
            id: 2,
            title: "The Truth They Don't Tell You",
            content: "Yes, AI is replacing freelancers who deliver basic, repetitive work without adding value. But those who adapt? They're landing more clients than ever.",
            bg: "bg-yellow-50",
            border: "border-yellow-200",
            emoji: "💡"
        },
        {
            id: 3,
            title: "Meet the Smart Freelancer",
            content: "Freelancers using AI tools to generate ideas faster, focus on strategy, and deliver better results. Clients are amazed at the speed and quality.",
            bg: "bg-green-50",
            border: "border-green-200",
            emoji: "🚀"
        },
        {
            id: 4,
            title: "What Clients Really Want in 2025",
            content: "Speed, consistency, and scalability. Clients want a freelancer who knows how to use AI to deliver high-quality work faster.",
            bg: "bg-blue-50",
            border: "border-blue-200",
            emoji: "🎯"
        },
        {
            id: 5,
            title: "3 Ways AI Helps You Get More Clients",
            content: "1. Faster turnaround = More projects\n2. Better proposals = More conversions\n3. Stronger portfolio = More trust",
            bg: "bg-purple-50",
            border: "border-purple-200",
            emoji: "📈"
        },
        {
            id: 6,
            title: "What AI Can't Replace (Ever)",
            content: "Your creativity, human intuition, client communication, problem-solving under pressure, strategy, and insight. AI can produce, but it can't connect.",
            bg: "bg-indigo-50",
            border: "border-indigo-200",
            emoji: "❤️"
        }
    ];

    const currentScene = scenes.find(scene => scene.id === activeScene);

    return (

        <>

            <Navbar>
            </Navbar>


            <div className="min-h-screen bg-white font-sans">
                {/* Header */}
                <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 px-4">
                    <div className="div-template  max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="md:w-2/3">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                    Can AI Help Me Land More Freelance Clients<br />
                                    <span className="text-blue-300">Or Is It Replacing Me?</span>
                                </h1>
                                <p className="text-xl opacity-90 max-w-3xl">
                                    The honest truth every freelancer needs to hear in 2025
                                </p>
                            </div>
                            <div className="md:w-1/3 flex justify-center">
                                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
                                    <div className="text-6xl">🤖</div>
                                    <div className="absolute bottom-0 right-0 bg-white text-indigo-900 px-4 py-2 rounded-full font-bold">
                                        vs
                                    </div>
                                    <div className="absolute top-0 left-0 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold">
                                        👤
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Scene Navigation */}
                        <div className="flex flex-wrap gap-4 mb-12 justify-center">
                            {scenes.map(scene => (
                                <button
                                    key={scene.id}
                                    onClick={() => setActiveScene(scene.id)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all ${activeScene === scene.id
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                        }`}
                                >
                                    Scene {scene.id}
                                </button>
                            ))}
                        </div>

                        {/* Current Scene */}
                        <div className={`${currentScene.bg} ${currentScene.border} border-l-8 rounded-2xl p-8 mb-16 shadow-lg`}>
                            <div className="flex items-start mb-6">
                                <div className="text-5xl mr-4">{currentScene.emoji}</div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{currentScene.title}</h2>
                                    <div className="h-1 w-20 bg-blue-500 mb-4"></div>
                                    <p className="text-lg whitespace-pre-line">{currentScene.content}</p>
                                </div>
                            </div>

                            {/* Scene-specific content */}
                            {activeScene === 1 && (
                                <div className="bg-white p-6 rounded-xl shadow mt-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                        <div>
                                            <div className="font-bold">John Doe</div>
                                            <div className="text-gray-500">Just now · 🌍</div>
                                        </div>
                                    </div>
                                    <p className="mb-4">
                                        "This guy used ChatGPT to build an entire brand in 3 days... without hiring a freelancer."
                                    </p>
                                    <div className="flex gap-4 text-gray-500">
                                        <span>👍 245</span>
                                        <span>💬 89</span>
                                        <span>🔄 42</span>
                                    </div>
                                </div>
                            )}

                            {activeScene === 3 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                    <div className="bg-white p-6 rounded-xl shadow">
                                        <div className="flex items-center mb-4">
                                            <div className="text-3xl mr-3">✍️</div>
                                            <h3 className="text-xl font-bold">The AI-Powered Writer</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-center">
                                                <span className="text-green-500 mr-2">✓</span> Generates 10 headline variations in seconds
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-green-500 mr-2">✓</span> Speeds up first drafts by 70%
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-green-500 mr-2">✓</span> Focuses on strategy and brand storytelling
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow">
                                        <div className="flex items-center mb-4">
                                            <div className="text-3xl mr-3">🎨</div>
                                            <h3 className="text-xl font-bold">The AI-Powered Designer</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-center">
                                                <span className="text-green-500 mr-2">✓</span> Generates 20 concept directions in 10 minutes
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-green-500 mr-2">✓</span> Shows visual variety clients never expected
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-green-500 mr-2">✓</span> Spends more time refining - not brainstorming
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeScene === 5 && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                    <div className="bg-white p-6 rounded-xl shadow text-center">
                                        <div className="text-5xl mb-4">⏱️</div>
                                        <h3 className="text-xl font-bold mb-2">Faster Turnaround</h3>
                                        <p>AI lets you work faster, freeing up time for more clients without burnout</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow text-center">
                                        <div className="text-5xl mb-4">📝</div>
                                        <h3 className="text-xl font-bold mb-2">Better Proposals</h3>
                                        <p>Use AI to analyze job posts, write targeted responses, and pitch smarter</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow text-center">
                                        <div className="text-5xl mb-4">📚</div>
                                        <h3 className="text-xl font-bold mb-2">Stronger Portfolio</h3>
                                        <p>Create quick demos, case studies, or mockups using AI to showcase skills</p>
                                    </div>
                                </div>
                            )}

                            {activeScene === 6 && (
                                <div className="mt-8">
                                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8 text-center">
                                        <h3 className="text-2xl font-bold mb-4">The Unreplaceable Human Touch</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                                            <div className="bg-white/20 p-4 rounded-lg">Creativity</div>
                                            <div className="bg-white/20 p-4 rounded-lg">Intuition</div>
                                            <div className="bg-white/20 p-4 rounded-lg">Communication</div>
                                            <div className="bg-white/20 p-4 rounded-lg">Problem-Solving</div>
                                            <div className="bg-white/20 p-4 rounded-lg">Strategy</div>
                                            <div className="bg-white/20 p-4 rounded-lg">Empathy</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Final Thought */}
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-l-8 border-yellow-400 rounded-2xl p-8 shadow-lg">
                            <div className="text-center max-w-3xl mx-auto">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">Final Thought: Use the Fear as Fuel</h2>
                                <div className="text-4xl mb-6">🔥</div>
                                <blockquote className="text-xl italic mb-6">
                                    "You're not being replaced — unless you sit still and pretend nothing's changed. But if you evolve? If you learn the tools? If you use AI to amplify your creativity, not replace it? You'll be the freelancer companies compete for."
                                </blockquote>
                                <div className="flex justify-center gap-6 mt-8">
                                    <div className="bg-white p-4 rounded-lg shadow text-center">
                                        <div className="text-2xl mb-2">👎</div>
                                        <div className="font-bold">The Resistant Freelancer</div>
                                        <p className="text-sm mt-2">Scrolls in fear<br />Loses clients<br />Struggles to compete</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow text-center">
                                        <div className="text-2xl mb-2">👍</div>
                                        <div className="font-bold">The AI-Enhanced Freelancer</div>
                                        <p className="text-sm mt-2">Books more clients<br />Works efficiently<br />Charges premium rates</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* CTA Section */}
                <section className="py-16 bg-gray-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Freelance Career?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Join thousands of freelancers who are using AI to land more clients, work more efficiently, and earn more money.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg">
                                Get the AI Toolkit
                            </button>
                            <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all">
                                Watch Free Webinar
                            </button>
                        </div>
                        <div className="mt-12 bg-gray-800 p-6 rounded-xl max-w-3xl mx-auto">
                            <div className="flex flex-wrap items-center justify-center gap-8">
                                <div className="flex items-center">
                                    <div className="text-4xl mr-4">📈</div>
                                    <div>
                                        <div className="text-2xl font-bold">3x</div>
                                        <div>More clients</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-4xl mr-4">⏱️</div>
                                    <div>
                                        <div className="text-2xl font-bold">70%</div>
                                        <div>Time saved</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-4xl mr-4">💰</div>
                                    <div>
                                        <div className="text-2xl font-bold">2.5x</div>
                                        <div>Higher rates</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>

    );
};

export default AIVsFreelancers;