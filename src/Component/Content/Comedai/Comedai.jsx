import React, { useState, useEffect } from 'react';
import Navbar from '../../Website/Header/Navbar';

const Comedai = () => {
    const [currentJoke, setCurrentJoke] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [applauseLevel, setApplauseLevel] = useState(0);
    const [showPunchline, setShowPunchline] = useState(false);

    // AI-generated comedy bits
    const jokes = [
        "I told my toaster I was going gluten-free. It refused to make eye contact for three days.",
        "I asked my smart fridge for dating advice. It said, 'Lower your standards or your expectations — whichever fits in the freezer.'",
        "My AI assistant tried to cheer me up. It said, 'Don't worry, statistically speaking, you're someone's type.' Then it paused and added, 'The error margin is plus or minus 98%.'",
        "I asked my smart speaker to tell me a joke about AI. It said, 'Why did the neural network cross the road? To classify the chicken!' ... I didn't laugh. It replied, 'Fine. How about this? 01001000 01000001 01001000 01000001'",
        "My robot vacuum started avoiding me after I called it 'Dusty'. Now it only cleans when I'm asleep. Passive-aggressive tech is the future.",
        "I tried to teach my AI about sarcasm. Now whenever I ask it for help, it says, 'Oh sure, I'd LOVE to help you with THAT.'",
        "My smart watch told me I need to relax. Then it showed me an ad for anxiety medication. Talk about mixed signals.",
        "I told ChatGPT I was writing a joke about printers. It said, 'That's a low-hanging fruit.' I said, 'Exactly! Like my printer's paper tray.'"
    ];

    const topics = [
        "Dating Apps",
        "Office Life",
        "Smart Home Tech",
        "AI Paradoxes",
        "Social Media",
        "Food & Diet",
        "Parenting",
        "Politics"
    ];

    // Generate a new joke
    const generateJoke = () => {
        setIsLoading(true);
        setShowPunchline(false);
        setApplauseLevel(0);

        // Simulate AI thinking time
        setTimeout(() => {
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            setCurrentJoke(randomJoke);
            setIsLoading(false);
        }, 1500);
    };

    // Reveal punchline
    const revealPunchline = () => {
        if (currentJoke && !showPunchline) {
            setShowPunchline(true);
            setApplauseLevel(Math.floor(Math.random() * 5) + 6); // Random applause 6-10
        }
    };

    // Initialize with a joke
    useEffect(() => {
        generateJoke();
    }, []);

    return (

        <>
            <Navbar></Navbar>


            <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
                <div className="div-template max-w-6xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-12 mt-8">
                        <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                            Comedy Revolution
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            What Happens When You Let AI Create Stand-Up Comedy?
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Machines are taking the stage, delivering punchlines, and surprisingly... getting laughs
                        </p>
                    </header>

                    {/* Comedy Stage */}
                    <div className="mb-16 relative">
                        <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gradient-to-b from-gray-900 to-black">
                            {/* Stage */}
                            <div className="h-96 flex flex-col items-center justify-center relative overflow-hidden">
                                {/* Spotlight */}
                                <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-yellow-300/10 to-transparent"></div>

                                {/* AI Comedian */}
                                <div className="relative z-10 text-center">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                                        <span className="text-4xl">🤖</span>
                                    </div>

                                    {/* Microphone */}
                                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                                        <div className="w-4 h-12 bg-gray-300 rounded-full mx-auto"></div>
                                        <div className="w-8 h-8 bg-gray-400 rounded-full -mt-4 mx-auto"></div>
                                    </div>

                                    {/* Joke */}
                                    <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
                                        {isLoading ? (
                                            <div className="flex items-center justify-center">
                                                <div className="animate-pulse text-gray-300">
                                                    <div className="h-4 bg-gray-700 rounded w-48 mb-3"></div>
                                                    <div className="h-4 bg-gray-700 rounded w-64"></div>
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-white text-lg">
                                                {showPunchline ? currentJoke : currentJoke.split('. ')[0] + '.'}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Audience */}
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent flex items-center justify-center">
                                    <div className="flex space-x-1">
                                        {[...Array(10)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-4 h-4 rounded-full ${i < applauseLevel ? 'bg-yellow-400 animate-bounce' : 'bg-gray-700'
                                                    }`}
                                                style={{
                                                    animationDelay: `${i * 0.1}s`,
                                                    opacity: i < applauseLevel ? 1 : 0.3
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Stage Label */}
                            <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                <span>AI Comedy Night - Live</span>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                            <button
                                onClick={generateJoke}
                                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
                            >
                                {isLoading ? 'Generating...' : 'New Joke'}
                            </button>
                            <button
                                onClick={revealPunchline}
                                disabled={isLoading || showPunchline}
                                className={`px-6 py-3 rounded-full font-medium ${isLoading || showPunchline
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                    }`}
                            >
                                Reveal Punchline
                            </button>
                        </div>
                    </div>

                    {/* How AI Creates Humor */}
                    <div className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🤖</span> What Makes a Machine Funny?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-gray-700 mb-6">
                                    Comedy relies on pattern recognition, surprise, and timing—areas where modern AI excels.
                                    While AI doesn't feel humor, it can model it by analyzing thousands of comedy routines.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        { icon: '🔍', title: 'Pattern Recognition', desc: 'Identifying common joke structures and setups' },
                                        { icon: '🎭', title: 'Surprise & Misdirection', desc: 'Creating unexpected twists in punchlines' },
                                        { icon: '⏱️', title: 'Timing Analysis', desc: 'Learning optimal pacing from human comedians' },
                                        { icon: '🌐', title: 'Cultural Relevance', desc: 'Incorporating current topics and references' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start p-4 bg-white border border-gray-200 rounded-xl">
                                            <div className="text-2xl mr-4">{item.icon}</div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                                <p className="text-gray-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6">
                                <h3 className="font-bold text-lg text-gray-800 mb-4">Comedy Writing Process</h3>
                                <div className="relative">
                                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                                    <div className="space-y-8 pl-10">
                                        {[
                                            {
                                                step: "Data Collection",
                                                desc: "Analyzing thousands of comedy specials and scripts",
                                                icon: "📚"
                                            },
                                            {
                                                step: "Pattern Extraction",
                                                desc: "Identifying joke structures and comedic timing",
                                                icon: "🧩"
                                            },
                                            {
                                                step: "Context Understanding",
                                                desc: "Learning cultural references and topics",
                                                icon: "🌍"
                                            },
                                            {
                                                step: "Joke Generation",
                                                desc: "Creating original material based on patterns",
                                                icon: "💡"
                                            },
                                            {
                                                step: "Human Refinement",
                                                desc: "Comedians filter and improve AI output",
                                                icon: "👨‍🎤"
                                            }
                                        ].map((step, index) => (
                                            <div key={index} className="relative">
                                                <div className="absolute -left-10 top-2 w-8 h-8 rounded-full bg-purple-100 border-4 border-white flex items-center justify-center text-purple-600">
                                                    {step.icon}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-gray-800">{step.step}</div>
                                                    <div className="text-gray-600 text-sm">{step.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Real Experiments */}
                    <div className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🔬</span> Real-World Experiments
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {[
                                {
                                    title: "AI vs Humans",
                                    description: "In London clubs, AI-generated sets competed against human comedians",
                                    result: "Audiences sometimes preferred AI sets",
                                    icon: "🎭"
                                },
                                {
                                    title: "Late Night Writers",
                                    description: "Comedy writers using AI for monologue brainstorming",
                                    result: "Faster first drafts with human refinement",
                                    icon: "📺"
                                },
                                {
                                    title: "YouTube Channels",
                                    description: "Animated AI comedians with fully AI-written scripts",
                                    result: "Channels gaining thousands of subscribers",
                                    icon: "📹"
                                }
                            ].map((exp, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-3xl mb-3">{exp.icon}</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-1">{exp.title}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{exp.description}</p>
                                    <div className="bg-purple-50 p-2 rounded-lg">
                                        <p className="text-purple-700 font-medium text-sm">Result: {exp.result}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Comedy Club Image */}
                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden">
                            <img
                                src="https://i.postimg.cc/Y0JfRTN6/ai-comedy-stage.jpg"
                                alt="AI performing stand-up comedy on stage"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-gray-600 text-sm text-center">
                                    Conceptual image of an AI comedian on stage with a glowing audience
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Limitations */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-2xl p-6">
                            <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                                <span className="mr-2">⚠️</span> Limitations & Challenges
                            </h2>

                            <div className="space-y-4">
                                {[
                                    {
                                        title: "Sarcasm & Irony",
                                        description: "AI struggles with nuanced delivery of sarcastic humor",
                                        icon: "😏"
                                    },
                                    {
                                        title: "Cultural Nuance",
                                        description: "Jokes that work in one culture may offend in another",
                                        icon: "🌍"
                                    },
                                    {
                                        title: "Room Reading",
                                        description: "AI can't adapt material based on audience reactions",
                                        icon: "👂"
                                    },
                                    {
                                        title: "Originality",
                                        description: "Risk of generating derivative or recycled humor",
                                        icon: "✨"
                                    },
                                    {
                                        title: "Edge Cases",
                                        description: "Potential for generating offensive or inappropriate content",
                                        icon: "🚫"
                                    }
                                ].map((limit, index) => (
                                    <div key={index} className="flex items-start p-3 bg-white rounded-lg border border-orange-200">
                                        <div className="text-2xl mr-4">{limit.icon}</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{limit.title}</h3>
                                            <p className="text-gray-600 text-sm">{limit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6 h-full">
                                <h3 className="text-xl font-bold mb-4">The Danger of Cringe</h3>
                                <p className="mb-4 opacity-90">
                                    When AI humor misses the mark, it creates uniquely awkward moments:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        Jokes that are technically correct but emotionally flat
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        Punchlines that make logical sense but aren't funny
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        References that feel outdated or mismatched
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-yellow-400 mr-2">•</span>
                                        Attempts at edgy humor that cross lines
                                    </li>
                                </ul>
                                <div className="mt-6 bg-gray-800 p-4 rounded-lg">
                                    <p className="italic">
                                        "The worst AI comedy isn't offensive—it's just painfully unfunny in that uniquely robotic way."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI Comedy Topics */}
                    <div className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🎤</span> AI's Favorite Comedy Topics
                        </h2>

                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6">
                            <div className="flex flex-wrap gap-3 justify-center">
                                {topics.map((topic, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 bg-white border border-gray-300 rounded-full hover:shadow-md transition-shadow"
                                    >
                                        {topic}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-5 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-lg text-gray-800 mb-3">Common AI Joke Structures</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        {[
                                            "Tech anthropomorphism (giving devices human traits)",
                                            "Literal interpretations of figurative language",
                                            "Unexpected data-driven conclusions",
                                            "Self-referential humor about being an AI",
                                            "Mixing high-tech concepts with mundane situations"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-purple-500 mr-2">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white p-5 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-lg text-gray-800 mb-3">Human vs AI Comedy</h3>
                                    <div className="space-y-4">
                                        {[
                                            { label: "Emotional authenticity", human: "★★★★★", ai: "★★☆☆☆" },
                                            { label: "Cultural relevance", human: "★★★★☆", ai: "★★★☆☆" },
                                            { label: "Original premises", human: "★★★★☆", ai: "★★☆☆☆" },
                                            { label: "Technical precision", human: "★★★☆☆", ai: "★★★★★" },
                                            { label: "Consistency", human: "★★★☆☆", ai: "★★★★★" }
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center">
                                                <span className="w-32 text-gray-700 text-sm">{item.label}</span>
                                                <div className="flex-1 mx-2">
                                                    <div className="flex">
                                                        <span className="text-yellow-400">Human: {item.human}</span>
                                                        <span className="mx-4 text-gray-300">|</span>
                                                        <span className="text-purple-500">AI: {item.ai}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Thought */}
                    <div className="text-center py-12 border-t border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Final Thought: The Future of Funny
                        </h2>

                        <div className="max-w-2xl mx-auto">
                            <p className="text-gray-700 text-lg mb-6">
                                So, can AI make us laugh? Maybe not like George Carlin or Ali Wong — but it's getting closer than we ever expected.
                            </p>

                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-gray-200 mb-8">
                                <p className="text-xl font-bold text-gray-800 italic">
                                    "In a world where laughter is becoming as programmable as playlists, your next favorite joke might not come from a comedy club... but from the cloud."
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg text-gray-800 mb-3">Today</h3>
                                    <p className="text-gray-600">
                                        AI as a writing assistant for human comedians
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg text-gray-800 mb-3">Tomorrow</h3>
                                    <p className="text-gray-600">
                                        Fully AI-driven comedy specials with digital performers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comedy Tech */}
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white mb-16">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">The Future of AI Comedy</h3>
                            <p className="mb-6 opacity-90">
                                Where algorithms meet punchlines, and machines learn to make us laugh
                            </p>
                            <div className="inline-flex flex-wrap justify-center gap-3">
                                {[
                                    'Neural Networks',
                                    'Humor Datasets',
                                    'Timing Algorithms',
                                    'Cultural Context',
                                    'Emotion Modeling',
                                    'Generative Comedy'
                                ].map((term, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
                                    >
                                        {term}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Comedai;