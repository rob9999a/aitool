import React, { useState } from 'react';
import Navbar from '../../Website/Header/Navbar';

const Musk = () => {
    const [activeSection, setActiveSection] = useState('intro');

    return (

        <>

            <Navbar></Navbar>
            <div className="min-h-screen bg-white font-sans">

                {/* Hero Section */}
                <div className="relative py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
                    <div className="div-template max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Elon Musk's AI Vision: Will He Control the Future of Humanity?
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Exploring Musk's profound—and controversial—ambition in artificial intelligence
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="sticky top-0 bg-white border-b border-gray-200 z-10">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex overflow-x-auto py-3 gap-2">
                            <button
                                onClick={() => setActiveSection('intro')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'intro'
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Introduction
                            </button>
                            <button
                                onClick={() => setActiveSection('philosophy')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'philosophy'
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                AI Philosophy
                            </button>
                            <button
                                onClick={() => setActiveSection('neuralink')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'neuralink'
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Neuralink
                            </button>
                            <button
                                onClick={() => setActiveSection('tesla')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'tesla'
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Tesla & Dojo
                            </button>
                            <button
                                onClick={() => setActiveSection('openai')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'openai'
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                OpenAI
                            </button>
                            <button
                                onClick={() => setActiveSection('spacex')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'spacex'
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                SpaceX
                            </button>
                            <button
                                onClick={() => setActiveSection('control')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'control'
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Control Question
                            </button>
                            <button
                                onClick={() => setActiveSection('ethics')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'ethics'
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Ethics
                            </button>
                            <button
                                onClick={() => setActiveSection('conclusion')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'conclusion'
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                                        Elon Musk is undeniably one of the most influential tech visionaries of the 21st century. From SpaceX rockets to Tesla's electric cars, his footprint in innovation is vast. But arguably his most profound—and controversial—ambition lies in artificial intelligence (AI) and how it might shape humanity's future.
                                    </p>

                                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-900 mb-6">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                            This raises a key question:
                                        </h2>
                                        <p className="text-xl font-bold text-gray-800">
                                            Will Elon Musk control the future of humanity through AI?
                                        </p>
                                    </div>
                                </div>

                                <div className="md:w-1/3">
                                    <div className="bg-gradient-to-br from-gray-100 to-white border border-gray-200 rounded-xl p-6">
                                        <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-full w-full h-64 mx-auto flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-4xl font-bold mb-2">?</div>
                                                <p className="text-gray-700">The Future of Humanity</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Philosophy */}
                    {activeSection === 'philosophy' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                Musk's AI Philosophy: Fear and Hope Intertwined
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Warnings & Fears</h3>
                                    <p className="mb-4 text-gray-700">
                                        Musk has long warned about AI's risks. In public speeches and interviews, he has compared unchecked AI development to "summoning the demon"—a potential existential threat to humans if left unregulated.
                                    </p>
                                    <div className="bg-white p-4 rounded-lg italic">
                                        "AI is far more dangerous than nukes." - Elon Musk
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Investments & Hope</h3>
                                    <p className="mb-4 text-gray-700">
                                        At the same time, Musk invests heavily in AI projects aiming to:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Safeguard humanity via responsible AI development (e.g., OpenAI co-founding)</li>
                                        <li>Integrate AI with humans through neural interfaces (Neuralink)</li>
                                        <li>Use AI to advance space exploration, renewable energy, and transportation</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-900 text-white p-6 rounded-xl">
                                <p className="text-center">
                                    His approach is a delicate balancing act between harnessing AI's power and preventing its dangers.
                                </p>
                            </div>
                        </section>
                    )}

                    {/* Neuralink */}
                    {activeSection === 'neuralink' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                Neuralink: Merging Mind and Machine
                            </h2>

                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/2">
                                    <p className="text-gray-700 mb-6">
                                        One of Musk's most ambitious projects is Neuralink, a brain-computer interface startup aiming to enable direct, high-bandwidth communication between humans and computers.
                                    </p>

                                    <div className="bg-blue-50 p-6 rounded-xl mb-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Musk's Vision for Neuralink:</h3>
                                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                            <li>Counteract AI's cognitive superiority by augmenting human intelligence</li>
                                            <li>Treat neurological disorders and enable new forms of communication</li>
                                            <li>Eventually facilitate "symbiosis" between humans and AI</li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-700">
                                        If successful, Neuralink could radically change what it means to be human—possibly putting Musk at the center of a new cognitive revolution.
                                    </p>
                                </div>

                                <div className="md:w-1/2">
                                    <div className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-xl p-6">
                                        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl w-full h-64 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-4xl mb-2">🧠</div>
                                                <p className="font-bold">Brain-Computer Interface</p>
                                                <p className="text-sm text-gray-600 mt-2">Human-AI symbiosis</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Tesla & Dojo */}
                    {activeSection === 'tesla' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                Tesla and Dojo: AI for Autonomous Control
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">The Dojo Supercomputer</h3>
                                    <p className="text-gray-700 mb-4">
                                        Tesla's AI ambitions are no less significant. The Dojo supercomputer is designed to train Tesla's Full Self-Driving neural networks on unprecedented scales.
                                    </p>
                                    <div className="bg-gray-100 p-4 rounded-lg">
                                        <p className="font-semibold">Processing power equivalent to millions of traditional computers</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomous Future</h3>
                                    <p className="text-gray-700 mb-4">
                                        Tesla aims to deploy millions of autonomous vehicles capable of driving and making decisions independently.
                                    </p>
                                    <div className="bg-gray-100 p-4 rounded-lg">
                                        <p className="font-semibold">Robotaxi network that could reshape transportation and urban life</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900 text-white p-6 rounded-xl">
                                <p className="text-center">
                                    "Musk's vision includes control over physical infrastructure, from roads to energy grids."
                                </p>
                            </div>
                        </section>
                    )}

                    {/* OpenAI */}
                    {activeSection === 'openai' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                OpenAI and the Democratization of AI
                            </h2>

                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/2">
                                    <div className="bg-gradient-to-br from-gray-100 to-white border border-gray-200 rounded-xl p-6">
                                        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl w-full h-64 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-4xl mb-2">🤖</div>
                                                <p className="font-bold">OpenAI Journey</p>
                                                <p className="text-sm text-gray-600 mt-2">From non-profit to commercial entity</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:w-1/2">
                                    <p className="text-gray-700 mb-6">
                                        While Musk was a co-founder of OpenAI, his relationship with the organization has evolved.
                                    </p>

                                    <div className="space-y-6">
                                        <div className="bg-green-50 p-6 rounded-xl">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Original Mission</h3>
                                            <p className="text-gray-700">
                                                Began as a nonprofit dedicated to safe and open AI research
                                            </p>
                                        </div>

                                        <div className="bg-yellow-50 p-6 rounded-xl">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Musk's Departure</h3>
                                            <p className="text-gray-700">
                                                Stepped back citing concerns about commercial pressures and competition
                                            </p>
                                        </div>

                                        <div className="bg-blue-50 p-6 rounded-xl">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Legacy</h3>
                                            <p className="text-gray-700">
                                                Creation of GPT and ChatGPT introduced powerful language models to the public
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* SpaceX */}
                    {activeSection === 'spacex' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                SpaceX and AI: Expanding Beyond Earth
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-gray-700 mb-6">
                                        Musk's AI ambitions aren't limited to Earth. SpaceX rockets use AI to optimize launch and landing.
                                    </p>

                                    <div className="bg-gray-100 p-6 rounded-xl mb-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">AI in Space Exploration</h3>
                                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                            <li>AI-assisted life support for Mars colonization</li>
                                            <li>Autonomous resource management systems</li>
                                            <li>Robotics capable of building infrastructure without human intervention</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-xl h-full">
                                        <h3 className="text-2xl font-bold mb-6 text-center">AI as Humanity's Lifeline</h3>
                                        <p className="text-center mb-6">
                                            Musk has suggested that AI will be essential in building self-sustaining colonies—potentially preserving humanity if Earth becomes uninhabitable.
                                        </p>
                                        <div className="text-center text-4xl">🗣️</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Control Question */}
                    {activeSection === 'control' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                The Question of Control: Centralized Power or Shared Future?
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-red-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Critics' Concerns</h3>
                                    <p className="text-gray-700 mb-4">
                                        Musk's vision risks centralizing AI power, giving him outsized influence over critical technologies:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Neuralink could create unprecedented data and cognitive control</li>
                                        <li>Tesla's dominance in autonomous vehicles and energy</li>
                                        <li>Media presence amplifies his ability to shape public opinion</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Musk's Position</h3>
                                    <p className="text-gray-700 mb-4">
                                        Musk advocates for AI regulation and has supported calls for government oversight:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Recognizes risks of unchecked control</li>
                                        <li>Supports ethical frameworks for AI development</li>
                                        <li>Advocates for international cooperation</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <p className="text-center text-xl text-gray-800">
                                    "It's unlikely any single person can 'control' humanity's future—AI development is global, involving countless actors."
                                </p>
                            </div>
                        </section>
                    )}

                    {/* Ethics */}
                    {activeSection === 'ethics' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                Ethical and Societal Implications
                            </h2>

                            <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-xl mb-8">
                                <p className="text-2xl text-center mb-6">
                                    Musk's AI vision raises thorny questions:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-lg font-bold mb-2">Governance</h3>
                                        <p>Who governs the AI-human interface?</p>
                                    </div>
                                    <div className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-lg font-bold mb-2">Rights</h3>
                                        <p>What rights do augmented humans have?</p>
                                    </div>
                                    <div className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-lg font-bold mb-2">Inequality</h3>
                                        <p>How to prevent AI-enabled inequality?</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Recommendations</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Transparent governance frameworks for AI development</li>
                                    <li>International cooperation on AI ethics and standards</li>
                                    <li>Mechanisms to ensure AI benefits all of humanity</li>
                                    <li>Regulatory oversight of neural interface technologies</li>
                                </ul>
                            </div>
                        </section>
                    )}

                    {/* Conclusion */}
                    {activeSection === 'conclusion' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                Will Musk Control the Future?
                            </h2>

                            <div className="bg-gray-50 p-6 rounded-xl mb-8">
                                <p className="text-xl text-gray-700 mb-6">
                                    Musk's influence is undeniable:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                    <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                                        <div className="text-4xl font-bold text-gray-900 mb-2">🗣️</div>
                                        <p className="font-semibold">Shapes AI through Tesla, Neuralink, SpaceX</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                                        <div className="text-4xl font-bold text-gray-900 mb-2">🗣️</div>
                                        <p className="font-semibold">Drives policy debates with public warnings</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                                        <div className="text-4xl font-bold text-gray-900 mb-2">🗣️</div>
                                        <p className="font-semibold">Inspires entrepreneurs and governments</p>
                                    </div>
                                </div>

                                <p className="text-center text-xl text-gray-800">
                                    "Ultimately, Musk may not control the future, but he will help define its possibilities."
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-xl">
                                <h3 className="text-2xl font-bold mb-6 text-center">
                                    Conclusion: A Visionary in a Complex AI Era
                                </h3>

                                <div className="space-y-4">
                                    <p className="text-center">
                                        Elon Musk's AI vision blends extraordinary potential and serious peril.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-gray-800 p-4 rounded-lg">
                                            <h4 className="text-lg font-bold mb-2 text-green-400">Potential Benefits</h4>
                                            <ul className="list-disc pl-6 space-y-1">
                                                <li>Empower humanity in unprecedented ways</li>
                                                <li>Solve complex global challenges</li>
                                                <li>Extend human capabilities</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gray-800 p-4 rounded-lg">
                                            <h4 className="text-lg font-bold mb-2 text-red-400">Potential Risks</h4>
                                            <ul className="list-disc pl-6 space-y-1">
                                                <li>Consolidate power in the hands of a few</li>
                                                <li>Create new forms of inequality</li>
                                                <li>Introduce unprecedented security risks</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <p className="text-center mt-6">
                                        The challenge ahead is balancing innovation with responsibility. The future isn't preordained—it's a collective journey, and Musk is one of many shaping its path.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-2xl font-bold text-gray-900">
                                    End.
                                </p>
                                <p className="text-xl text-gray-700 mt-4">
                                    The question isn't if Musk will control the future—it's how humanity will steer AI's course alongside him.
                                </p>
                            </div>
                        </section>
                    )}
                </main>

            </div>
        </>
    );
};

export default Musk;