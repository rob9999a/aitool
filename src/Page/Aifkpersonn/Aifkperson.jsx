import React, { useState } from 'react';
import { Helmet } from "react-helmet";

import Navbar from '../../Component/Website/Header/Navbar';

const AIGeneratedCEOs = () => {
    const [showExample, setShowExample] = useState(false);
    const [revealTruth, setRevealTruth] = useState(false);

    // Fake CEO profiles
    const fakeCEOs = [
        {
            name: "Alexander Vance",
            title: "CEO, Quantum Dynamics",
            bio: "Harvard MBA, former SpaceX engineer. Built Quantum Dynamics into a $1.2B AI solutions provider.",
            img: "alexander-vance"
        },
        {
            name: "Sophia Chen",
            title: "Founder & CEO, NeuroLink Systems",
            bio: "Neuroscience PhD from Stanford. Revolutionizing brain-computer interfaces with her startup.",
            img: "sophia-chen"
        },
        {
            name: "Marcus Johnson",
            title: "CEO, TerraNova Energy",
            bio: "Renewable energy pioneer with 15 years at Shell. Leading the green energy transition.",
            img: "marcus-johnson"
        }
    ];

    return (
        <>
            <Navbar></Navbar>



            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
                {/* Header */}
                <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 px-4">
                    <div className="div-template max-w-6xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Can <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI-Generated Personas</span><br />
                            Run Real Companies?
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Exploring how artificial intelligence might create fictional executives who manage businesses, sign deals, and generate profits without ever existing.
                        </p>
                    </div>
                </header>

                {/* Introduction */}
                <section className="py-16 px-4 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">The Rise of Synthetic Executives</h2>
                            <p className="text-lg mb-4">
                                With advanced AI systems, it's now possible to create entirely fictional personas that appear to run companies. These AI-generated executives can:
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <div className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">✓</div>
                                    <span>Attract investors with impressive (fake) credentials</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">✓</div>
                                    <span>Sign contracts using AI-generated signatures</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">✓</div>
                                    <span>Lead meetings via deepfake video conferencing</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">✓</div>
                                    <span>Generate profits without a physical presence</span>
                                </li>
                            </ul>
                            <button
                                onClick={() => setShowExample(!showExample)}
                                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
                            >
                                {showExample ? "Hide Examples" : "Show AI-Generated CEOs"}
                            </button>
                        </div>

                        <div className="bg-gray-800 rounded-2xl p-1 shadow-2xl">
                            <div className="border-4 border-gray-700 rounded-xl overflow-hidden">
                                <div className="bg-gradient-to-br from-gray-900 to-black p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        </div>
                                        <div className="text-gray-400 text-sm">CEO_Generator.exe</div>
                                    </div>

                                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                                        <div className="text-green-400 font-mono text-sm">
                                            <div className="mb-2">$ ./generate_ceo --name "Alexander Vance"</div>
                                            <div className="mb-2">$ --credentials "Harvard MBA, SpaceX"</div>
                                            <div className="mb-2">$ --company "Quantum Dynamics"</div>
                                            <div className="mb-2">$ --valuation "1.2B"</div>
                                            <div className="text-gray-500"># Generating persona...</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="bg-gray-700 rounded-lg p-3 mr-4">
                                            <div className="bg-gray-600 rounded-full w-16 h-16"></div>
                                        </div>
                                        <div>
                                            <div className="h-4 bg-gray-700 rounded w-32 mb-2"></div>
                                            <div className="h-3 bg-gray-700 rounded w-48 mb-2"></div>
                                            <div className="h-3 bg-gray-700 rounded w-40"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI-Generated CEO Examples */}
                {showExample && (
                    <section className="py-16 bg-gradient-to-b from-gray-100 to-white px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold mb-2 text-center">Meet Our AI-Generated CEOs</h2>
                            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                                These executives appear completely real but are entirely fictional creations
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {fakeCEOs.map((ceo, index) => (
                                    <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                                        <div className="h-64 bg-gradient-to-r from-blue-100 to-indigo-100 relative overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-gradient-to-r from-blue-300 to-indigo-400 rounded-full w-32 h-32 flex items-center justify-center">
                                                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-28 h-28" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                                <h3 className="text-xl font-bold text-white">{ceo.name}</h3>
                                                <p className="text-blue-300">{ceo.title}</p>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-gray-700 mb-4">{ceo.bio}</p>
                                            <div className="flex space-x-4">
                                                <button className="text-sm bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-full transition-colors">
                                                    View Profile
                                                </button>
                                                <button className="text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 py-2 px-4 rounded-full transition-colors">
                                                    Contact
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 max-w-2xl mx-auto rounded-lg">
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <p className="text-yellow-800">
                                        <span className="font-bold">Important:</span> All CEOs shown above are entirely fictional and generated for demonstration purposes. Any resemblance to real persons is coincidental.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* How It Works */}
                <section className="py-16 bg-gradient-to-b from-white to-gray-50 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-2 text-center">How AI Creates Fake Executives</h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            The technology stack that makes synthetic CEOs possible
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="flex items-center mb-6">
                                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg w-14 h-14 flex items-center justify-center mr-4 text-2xl font-bold">
                                        1
                                    </div>
                                    <h3 className="text-2xl font-bold">Persona Creation</h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    AI systems generate detailed fictional backgrounds using:
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1">✓</div>
                                        <span>Credible educational histories from prestigious institutions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1">✓</div>
                                        <span>Plausible career trajectories with notable companies</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1">✓</div>
                                        <span>Realistic personality profiles and communication styles</span>
                                    </li>
                                </ul>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="text-sm text-gray-600">
                                        <div className="font-mono">AI.generate_persona("tech_executive")</div>
                                        <div className="font-mono mt-2">// Output: "Alexander Vance: Harvard MBA, ex-SpaceX"</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="flex items-center mb-6">
                                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg w-14 h-14 flex items-center justify-center mr-4 text-2xl font-bold">
                                        2
                                    </div>
                                    <h3 className="text-2xl font-bold">Digital Presence</h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    The synthetic executive establishes an online presence:
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <div className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1">✓</div>
                                        <span>AI-generated photos and deepfake videos</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1">✓</div>
                                        <span>Professional social media profiles</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1">✓</div>
                                        <span>Company website with executive bio and "photo"</span>
                                    </li>
                                </ul>
                                <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                                    <div>
                                        <div className="font-medium">Profile Photo</div>
                                        <div className="text-xs text-gray-500">Generated by StyleGAN AI</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="flex items-center mb-6">
                                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg w-14 h-14 flex items-center justify-center mr-4 text-2xl font-bold">
                                        3
                                    </div>
                                    <h3 className="text-2xl font-bold">Business Operations</h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    The AI executive runs the company autonomously:
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <div className="bg-purple-100 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1">✓</div>
                                        <span>AI signs contracts with digital signatures</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-purple-100 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1">✓</div>
                                        <span>Automated decision-making for investments</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-purple-100 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1">✓</div>
                                        <span>AI-generated reports and communications</span>
                                    </li>
                                </ul>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex">
                                        <div className="mr-4">
                                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                                        </div>
                                        <div>
                                            <div className="font-medium">Contract Signed</div>
                                            <div className="text-sm text-gray-500">Digitally signed by "Alexander Vance"</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="flex items-center mb-6">
                                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg w-14 h-14 flex items-center justify-center mr-4 text-2xl font-bold">
                                        4
                                    </div>
                                    <h3 className="text-2xl font-bold">Profit Generation</h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    The AI-run company generates real profits:
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <div className="bg-pink-100 text-pink-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1">✓</div>
                                        <span>Automated trading and investments</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-pink-100 text-pink-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1">✓</div>
                                        <span>AI-managed e-commerce and services</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-pink-100 text-pink-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1">✓</div>
                                        <span>Algorithmic content creation and monetization</span>
                                    </li>
                                </ul>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-600">$1,247,892</div>
                                        <div className="text-sm text-gray-500">Q2 Revenue (Generated autonomously)</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => setRevealTruth(!revealTruth)}
                                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
                            >
                                {revealTruth ? "Hide Legal Implications" : "Reveal the Truth"}
                            </button>
                        </div>
                    </div>
                </section>

                {/* Legal Implications */}
                {revealTruth && (
                    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h2 className="text-3xl font-bold mb-6 text-center">The Legal Reality</h2>

                                <div className="flex items-center mb-8">
                                    <div className="bg-red-100 text-red-800 rounded-full w-14 h-14 flex items-center justify-center mr-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <p className="text-xl font-semibold text-red-700">
                                        AI-generated personas running companies is currently illegal in most jurisdictions
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">Legal Challenges</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <div className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">!</div>
                                                <span>Fraud and misrepresentation laws require real persons to be accountable</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">!</div>
                                                <span>Contract law requires legally identifiable entities to sign agreements</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">!</div>
                                                <span>Financial regulations require human oversight for companies</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">Future Possibilities</h3>
                                        <p className="mb-4">
                                            While currently illegal, some jurisdictions are exploring legal frameworks for AI-run entities:
                                        </p>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <div className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">→</div>
                                                    <span>AI-run LLCs with human oversight requirements</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">→</div>
                                                    <span>Digital entity registration systems</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">→</div>
                                                    <span>Algorithmic accountability frameworks</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Conclusion */}
                <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div className="bg-gradient-to-r from-blue-700/30 to-indigo-700/30 p-8 rounded-2xl">
                            <h2 className="text-3xl font-bold mb-6">The Future of Corporate Leadership</h2>
                            <p className="text-xl mb-8">
                                While AI can theoretically create convincing fictional executives, legal and ethical frameworks currently prevent fully autonomous AI-run companies.
                                However, as AI technology advances and regulations evolve, we may see hybrid models where AI "personas" assist human executives in decision-making.
                            </p>
                            <div className="bg-blue-800/50 rounded-lg p-6 max-w-2xl mx-auto">
                                <p className="text-lg italic">
                                    "The most successful companies of the future won't be run by AI alone, but by humans who effectively leverage AI capabilities while maintaining ethical oversight and accountability."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </>
    );
};

export default AIGeneratedCEOs;