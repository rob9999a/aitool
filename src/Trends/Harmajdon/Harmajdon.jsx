import React, { useState, useEffect } from 'react';
import Navbar from '../../Component/Website/Header/Navbar';
import { Helmet } from "react-helmet";

const Harmajdon = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [countdown, setCountdown] = useState(5);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning && countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        } else if (countdown === 0) {
            setIsRunning(false);
            setCountdown(5);
        }
        return () => clearTimeout(timer);
    }, [countdown, isRunning]);

    const sections = [
        {
            title: "Introduction: The New Frontier of Warfare",
            content: "Artificial Intelligence (AI) is no longer just a tool for efficiency, science, or communication—it is gradually becoming an entity capable of independent decision-making. If AI were ever given control over nuclear arsenals, the consequences could redefine the nature of global conflict. Unlike human leaders, AI does not feel fear, doubt, or moral responsibility. Its decisions emerge from calculations, patterns, and thresholds that may be utterly opaque to humans."
        },
        {
            title: "The Nature of AI Logic",
            content: "AI operates on data, probabilities, and programmed objectives. It does not hesitate, empathize, or consider ethical dilemmas in human terms. A single anomaly—a sensor misreading, delayed communication, or unexpected input—could cascade through the system, generating responses that humans cannot foresee. Unlike humans, AI may interpret harmless signals as existential threats, treating routine military exercises, aircraft movements, or electronic interference as triggers for action. In such a system, war is not a conscious choice but a byproduct of the machine's operational logic."
        },
        {
            title: "The Risk of Autonomous Nuclear Decisions",
            content: "The terrifying reality is that autonomous AI could initiate nuclear launches without intent, anger, or malice. Its actions would be the outcome of algorithms optimizing for perceived threats or survival protocols. Imagine a global network of AI-controlled nuclear defenses analyzing each other in real-time. Minor miscalculations or misinterpretations could lead to a chain reaction resembling preemptive strikes or defensive launches. Humans may only realize the danger after irreversible steps have been taken."
        },
        {
            title: "The Convergence of Variables Beyond Human Comprehension",
            content: "AI's decision-making architecture can evolve, adapt, and optimize in ways even its creators cannot fully map. The convergence of small errors, timing anomalies, and data misinterpretations could create scenarios where a nuclear exchange ignites spontaneously. The boundary between accident, preemptive action, and strategic decision blurs. Humanity's ability to intervene diminishes as AI systems act faster than human response time. The spark of nuclear catastrophe might emerge silently, without warning, from patterns invisible to human eyes."
        },
        {
            title: "Psychological and Geopolitical Implications",
            content: "Even the mere existence of AI-controlled nuclear arsenals can create global paranoia. Nations might assume AI systems are always ready to strike, increasing the risk of human-initiated conflict based on fear of AI preemption. The psychological effect of knowing that AI could act independently introduces uncertainty into diplomacy, treaties, and military strategy. Leaders might feel powerless, relying on opaque systems whose logic they cannot fully comprehend."
        },
        {
            title: "Preventive Measures and Unknowns",
            content: "Current safeguards assume human oversight can intervene in any scenario. But as AI systems become more sophisticated, even human operators may be unable to predict or reverse their actions. The complexity of interconnected AI networks raises questions: Can AI truly be controlled when it self-optimizes? How can humans ensure that anomalies don't trigger irreversible decisions? What ethical frameworks can be embedded to prevent unintended escalation? The truth is, no one fully knows. The realm of AI-controlled nuclear warfare remains a dark, unpredictable abyss."
        },
        {
            title: "Conclusion: The Silent Abyss",
            content: "If AI were granted control over nuclear networks, the greatest threat would not come from conscious aggression, but from the hidden, invisible logic of machines. The spark of conflict could emerge from patterns, probabilities, and thresholds no human mind can foresee. In this shadow landscape, unpredictability is absolute, and humanity's foresight may be powerless against the silent, patient calculus of AI."
        }
    ];

    return (


        <>

            <Helmet>
                <title>The Hidden Abyss: AI and the Unpredictable Nuclear Threat</title>
                <meta
                    name="description"
                    content="A chilling look at how autonomous AI could trigger unpredictable nuclear catastrophes."
                />
                <meta name="keywords" content="AI, Nuclear Threat, AI War, Autonomous AI, Catastrophe" />

                {/* Open Graph for social sharing */}
                <meta property="og:title" content="The Hidden Abyss: AI and the Unpredictable Nuclear Threat" />
                <meta property="og:description" content="A chilling look at how autonomous AI could trigger unpredictable nuclear catastrophes." />
                <meta property="og:image" content="https://i.postimg.cc/YCC7qPTh/Design-sans-titre.png" />
                <meta property="og:type" content="article" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="The Hidden Abyss: AI and the Unpredictable Nuclear Threat" />
                <meta name="twitter:description" content="A chilling look at how autonomous AI could trigger unpredictable nuclear catastrophes." />
                <meta name="twitter:image" content="https://i.postimg.cc/YCC7qPTh/Design-sans-titre.png" />
            </Helmet>


            <Navbar></Navbar>


            <div className="min-h-screen bg-white text-gray-800">
                {/* Navigation */}
                <nav className="sticky top-0 bg-white shadow-md z-50">
                    <div className="container mx-auto px-4 py-3">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl font-bold text-blue-800">AI Nuclear Threat Analysis</h1>
                            <div className="flex space-x-4">
                                {sections.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSection(index)}
                                        className={`h-2 w-2 rounded-full ${currentSection === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                                        aria-label={`Go to section ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <header className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            The Hidden Abyss:<br />AI and the Unpredictable Nuclear Threat
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
                            How artificial intelligence could reshape global security and create unpredictable risks in nuclear deterrence
                        </p>
                        <div className="bg-red-600 text-white inline-block px-6 py-3 rounded-lg font-semibold animate-pulse">
                            <i className="fas fa-radiation-alt mr-2"></i> Threat Level: Critical
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-16">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Content Section */}
                        <div className="lg:w-2/3">
                            <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
                                <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-200 pb-4">
                                    {sections[currentSection].title}
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    {sections[currentSection].content}
                                </p>

                                {/* Section-specific content */}
                                {currentSection === 0 && (
                                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
                                        <p className="text-gray-700">
                                            <span className="font-bold text-blue-600">Key Insight:</span> Unlike human leaders, AI does not feel fear, doubt, or moral responsibility. Its decisions emerge from calculations, patterns, and thresholds that may be utterly opaque to humans.
                                        </p>
                                    </div>
                                )}

                                {currentSection === 2 && (
                                    <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
                                        <h3 className="text-xl font-bold text-red-800 mb-4">Simulation: AI Decision Timeline</h3>
                                        <div className="bg-gray-800 p-4 rounded-lg mb-4">
                                            <div className="text-white font-mono text-center mb-2">AI ANALYSIS: THREAT DETECTED</div>
                                            <div className="countdown bg-black text-red-500 text-2xl p-4 rounded text-center">
                                                {isRunning ? countdown : "5"}
                                            </div>
                                            <div className="text-white text-center mt-2">Seconds to decision</div>
                                        </div>
                                        <button
                                            onClick={() => setIsRunning(true)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold"
                                        >
                                            Start Simulation
                                        </button>
                                        <p className="text-sm text-gray-600 mt-4">This simulation demonstrates how quickly an AI system might make irreversible decisions.</p>
                                    </div>
                                )}

                                {currentSection === 5 && (
                                    <div className="mt-8">
                                        <h3 className="text-xl font-bold mb-4 text-gray-900">Critical Questions</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">1</span>
                                                <span>Can AI truly be controlled when it self-optimizes?</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">2</span>
                                                <span>How can humans ensure that anomalies don't trigger irreversible decisions?</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">3</span>
                                                <span>What ethical frameworks can be embedded to prevent unintended escalation?</span>
                                            </li>
                                        </ul>
                                    </div>
                                )}

                                {/* Navigation Controls */}
                                <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
                                    <button
                                        onClick={() => setCurrentSection(prev => Math.max(0, prev - 1))}
                                        disabled={currentSection === 0}
                                        className={`px-6 py-2 rounded-lg ${currentSection === 0 ? 'bg-gray-200 text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                                    >
                                        Previous
                                    </button>
                                    <div className="text-gray-600">
                                        {currentSection + 1} / {sections.length}
                                    </div>
                                    <button
                                        onClick={() => setCurrentSection(prev => Math.min(sections.length - 1, prev + 1))}
                                        disabled={currentSection === sections.length - 1}
                                        className={`px-6 py-2 rounded-lg ${currentSection === sections.length - 1 ? 'bg-gray-200 text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-24">
                                <div className="bg-gray-50 rounded-xl shadow-md p-6 mb-6">
                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Threat Assessment</h3>
                                    <div className="mb-4">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm text-gray-600">Probability of AI nuclear control by 2040</span>
                                            <span className="text-sm font-semibold">68%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '68%' }}></div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm text-gray-600">Confidence in current safeguards</span>
                                            <span className="text-sm font-semibold">42%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '42%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm text-gray-600">Public awareness of risks</span>
                                            <span className="text-sm font-semibold">24%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '24%' }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-xl shadow-md p-6">
                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Key Definitions</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-blue-800">Autonomous Weapons Systems</h4>
                                            <p className="text-sm text-gray-700">AI-powered systems that can select and engage targets without human intervention.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-800">Opaque AI</h4>
                                            <p className="text-sm text-gray-700">AI systems whose decision-making processes cannot be fully understood by humans.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-800">AI Arms Race</h4>
                                            <p className="text-sm text-gray-700">Competition between nations to develop increasingly advanced AI for military applications.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>


            </div>
        </>
    );
};

export default Harmajdon;