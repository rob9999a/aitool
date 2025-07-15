import React, { useState } from 'react';
import Navbar from '../../Component/Website/Header/Navbar';

const Metaverse = () => {
    const [activeTab, setActiveTab] = useState('science');
    const [isRealityVisible, setIsRealityVisible] = useState(true);
    const [glitchEffect, setGlitchEffect] = useState(false);

    const toggleReality = () => {
        setGlitchEffect(true);
        setTimeout(() => {
            setIsRealityVisible(!isRealityVisible);
            setGlitchEffect(false);
        }, 300);
    };

    return (

        <>
            <Navbar></Navbar>


            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 p-4 sm:p-6 md:p-8">
                <div className="div-template max-w-6xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-12 mt-8">
                        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                            Reality Redefined
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            🌐 This New Metaverse Simulation Is 98% Real — and It's Terrifying
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Step into NeuroSphere, where reality and simulation become indistinguishable
                        </p>
                    </header>

                    {/* Reality Toggle */}
                    <div className="mb-12 flex justify-center">
                        <div className="bg-gray-100 p-1 rounded-full inline-flex">
                            <button
                                onClick={toggleReality}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${isRealityVisible
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                                    : 'bg-transparent text-gray-700'
                                    }`}
                            >
                                Reality
                            </button>
                            <button
                                onClick={toggleReality}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${!isRealityVisible
                                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                                    : 'bg-transparent text-gray-700'
                                    }`}
                            >
                                Simulation
                            </button>
                        </div>
                    </div>

                    {/* Reality/Simulation Visualization */}
                    <div className={`relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl h-[400px] mb-16 transition-all duration-500 ${glitchEffect ? 'animate-pulse' : ''}`}>
                        {/* Reality View */}
                        {isRealityVisible ? (
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 flex flex-col items-center justify-center p-8">
                                <div className="text-center">
                                    <div className="text-7xl mb-6">🌳</div>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-3">Physical Reality</h2>
                                    <p className="text-gray-600 max-w-md">
                                        The world as we know it - tangible, predictable, and grounded in physical laws
                                    </p>
                                </div>
                                <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded-full text-sm">
                                    What you see is real
                                </div>
                            </div>
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 flex flex-col items-center justify-center p-8">
                                <div className="text-center">
                                    <div className="text-7xl mb-6">🌌</div>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-3">NeuroSphere Simulation</h2>
                                    <p className="text-gray-600 max-w-md">
                                        A virtual world indistinguishable from reality - textures, sensations, and emotions replicated perfectly
                                    </p>
                                </div>
                                <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
                                    98% Realism
                                </div>
                                <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded-full text-sm">
                                    Can you tell the difference?
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {[
                            { id: 'science', label: 'The Science', emoji: '🧠' },
                            { id: 'effects', label: 'Why Terrifying?', emoji: '😨' },
                            { id: 'ethics', label: 'Ethical Debate', emoji: '🔄' },
                            { id: 'future', label: 'Future Plans', emoji: '🚀' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-3 rounded-full font-medium transition-all flex items-center ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                    }`}
                            >
                                <span className="mr-2 text-lg">{tab.emoji}</span> {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content Sections */}
                    <div className="mb-16">
                        {/* Science Section */}
                        {activeTab === 'science' && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">🧠 The Science Behind NeuroSphere</h2>
                                    <p className="text-gray-700 mb-6">
                                        Developed by cutting-edge startup SynthReal, NeuroSphere uses revolutionary technology to create a virtual world indistinguishable from physical reality.
                                    </p>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                title: "Neural Interface Headsets",
                                                description: "Direct connection to the brain's sensory cortex",
                                                icon: "🧠"
                                            },
                                            {
                                                title: "Ultra-High Resolution Graphics",
                                                description: "8K per eye with 120Hz refresh rate",
                                                icon: "👁️"
                                            },
                                            {
                                                title: "AI Environment Generation",
                                                description: "Procedurally generated worlds that adapt in real-time",
                                                icon: "🤖"
                                            },
                                            {
                                                title: "Sensory Feedback Loops",
                                                description: "Simulates touch, temperature, and even smell",
                                                icon: "✨"
                                            }
                                        ].map((tech, index) => (
                                            <div key={index} className="flex items-start p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                                                <div className="text-2xl mr-4">{tech.icon}</div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">{tech.title}</h3>
                                                    <p className="text-gray-600 mt-1">{tech.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 w-full">
                                        <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-5xl mb-3">🔬</div>
                                                <p className="text-gray-600">NeuroSphere Technology Visualization</p>
                                            </div>
                                        </div>
                                        <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-700">
                                            "The result? A virtual world that's indistinguishable from physical reality — from the texture of leaves underfoot to the warmth of sunlight on your skin."
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Terrifying Effects Section */}
                        {activeTab === 'effects' && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">😨 Why It's Terrifying</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-gradient-to-br from-red-50 to-white border border-red-200 rounded-2xl p-6">
                                        <h3 className="font-bold text-lg text-gray-800 mb-4">User Experiences</h3>
                                        <ul className="space-y-4">
                                            {[
                                                "Difficulty distinguishing between virtual and real memories",
                                                "Emotional overload from hyper-real social interactions",
                                                "Physical side effects: disorientation and nausea",
                                                "Sensory confusion after long sessions",
                                                "The Uncanny Valley effect at an unprecedented level"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="text-red-500 mr-2">•</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-2xl p-6">
                                        <div className="flex items-start">
                                            <div className="text-4xl mr-4">😰</div>
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-800 mb-2">Beta Tester Quote</h3>
                                                <blockquote className="text-gray-700 italic">
                                                    "I logged out but felt like I was still there. It haunted my dreams and made me question my reality for days."
                                                </blockquote>
                                                <div className="mt-4 flex items-center">
                                                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                                                    <div>
                                                        <p className="text-sm font-medium">Anonymous Tester</p>
                                                        <p className="text-xs text-gray-500">NeuroSphere Beta Program</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                    <h3 className="font-bold text-lg text-gray-800 mb-4">Psychological Impact</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {[
                                            { title: "Reality Confusion", value: "78%", desc: "of users report confusion" },
                                            { title: "Emotional Distress", value: "65%", desc: "after intense sessions" },
                                            { title: "Sleep Disruption", value: "57%", desc: "report affected sleep" }
                                        ].map((stat, index) => (
                                            <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                                                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                                                <div className="font-medium text-gray-700 mb-1">{stat.title}</div>
                                                <div className="text-sm text-gray-500">{stat.desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Ethics Section */}
                        {activeTab === 'ethics' && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">🔄 The Ethical and Psychological Debate</h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-6 mb-6">
                                            <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                                                <span className="mr-2">⚠️</span> Psychologist Warnings
                                            </h3>
                                            <ul className="space-y-3 text-gray-700">
                                                {[
                                                    "High risk of addiction to virtual perfection",
                                                    "Identity dissociation and personality fragmentation",
                                                    "Mental health crises from hyperreal immersion",
                                                    "Potential for trauma when virtual experiences feel real",
                                                    "Development of new digital-induced phobias"
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-blue-500 mr-2">•</span> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-2xl p-6">
                                            <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                                                <span className="mr-2">🤔</span> Philosophical Questions
                                            </h3>
                                            <ul className="space-y-3 text-gray-700">
                                                {[
                                                    "What defines 'reality' when simulations feel identical?",
                                                    "Can virtual experiences have the same meaning as real ones?",
                                                    "Do we have a right to escape to perfect virtual worlds?",
                                                    "What responsibilities do creators have for psychological impacts?",
                                                    "How do we preserve our humanity in digital realms?"
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-purple-500 mr-2">•</span> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="bg-gradient-to-br from-red-50 to-white border border-red-200 rounded-2xl p-6 h-full">
                                            <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                                                <span className="mr-2">⚖️</span> Ethicist Concerns
                                            </h3>
                                            <div className="space-y-4">
                                                {[
                                                    {
                                                        title: "Emotional Manipulation",
                                                        desc: "Creating worlds that can deeply manipulate feelings and behaviors",
                                                        icon: "🎭"
                                                    },
                                                    {
                                                        title: "Consent in VR",
                                                        desc: "Blurring lines between simulated and actual consent in social interactions",
                                                        icon: "🤝"
                                                    },
                                                    {
                                                        title: "Digital Exploitation",
                                                        desc: "Potential for surveillance and data harvesting at unprecedented levels",
                                                        icon: "👁️"
                                                    },
                                                    {
                                                        title: "Reality Ownership",
                                                        desc: "Who controls the definition of reality in these spaces?",
                                                        icon: "🔐"
                                                    }
                                                ].map((item, index) => (
                                                    <div key={index} className="flex items-start p-3 bg-white rounded-lg border border-gray-200">
                                                        <div className="text-2xl mr-4">{item.icon}</div>
                                                        <div>
                                                            <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Future Plans Section */}
                        {activeTab === 'future' && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">🚀 What's Next for NeuroSphere?</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-2xl p-6">
                                        <h3 className="font-bold text-lg text-gray-800 mb-4">Expansion Plans</h3>

                                        <div className="space-y-6">
                                            {[
                                                {
                                                    title: "Virtual Workplaces",
                                                    description: "Near-real collaboration with global teams",
                                                    icon: "💼"
                                                },
                                                {
                                                    title: "Educational Simulations",
                                                    description: "Physically 'experience' historical events or scientific concepts",
                                                    icon: "🎓"
                                                },
                                                {
                                                    title: "Therapy Environments",
                                                    description: "Treatment for trauma and PTSD in controlled settings",
                                                    icon: "❤️"
                                                },
                                                {
                                                    title: "Social Platforms",
                                                    description: "Relationships that feel more 'real' than physical ones",
                                                    icon: "👥"
                                                }
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-start">
                                                    <div className="text-2xl mr-4">{item.icon}</div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                                        <p className="text-gray-600">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-6">
                                        <h3 className="font-bold text-lg text-gray-800 mb-4">Technology Roadmap</h3>

                                        <div className="relative">
                                            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                                            <div className="space-y-8 pl-10">
                                                {[
                                                    {
                                                        time: "2024 Q3",
                                                        milestone: "Full-body haptic feedback integration",
                                                        status: "In development"
                                                    },
                                                    {
                                                        time: "2025 Q1",
                                                        milestone: "Taste simulation technology",
                                                        status: "Research phase"
                                                    },
                                                    {
                                                        time: "2025 Q4",
                                                        milestone: "Neural link for direct dream recording",
                                                        status: "Concept"
                                                    },
                                                    {
                                                        time: "2026",
                                                        milestone: "Persistent world with 1M concurrent users",
                                                        status: "Planned"
                                                    }
                                                ].map((item, index) => (
                                                    <div key={index} className="relative">
                                                        <div className="absolute -left-10 top-2 w-8 h-8 rounded-full bg-blue-100 border-4 border-white flex items-center justify-center text-blue-600">
                                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                        </div>
                                                        <div>
                                                            <div className="text-xs text-blue-600 font-medium">{item.time}</div>
                                                            <div className="font-semibold text-gray-800">{item.milestone}</div>
                                                            <div className="text-sm text-gray-500">{item.status}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Final Thought */}
                    <div className="text-center py-12 border-t border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            ⚠️ Final Thought: The Future of Reality
                        </h2>

                        <div className="max-w-2xl mx-auto">
                            <p className="text-gray-700 text-lg mb-6">
                                NeuroSphere is a glimpse into a future where digital and physical realities merge. It promises unprecedented experiences — but also raises profound questions:
                            </p>

                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-gray-200 mb-8">
                                <p className="text-xl font-bold text-gray-800 italic">
                                    "If you can't tell what's real, what does reality even mean?"
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg text-gray-800 mb-3">The Promise</h3>
                                    <p className="text-gray-600">
                                        Limitless creativity, new forms of connection, and solutions to physical world limitations
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg text-gray-800 mb-3">The Peril</h3>
                                    <p className="text-gray-600">
                                        Loss of reality grounding, psychological fragmentation, and new forms of digital dependency
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Glitch Warning */}
                    <div className="fixed bottom-4 right-4 bg-white border border-red-300 rounded-xl p-4 shadow-lg max-w-xs">
                        <div className="flex items-start">
                            <div className="text-red-500 mr-2">⚠️</div>
                            <div>
                                <p className="font-medium text-gray-800">Reality Check</p>
                                <p className="text-gray-600 text-sm">
                                    Remember to take breaks from virtual environments to maintain your connection to physical reality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Metaverse;