import React from 'react';
import Navbar from '../../Component/Website/Header/Navbar';

const Brainarticle = () => {
    return (

        <>
            <Navbar></Navbar>



            <div className="bg-white text-gray-800 w-full min-h-screen p-4 sm:p-6 md:p-8">
                <article className="div-template max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 py-8 border-b border-gray-200">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            🧠 Scientists Implant Quantum Chips into Rat Brains
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Is This the Beginning of Brain-Machine Convergence?
                        </p>
                        <div className="inline-block bg-gray-100 px-6 py-4 rounded-xl">
                            <p className="text-lg italic text-gray-700">
                                "We're not just reading the brain anymore. We're starting to write to it."
                            </p>
                        </div>
                    </div>

                    {/* Introduction */}
                    <div className="mb-16">
                        <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
                            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                                In a scene that feels pulled from a science fiction thriller, a team of scientists has successfully implanted quantum-enhanced microchips into the brains of lab rats — marking what some believe could be the first step toward true brain-machine convergence.
                            </p>
                            <p className="text-xl font-bold text-gray-900 text-center my-8">
                                But what does it mean?<br />
                                And is this the beginning... of something extraordinary — or terrifying?
                            </p>
                        </div>
                    </div>

                    {/* What Happened Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-900">
                            <span className="mr-3">🔬</span> What Really Happened?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 mb-12">
                            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                                <h3 className="text-xl font-bold mb-4 text-center text-purple-800">European Research Facility</h3>
                                <div className="flex justify-center mb-4">
                                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                                </div>
                                <p className="text-gray-700 text-center">
                                    Neuroscientists and quantum engineers collaborating on a bold experiment
                                </p>
                            </div>

                            <div>
                                <p className="text-lg text-gray-700 mb-6">
                                    A group implanted ultra-small quantum neuromorphic chips into the brains of live rats. These chips aren't just tiny computers. They're designed to:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Interface directly with neurons",
                                        "Transmit quantum-encrypted brain signals",
                                        "Accelerate learning through stimulation",
                                        "Record neural data with unprecedented clarity"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-200">
                                            <span className="text-purple-600 text-xl mr-2 mt-0.5">▹</span>
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                            <p className="text-center text-xl text-gray-800">
                                Unlike traditional brain-computer interfaces (BCIs), these new chips operate using <span className="font-bold text-blue-700">quantum principles</span> — offering exponentially faster data processing and adaptive response times.
                            </p>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-900">
                            <span className="mr-3">🧬</span> What Did the Chips Do?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <h3 className="text-xl font-bold mb-4 text-purple-700">Enhanced Navigation</h3>
                                <p className="text-gray-700 mb-6">
                                    In early trials, the rats displayed enhanced navigation abilities, completing complex mazes significantly faster than control groups.
                                </p>
                                <div className="flex justify-center">
                                    <div className="bg-gray-100 w-full h-48 rounded-lg flex items-center justify-center border border-gray-300">
                                        <div className="text-center">
                                            <div className="text-5xl mb-2">🐀</div>
                                            <div className="text-blue-600 font-bold">+87% Speed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <h3 className="text-xl font-bold mb-4 text-purple-700">Accelerated Learning</h3>
                                <p className="text-gray-700 mb-6">
                                    Some rats learned without direct training — as if information was uploaded directly into their cognitive pathways.
                                </p>
                                <div className="flex justify-center">
                                    <div className="bg-gray-100 w-full h-48 rounded-lg flex items-center justify-center border border-gray-300">
                                        <div className="text-center">
                                            <div className="text-5xl mb-2">📈</div>
                                            <div className="text-blue-600 font-bold">Instant Knowledge Transfer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                            <p className="text-center text-xl italic text-gray-800">
                                "The closest thing we've seen to direct neural augmentation in a living brain."
                            </p>
                        </div>
                    </div>

                    {/* Implications Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-900">
                            <span className="mr-3">⚠️</span> Why It Matters
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            This breakthrough might seem like a niche lab story, but its implications could ripple across every field:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: "⚕️",
                                    title: "Medical Applications",
                                    items: [
                                        "Restore motor function in paralyzed patients",
                                        "Treat neurological disorders",
                                        "Enhance memory and cognition"
                                    ],
                                    color: "bg-blue-50 border-blue-200"
                                },
                                {
                                    icon: "🤖",
                                    title: "Artificial Intelligence",
                                    items: [
                                        "Fuel brain-like AIs",
                                        "Enable synthetic consciousness",
                                        "Real-time brain pattern analysis"
                                    ],
                                    color: "bg-purple-50 border-purple-200"
                                },
                                {
                                    icon: "🪖",
                                    title: "Military Use",
                                    items: [
                                        "Super-soldier enhancement",
                                        "Real-time situational awareness",
                                        "Drone control via thought"
                                    ],
                                    color: "bg-gray-100 border-gray-300"
                                }
                            ].map((section, index) => (
                                <div
                                    key={index}
                                    className={`p-6 rounded-xl border ${section.color}`}
                                >
                                    <div className="flex items-center mb-4">
                                        <span className="text-3xl mr-3">{section.icon}</span>
                                        <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                                    </div>
                                    <ul className="space-y-3 mt-4">
                                        {section.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-blue-600 mr-2 mt-1">•</span>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Human Trials */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-900">
                            <span className="mr-3">🧠</span> Rats Today — Humans Tomorrow?
                        </h2>

                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-300 mb-10">
                            <p className="text-lg text-gray-700 mb-6 text-center">
                                For now, the tests are limited to rodents. But research teams say human trials could begin within the decade.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                                    <h3 className="text-xl font-bold text-green-800 mb-4 text-center">Potential Benefits</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Cure neurological diseases",
                                            "Enhance human capabilities",
                                            "Revolutionize education",
                                            "Restore lost functions"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-center">
                                                <span className="text-green-600 mr-2">✓</span>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                                    <h3 className="text-xl font-bold text-red-800 mb-4 text-center">Potential Risks</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Loss of mental privacy",
                                            "Unintended side effects",
                                            "Cognitive dependency",
                                            "Unequal access to enhancement"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-center">
                                                <span className="text-red-600 mr-2">⚠️</span>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ethical Dilemma */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-900">
                            <span className="mr-3">🕳️</span> Down the Rabbit Hole: The Ethical Dilemma
                        </h2>

                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-300 mb-8">
                            <p className="text-lg text-gray-700 mb-8">
                                The fusion of biology and quantum computing raises urgent questions:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    "Who controls the data flowing through these chips?",
                                    "Could thoughts or emotions be altered?",
                                    "What happens if a chip malfunctions — or is hacked?",
                                    "What happens to free will when your thoughts are no longer entirely your own?"
                                ].map((question, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-lg flex items-start border border-gray-200 shadow-sm"
                                    >
                                        <span className="text-blue-600 text-2xl mr-3">?</span>
                                        <span className="text-xl text-gray-900">{question}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-8 text-center text-red-700 font-medium">
                                While governments push for regulatory frameworks, the science is moving faster than the laws can catch up.
                            </p>
                        </div>
                    </div>

                    {/* Final Thought */}
                    <div className="text-center py-12">
                        <h2 className="text-3xl font-bold mb-8 flex justify-center items-center text-gray-900">
                            <span className="mr-3">🔮</span> Final Thought: A New Era Begins
                        </h2>

                        <div className="bg-blue-50 p-8 rounded-xl border border-blue-300 mb-10">
                            <p className="text-xl text-gray-700 mb-6">
                                From smartphones to smart brains — we're watching the dawn of a new techno-biological age.
                            </p>
                            <p className="text-2xl font-bold text-gray-900 mb-6">
                                Whether it leads to superintelligence or something darker, this moment will be remembered as a turning point:
                            </p>
                            <p className="text-3xl font-bold text-purple-700">
                                The day we stopped just using technology — and began to merge with it.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
};

export default Brainarticle;