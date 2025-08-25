import React, { useState } from 'react';
import Navbar from '../../Component/Website/Header/Navbar';
import { Helmet } from "react-helmet";

const Hormuz = () => {
    const [activeSection, setActiveSection] = useState(0);

    const sections = [
        {
            title: "Introduction",
            content: "Artificial Intelligence (AI) is increasingly becoming a tool in geopolitics, security, and military planning. When combined with one of the world's most critical chokepoints—the Strait of Hormuz—and the long-standing tensions between Iran and the United States, the implications are profound.",
            image: "https://i.postimg.cc/28dbT246/freepik-the-style-is-candid-image-photography-with-natural-95730.png",
            color: "bg-blue-50"
        },
        {
            title: "Strategic Importance of the Strait of Hormuz",
            content: [
                "Energy Lifeline: Around 20% of global petroleum liquids and a significant share of global LNG pass through the Strait of Hormuz.",
                "Geopolitical Leverage: Iran has repeatedly threatened to close or disrupt the Strait in response to sanctions or military pressure.",
                "Global Dependence: The economies of Asia, Europe, and even the U.S. indirectly rely on the uninterrupted flow of energy through this chokepoint."
            ],
            image: "https://i.postimg.cc/4dhnc5fX/freepik-the-style-is-candid-image-photography-with-natural-95726.png",
            color: "bg-amber-50"
        },
        {
            title: "AI in the Context of Iran–U.S. Tensions",
            content: [
                "Intelligence & Surveillance: AI-powered satellite imagery can track tanker movements, detect unusual maritime patterns, and predict Iranian naval maneuvers.",
                "Cyber and Hybrid Warfare: Iran has a record of cyberattacks on energy infrastructure. AI-enhanced cyber tools could amplify these attacks.",
                "Decision-Making & Escalation: AI decision-support systems can help military leaders simulate escalation scenarios and anticipate adversary responses."
            ],
            image: "https://i.postimg.cc/zXkvT3rH/freepik-the-style-is-candid-image-photography-with-natural-95729.png",
            color: "bg-purple-50"
        },
        {
            title: "Conflict Scenarios",
            content: [
                "Scenario A: Limited Escalation - Iran deploys AI-guided drones to harass oil tankers, U.S. responds with AI-assisted naval defense systems.",
                "Scenario B: Partial Blockade - Iran mines parts of the Strait using semi-autonomous underwater vehicles.",
                "Scenario C: Full-Scale War - U.S. launches precision AI-assisted strikes on Iranian targets, Iran retaliates with drone swarms and cyberattacks."
            ],
            image: "https://i.postimg.cc/VN2kzCjp/freepik-a-detailed-strategic-analysis-document-cover-featu-95717.png",
            color: "bg-red-50"
        },
        {
            title: "Who Collapses Faster?",
            content: [
                "Iran: Rapid collapse of conventional forces under U.S. strikes. Severe economic breakdown due to blockade and destroyed oil infrastructure.",
                "United States: Military dominance ensures battlefield superiority but prolonged conflict drains trillions of dollars and triggers political backlash at home."
            ],
            image: "https://i.postimg.cc/7YXPfc3g/freepik-a-futuristic-war-room-scene-with-holographic-proje-95719.png",
            color: "bg-gray-100"
        },
        {
            title: "The Role of AI in Collapse or Stability",
            content: [
                "Acceleration of Conflict: AI increases the speed of warfare, reducing human reaction time.",
                "Global Monitoring: AI systems could predict shipping disruptions and trigger automatic price shocks.",
                "Cyber Risks: AI-enhanced malware targeting refineries could paralyze Gulf economies without a single shot fired."
            ],
            image: "https://i.postimg.cc/CKT2YMRJ/freepik-a-conceptual-art-piece-depicting-a-tangled-web-of-95716.png",
            color: "bg-green-50"
        },
        {
            title: "Conclusion",
            content: "A U.S.–Iran war centered on the Strait of Hormuz would be catastrophic for Iran in terms of immediate collapse, but global economic systems would also suffer immensely. AI acts as a double-edged sword—it can prevent escalation through faster detection and prediction, but it can also accelerate destruction through autonomous decision-making and cyber warfare.",
            image: "https://i.postimg.cc/mZjWw9P4/freepik-the-style-is-candid-image-photography-with-natural-95727.png",
            color: "bg-indigo-50"
        }
    ];

    return (

        <>

            <Helmet>
                {/* Basic SEO */}
                <title>Artificial Intelligence, the Strait of Hormuz, and a Potential U.S.–Iran War: A Strategic Analysis</title>
                <meta
                    name="description"
                    content="A comprehensive strategic analysis of AI, oil, the Strait of Hormuz, and the potential U.S.–Iran conflict, highlighting geopolitical and energy risks."
                />
                <meta
                    name="keywords"
                    content="AI, Artificial Intelligence, Strait of Hormuz, Iran, US, War, Oil, Geopolitics, Energy Security"
                />
                <meta name="author" content="Your Name" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Artificial Intelligence, the Strait of Hormuz, and a Potential U.S.–Iran War: A Strategic Analysis" />
                <meta property="og:description" content="A comprehensive strategic analysis of AI, oil, the Strait of Hormuz, and the potential U.S.–Iran conflict, highlighting geopolitical and energy risks." />
                <meta property="og:image" content="https://i.postimg.cc/RVWpHJfX/freepik-an-academic-journal-cover-depicting-a-chess-game-w-95718.png" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/strait-of-hormuz" alt="hormuz-war-soon" />

                {/* Twitter Card */}
                <meta name="twitter:title" content="Artificial Intelligence, the Strait of Hormuz, and a Potential U.S.–Iran War: A Strategic Analysis" />
                <meta name="twitter:description" content="A comprehensive strategic analysis of AI, oil, the Strait of Hormuz, and the potential U.S.–Iran conflict, highlighting geopolitical and energy risks." />
            </Helmet>
            <Navbar></Navbar>


            <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">AI, the Strait of Hormuz, and Potential U.S.–Iran War</h1>
                    <p className="text-center text-gray-600 mb-12">A Strategic Analysis of Artificial Intelligence in Geopolitics and Conflict</p>

                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center mb-12 gap-2">
                        {sections.map((section, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSection(index)}
                                className={`px-4 py-2 rounded-lg font-medium ${activeSection === index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            >
                                {section.title.split(' ')[0]}
                            </button>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${sections[activeSection].color}`}>
                        <div className="md:flex">
                            <div className="md:flex-shrink-0 md:w-2/5">
                                <img content='hormuz War Soon'
                                    className="h-64 w-full object-cover md:h-full md:w-full"
                                    src={sections[activeSection].image}
                                    alt={`Illustration for ${sections[activeSection].title} discussing AI, oil, and U.S.–Iran tensions in the Strait of Hormuz`} />
                            </div>
                            <div className="p-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">{sections[activeSection].title}</h2>
                                {Array.isArray(sections[activeSection].content) ? (
                                    <ul className="list-disc pl-5 space-y-2">
                                        {sections[activeSection].content.map((point, index) => (
                                            <li key={index} className="text-gray-700">{point}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-700">{sections[activeSection].content}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Key Scenarios */}
                    {activeSection === 3 && (
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-red-100 p-6 rounded-xl">
                                <h3 className="text-xl font-semibold text-red-800 mb-2">Scenario A: Limited Escalation</h3>
                                <p className="text-red-700">Iran deploys AI-guided drones and fast boats to harass oil tankers. The U.S. responds with AI-assisted naval defense systems.</p>
                            </div>
                            <div className="bg-amber-100 p-6 rounded-xl">
                                <h3 className="text-xl font-semibold text-amber-800 mb-2">Scenario B: Partial Blockade</h3>
                                <p className="text-amber-700">Iran mines parts of the Strait using semi-autonomous underwater vehicles. AI-powered mine-detection operations slow traffic.</p>
                            </div>
                            <div className="bg-purple-100 p-6 rounded-xl">
                                <h3 className="text-xl font-semibold text-purple-800 mb-2">Scenario C: Full-Scale War</h3>
                                <p className="text-purple-700">U.S. launches precision AI-assisted strikes on Iranian targets. Iran retaliates with drone swarms and cyberattacks.</p>
                            </div>
                        </div>
                    )}

                    {/* Comparison Section */}
                    {activeSection === 4 && (
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-red-100 p-6 rounded-xl">
                                <h3 className="text-xl font-semibold text-red-800 mb-2">Iran's Vulnerabilities</h3>
                                <ul className="list-disc pl-5 text-red-700 space-y-2">
                                    <li>Rapid collapse of conventional forces under U.S. strikes</li>
                                    <li>Severe economic breakdown due to blockade</li>
                                    <li>Destroyed oil infrastructure</li>
                                    <li>Likely shift to asymmetric guerrilla-style warfare</li>
                                </ul>
                            </div>
                            <div className="bg-blue-100 p-6 rounded-xl">
                                <h3 className="text-xl font-semibold text-blue-800 mb-2">U.S. Challenges</h3>
                                <ul className="list-disc pl-5 text-blue-700 space-y-2">
                                    <li>Military dominance ensures battlefield superiority</li>
                                    <li>Prolonged conflict drains trillions of dollars</li>
                                    <li>Damages global credibility</li>
                                    <li>Triggers political backlash at home</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Key Insights */}
                    <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Strategic Implications</h3>
                        <p className="text-gray-700">
                            The greatest danger is not just military collapse, but a global chain reaction—energy crisis, economic instability, and geopolitical realignment—that AI will amplify in speed and intensity. AI acts as a double-edged sword in this scenario, both preventing and accelerating conflict.
                        </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-12">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Analysis progress</span>
                            <span className="text-sm font-medium text-gray-700">{Math.round(((activeSection + 1) / sections.length) * 100)}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                                style={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hormuz;