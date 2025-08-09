import React, { useState } from 'react';
import Navbar from '../../Website/Header/Navbar';
import { Helmet } from "react-helmet";

const Aigame = () => {
    const [isGlitchActive, setIsGlitchActive] = useState(false);
    const [playerScore, setPlayerScore] = useState(0);
    const [aiScore, setAiScore] = useState(0);
    const [gameActive, setGameActive] = useState(false);

    const triggerGlitch = () => {
        setIsGlitchActive(true);
        setTimeout(() => setIsGlitchActive(false), 300);
    };

    const playGame = () => {
        setGameActive(true);
        setPlayerScore(0);
        setAiScore(0);

        // Simulate gameplay
        const interval = setInterval(() => {
            setPlayerScore(prev => {
                const newScore = prev + Math.floor(Math.random() * 5);
                if (newScore >= 100) {
                    clearInterval(interval);
                    setGameActive(false);
                    triggerGlitch();
                    return 100;
                }
                return newScore;
            });

            setAiScore(prev => {
                const newScore = prev + Math.floor(Math.random() * 8);
                if (newScore >= 100) {
                    clearInterval(interval);
                    setGameActive(false);
                    triggerGlitch();
                    return 100;
                }
                return newScore;
            });
        }, 300);
    };

    return (

        <>
            <Helmet>
                <title>Can AI Generate Content That Outperforms Human Creators?</title>
                <meta
                    name="description"
                    content="Exploring whether AI-generated content can surpass human creativity. Analyzing strengths, biases, and best collaborative practices."
                />
                <meta property="og:title" content="AI vs Human Creators: Who Wins?" />
                <meta
                    property="og:description"
                    content="Discover how AI stacks up against human creators—where it excels, where it falls short, and why hybrid workflows may be the future."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/ai-evolving-game" />
            </Helmet>
            <Navbar></Navbar>


            <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
                <div className="div-template max-w-6xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-12 mt-8">
                        <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                            Gaming Revolution
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            🎮 Can AI Create a Game You Can't Beat?
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Welcome to the era of unbeatable games that learn and adapt to your every move
                        </p>
                    </header>

                    {/* Interactive Demo */}
                    <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-800">AI vs Human Challenge</h2>
                                <button
                                    onClick={playGame}
                                    disabled={gameActive}
                                    className={`px-4 py-2 rounded-lg font-medium ${gameActive
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90'
                                        }`}
                                >
                                    {gameActive ? 'Playing...' : 'Start Challenge'}
                                </button>
                            </div>

                            <div className={`relative h-64 rounded-xl overflow-hidden border border-gray-300 ${isGlitchActive ? 'animate-pulse' : ''}`}>
                                <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
                                    <div className="grid grid-cols-5 gap-2 mb-8">
                                        {[...Array(25)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-8 h-8 rounded-md bg-gradient-to-br from-purple-100 to-blue-100 border border-gray-300 flex items-center justify-center"
                                            >
                                                {i === 12 ? '🎮' : ''}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="w-full max-w-md">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-800 font-medium">Player</span>
                                            <span className="text-gray-800 font-medium">AI</span>
                                        </div>
                                        <div className="flex h-6 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white text-xs font-bold"
                                                style={{ width: `${playerScore}%` }}
                                            >
                                                {playerScore > 10 && `${playerScore}%`}
                                            </div>
                                            <div
                                                className="bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white text-xs font-bold"
                                                style={{ width: `${aiScore}%` }}
                                            >
                                                {aiScore > 10 && `${aiScore}%`}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                    {gameActive ? 'Live Adaptation' : 'Ready'}
                                </div>
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm">
                                    Nemesis Protocol
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-gray-600">
                                    {aiScore === 100 ? "AI wins! It adapted to your strategy" :
                                        playerScore === 100 ? "You won! But the AI will remember..." :
                                            "The AI learns and counters your every move in real-time"}
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                                <span className="mr-2">🧠</span> The Brain Behind the Game
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Reinforcement learning algorithms analyze your play style in real time, predict your next move, and dynamically change the game to counter your strategies.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-6">
                                {[
                                    { icon: '🔍', title: 'Play Style Analysis', color: 'bg-blue-100' },
                                    { icon: '🎯', title: 'Move Prediction', color: 'bg-purple-100' },
                                    { icon: '🔄', title: 'Dynamic Difficulty', color: 'bg-indigo-100' },
                                    { icon: '🧩', title: 'Mutating Puzzles', color: 'bg-violet-100' },
                                ].map((feature, index) => (
                                    <div key={index} className={`p-4 rounded-xl ${feature.color} border border-gray-200`}>
                                        <div className="text-2xl mb-2">{feature.icon}</div>
                                        <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* How It Works */}
                    <div className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🕹️</span> How It Works
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Adaptive Level Design",
                                    description: "Regenerates levels dynamically to block your habits",
                                    icon: "🌌"
                                },
                                {
                                    title: "Learning Enemies",
                                    description: "AI enemies learn your timing and dodge your combos",
                                    icon: "👾"
                                },
                                {
                                    title: "Mutating Puzzles",
                                    description: "Puzzles change if you solve them too quickly",
                                    icon: "🧩"
                                },
                                {
                                    title: "Scalable Boss AI",
                                    description: "Boss intelligence scales with your performance",
                                    icon: "👑"
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-6">
                            <div className="flex items-start">
                                <div className="text-4xl mr-4">💡</div>
                                <div>
                                    <p className="text-gray-700 italic">
                                        "It's like playing chess against an opponent that upgrades itself between turns. Even rage-quitting feels like a win."
                                    </p>
                                    <div className="mt-4 flex items-center">
                                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                                        <div>
                                            <p className="text-sm font-medium">Professional Streamer</p>
                                            <p className="text-xs text-gray-500">On Nemesis Protocol</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Game Experience */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6">
                            <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                                <span className="mr-2">👾</span> The Nemesis Protocol Experience
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Evolving Final Boss",
                                        description: "Remembers your strategy and counters it in the next attempt",
                                        icon: "👹"
                                    },
                                    {
                                        title: "Weapon Adaptation",
                                        description: "Counters new weapons with armor upgrades",
                                        icon: "⚔️"
                                    },
                                    {
                                        title: "Environmental Response",
                                        description: "Destroys cover when you camp behind it",
                                        icon: "🏰"
                                    },
                                    {
                                        title: "Persistent Learning",
                                        description: "Remembers your tactics across gaming sessions",
                                        icon: "📚"
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
                                        <div className="text-2xl mr-4">{feature.icon}</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-6 mb-8">
                                <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                                    <span className="mr-2">⚠️</span> Are Unbeatable Games Fun?
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                                        <h3 className="font-bold text-lg text-gray-800 mb-3">Pros</h3>
                                        <ul className="space-y-2 text-gray-700">
                                            {[
                                                "Ultimate test of skill and adaptability",
                                                "Endless challenge without repetition",
                                                "Personalized gaming experience",
                                                "Deep immersion through AI interaction"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="text-green-500 mr-2">✓</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                                        <h3 className="font-bold text-lg text-gray-800 mb-3">Cons</h3>
                                        <ul className="space-y-2 text-gray-700">
                                            {[
                                                "Demoralizing constant losses",
                                                "Human pattern recognition becomes useless",
                                                "Risk of breaking fun/reward loop",
                                                "Potential frustration and burnout"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="text-red-500 mr-2">⚠️</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                <h3 className="font-bold text-lg text-gray-800 mb-3">Psychologist Insight</h3>
                                <p className="text-gray-700">
                                    "While adaptive difficulty enhances immersion, games that 'always win' risk breaking the core loop of fun, reward, and mastery. The key is balance - challenge without frustration."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* AI as Game Designer */}
                    <div className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🎯</span> The Bigger Picture: AI as Game Designer
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: '📖', title: 'Dynamic Storylines', color: 'bg-indigo-100' },
                                        { icon: '🎵', title: 'Adaptive Music', color: 'bg-purple-100' },
                                        { icon: '👥', title: 'Human-like Bots', color: 'bg-blue-100' },
                                        { icon: '🌍', title: 'Infinite Worlds', color: 'bg-violet-100' }
                                    ].map((item, index) => (
                                        <div key={index} className={`p-4 rounded-lg ${item.color}`}>
                                            <div className="text-3xl mb-2">{item.icon}</div>
                                            <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6">
                                    <p className="mb-4">
                                        Soon, no two players may experience the same game twice. AI is creating truly personalized gaming experiences:
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            "Stories that adapt to emotional choices",
                                            "Music that changes with your mood",
                                            "Enemies that learn from top players",
                                            "Worlds that evolve with your exploration"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-center">
                                                <span className="text-yellow-400 mr-2">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Thought */}
                    <div className="text-center py-12 border-t border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            🔮 Final Thought: Who's Playing Who?
                        </h2>

                        <div className="max-w-2xl mx-auto">
                            <p className="text-gray-700 text-lg mb-6">
                                As AI continues to blur the line between player and opponent, one eerie question remains:
                            </p>

                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-gray-200 mb-8">
                                <p className="text-xl font-bold text-gray-800 italic">
                                    "If the game learns you so well that it always wins, who's really playing whom?"
                                </p>
                            </div>

                            <div className="flex justify-center">
                                <div className="bg-white border border-gray-200 rounded-xl p-6 inline-block max-w-md">
                                    <p className="text-gray-800 font-medium">
                                        Whether it's genius or diabolical, one thing's clear: The final boss of gaming may not be a monster — it may be the machine itself.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI Gaming Future */}
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mb-16">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">The Future of AI Gaming</h3>
                            <p className="mb-6 opacity-90">
                                Games that evolve, adapt, and challenge us in ways previously unimaginable
                            </p>
                            <div className="inline-flex flex-wrap justify-center gap-3">
                                {[
                                    'Reinforcement Learning',
                                    'Neural Networks',
                                    'Dynamic Adaptation',
                                    'Personalized Challenges',
                                    'Endless Evolution'
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

export default Aigame;