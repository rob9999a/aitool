import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../../Website/Header/Navbar';

const DeepMind = () => {
    const [activeSection, setActiveSection] = useState('intro');

    return (
        <>
            <Helmet>
                <title>DeepMind's Quest: Unlocking the Secrets of General AI</title>
                <meta name="description" content="Explore DeepMind's groundbreaking journey to develop General Artificial Intelligence (AGI) and the future of AI technology." />
                <meta name="keywords" content="DeepMind, General AI, Artificial Intelligence, AGI, Machine Learning, AI Research, AI Future" />
                <meta name="author" content="Your Name or Company" />
                <meta property="og:title" content="DeepMind's Quest: Unlocking the Secrets of General AI" />
                <meta property="og:description" content="Explore DeepMind's groundbreaking journey to develop General Artificial Intelligence (AGI) and the future of AI technology." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="URL_to_a_relevant_image.jpg" />
                <meta property="og:url" content="https://yourwebsite.com/deepmind-quest" />
                <link rel="canonical" href="https://yourwebsite.com/deepmind-quest" />
            </Helmet>
            <Navbar></Navbar>



            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">

                {/* Hero Section */}
                <div className="relative py-16 px-4">
                    <div className="div-template max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            DeepMind's Quest: Unlocking the Secrets of General AI
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Since 2010, DeepMind has been pursuing the elusive goal of Artificial General Intelligence
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="sticky top-0 bg-white border-b border-blue-200 z-10">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex overflow-x-auto py-3 gap-2">
                            <button
                                onClick={() => setActiveSection('intro')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'intro'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                    }`}
                            >
                                Introduction
                            </button>
                            <button
                                onClick={() => setActiveSection('agi')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'agi'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                    }`}
                            >
                                What is AGI?
                            </button>
                            <button
                                onClick={() => setActiveSection('vision')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'vision'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                    }`}
                            >
                                Vision & Strategy
                            </button>
                            <button
                                onClick={() => setActiveSection('achievements')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'achievements'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                    }`}
                            >
                                Achievements
                            </button>
                            <button
                                onClick={() => setActiveSection('research')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'research'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                    }`}
                            >
                                Research
                            </button>
                            <button
                                onClick={() => setActiveSection('challenges')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'challenges'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                    }`}
                            >
                                Challenges
                            </button>
                            <button
                                onClick={() => setActiveSection('impact')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'impact'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                    }`}
                            >
                                Impact
                            </button>
                            <button
                                onClick={() => setActiveSection('conclusion')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'conclusion'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                    }`}
                            >
                                Conclusion
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="max-w-4xl mx-auto px-4 py-12">
                    {/* Introduction */}
                    {activeSection === 'intro' && (
                        <section className="mb-16">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-2/3">
                                    <p className="text-xl leading-relaxed mb-6 text-gray-700">
                                        Since its founding in 2010 and acquisition by Google in 2014, DeepMind has been at the forefront of artificial intelligence research, relentlessly pursuing the elusive goal of Artificial General Intelligence (AGI)—AI that can understand, learn, and apply knowledge flexibly across a wide range of tasks, matching or surpassing human cognitive abilities.
                                    </p>

                                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-6">
                                        <p className="text-lg">
                                            This article delves into DeepMind's approach, achievements, and challenges on the road to AGI.
                                        </p>
                                    </div>
                                </div>

                                <div className="md:w-1/3">
                                    <div className="bg-gradient-to-br from-blue-100 to-white border border-blue-200 rounded-xl p-6">
                                        <div className="aspect-w-1 aspect-h-1 bg-blue-200 rounded-xl w-full h-64 mx-auto flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-4xl font-bold mb-2">🧠</div>
                                                <p className="text-blue-800 font-semibold">The AGI Quest</p>
                                                <p className="text-sm text-blue-600">DeepMind's Journey</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* What is AGI? */}
                    {activeSection === 'agi' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                What is General AI?
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <p className="text-gray-700 mb-6">
                                        Unlike narrow AI, which excels at specific tasks (like image recognition or language translation), AGI refers to AI systems with broad cognitive abilities.
                                    </p>

                                    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 rounded-xl">
                                        <h3 className="text-xl font-bold mb-4">Achieving AGI is widely considered the "holy grail" of AI research.</h3>
                                    </div>
                                </div>

                                <div>
                                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">AGI Capabilities</h3>
                                        <ul className="space-y-4">
                                            <li className="flex items-start">
                                                <div className="bg-blue-600 rounded-full p-1 mr-4 mt-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">Abstract Reasoning</h4>
                                                    <p className="text-gray-700">Understanding complex concepts and principles</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="bg-blue-600 rounded-full p-1 mr-4 mt-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">Knowledge Transfer</h4>
                                                    <p className="text-gray-700">Applying learning across different domains</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="bg-blue-600 rounded-full p-1 mr-4 mt-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">Creative Problem Solving</h4>
                                                    <p className="text-gray-700">Innovating solutions in novel situations</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="bg-blue-600 rounded-full p-1 mr-4 mt-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">Common Sense Understanding</h4>
                                                    <p className="text-gray-700">Grasping intuitive knowledge about the world</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Vision & Strategy */}
                    {activeSection === 'vision' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                DeepMind's Vision and Strategy
                            </h2>

                            <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-xl p-8 mb-8">
                                <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                                    Mission: "Solve intelligence" — creating AI that can learn autonomously and generalize knowledge
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="text-4xl text-blue-600 mb-4">🧠</div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Deep Reinforcement Learning</h4>
                                        <p className="text-gray-700">
                                            Training AI agents to learn from interactions with complex environments
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="text-4xl text-blue-600 mb-4">🔬</div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Neuroscience Inspiration</h4>
                                        <p className="text-gray-700">
                                            Leveraging insights from human and animal brains to design better algorithms
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="text-4xl text-blue-600 mb-4">⚙️</div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">Scaling & Architecture</h4>
                                        <p className="text-gray-700">
                                            Developing large neural networks and new model architectures
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Achievements */}
                    {activeSection === 'achievements' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                Landmark Achievements
                            </h2>

                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center">
                                    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 rounded-xl h-full flex flex-col justify-center">
                                        <div className="text-3xl font-bold mb-2">2016</div>
                                        <h3 className="text-xl font-bold">AlphaGo</h3>
                                        <p className="text-blue-200">Beat world champion at Go</p>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-xl">
                                        <p className="text-gray-700">
                                            Used deep learning and tree search to master the complex game of Go, marking a leap in strategic reasoning previously thought impossible for machines.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center">
                                    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 rounded-xl h-full flex flex-col justify-center">
                                        <div className="text-3xl font-bold mb-2">2017</div>
                                        <h3 className="text-xl font-bold">AlphaZero</h3>
                                        <p className="text-blue-200">Mastered multiple games</p>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-xl">
                                        <p className="text-gray-700">
                                            A more generalized system that mastered Go, chess, and shogi without human data, showing that AI can learn purely through self-play.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center">
                                    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 rounded-xl h-full flex flex-col justify-center">
                                        <div className="text-3xl font-bold mb-2">2020</div>
                                        <h3 className="text-xl font-bold">AlphaFold</h3>
                                        <p className="text-blue-200">Protein folding breakthrough</p>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-xl">
                                        <p className="text-gray-700">
                                            Revolutionized biology by accurately predicting protein folding, solving a foundational problem in science that had puzzled researchers for decades.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center">
                                    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 rounded-xl h-full flex flex-col justify-center">
                                        <div className="text-3xl font-bold mb-2">2019</div>
                                        <h3 className="text-xl font-bold">MuZero</h3>
                                        <p className="text-blue-200">Model-based learning</p>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-xl">
                                        <p className="text-gray-700">
                                            Learned to master games without knowing the rules upfront, demonstrating powerful model-based learning capabilities.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-blue-100 p-6 rounded-xl border border-blue-300">
                                <p className="text-center text-blue-800 font-semibold">
                                    These breakthroughs demonstrate AI systems solving problems traditionally thought to require human intuition and understanding.
                                </p>
                            </div>
                        </section>
                    )}

                    {/* Research Directions */}
                    {activeSection === 'research' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                Key Research Directions
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm">
                                    <div className="text-4xl text-blue-600 mb-4">👁️👂</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Modal Learning</h3>
                                    <p className="text-gray-700">
                                        Developing AI that integrates vision, language, and audio to form richer, more general representations of the world.
                                    </p>
                                </div>

                                <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm">
                                    <div className="text-4xl text-blue-600 mb-4">🧠💭</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Memory & Reasoning</h3>
                                    <p className="text-gray-700">
                                        Building architectures capable of long-term memory and symbolic reasoning, essential for human-like understanding.
                                    </p>
                                </div>

                                <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm">
                                    <div className="text-4xl text-blue-600 mb-4">🛡️</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Safety & Ethics</h3>
                                    <p className="text-gray-700">
                                        Incorporating frameworks to ensure AI's actions align with human values, anticipating potential risks.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-xl">
                                <p className="text-center text-xl">
                                    DeepMind's research combines cutting-edge AI techniques with insights from cognitive science to build more capable and general systems.
                                </p>
                            </div>
                        </section>
                    )}

                    {/* Challenges */}
                    {activeSection === 'challenges' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                Challenges Ahead
                            </h2>

                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/2">
                                    <p className="text-gray-700 mb-6">
                                        Despite impressive progress, AGI remains distant due to significant hurdles:
                                    </p>

                                    <div className="space-y-6">
                                        <div className="bg-blue-50 p-6 rounded-xl">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Computational Complexity</h3>
                                            <p className="text-gray-700">
                                                Scaling models to human-like cognition requires enormous computational resources beyond current capabilities.
                                            </p>
                                        </div>

                                        <div className="bg-blue-50 p-6 rounded-xl">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Common Sense Understanding</h3>
                                            <p className="text-gray-700">
                                                AI still struggles with everyday reasoning that humans take for granted, such as intuitive physics and social norms.
                                            </p>
                                        </div>

                                        <div className="bg-blue-50 p-6 rounded-xl">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Generalization</h3>
                                            <p className="text-gray-700">
                                                Transferring learning between vastly different tasks remains a fundamental challenge for current AI systems.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:w-1/2">
                                    <div className="bg-gradient-to-br from-blue-100 to-white border border-blue-200 rounded-xl p-6 h-full">
                                        <div className="aspect-w-16 aspect-h-9 bg-blue-200 rounded-xl w-full h-64 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-4xl mb-2">🏔️</div>
                                                <p className="font-bold text-blue-800">The AGI Mountain</p>
                                                <p className="text-sm text-blue-600">Challenges to overcome</p>
                                                <div className="mt-4 bg-blue-600 text-white p-4 rounded-lg">
                                                    <p>Current AI: Narrow peaks of expertise</p>
                                                    <p className="mt-2">AGI: Broad plateau of general intelligence</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Impact */}
                    {activeSection === 'impact' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                DeepMind and Google: Synergy and Impact
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <p className="text-gray-700 mb-6">
                                        Under Alphabet, DeepMind combines cutting-edge research with practical applications:
                                    </p>

                                    <div className="bg-blue-50 p-6 rounded-xl">
                                        <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                            <li>Contributions to Google products like Search, Assistant, and data centers</li>
                                            <li>Collaborations with healthcare for diagnostics and patient care AI</li>
                                            <li>Energy efficiency improvements in data centers</li>
                                            <li>Advancements in recommendation systems</li>
                                            <li>Language model innovations</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-xl h-full">
                                        <h3 className="text-2xl font-bold mb-6 text-center">The AGI Ecosystem</h3>
                                        <p className="text-center mb-6">
                                            DeepMind is part of a worldwide AI ecosystem, collaborating and competing with other giants like OpenAI, Anthropic, and Tesla.
                                        </p>

                                        <div className="space-y-4">
                                            <p className="text-center font-semibold">
                                                Achieving AGI will likely require:
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex justify-center items-center">
                                                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                                                    Cross-disciplinary research
                                                </li>
                                                <li className="flex justify-center items-center">
                                                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                                                    International cooperation on ethics and governance
                                                </li>
                                                <li className="flex justify-center items-center">
                                                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                                                    Continuous dialogue between technologists, policymakers, and society
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Conclusion */}
                    {activeSection === 'conclusion' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                Conclusion: DeepMind's Ongoing Journey
                            </h2>

                            <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-xl p-8 mb-8">
                                <p className="text-xl text-gray-700 mb-6">
                                    DeepMind's quest to unlock general AI is as much about understanding intelligence itself as building machines. Its successes mark milestones, but the full realization of AGI remains a horizon.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Progress</h3>
                                        <p className="text-gray-700">
                                            With each breakthrough—from mastering games to decoding biology—DeepMind is inching closer to a future where AI can think broadly and learn flexibly.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Potential Impact</h3>
                                        <p className="text-gray-700">
                                            AGI could fundamentally transform humanity's relationship with technology, science, and knowledge itself.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center py-8">
                                <p className="text-2xl font-bold text-gray-900">
                                    End.
                                </p>
                                <p className="text-xl text-gray-700 mt-4">
                                    General intelligence: the frontier DeepMind is determined to cross.
                                </p>
                            </div>
                        </section>
                    )}
                </main>


            </div>
        </>
    );
};

export default DeepMind;