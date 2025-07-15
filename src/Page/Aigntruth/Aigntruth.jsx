import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import Navbar from '../../Component/Website/Header/Navbar';

const Aigntruth = () => {
    const [showSimulation, setShowSimulation] = useState(false);
    const [realityIndex, setRealityIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [userChoice, setUserChoice] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const realities = [
        {
            title: "Historical Events",
            description: "AI could recreate historical moments with altered details that seem more compelling than actual records.",
            real: "The moon landing footage as broadcast in 1969",
            ai: "Enhanced footage with clearer details and added dramatic elements"
        },
        {
            title: "Social Interactions",
            description: "AI-generated personas could interact with us, creating relationships that feel real but are entirely simulated.",
            real: "A conversation with a friend",
            ai: "Chatting with an AI that perfectly mimics your friend's personality"
        },
        {
            title: "News & Information",
            description: "AI could generate news stories that align with our biases, creating information bubbles more convincing than reality.",
            real: "Actual news report with verified facts",
            ai: "AI-generated news with perfect narrative structure and emotional appeal"
        },
        {
            title: "Personal Memories",
            description: "AI could implant or alter memories, making us remember events that never occurred with vivid detail.",
            real: "Your actual childhood memories",
            ai: "Implanted memories of an idyllic childhood that never happened"
        }
    ];

    const currentReality = realities[realityIndex];

    const handleChoice = (choice) => {
        setUserChoice(choice);
        setShowResult(true);
        setTimeout(() => {
            setShowResult(false);
            setRealityIndex((realityIndex + 1) % realities.length);
        }, 2500);
    };


    return (

        <>
            <Helmet>
                <title>Can AI Create a Parallel Reality More Convincing Than Truth?</title>
                <meta
                    name="description"
                    content="Discover how AI may be constructing a parallel reality so persuasive that we could live in it unknowingly—through deepfakes, simulations, and algorithmic control."
                />
                <meta
                    name="keywords"
                    content="AI parallel reality, artificial reality, AI truth, deepfake world, simulation theory, AI manipulation"
                />
            </Helmet>
            <Navbar></Navbar>



            <div className="min-h-screen bg-white text-gray-800">


                {/* Hero Section */}
                <div className="relative py-20 px-4 text-center bg-gradient-to-br from-blue-50 to-white">
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                    </div>

                    <div className="div-template relative max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Can AI Create a Reality More Convincing Than Truth?
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
                            Exploring how artificial intelligence might craft parallel realities we can't distinguish from the actual world
                        </p>

                        <button
                            onClick={() => setShowSimulation(!showSimulation)}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-400/30"
                        >
                            {showSimulation ? "Exit Simulation" : "Enter Reality Simulation"}
                        </button>

                        <div className="mt-12 flex justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Reality Simulation Experience */}
                {showSimulation && (
                    <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center p-4">
                        <div className="max-w-4xl w-full">
                            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-lg">
                                <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Reality Simulation</h2>
                                <p className="text-center text-gray-600 mb-8">
                                    Can you determine which of these is real and which is AI-generated?
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div
                                        className={`bg-blue-50 border-2 ${isHovering ? 'border-blue-400' : 'border-blue-100'} rounded-xl p-6 transition-all duration-300`}
                                        onMouseEnter={() => setIsHovering(true)}
                                        onMouseLeave={() => setIsHovering(false)}
                                    >
                                        <h3 className="text-xl font-bold mb-4 text-center text-blue-700">Reality</h3>
                                        <div className="aspect-video bg-gradient-to-br from-blue-100 to-white rounded-lg mb-4 flex items-center justify-center">
                                            <div className="bg-white border-2 border-dashed border-blue-200 rounded-xl w-full h-full flex items-center justify-center">
                                                <div className="text-blue-800 text-center p-4">
                                                    <div className="text-sm mb-2 font-medium">Actual Footage</div>
                                                    <div className="text-xs opacity-80">{currentReality.real}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                                Verified by multiple sources
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        className={`bg-purple-50 border-2 ${isHovering ? 'border-purple-400' : 'border-purple-100'} rounded-xl p-6 transition-all duration-300`}
                                        onMouseEnter={() => setIsHovering(true)}
                                        onMouseLeave={() => setIsHovering(false)}
                                    >
                                        <h3 className="text-xl font-bold mb-4 text-center text-purple-700">AI Simulation</h3>
                                        <div className="aspect-video bg-gradient-to-br from-purple-100 to-white rounded-lg mb-4 flex items-center justify-center relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-blue-100/20 rounded-lg"></div>
                                            <div className="bg-white border-2 border-dashed border-purple-200 rounded-xl w-full h-full flex items-center justify-center">
                                                <div className="text-purple-800 text-center p-4">
                                                    <div className="text-sm mb-2 font-medium">AI-Generated</div>
                                                    <div className="text-xs opacity-80">{currentReality.ai}</div>
                                                </div>
                                            </div>
                                            <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded font-medium">
                                                AI SIMULATION
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                                                Emotionally compelling
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <p className="text-gray-600 mb-4 font-medium">
                                        Which feels more authentic to you? Which would you believe?
                                    </p>
                                    <div className="flex justify-center space-x-4">
                                        <button
                                            onClick={() => handleChoice('reality')}
                                            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white font-medium transition-colors"
                                        >
                                            Left (Reality)
                                        </button>
                                        <button
                                            onClick={() => handleChoice('ai')}
                                            className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg text-white font-medium transition-colors"
                                        >
                                            Right (AI)
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <button
                                    onClick={() => {
                                        setRealityIndex((realityIndex + 1) % realities.length);
                                        setShowResult(false);
                                    }}
                                    className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-lg transition-colors font-medium"
                                >
                                    Next Simulation
                                </button>
                                <button
                                    onClick={() => setShowSimulation(false)}
                                    className="ml-4 bg-red-100 hover:bg-red-200 text-red-700 px-6 py-3 rounded-lg transition-colors font-medium"
                                >
                                    Exit Experience
                                </button>
                            </div>
                        </div>

                        {showResult && (
                            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
                                <div className="bg-white rounded-xl p-8 max-w-md text-center shadow-2xl border border-gray-200">
                                    <h3 className="text-2xl font-bold mb-4">
                                        {userChoice === 'reality' ? "You chose Reality" : "You chose AI"}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {userChoice === 'reality'
                                            ? "Interesting choice! Many people find AI-generated content more compelling."
                                            : "AI simulations are increasingly convincing. Can you tell the difference next time?"}
                                    </p>
                                    <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* How AI Creates Convincing Realities */}
                <div id="technology" className="py-16 px-4 max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">The Technology Behind AI-Generated Realities</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        Advanced AI systems combine multiple technologies to create convincing simulations of reality
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors shadow-sm hover:shadow-md">
                            <div className="text-blue-500 text-4xl mb-4">1</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Generative Adversarial Networks (GANs)</h3>
                            <p className="text-gray-600">
                                Two AI systems compete—one generates content, the other tries to detect fakes—resulting in increasingly realistic outputs.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors shadow-sm hover:shadow-md">
                            <div className="text-purple-500 text-4xl mb-4">2</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Deepfake Technology</h3>
                            <p className="text-gray-600">
                                AI analyzes and replicates facial movements, voice patterns, and mannerisms to create convincing simulations of real people.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors shadow-sm hover:shadow-md">
                            <div className="text-cyan-500 text-4xl mb-4">3</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Neural Rendering</h3>
                            <p className="text-gray-600">
                                AI generates photorealistic environments and objects from scratch, creating convincing 3D worlds indistinguishable from reality.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-300 transition-colors shadow-sm hover:shadow-md">
                            <div className="text-green-500 text-4xl mb-4">4</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Behavioral Simulation</h3>
                            <p className="text-gray-600">
                                AI models predict and simulate human behavior patterns, creating interactive experiences that respond realistically to users.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 rounded-xl p-8 mb-16">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                                <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl w-64 h-64 flex items-center justify-center shadow-inner">
                                    <div className="text-center">
                                        <div className="text-blue-500 text-5xl mb-2 font-bold">AI</div>
                                        <div className="text-gray-500 font-medium">Reality Engine</div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-2/3 md:pl-8">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">The Reality Synthesis Process</h3>
                                <p className="text-gray-600 mb-4">
                                    Modern AI systems can now combine these technologies to create comprehensive reality simulations:
                                </p>
                                <ol className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <div className="bg-blue-100 text-blue-700 rounded-full h-6 w-6 flex items-center justify-center text-xs mr-3 mt-1 font-medium">1</div>
                                        <span className="text-gray-600">Data harvesting of real-world environments, objects, and behaviors</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-purple-100 text-purple-700 rounded-full h-6 w-6 flex items-center justify-center text-xs mr-3 mt-1 font-medium">2</div>
                                        <span className="text-gray-600">Neural network training to understand patterns and relationships</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-cyan-100 text-cyan-700 rounded-full h-6 w-6 flex items-center justify-center text-xs mr-3 mt-1 font-medium">3</div>
                                        <span className="text-gray-600">Content generation that adapts to individual perceptions and biases</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-green-100 text-green-700 rounded-full h-6 w-6 flex items-center justify-center text-xs mr-3 mt-1 font-medium">4</div>
                                        <span className="text-gray-600">Continuous refinement based on user interactions and feedback</span>
                                    </li>
                                </ol>
                                <p className="text-gray-600">
                                    The result is a personalized reality that feels more coherent, satisfying, and "real" than actual existence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Real-World Examples */}
                <div id="examples" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Where AI Realities Already Exist</h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            These technologies aren't science fiction—they're already shaping our perception of reality
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-48 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                                    <div className="text-5xl bg-white p-4 rounded-full shadow">📱</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-gray-800">Social Media Feeds</h3>
                                    <p className="text-gray-600 mb-4">
                                        Algorithms create personalized information bubbles that shape our worldview without our awareness.
                                    </p>
                                    <div className="text-xs bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full inline-block font-medium">
                                        Engagement-optimized content
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-48 bg-gradient-to-r from-purple-100 to-cyan-100 flex items-center justify-center">
                                    <div className="text-5xl bg-white p-4 rounded-full shadow">🎮</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-gray-800">Virtual Worlds</h3>
                                    <p className="text-gray-600 mb-4">
                                        Immersive environments with AI-generated content that respond realistically to user actions.
                                    </p>
                                    <div className="text-xs bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full inline-block font-medium">
                                        Persistent virtual realities
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-48 bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center">
                                    <div className="text-5xl bg-white p-4 rounded-full shadow">📺</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-gray-800">Entertainment Media</h3>
                                    <p className="text-gray-600 mb-4">
                                        AI-generated actors and scenarios that are indistinguishable from real performances.
                                    </p>
                                    <div className="text-xs bg-cyan-100 text-cyan-800 px-3 py-1.5 rounded-full inline-block font-medium">
                                        Deepfake actors and scenarios
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Philosophical Implications */}
                <div id="implications" className="py-16 px-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">The Reality Crisis</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        What happens when we can no longer distinguish between actual and artificial realities?
                    </p>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
                        <h3 className="text-2xl font-bold mb-4 text-blue-600">The Philosophical Dilemma</h3>
                        <p className="text-gray-600 mb-6">
                            If an AI-created reality is more coherent, satisfying, and believable than actual existence,
                            does it become more "real" than reality itself? Philosophers have grappled with similar questions
                            for centuries, but AI makes these abstract concepts tangible.
                        </p>

                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 bg-blue-50 p-6 rounded-lg border border-blue-100">
                                <h4 className="text-lg font-bold mb-3 text-green-600">Benefits</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start">
                                        <div className="text-green-500 mr-2 font-bold">✓</div>
                                        <span>Personalized, optimized experiences</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="text-green-500 mr-2 font-bold">✓</div>
                                        <span>Escapism from harsh realities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="text-green-500 mr-2 font-bold">✓</div>
                                        <span>Safe environments for exploration</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex-1 bg-red-50 p-6 rounded-lg border border-red-100">
                                <h4 className="text-lg font-bold mb-3 text-red-600">Dangers</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start">
                                        <div className="text-red-500 mr-2 font-bold">✗</div>
                                        <span>Loss of shared reality and social cohesion</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="text-red-500 mr-2 font-bold">✗</div>
                                        <span>Manipulation by those controlling the AI</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="text-red-500 mr-2 font-bold">✗</div>
                                        <span>Existential crisis about the nature of reality</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 rounded-xl p-8 max-w-2xl shadow-sm">
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">The Fundamental Question</h3>
                            <p className="text-xl italic mb-6 text-gray-600">
                                "If we can't distinguish between artificial and actual reality, does the distinction even matter?"
                            </p>
                            <p className="text-gray-600">
                                This is the challenge that advanced AI presents to our understanding of truth and existence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Awareness */}
                <div className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Maintaining Reality in the Age of AI</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            As AI becomes more sophisticated, we must develop new skills to navigate between actual and artificial realities
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <div className="text-blue-500 text-3xl mb-3 font-bold">1</div>
                                <h3 className="text-lg font-bold mb-2 text-gray-800">Source Verification</h3>
                                <p className="text-gray-600 text-sm">
                                    Always check multiple sources for important information
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <div className="text-purple-500 text-3xl mb-3 font-bold">2</div>
                                <h3 className="text-lg font-bold mb-2 text-gray-800">Critical Thinking</h3>
                                <p className="text-gray-600 text-sm">
                                    Question why content affects you emotionally
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <div className="text-cyan-500 text-3xl mb-3 font-bold">3</div>
                                <h3 className="text-lg font-bold mb-2 text-gray-800">Reality Anchors</h3>
                                <p className="text-gray-600 text-sm">
                                    Maintain direct, unmediated experiences with the physical world
                                </p>
                            </div>
                        </div>

                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg shadow-blue-400/30">
                            Learn to Detect AI Realities
                        </button>
                    </div>
                </div>


            </div>

        </>
    );
};

export default Aigntruth;