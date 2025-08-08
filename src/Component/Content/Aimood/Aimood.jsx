import React, { useState } from 'react';
import Navbar from '../../Website/Header/Navbar';

const Aimood = () => {
    const [currentMood, setCurrentMood] = useState('happy');
    const [isPlaying, setIsPlaying] = useState(false);

    const moods = [
        { id: 'happy', name: 'Happy', color: 'bg-yellow-100', icon: '😄' },
        { id: 'chill', name: 'Chill', color: 'bg-blue-100', icon: '😌' },
        { id: 'energized', name: 'Energized', color: 'bg-orange-100', icon: '⚡' },
        { id: 'focused', name: 'Focused', color: 'bg-green-100', icon: '🎯' },
        { id: 'nostalgic', name: 'Nostalgic', color: 'bg-purple-100', icon: '🕰️' },
    ];

    const useCases = [
        {
            title: 'Working Late',
            description: 'AI detects stress and lowers tempo while keeping you alert',
            mood: 'focused',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80'
        },
        {
            title: 'Post-Breakup',
            description: 'DJ slides into mellow, introspective acoustic tracks',
            mood: 'nostalgic',
            image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80'
        },
        {
            title: 'Gym Session',
            description: 'Boosts tempo, drops heavy bass, adapts to your pace',
            mood: 'energized',
            image: 'https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80'
        },
        {
            title: 'Studying',
            description: 'Fades vocals, increases white noise, maintains steady rhythm',
            mood: 'focused',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80'
        },
        {
            title: 'Party Time',
            description: 'Detects excitement and creates high-energy dance mixes',
            mood: 'happy',
            image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80'
        },
    ];

    const feedbacks = [
        {
            text: "It was like someone was DJing my soul.",
            author: "Alex T."
        },
        {
            text: "The music knew I was sad before I admitted it.",
            author: "Maria L."
        },
        {
            text: "It adjusted the mix just as I started feeling tired. Creepy… but amazing.",
            author: "David K."
        },
        {
            text: "Never knew I needed a DJ that reads my mind until now.",
            author: "Sophie R."
        }
    ];

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
                <meta property="og:url" content="https://fyrexia.co.uk/ai-mood-dj" />
            </Helmet>

            <Navbar></Navbar>


            <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
                <div className="div-template max-w-6xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-10 mt-8">
                        <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                            Music Revolution
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            🎶 This AI DJ Mixes Music Based on Your Mood — Instantly
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Digital music companions that create live, personalized sets evolving with your emotions
                        </p>
                    </header>

                    {/* Mood DJ Demo */}
                    <div className="mb-16 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                                    <span className="mr-2">🧠</span> How It Works
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    AI DJs read your emotional state and create personalized mixes in real-time by analyzing:
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: '😊', title: 'Facial Recognition', color: 'bg-yellow-100' },
                                        { icon: '🎤', title: 'Voice Tone', color: 'bg-blue-100' },
                                        { icon: '⌚', title: 'Biometric Data', color: 'bg-green-100' },
                                        { icon: '🎧', title: 'Listening Habits', color: 'bg-purple-100' },
                                    ].map((feature, index) => (
                                        <div key={index} className={`p-4 rounded-xl ${feature.color}`}>
                                            <div className="text-2xl mb-2">{feature.icon}</div>
                                            <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <div className="text-sm text-gray-400">NOW PLAYING</div>
                                        <h3 className="text-xl font-bold">
                                            {currentMood === 'happy' && "Sunshine Vibes - AI Mix"}
                                            {currentMood === 'chill' && "Chillout Session - AI Mix"}
                                            {currentMood === 'energized' && "Energy Boost - AI Mix"}
                                            {currentMood === 'focused' && "Deep Focus - AI Mix"}
                                            {currentMood === 'nostalgic' && "Nostalgia Trip - AI Mix"}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center"
                                    >
                                        {isPlaying ? '⏸' : '▶'}
                                    </button>
                                </div>

                                <div className="mb-6">
                                    <div className="h-2 bg-gray-700 rounded-full mb-2">
                                        <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" style={{ width: '65%' }}></div>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-400">
                                        <span>1:25</span>
                                        <span>4:30</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-bold mb-3">Current Mood Detection</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {moods.map(mood => (
                                            <button
                                                key={mood.id}
                                                onClick={() => setCurrentMood(mood.id)}
                                                className={`px-4 py-2 rounded-full flex items-center ${currentMood === mood.id
                                                    ? 'bg-white text-black'
                                                    : 'bg-gray-800 text-gray-300'
                                                    }`}
                                            >
                                                <span className="mr-2">{mood.icon}</span> {mood.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-400">BPM</span>
                                        <span className="font-mono">
                                            {currentMood === 'happy' && "128"}
                                            {currentMood === 'chill' && "92"}
                                            {currentMood === 'energized' && "140"}
                                            {currentMood === 'focused' && "100"}
                                            {currentMood === 'nostalgic' && "85"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Genre Blend</span>
                                        <span>
                                            {currentMood === 'happy' && "Pop + Dance"}
                                            {currentMood === 'chill' && "Lo-fi + Jazz"}
                                            {currentMood === 'energized' && "EDM + Hip-hop"}
                                            {currentMood === 'focused' && "Ambient + Classical"}
                                            {currentMood === 'nostalgic' && "Indie + Retro"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Platforms Section */}
                    <div className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🎛️</span> Platforms Already Doing It
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    name: "Endel",
                                    description: "Personalized soundscapes based on mood, time, and heart rate",
                                    icon: "🌊"
                                },
                                {
                                    name: "Mubert",
                                    description: "AI-generated music for focus, sleep, or energy",
                                    icon: "🌀"
                                },
                                {
                                    name: "Emoclear",
                                    description: "Adapts music to real-time facial expressions",
                                    icon: "😊"
                                },
                                {
                                    name: "Spotify Mood DJ",
                                    description: "AI-based 'mood sessions' via prompts and wearables",
                                    icon: "🎧"
                                }
                            ].map((platform, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-3xl mb-4">{platform.icon}</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2">{platform.name}</h3>
                                    <p className="text-gray-600">{platform.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Use Cases with Images */}
                    <div className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🎵</span> Real-World Use Cases
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {useCases.map((usecase, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={usecase.image}
                                            alt={usecase.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center mb-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${usecase.mood === 'happy' ? 'bg-yellow-100' :
                                                usecase.mood === 'chill' ? 'bg-blue-100' :
                                                    usecase.mood === 'energized' ? 'bg-orange-100' :
                                                        usecase.mood === 'focused' ? 'bg-green-100' : 'bg-purple-100'
                                                }`}>
                                                {usecase.mood === 'happy' ? '😄' :
                                                    usecase.mood === 'chill' ? '😌' :
                                                        usecase.mood === 'energized' ? '⚡' :
                                                            usecase.mood === 'focused' ? '🎯' : '🕰️'}
                                            </div>
                                            <h3 className="font-bold text-gray-800 text-lg">{usecase.title}</h3>
                                        </div>
                                        <p className="text-gray-600">{usecase.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* User Feedback */}
                    <div className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">😲</span> Real User Feedback
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {feedbacks.map((feedback, index) => (
                                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6">
                                    <div className="flex items-start">
                                        <div className="text-4xl mr-4">💬</div>
                                        <div>
                                            <p className="text-gray-700 italic mb-4">"{feedback.text}"</p>
                                            <p className="text-gray-600">— {feedback.author}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controversy Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="bg-gradient-to-br from-red-50 to-white border border-red-200 rounded-2xl p-6">
                            <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                                <span className="mr-2">⚠️</span> The Controversy
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-lg text-gray-800 mb-3">Privacy Concerns</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-red-500 mr-2">•</span> Is your mood data being stored?
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-500 mr-2">•</span> Could it be used for ads or profiling?
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-500 mr-2">•</span> Do we want machines influencing how we feel?
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg text-gray-800 mb-3">Ethical Debate</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                                            <h4 className="font-medium text-gray-800 mb-2">Critics Say</h4>
                                            <p className="text-gray-600 text-sm">
                                                "It's emotional manipulation wrapped in music"
                                            </p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                                            <h4 className="font-medium text-gray-800 mb-2">Supporters Say</h4>
                                            <p className="text-gray-600 text-sm">
                                                "It's simply next-gen personalization"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6 h-full">
                                <h3 className="text-xl font-bold mb-4">The Future of Emotional AI</h3>
                                <p className="mb-4 opacity-90">
                                    As emotion-sensing technology advances, we must consider:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Consent for emotional data collection",
                                        "Transparency in how mood data is used",
                                        "Regulations for emotional manipulation",
                                        "Ownership of biometric response patterns"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="text-yellow-400 mr-2">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Final Thought */}
                    <div className="text-center py-12 border-t border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            🔮 Final Thought: The Future of Music
                        </h2>

                        <div className="max-w-2xl mx-auto">
                            <p className="text-gray-700 text-lg mb-6">
                                In a world of noise and choice overload, an AI that truly feels what you need can be a game-changer.
                            </p>

                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-gray-200 mb-8">
                                <p className="text-xl font-bold text-gray-800 italic">
                                    "So next time you feel something, don't reach for the playlist. Let your AI DJ do the mixing."
                                </p>
                            </div>

                            <p className="text-gray-900 font-semibold">
                                Because the best beats aren't chosen — they're felt.
                            </p>
                        </div>
                    </div>

                    {/* AI DJ Technology */}
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mb-16">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">Experience the AI DJ Revolution</h3>
                            <p className="mb-6 opacity-90">
                                Personalized music that adapts to your emotions in real-time
                            </p>
                            <div className="inline-flex flex-wrap justify-center gap-3">
                                {[
                                    'Emotion Detection',
                                    'Real-time Remixing',
                                    'Biometric Feedback',
                                    'Adaptive Tempo',
                                    'Personalized Soundscapes'
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

export default Aimood;