import React, { useState } from 'react';
import Navbar from '../../Website/Header/Navbar';

const Aisinger = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeTrack, setActiveTrack] = useState(1);
    const [showEthicsModal, setShowEthicsModal] = useState(false);

    const tracks = [
        { id: 1, title: "Still With You", duration: "3:45", popularity: "98%" },
        { id: 2, title: "Echoes of Yesterday", duration: "4:12", popularity: "92%" },
        { id: 3, title: "Digital Angel", duration: "3:28", popularity: "87%" },
        { id: 4, title: "Beyond the Silence", duration: "5:02", popularity: "85%" },
        { id: 5, title: "Ghost in the Machine", duration: "3:55", popularity: "83%" },
    ];

    const techFeatures = [
        { icon: "🧠", title: "Voice Modeling", description: "Neural networks trained on thousands of vocal samples" },
        { icon: "🎚️", title: "Emotional Tone", description: "AI mimics emotional delivery and stylistic nuance" },
        { icon: "🎼", title: "Breath Control", description: "Replicates natural breathing patterns in vocals" },
        { icon: "🎛️", title: "Dynamic Range", description: "Preserves the singer's unique vocal characteristics" },
    ];

    return (

        <>
            <Helmet>
                <title>How Content Creators Are Saving Hours with AI Tools</title>
                <meta
                    name="description"
                    content="Discover how content creators are leveraging AI tools to save time, increase productivity, and enhance creativity in their workflow."
                />
                <meta property="og:title" content="How Content Creators Are Saving Hours with AI Tools" />
                <meta
                    property="og:description"
                    content="Explore the benefits of AI tools for content creators, helping them streamline tasks and boost efficiency like never before."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/ai-singer-resurrected" />
            </Helmet>
            <Navbar></Navbar>


            <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
                {/* Header */}
                <div className="div-template max-w-6xl mx-auto">
                    <header className="text-center mb-10 mt-8">
                        <div className="inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            Musical Revolution
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            🎤 AI Reconstructs Dead Singer's Voice to Release a New Album
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            And it's hauntingly beautiful — a groundbreaking blend of technology and artistry
                        </p>
                    </header>

                    {/* Hero Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
                        <div className="relative">
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 shadow-lg">
                                <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mx-auto flex items-center justify-center mb-6 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-30 bg-[url('https://i.imgur.com/KbA0dH3.png')] bg-cover"></div>
                                    <div className="text-8xl text-purple-600 z-10">🎤</div>
                                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                                </div>

                                <div className="text-center">
                                    <h2 className="text-xl font-bold text-gray-800 mb-2">Echoes of a Voice</h2>
                                    <p className="text-gray-600 mb-4">The posthumous album featuring 12 new tracks</p>
                                    <div className="flex justify-center space-x-2">
                                        <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">AI Vocals</span>
                                        <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs font-medium rounded-full">Emotional</span>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">Haunting</span>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-4 -right-4 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium transform rotate-6">
                                New Release
                            </div>
                        </div>

                        <div>
                            <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                                <span className="mr-2">🧠</span> How They Did It
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Startup EternaVox utilized voice modeling neural networks trained on thousands of hours of archived vocals,
                                interviews, and recordings to reconstruct the legendary singer's voice with stunning accuracy.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-6">
                                {techFeatures.map((feature, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                        <div className="text-2xl mb-2">{feature.icon}</div>
                                        <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Album Tracks */}
                    <div className="mb-16">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="flex items-center text-2xl font-bold text-gray-800">
                                <span className="mr-2">🎶</span> Album Tracks
                            </h2>
                            <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                12 Songs • 48 Minutes
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                            <div className="grid grid-cols-1 divide-y divide-gray-100">
                                {tracks.map(track => (
                                    <div
                                        key={track.id}
                                        className={`p-4 flex items-center cursor-pointer hover:bg-purple-50 transition-colors ${activeTrack === track.id ? 'bg-purple-50' : ''
                                            }`}
                                        onClick={() => setActiveTrack(track.id)}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center mr-4">
                                            {activeTrack === track.id ? (
                                                <div className="w-5 h-5 bg-purple-600 rounded-full animate-pulse"></div>
                                            ) : (
                                                <span className="text-purple-700">{track.id}</span>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-800">{track.title}</h3>
                                            <div className="flex items-center text-sm text-gray-500 mt-1">
                                                <span className="mr-3">{track.duration}</span>
                                                <span className="flex items-center">
                                                    <span className="text-pink-500 mr-1">♥</span>
                                                    {track.popularity} positive
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center text-white">
                                            {activeTrack === track.id ? '⏸' : '▶'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg">
                                Stream Full Album
                            </button>
                        </div>
                    </div>

                    {/* Ethical Debate */}
                    <div className="mb-16">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="flex items-center text-2xl font-bold text-gray-800">
                                <span className="mr-2">🤖</span> The Ethical Debate
                            </h2>
                            <button
                                className="text-purple-600 hover:text-purple-800 font-medium"
                                onClick={() => setShowEthicsModal(true)}
                            >
                                View Perspectives
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                                <div className="flex items-center mb-4">
                                    <div className="bg-green-500 text-white p-2 rounded-full mr-3">
                                        ✓
                                    </div>
                                    <h3 className="font-bold text-gray-800">Supporters Say</h3>
                                </div>
                                <ul className="space-y-3 text-gray-700">
                                    {[
                                        "It's a form of digital resurrection, allowing legacies to live on",
                                        "Gives fans closure and a final connection",
                                        "Opens creative possibilities for unreleased work",
                                        "Preserves cultural heritage for future generations"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-green-500 mr-2">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                                <div className="flex items-center mb-4">
                                    <div className="bg-red-500 text-white p-2 rounded-full mr-3">
                                        ⚠
                                    </div>
                                    <h3 className="font-bold text-gray-800">Critics Warn</h3>
                                </div>
                                <ul className="space-y-3 text-gray-700">
                                    {[
                                        "Risks exploitation of the artist's identity",
                                        "May violate consent and intellectual property laws",
                                        "Blurs the line between authentic art and synthetic simulation",
                                        "Could lead to labels replacing real artists with AI"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-red-500 mr-2">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Fan Reactions */}
                    <div className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🎧</span> Fan Reactions
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    quote: "Unreal. Like time travel through music. I felt like I was hearing a message from beyond.",
                                    author: "Sarah J.",
                                    icon: "🌟"
                                },
                                {
                                    quote: "Emotional. Comforting. But also strange. I felt guilty loving it — but I couldn't stop listening.",
                                    author: "Michael T.",
                                    icon: "😢"
                                },
                                {
                                    quote: "The most hauntingly beautiful thing I've ever heard. It brought back so many memories.",
                                    author: "Jessica L.",
                                    icon: "👻"
                                }
                            ].map((reaction, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="text-3xl mb-4">{reaction.icon}</div>
                                    <p className="text-gray-700 italic mb-4">"{reaction.quote}"</p>
                                    <p className="text-gray-600">— {reaction.author}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                            <div className="flex items-center">
                                <div className="text-4xl mr-4">📈</div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg">Viral Success</h3>
                                    <p className="text-gray-600">
                                        Lead single "Still With You" has been streamed over 50 million times, with thousands of fan tributes on social media.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Legal Questions */}
                    <div className="mb-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">⚖️</span> Legal & Legacy Questions
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <div className="bg-white p-5 rounded-lg border border-gray-300 mb-6">
                                    <h3 className="font-bold text-gray-800 mb-3">Unanswered Questions</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        {[
                                            "Can an AI legally represent a deceased voice?",
                                            "Should estates license digital versions of artists?",
                                            "What if AI-generated music wins awards?",
                                            "Who owns the rights to AI-created performances?"
                                        ].map((question, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-gray-500 mr-2">•</span> {question}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-lg border border-gray-300">
                                <h3 className="font-bold text-gray-800 mb-3">EternaVox's Position</h3>
                                <p className="text-gray-700 mb-4">
                                    "All agreements were made with the artist's estate and surviving family.
                                    We're committed to ethical practices that honor the artist's legacy."
                                </p>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                                    <div>
                                        <p className="font-medium">CEO Statement</p>
                                        <p>Dr. Elena Rodriguez, Founder of EternaVox</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Thought */}
                    <div className="text-center py-12 border-t border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            🎵 Final Thought: A New Era of Music?
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-4">
                            This project represents both the promise and the peril of AI in the creative world.
                            It preserves voices that shaped generations while challenging our definition of authenticity.
                        </p>
                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl inline-block max-w-2xl">
                            <p className="text-gray-800 italic">
                                "It's not the ghost of the artist, it's something stranger — a reflection made of data and longing."
                            </p>
                            <p className="mt-2 text-gray-600">— Music Journalist Review</p>
                        </div>
                        <p className="mt-8 text-gray-900 font-semibold">
                            Whether you see it as poetic or problematic, one thing is clear: The voice may be gone,
                            but the song lives on — in code.
                        </p>
                    </div>
                </div>

                {/* Ethics Modal */}
                {showEthicsModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800">Ethical Perspectives</h3>
                                    <button
                                        onClick={() => setShowEthicsModal(false)}
                                        className="text-gray-500 hover:text-gray-800"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-2">Artist Rights</h4>
                                        <p className="text-gray-700">
                                            Does an artist's right to control their likeness extend beyond death?
                                            Should estates have the authority to license digital recreations?
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-2">Authenticity in Art</h4>
                                        <p className="text-gray-700">
                                            What constitutes "authentic" art when an AI can perfectly replicate a human voice?
                                            Does the emotional impact change when we know it's synthetic?
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-2">Consent Concerns</h4>
                                        <p className="text-gray-700">
                                            Can consent be reasonably assumed for projects like this?
                                            Should artists have the ability to specify posthumous rights in their wills?
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-2">Cultural Impact</h4>
                                        <p className="text-gray-700">
                                            Will this technology preserve cultural heritage or create a distorted version of history?
                                            How might this affect our relationship with art and artists?
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <button
                                        onClick={() => setShowEthicsModal(false)}
                                        className="w-full py-3 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                                    >
                                        Close Discussion
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Aisinger;