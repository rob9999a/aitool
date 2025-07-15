import React, { useState } from 'react';
import Navbar from '../../Website/Header/Navbar';

const Rival = () => {
    const [activeSection, setActiveSection] = useState('intro');

    return (

        <>

            <Navbar></Navbar>


            <div className="min-h-screen bg-white font-sans">


                {/* Hero Section */}
                <div className="relative py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
                    <div className="div-template max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            The Musk Rival: Can Anduril's Secret AI Empire Challenge Elon?
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            In the high-stakes world of AI and defense, Palmer Luckey's Anduril Industries is building a powerful rival to Elon Musk's AI dominance
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
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Introduction
                            </button>
                            <button
                                onClick={() => setActiveSection('origins')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'origins'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Origins
                            </button>
                            <button
                                onClick={() => setActiveSection('tech')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'tech'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Technology
                            </button>
                            <button
                                onClick={() => setActiveSection('government')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'government'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Government Backing
                            </button>
                            <button
                                onClick={() => setActiveSection('vision')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'vision'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Vision Comparison
                            </button>
                            <button
                                onClick={() => setActiveSection('ethics')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'ethics'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Ethics
                            </button>
                            <button
                                onClick={() => setActiveSection('future')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'future'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Future Prospects
                            </button>
                            <button
                                onClick={() => setActiveSection('conclusion')}
                                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'conclusion'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Conclusion
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-4 py-12">
                    {/* Introduction */}
                    {activeSection === 'intro' && (
                        <section className="mb-16">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-2/3">
                                    <p className="text-xl leading-relaxed mb-6 text-gray-700">
                                        In the high-stakes world of artificial intelligence and defense technology, Elon Musk is not the only titan shaping the future. Rising quietly but powerfully is Anduril Industries, a company founded in 2017 by Palmer Luckey, creator of Oculus VR. With a focus on AI-driven defense and surveillance, Anduril has rapidly built a secretive AI empire that may rival Musk's influence—especially in areas where technology meets national security.
                                    </p>

                                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-6">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                            This leads to a key question:
                                        </h2>
                                        <p className="text-xl font-bold text-gray-800">
                                            Can Anduril challenge Elon Musk's AI dominance and reshape the future in its own image?
                                        </p>
                                    </div>
                                </div>

                                <div className="md:w-1/3">
                                    <div className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-xl p-6">
                                        <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-xl w-full h-64 mx-auto flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-4xl mb-2">⚔️</div>
                                                <p className="text-gray-700 font-semibold">AI Defense Rivalry</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Origins */}
                    {activeSection === 'origins' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                Anduril's Origins: From VR to AI Defense Powerhouse
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <div className="flex items-start mb-6">
                                        <div className="bg-blue-600 text-white rounded-lg px-4 py-2 mr-4 font-bold">2017</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Anduril Founded</h3>
                                            <p className="text-gray-700">
                                                Founded by Palmer Luckey after his success with Oculus VR
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-100 p-6 rounded-xl mb-6">
                                        <p className="font-semibold mb-2">Strategic Focus:</p>
                                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                            <li>Defense and border security technologies</li>
                                            <li>AI-powered autonomous drones and surveillance systems</li>
                                            <li>Software platforms for military applications</li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-700">
                                        While Oculus VR launched Luckey's fame in consumer tech, Anduril's ambition is far more strategic and focused on national security.
                                    </p>
                                </div>

                                <div>
                                    <div className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-xl p-6 h-full">
                                        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl w-full h-64 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-4xl mb-2">🛡️</div>
                                                <p className="font-bold">Mission Statement</p>
                                                <p className="text-sm text-gray-600 mt-2">"The future of defense"</p>
                                                <div className="mt-4 bg-blue-600 text-white p-4 rounded-lg">
                                                    <p>Leveraging AI to augment situational awareness and autonomous response capabilities</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Technology */}
                    {activeSection === 'tech' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                The Core Technologies: Lattice AI and Autonomous Systems
                            </h2>

                            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                                <div className="md:w-1/2">
                                    <div className="bg-gradient-to-br from-blue-900 to-black text-white p-8 rounded-xl">
                                        <h3 className="text-2xl font-bold mb-6 text-center">Lattice AI Operating System</h3>
                                        <p className="text-center mb-6">
                                            The heart of Anduril's AI defense platform
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-blue-800 p-4 rounded-lg">
                                                <h4 className="font-bold mb-2">Real-time Fusion</h4>
                                                <p>Combines data from sensors, drones, and radar</p>
                                            </div>
                                            <div className="bg-blue-800 p-4 rounded-lg">
                                                <h4 className="font-bold mb-2">Autonomous Threat Detection</h4>
                                                <p>Identifies and tracks threats with minimal human input</p>
                                            </div>
                                            <div className="bg-blue-800 p-4 rounded-lg">
                                                <h4 className="font-bold mb-2">Adaptive Learning</h4>
                                                <p>Evolves to recognize new threats over time</p>
                                            </div>
                                            <div className="bg-blue-800 p-4 rounded-lg">
                                                <h4 className="font-bold mb-2">Force Multiplier</h4>
                                                <p>Enhances military capabilities with AI</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:w-1/2">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomous Systems</h3>
                                    <p className="text-gray-700 mb-6">
                                        Anduril develops advanced drones that integrate with the Lattice platform:
                                    </p>

                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 rounded-full p-2 mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Aerial Drones</h4>
                                                <p className="text-gray-700">For reconnaissance and surveillance missions</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-blue-100 rounded-full p-2 mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Ground Systems</h4>
                                                <p className="text-gray-700">Autonomous patrol vehicles for border security</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-blue-100 rounded-full p-2 mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Offensive Capabilities</h4>
                                                <p className="text-gray-700">Drones equipped for combat operations</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Government Backing */}
                    {activeSection === 'government' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                Government and Military Backing
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <p className="text-gray-700 mb-6">
                                        Anduril's rapid rise is fueled by deep ties to the U.S. Department of Defense and intelligence communities:
                                    </p>

                                    <div className="space-y-6">
                                        <div className="bg-blue-50 p-6 rounded-xl">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Major Contracts</h3>
                                            <p className="text-gray-700">
                                                Multi-year agreements worth hundreds of millions of dollars
                                            </p>
                                        </div>

                                        <div className="bg-gray-100 p-6 rounded-xl">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Deployments</h3>
                                            <p className="text-gray-700">
                                                Along U.S. borders and overseas military bases
                                            </p>
                                        </div>

                                        <div className="bg-blue-50 p-6 rounded-xl">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">International Expansion</h3>
                                            <p className="text-gray-700">
                                                Partnerships with allied nations to export AI defense tech
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8 rounded-xl h-full">
                                        <h3 className="text-2xl font-bold mb-6 text-center">Strategic Advantage</h3>
                                        <div className="flex flex-col items-center">
                                            <div className="text-4xl mb-4">🇺🇸</div>
                                            <p className="text-center mb-6">
                                                Unlike Tesla or SpaceX, Anduril's primary customer base is governments, giving it a different kind of influence—one that blends technology with geopolitics.
                                            </p>
                                            <div className="bg-blue-800 p-4 rounded-lg w-full">
                                                <p className="text-center">National Security Focus</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Vision Comparison */}
                    {activeSection === 'vision' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                Musk vs. Luckey: Different Visions
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                {/* Musk */}
                                <div className="border border-gray-200 rounded-xl p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                            <span className="text-white font-bold">EM</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">Elon Musk's Vision</h3>
                                    </div>

                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-gray-200 rounded-full p-1 mr-3 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Human-Machine Integration</h4>
                                                <p className="text-gray-700">Neuralink aims to merge human cognition with AI</p>
                                            </div>
                                        </li>

                                        <li className="flex items-start">
                                            <div className="bg-gray-200 rounded-full p-1 mr-3 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Consumer Focus</h4>
                                                <p className="text-gray-700">Public, consumer-facing technologies</p>
                                            </div>
                                        </li>

                                        <li className="flex items-start">
                                            <div className="bg-gray-200 rounded-full p-1 mr-3 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Mass Market AI</h4>
                                                <p className="text-gray-700">Transportation, energy, and space exploration</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Luckey */}
                                <div className="border border-blue-200 rounded-xl p-6 bg-blue-50">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                            <span className="text-white font-bold">PL</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">Palmer Luckey's Vision</h3>
                                    </div>

                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-blue-200 rounded-full p-1 mr-3 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Autonomous Defense</h4>
                                                <p className="text-gray-700">Focuses on machine intelligence operating independently</p>
                                            </div>
                                        </li>

                                        <li className="flex items-start">
                                            <div className="bg-blue-200 rounded-full p-1 mr-3 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Defense Focus</h4>
                                                <p className="text-gray-700">Military-grade AI applications</p>
                                            </div>
                                        </li>

                                        <li className="flex items-start">
                                            <div className="bg-blue-200 rounded-full p-1 mr-3 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">Security AI</h4>
                                                <p className="text-gray-700">Border protection and battlefield applications</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gray-900 text-white p-6 rounded-xl">
                                <p className="text-center">
                                    "Both seek to shape the future through AI, but their visions are complementary rather than directly competitive."
                                </p>
                            </div>
                        </section>
                    )}

                    {/* Ethics */}
                    {activeSection === 'ethics' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                The Ethical Debate: AI in War and Surveillance
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Ethical Concerns</h3>

                                    <div className="space-y-4">
                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">Autonomous Weapons</h4>
                                            <p className="text-gray-700">Fears about loss of human control over lethal decisions</p>
                                        </div>

                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">Privacy Issues</h4>
                                            <p className="text-gray-700">Surveillance technologies infringing on civil liberties</p>
                                        </div>

                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <h4 className="font-bold text-gray-900 mb-2">AI Arms Race</h4>
                                            <p className="text-gray-700">Risk of escalating global tensions and conflicts</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Musk's Position</h3>
                                    <p className="text-gray-700 mb-4">
                                        Musk has voiced concerns about AI's dangers, but Anduril's work pushes AI into militarized frontlines, intensifying debates on responsible AI use.
                                    </p>

                                    <div className="bg-gray-100 p-4 rounded-lg italic">
                                        "AI is far more dangerous than nukes. Why do we have no regulatory oversight?" - Elon Musk
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Future Prospects */}
                    {activeSection === 'future' && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                                Future Prospects: Who Will Shape AI's Role in Society?
                            </h2>

                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/2">
                                    <p className="text-gray-700 mb-6">
                                        Both Musk and Anduril are shaping AI's trajectory in profound ways:
                                    </p>

                                    <div className="space-y-6">
                                        <div className="bg-blue-50 p-6 rounded-xl">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Musk's Influence</h3>
                                            <p className="text-gray-700">
                                                Mass-market AI in vehicles, interfaces, and space
                                            </p>
                                        </div>

                                        <div className="bg-gray-100 p-6 rounded-xl">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Anduril's Influence</h3>
                                            <p className="text-gray-700">
                                                AI that governs defense, borders, and potentially warfare
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:w-1/2">
                                    <div className="bg-gradient-to-br from-blue-900 to-gray-900 text-white p-8 rounded-xl">
                                        <h3 className="text-2xl font-bold mb-6 text-center">Converging Paths</h3>
                                        <p className="text-center mb-6">
                                            As AI becomes central to economic, social, and security domains, their influence could converge or clash—defining the balance between human augmentation and autonomous machine control.
                                        </p>
                                        <div className="flex justify-center">
                                            <div className="text-4xl">⚖️</div>
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
                                Conclusion: Rivalry or Complement?
                            </h2>

                            <div className="bg-blue-50 p-8 rounded-xl mb-8">
                                <p className="text-xl text-gray-700 mb-6">
                                    Elon Musk and Palmer Luckey's Anduril represent two faces of AI's future: the visionary entrepreneur pushing human potential and the defense technologist securing national interests with autonomous systems.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Musk's Domain</h3>
                                        <p className="text-gray-700">
                                            Controls the highways of Earth and highways to space
                                        </p>
                                        <div className="mt-4 text-4xl text-center">🚀</div>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Anduril's Domain</h3>
                                        <p className="text-gray-700">
                                            Guards the borders and battlefields
                                        </p>
                                        <div className="mt-4 text-4xl text-center">🛡️</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-8 rounded-xl">
                                <p className="text-2xl text-center mb-6">
                                    Together, they are key architects of a world where AI is woven deeply into our lives—whether we're passengers in a self-driving car or citizens under watchful autonomous eyes.
                                </p>

                                <p className="text-center text-xl font-bold">
                                    End.
                                </p>
                                <p className="text-center mt-4">
                                    The AI future isn't owned by one man, but shaped by many—including Musk and Anduril.
                                </p>
                            </div>
                        </section>
                    )}
                </main>


            </div>
        </>
    );
};

export default Rival;