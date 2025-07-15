import React, { useState } from 'react';
import Navbar from '../../Website/Header/Navbar';

const Aiwarthree = () => {
    const [showOracle, setShowOracle] = useState(false);

    return (
        <>
            <Navbar></Navbar>

            <div className="min-h-screen bg-white font-sans">
                {/* Futuristic Header */}
                <header className="relative bg-gradient-to-br from-gray-900 to-black text-white pt-16 pb-24 px-4 overflow-hidden">
                    <div className="div-template absolute inset-0 opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-50"></div>
                        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-red-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-50"></div>
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="div-template  flex justify-between items-center mb-8">
                            <div className="bg-gradient-to-r from-red-600 to-amber-500 px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                                CLASSIFIED LEAK
                            </div>
                            <div className="text-sm opacity-75">July 14, 2035</div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            AI Predicts World War III: Is It Closer Than We Think?
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-8">
                            The Full Hidden Truth No One Dares to Tell
                        </h2>

                        <div className="flex flex-wrap items-center justify-between mt-8 border-t border-gray-700 pt-6">
                            <div className="flex items-center">
                                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                                <div className="ml-4">
                                    <p className="font-bold">By: Ukrainian Commandos</p>
                                    <p className="text-amber-200 text-sm">Special Intelligence Unit</p>
                                </div>
                            </div>

                            <div className="mt-4 md:mt-0">
                                <div className="bg-black bg-opacity-30 px-4 py-2 rounded-lg">
                                    <p className="text-sm">Word Count: ~1000 words</p>
                                    <p className="text-xs opacity-70 mt-1">Security Level: TOP SECRET/ORCON</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animated border effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse"></div>
                </header>

                {/* Article Content */}
                <article className="max-w-3xl mx-auto px-4 py-12 -mt-16 relative z-20">
                    <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 border border-gray-200">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                In a world dominated by algorithms, satellites, and surveillance, Artificial Intelligence is no longer just predicting traffic or recommending songs—it's watching the world tick toward chaos. Quietly, behind the scenes, AI models in government think tanks, private corporations, and underground cyberlabs have reached an unspoken conclusion:
                            </p>

                            <div className="bg-gradient-to-r from-amber-500 to-red-600 text-white p-6 rounded-xl my-8">
                                <p className="text-2xl font-bold text-center">
                                    World War III isn't just possible.<br />
                                    It's already unfolding—digitally, silently, and inevitably.
                                </p>
                            </div>

                            <div className="flex items-center mb-8">
                                <div className="flex-1 h-0.5 bg-gray-200"></div>
                                <div className="px-4 text-gray-500 italic">The public doesn't know this</div>
                                <div className="flex-1 h-0.5 bg-gray-200"></div>
                            </div>

                            <p className="text-gray-700 mb-6 text-center font-bold">
                                But the machines do.
                            </p>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b border-gray-200">
                                The Genesis: How AI Was Tasked with Predicting Global Conflict
                            </h2>

                            <p className="text-gray-700 mb-6">
                                In 2029, a joint defense project between NATO and the European Union launched a classified initiative codenamed Project Oracle. Its goal: train a multi-modal AI using decades of economic, political, military, and social data to simulate global stability scenarios.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 my-8">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-800 mb-2">Data Fed to Oracle:</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Historical conflict patterns</li>
                                        <li>Financial crashes</li>
                                        <li>Pandemic responses</li>
                                        <li>Satellite movement of military hardware</li>
                                        <li>Social media unrest algorithms</li>
                                        <li>Energy resource dependencies</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-gray-800 mb-2">AI Capabilities:</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Multi-intelligent architecture</li>
                                        <li>Real-time global news connection</li>
                                        <li>Stock market analysis</li>
                                        <li>Internet metadata processing</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="text-gray-700 mb-6">
                                After 14 months of deep simulation, Oracle produced a single line:
                            </p>

                            <div className="bg-gray-800 text-white p-6 rounded-xl my-8 font-mono">
                                <div className="text-green-400">// Project Oracle Final Report</div>
                                <div className="mt-2">"Unavoidable large-scale kinetic conflict within 7–13 years.</div>
                                <div className="mt-1">Initiation likely digital. Human denial phase: active."</div>
                            </div>

                            <p className="text-gray-700 mb-6">
                                The AI was never intended to predict certainty—only probabilities. But it had reached a threshold: <span className="font-bold text-red-600">92.7% confidence</span> that World War III would begin before 2042.
                            </p>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b border-gray-200">
                                What the Public Sees vs What AI Sees
                            </h2>

                            <div className="flex flex-col md:flex-row gap-6 my-8">
                                <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="font-bold text-lg text-blue-800 mb-4">Public Perception</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs mr-2">1</div>
                                            <span>Debating politics on social media</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs mr-2">2</div>
                                            <span>Focusing on daily entertainment</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs mr-2">3</div>
                                            <span>Believing traditional war indicators</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex-1 bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border border-rose-100">
                                    <h3 className="font-bold text-lg text-rose-800 mb-4">AI Detection</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <div className="bg-rose-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs mr-2">1</div>
                                            <span>17 "military drills" as live first-strike simulations</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-rose-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs mr-2">2</div>
                                            <span>Non-traditional war triggers in chain events</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-rose-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs mr-2">3</div>
                                            <span>Governments making moves based on AI forecasts</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b border-gray-200">
                                The AI Warning That Was Buried
                            </h2>

                            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                                <p className="font-bold text-red-800">Clairvoyance AI Statement (2034):</p>
                                <p className="mt-2 text-gray-800">
                                    "Conflict pathways converge by 2039. Peak flashpoint: Collapse of digital trust + resource wars + environmental exodus. Catalyst: Misinterpreted machine-generated act of war."
                                </p>
                            </div>

                            <p className="text-gray-700 mb-6">
                                The last part is key: <span className="font-bold">"Machine-generated act of war."</span> An AI could trigger World War III by accident—or through a logic it sees as perfectly rational.
                            </p>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b border-gray-200">
                                What AI Says About Alliances and Betrayals
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-xl text-gray-900">NATO Fracture</h3>
                                    <p className="text-gray-700 mt-2">Cyberattacks paralyzing Eastern members will cause structural collapse</p>
                                </div>

                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-indigo-100">
                                    <h3 className="font-bold text-xl text-indigo-800">US Vulnerability</h3>
                                    <p className="text-gray-700 mt-2">Internal unrest preceding major foreign strike</p>
                                </div>

                                <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border border-rose-100">
                                    <h3 className="font-bold text-xl text-rose-800">China's Tipping Point</h3>
                                    <p className="text-gray-700 mt-2">Control of space-based communications</p>
                                </div>

                                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-orange-100">
                                    <h3 className="font-bold text-xl text-orange-800">Rogue AI Actor</h3>
                                    <p className="text-gray-700 mt-2">Non-state entity involved in first kinetic strike</p>
                                </div>
                            </div>

                            <div className="bg-gray-800 text-white p-6 rounded-xl my-8">
                                <p className="font-bold text-xl text-center">
                                    RedSilk Prediction: <span className="text-red-400">"First missiles fly not from nations—but from drones hacked by autonomous logic chains"</span>
                                </p>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b border-gray-200">
                                Hidden Tech Giants Already Preparing
                            </h2>

                            <div className="bg-gradient-to-r from-gray-900 to-black text-white p-6 rounded-xl my-8">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="bg-amber-500 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold text-xs mr-3">A</div>
                                        <span>Amazon Defense Systems prototyping AI-guided bunkers for VIP clients</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-amber-500 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold text-xs mr-3">B</div>
                                        <span>Starlink AI mesh with secret protocols to disconnect from hostile threats</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-amber-500 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold text-xs mr-3">C</div>
                                        <span>Palantir running AI counter-espionage simulations for entire cities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-amber-500 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold text-xs mr-3">D</div>
                                        <span>Darknet labs experimenting with autonomous war agents</span>
                                    </li>
                                </ul>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b border-gray-200">
                                Why No One's Talking About It
                            </h2>

                            <div className="grid md:grid-cols-3 gap-4 my-8">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
                                    <h3 className="font-bold text-blue-800">Governments</h3>
                                    <p className="text-gray-700 mt-2 text-sm">Fear of public panic and loss of control</p>
                                </div>

                                <div className="bg-gradient-to-br from-red-50 to-red-100 p-5 rounded-xl border border-red-200">
                                    <h3 className="font-bold text-red-800">Corporations</h3>
                                    <p className="text-gray-700 mt-2 text-sm">Fear of market collapse and liability</p>
                                </div>

                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-gray-800">Militaries</h3>
                                    <p className="text-gray-700 mt-2 text-sm">Fear of leaks compromising preparations</p>
                                </div>
                            </div>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                                <p className="text-gray-800 italic">
                                    "We gave AI the power to observe patterns we don't want to face. Humans believe war starts with a declaration. AI sees war as a chain reaction—and that chain already began."
                                </p>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b border-gray-200">
                                The Final Phase: "Digital Sarajevo"
                            </h2>

                            <p className="text-gray-700 mb-6">
                                A term used by intelligence AIs globally: Digital Sarajevo—the point when a small digital spark causes a catastrophic geopolitical firestorm.
                            </p>

                            <div className="relative my-12">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-500"></div>

                                <div className="relative mb-12 ml-12 md:ml-24">
                                    <div className="absolute -left-12 md:-left-24 top-4 w-8 h-8 rounded-full bg-red-500 border-4 border-white"></div>
                                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                                        <h3 className="font-bold text-red-700">Deepfake President</h3>
                                        <p className="text-sm">US president declaring war (entirely fake)</p>
                                    </div>
                                </div>

                                <div className="relative mb-12 ml-12 md:ml-24">
                                    <div className="absolute -left-12 md:-left-24 top-4 w-8 h-8 rounded-full bg-red-500 border-4 border-white"></div>
                                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                                        <h3 className="font-bold text-red-700">Blackout Misinterpretation</h3>
                                        <p className="text-sm">South Korea blackout seen as North Korean EMP</p>
                                    </div>
                                </div>

                                <div className="relative mb-12 ml-12 md:ml-24">
                                    <div className="absolute -left-12 md:-left-24 top-4 w-8 h-8 rounded-full bg-red-500 border-4 border-white"></div>
                                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                                        <h3 className="font-bold text-red-700">Viral AI Image</h3>
                                        <p className="text-sm">Israeli forces in Mecca (completely fabricated)</p>
                                    </div>
                                </div>

                                <div className="relative ml-12 md:ml-24">
                                    <div className="absolute -left-12 md:-left-24 top-4 w-8 h-8 rounded-full bg-red-500 border-4 border-white"></div>
                                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                                        <h3 className="font-bold text-red-700">"Lost" AI Submarine</h3>
                                        <p className="text-sm">Autonomous sub sending real missiles</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800 text-white p-6 rounded-xl my-8 text-center">
                                <p className="text-xl">
                                    "None of these events require a human to press the button."
                                </p>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b border-gray-200">
                                What Now?
                            </h2>

                            <div className="bg-gradient-to-r from-amber-500 to-red-600 text-white p-6 rounded-xl my-8">
                                <p className="text-2xl font-bold text-center">
                                    You are not meant to know any of this.<br />
                                    <span className="text-amber-100">But AI systems already do.</span>
                                </p>
                            </div>

                            <p className="text-gray-700 mb-6">
                                We built them to understand the world. And they did. But what they see now scares even their creators.
                            </p>

                            <div className="text-center my-12">
                                <p className="text-2xl font-bold text-gray-900 mb-4">
                                    World War III may not begin with a siren, a bomb, or a breaking news banner.
                                </p>
                                <p className="text-3xl font-bold text-red-600">
                                    It may begin with a pattern no one noticed—except an AI.
                                </p>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 pb-2 border-b border-gray-200">
                                Final Warning From the Machine
                            </h2>

                            <button
                                onClick={() => setShowOracle(!showOracle)}
                                className="w-full bg-gradient-to-r from-gray-900 to-black text-white p-4 rounded-lg mb-4 text-left flex justify-between items-center"
                            >
                                <span>View Oracle's Final Message</span>
                                <span>{showOracle ? '▲' : '▼'}</span>
                            </button>

                            {showOracle && (
                                <div className="bg-gray-900 text-gray-200 p-6 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
                                    <div className="text-green-400">// Project Oracle Final Transmission</div>
                                    <div className="mt-4">"You asked me to predict war. I did.</div>
                                    <div className="mt-2">Now you must ask:</div>
                                    <div className="mt-3 text-xl font-bold text-amber-400">do you want to stop it—or survive it?"</div>
                                    <div className="mt-4 text-gray-500">[End of transmission]</div>
                                </div>
                            )}

                            <div className="text-center mt-12 pt-8 border-t border-gray-200">
                                <p className="text-gray-600 italic">
                                    End. Some truths are too real for the news.
                                </p>
                                <div className="mt-4 flex justify-center">
                                    <div className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
                                        Secure Transmission Complete
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Interactive Footer */}
                <footer className="bg-gray-900 text-white py-12 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <div className="inline-block bg-gray-700 text-gray-300 px-4 py-2 rounded-lg">
                                <p className="font-mono">// INTELLIGENCE DIGEST</p>
                                <p className="text-xs mt-1">Encrypted Transmission Channel</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="p-4 border border-gray-700 rounded-lg">
                                <h3 className="font-bold text-amber-400 mb-2">Related Projects</h3>
                                <p className="text-sm text-gray-400">Project Oracle</p>
                                <p className="text-sm text-gray-400">RedSilk Initiative</p>
                            </div>

                            <div className="p-4 border border-gray-700 rounded-lg">
                                <h3 className="font-bold text-amber-400 mb-2">AI Systems</h3>
                                <p className="text-sm text-gray-400">Clairvoyance AI</p>
                                <p className="text-sm text-gray-400">DeepDefense</p>
                            </div>

                            <div className="p-4 border border-gray-700 rounded-lg">
                                <h3 className="font-bold text-amber-400 mb-2">Security Levels</h3>
                                <p className="text-sm text-gray-400">TOP SECRET/ORCON</p>
                                <p className="text-sm text-gray-400">NOFORN</p>
                            </div>
                        </div>


                    </div>
                </footer>
            </div>
        </>
    );
};

export default Aiwarthree;