import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../Website/Header/Navbar';
import { Helmet } from "react-helmet";

const Sonorus = () => {
    const [isListening, setIsListening] = useState(false);
    const [currentSound, setCurrentSound] = useState(null);
    const [musicType, setMusicType] = useState('ambient');
    const [volume, setVolume] = useState(70);
    const [isPlaying, setIsPlaying] = useState(false);

    const soundSources = [
        { name: 'City Street', icon: '🏙️', elements: ['car horn', 'footsteps', 'people talking', 'siren'] },
        { name: 'Coffee Shop', icon: '☕', elements: ['espresso machine', 'milk steaming', 'chatting', 'clinking cups'] },
        { name: 'Rainforest', icon: '🌿', elements: ['bird calls', 'rain falling', 'insects chirping', 'rustling leaves'] },
        { name: 'Beach', icon: '🏖️', elements: ['ocean waves', 'seagulls', 'children playing', 'wind'] },
    ];

    const musicTypes = [
        { id: 'ambient', name: 'Ambient', color: 'bg-blue-100 text-blue-800' },
        { id: 'electronic', name: 'Electronic', color: 'bg-purple-100 text-purple-800' },
        { id: 'jazz', name: 'Jazz', color: 'bg-amber-100 text-amber-800' },
        { id: 'orchestral', name: 'Orchestral', color: 'bg-emerald-100 text-emerald-800' },
    ];

    // Simulate sound detection
    useEffect(() => {
        let soundInterval;

        if (isListening) {
            soundInterval = setInterval(() => {
                const sounds = [
                    'Raindrop detected → transformed to hi-hat',
                    'Bird chirp → transformed to flute melody',
                    'Car engine → transformed to bass synth',
                    'Footsteps → transformed to snare rhythm',
                    'Door closing → transformed to percussion hit',
                    'Wind → transformed to string pad',
                    'Coffee grinder → transformed to shaker',
                    'Laughter → transformed to chime accent'
                ];
                const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
                setCurrentSound(randomSound);
            }, 3000);
        }

        return () => clearInterval(soundInterval);
    }, [isListening]);

    // Simulate music playing
    useEffect(() => {
        let playTimeout;

        if (isListening && !isPlaying) {
            playTimeout = setTimeout(() => {
                setIsPlaying(true);
            }, 2000);
        } else if (!isListening && isPlaying) {
            setIsPlaying(false);
        }

        return () => clearTimeout(playTimeout);
    }, [isListening, isPlaying]);

    return (

        <>
            <Helmet>
                <title>Transforming Ambient Noise into Real-Time Music | Fyrexia AI Tools</title>
                <meta
                    name="description"
                    content="Discover how AI technology transforms ambient noise into real-time music, revolutionizing the way we experience sound."
                />
                <meta
                    name="keywords"
                    content="AI Music, Ambient Noise, Real-Time Music, AI Sound, Fyrexia"
                />
                <meta property="og:title" content="Transforming Ambient Noise into Real-Time Music" />
                <meta
                    property="og:description"
                    content="Discover how AI technology transforms ambient noise into real-time music."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fyrexia.co.uk/ai-sound-to-music" />
                <link rel="canonical" href="https://fyrexia.co.uk/ai-sound-to-music" />
            </Helmet>

            <Navbar></Navbar>



            <div className="min-h-screen bg-white text-gray-800 font-sans">
                {/* Header */}
                <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16 px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="div-template text-4xl md:text-6xl font-bold mb-4">
                            🎶🤖 Sonorus AI
                        </div>
                        <p className="text-xl md:text-2xl mb-8">
                            Transforming Ambient Noise into Real-Time Music
                        </p>
                        <p className="text-lg max-w-2xl mx-auto">
                            Experience the world as a personalized symphony where everyday sounds become beautiful music
                        </p>
                    </div>
                </header>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-4 py-12">
                    {/* Introduction */}
                    <section className="mb-16 text-center">
                        <h2 className="text-3xl font-bold mb-6">The Sound of the Future</h2>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-lg mb-6">
                                Imagine walking down a busy street where honking cars, chatter, and footsteps transform into a perfect live symphony.
                                Sonorus AI listens to your environment and creates unique music in real-time from ambient sounds.
                            </p>
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                                <div className="flex flex-wrap justify-center gap-4 mb-4">
                                    <div className="flex items-center bg-white px-4 py-2 rounded-full border">
                                        <span className="mr-2">💧</span> Dripping faucet → hypnotic beat
                                    </div>
                                    <div className="flex items-center bg-white px-4 py-2 rounded-full border">
                                        <span className="mr-2">🐦</span> Birds chirping → delicate melody
                                    </div>
                                    <div className="flex items-center bg-white px-4 py-2 rounded-full border">
                                        <span className="mr-2">🚆</span> Train rumble → deep bass line
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Interactive Demo */}
                    <section className="mb-16 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
                        <h2 className="text-3xl font-bold mb-8 text-center">Experience Sonorus AI</h2>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Sound Visualization */}
                            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold">Ambient Sound Analysis</h3>
                                    <div className={`w-4 h-4 rounded-full ${isListening ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                                </div>

                                <div className="mb-6">
                                    <div className="h-48 bg-gradient-to-b from-gray-100 to-gray-50 rounded-lg border border-gray-300 flex items-end justify-center p-4">
                                        {/* Sound waves visualization */}
                                        <div className="flex items-end h-24 gap-1 w-full justify-center">
                                            {[...Array(24)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-3 rounded-t ${isListening ? 'animate-soundwave' : ''}`}
                                                    style={{
                                                        height: `${Math.floor(Math.random() * 40) + 10}px`,
                                                        backgroundColor: i % 4 === 0 ? '#3b82f6' : i % 3 === 0 ? '#10b981' : '#8b5cf6',
                                                        animationDelay: `${i * 0.05}s`
                                                    }}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Detected sound */}
                                    {currentSound && (
                                        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200 text-sm flex items-center">
                                            <div className="mr-2">🔊</div>
                                            <span>{currentSound}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={() => setIsListening(!isListening)}
                                        className={`flex-1 py-3 px-6 rounded-lg font-medium flex items-center justify-center ${isListening
                                            ? 'bg-red-100 hover:bg-red-200 text-red-700'
                                            : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                                            }`}
                                    >
                                        {isListening ? (
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                Stop Listening
                                            </>
                                        ) : (
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                                                </svg>
                                                Start Listening
                                            </>
                                        )}
                                    </button>

                                    <div className="flex-1 bg-white border rounded-lg p-3 flex items-center">
                                        <span className="mr-3">🔈</span>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={volume}
                                            onChange={(e) => setVolume(e.target.value)}
                                            className="w-full"
                                        />
                                        <span className="ml-3 w-10">{volume}%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Music Output */}
                            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                                <h3 className="text-xl font-bold mb-6">Generated Music</h3>

                                <div className="mb-6">
                                    <div className="h-48 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg border border-gray-700 flex items-center justify-center relative overflow-hidden">
                                        {/* Music visualization */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-32 h-32 rounded-full border-4 border-blue-500 opacity-30 animate-ping"></div>
                                        </div>

                                        {isPlaying ? (
                                            <div className="relative z-10 text-center">
                                                <div className="text-5xl mb-4">🎵</div>
                                                <div className="text-xl text-white font-medium">Now Playing</div>
                                                <div className="text-2xl font-bold text-blue-300 mt-2">
                                                    {musicType === 'ambient' && "Urban Serenity"}
                                                    {musicType === 'electronic' && "City Pulse"}
                                                    {musicType === 'jazz' && "Street Swing"}
                                                    {musicType === 'orchestral' && "Metropolis Symphony"}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-gray-400 text-center">
                                                <div className="text-5xl mb-4">🔇</div>
                                                <p>Start listening to generate music</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Music info */}
                                    {isPlaying && (
                                        <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                                            <div className="bg-gray-100 p-2 rounded">BPM: 92</div>
                                            <div className="bg-gray-100 p-2 rounded">Key: A minor</div>
                                            <div className="bg-gray-100 p-2 rounded">Duration: ∞</div>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <h4 className="font-medium mb-3">Music Style</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {musicTypes.map(type => (
                                            <button
                                                key={type.id}
                                                onClick={() => setMusicType(type.id)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${musicType === type.id
                                                    ? `${type.color} ring-2 ring-offset-2 ring-opacity-50`
                                                    : 'bg-gray-100 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {type.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How it works */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">How Sonorus AI Works</h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                                <div className="text-4xl mb-4">🎤</div>
                                <h3 className="text-xl font-bold mb-3">Sound Capture</h3>
                                <p>Microphones pick up every sound in your surroundings with precision, capturing the full spectrum of ambient noise.</p>
                            </div>

                            <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                                <div className="text-4xl mb-4">🤖</div>
                                <h3 className="text-xl font-bold mb-3">AI Interpretation</h3>
                                <p>Our neural networks analyze pitches, rhythms, and textures to find musical patterns in apparent chaos.</p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                                <div className="text-4xl mb-4">🎹</div>
                                <h3 className="text-xl font-bold mb-3">Music Generation</h3>
                                <p>The AI composes and layers these elements in real-time to create unique, evolving musical pieces.</p>
                            </div>
                        </div>
                    </section>

                    {/* Real-World Impact */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Transforming Our World</h2>

                        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4">Real-World Applications</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">🎨</div>
                                            <div>
                                                <h4 className="font-bold">Live Artistic Performances</h4>
                                                <p className="text-sm">Artists remix environments in real-time for immersive experiences</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-teal-100 p-2 rounded-lg mr-4">🩺</div>
                                            <div>
                                                <h4 className="font-bold">Therapeutic Soundscapes</h4>
                                                <p className="text-sm">Hospitals use ambient music to calm patients and reduce anxiety</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-purple-100 p-2 rounded-lg mr-4">🏙️</div>
                                            <div>
                                                <h4 className="font-bold">Urban Sound Design</h4>
                                                <p className="text-sm">Cities create ever-changing soundscapes to enhance public spaces</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-4">Sound Environments</h3>
                                    <div className="space-y-4">
                                        {soundSources.map((source, index) => (
                                            <div
                                                key={index}
                                                className="bg-white border rounded-xl p-4 hover:shadow-md transition-shadow"
                                            >
                                                <div className="flex items-center mb-2">
                                                    <span className="text-2xl mr-3">{source.icon}</span>
                                                    <h4 className="font-bold">{source.name}</h4>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {source.elements.map((element, elIndex) => (
                                                        <span
                                                            key={elIndex}
                                                            className="bg-gray-100 text-xs px-3 py-1 rounded-full"
                                                        >
                                                            {element}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Final Question */}
                    <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="max-w-2xl mx-auto px-4">
                            <div className="text-5xl mb-6">🎧</div>
                            <h2 className="text-3xl font-bold mb-6">
                                Would you want to live in a world where every moment sounds like a masterpiece?
                            </h2>
                            <p className="text-lg mb-8">
                                Imagine putting on your headphones and stepping outside to discover your life's soundtrack composed by the world itself.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
                                    Yes, sign me up!
                                </button>
                                <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-8 rounded-full border transition-colors">
                                    I'd miss the silence
                                </button>
                            </div>
                        </div>
                    </section>
                </div>



                {/* Soundwave animation */}
                <style jsx>{`
        @keyframes soundwave {
          0%, 100% {
            height: 20%;
          }
          50% {
            height: 80%;
          }
        }
        .animate-soundwave {
          animation: soundwave 1s ease-in-out infinite;
        }
      `}</style>
            </div>
        </>
    );
};

export default Sonorus;