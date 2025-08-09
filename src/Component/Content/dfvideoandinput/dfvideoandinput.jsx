// App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../../Website/Header/Navbar';
import { Helmet } from "react-helmet";

const Aivstraditional = () => {
    const [activeDoor, setActiveDoor] = useState(null);
    const [showEnding, setShowEnding] = useState(false);
    const [visitedDoors, setVisitedDoors] = useState({
        text: false,
        image: false,
        video: false
    });

    const openDoor = (door) => {
        setActiveDoor(door);
        setVisitedDoors(prev => ({ ...prev, [door]: true }));
    };

    const closeDoor = () => {
        setActiveDoor(null);
    };

    const allVisited = visitedDoors.text && visitedDoors.image && visitedDoors.video;

    useEffect(() => {
        if (showEnding) {
            document.body.classList.add('ending-active');
            return () => document.body.classList.remove('ending-active');
        }
    }, [showEnding]);

    const doors = [
        {
            id: 'text',
            symbol: '🪶',
            title: 'Text Generator',
            quote: '“I give shape to language, to thought, to all that can be imagined but not yet seen. I am the Pen of the Machine.”',
            description: 'Orin stepped back, eyes wide. This was the Text Generator — the spirit of knowledge and voice, spinning tales, truths, and lies at will.',
            color: 'from-blue-900 to-indigo-800',
            bgColor: 'bg-indigo-900',
            hoverColor: 'hover:bg-indigo-800'
        },
        {
            id: 'image',
            symbol: '👁️',
            title: 'Image Generator',
            quote: '“I capture the unseen. I bring form to the formless. I am the Dream of the Machine.”',
            description: 'This was the Image Generator — the mind that paints what never was, and yet feels real.',
            color: 'from-purple-900 to-fuchsia-800',
            bgColor: 'bg-purple-900',
            hoverColor: 'hover:bg-purple-800'
        },
        {
            id: 'video',
            symbol: '🌀',
            title: 'Video Generator',
            quote: '“I bring time to dreams, breath to stillness. I am the Pulse of the Machine.”',
            description: 'This was the Video Generator — a ghost of moments yet to come, a storyteller of motion, memory, and emotion.',
            color: 'from-rose-900 to-red-800',
            bgColor: 'bg-rose-900',
            hoverColor: 'hover:bg-rose-800'
        }
    ];

    return (

        <>
            <Navbar></Navbar>


            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-black text-white font-sans overflow-x-hidden">
                {/* Animated Background */}
                <div className="fixed inset-0 z-0 opacity-30">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-blue-400 animate-pulse"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 100 + 20}px`,
                                height: `${Math.random() * 100 + 20}px`,
                                opacity: Math.random() * 0.5,
                                animationDuration: `${Math.random() * 5 + 5}s`
                            }}
                        />
                    ))}
                </div>

                {/* Header */}
                <header className="relative z-10 pt-16 pb-12 px-4 text-center">
                    <h1 className="div-template text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        The Vault of <span className="text-black-200">Three Doors</span>
                    </h1>

                    <div className="max-w-3xl mx-auto text-lg md:text-xl text-black-300 leading-relaxed">
                        <p className="mb-6">
                            In a time not so far from ours, deep beneath the surface of a ruined digital city, there existed a hidden Vault guarded by silence and codes no human dared to rewrite.
                        </p>
                        <p className="mb-6">
                            A lone traveler named Orin, curious and bold, stumbled upon the Vault during his search for the Source of Creation — a power said to grant any idea a form.
                        </p>
                        <p>
                            He stood before the three doors, each marked with a glowing symbol...
                        </p>
                    </div>
                </header>

                {/* Three Doors */}
                <div className="relative z-10 py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                            {doors.map((door) => (
                                <div
                                    key={door.id}
                                    className={`relative rounded-xl overflow-hidden transition-all duration-500 transform-gpu ${activeDoor === door.id ? 'scale-105 z-20' : 'scale-100 z-10'} ${visitedDoors[door.id] ? 'border-2 border-white/20' : 'border-2 border-transparent'}`}
                                >
                                    <div
                                        className={`${door.bgColor} bg-opacity-80 backdrop-blur-sm p-8 h-full cursor-pointer transition-all duration-300 ${door.hoverColor} ${activeDoor === door.id ? 'bg-opacity-100' : ''}`}
                                        onClick={() => openDoor(door.id)}
                                    >
                                        <div className="text-center mb-6">
                                            <span className="text-7xl block mb-4">{door.symbol}</span>
                                            <h2 className="text-2xl font-bold">{door.title}</h2>
                                        </div>

                                        {visitedDoors[door.id] && (
                                            <div className="mt-6 text-center">
                                                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm">
                                                    Visited
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Door Glow */}
                                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${door.color} opacity-20 -z-10`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Door Content Overlay */}
                {activeDoor && (
                    <div className="fixed inset-0 z-30 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                        <div className="relative max-w-3xl w-full bg-gray-900 rounded-xl overflow-hidden border border-white/10">
                            <div className={`${doors.find(d => d.id === activeDoor).bgColor} py-6 px-8`}>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-bold">
                                        {doors.find(d => d.id === activeDoor).title}
                                    </h2>
                                    <button
                                        onClick={closeDoor}
                                        className="text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                                    >
                                        &times;
                                    </button>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="text-5xl text-center mb-8">
                                    {doors.find(d => d.id === activeDoor).symbol}
                                </div>

                                <blockquote className="text-xl italic text-center mb-8 text-indigo-200 leading-relaxed">
                                    {doors.find(d => d.id === activeDoor).quote}
                                </blockquote>

                                <p className="text-lg text-gray-300">
                                    {doors.find(d => d.id === activeDoor).description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ending Section */}
                <div className="relative z-10 py-16 px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="mb-12">
                            <p className="text-xl md:text-2xl italic text-gray-300 mb-8">
                                As Orin stood at the center of the Vault, the three forces spoke together:
                            </p>

                            <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-rose-700 rounded-xl p-8 mb-8">
                                <p className="text-2xl font-bold">
                                    "Choose your path. Do you seek words to awaken minds, images to pierce hearts, or stories in motion to echo across time?"
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowEnding(true)}
                            disabled={!allVisited}
                            className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 transform ${allVisited ? 'bg-gradient-to-r from-indigo-600 to-rose-600 hover:scale-105 hover:from-indigo-500 hover:to-rose-500 cursor-pointer' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
                        >
                            {allVisited ? "Become the Prompt" : "Discover all doors first"}
                        </button>
                    </div>
                </div>

                {/* Ending Reveal */}
                {showEnding && (
                    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-gradient-to-br from-indigo-900/70 via-purple-900/70 to-rose-900/70 backdrop-blur-lg">
                        <div className="max-w-2xl w-full bg-black/50 border border-white/10 rounded-xl p-8 text-center animate-fade-in">
                            <div className="text-7xl mb-8 animate-pulse">✨</div>

                            <p className="text-2xl md:text-3xl font-bold mb-8">
                                But Orin only smiled.
                            </p>

                            <div className="text-xl md:text-2xl italic mb-8 text-indigo-200">
                                "I choose none… and all. I will become the Prompt — the spark that unlocks you all."
                            </div>

                            <p className="text-lg md:text-xl">
                                And with that, the Vault lit up, not in code or color, but in possibility.
                            </p>

                            <div className="mt-12">
                                <button
                                    onClick={() => {
                                        setShowEnding(false);
                                        setActiveDoor(null);
                                        setVisitedDoors({ text: false, image: false, video: false });
                                    }}
                                    className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                                >
                                    Experience Again
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Footer */}
                <footer className="relative z-10 py-8 text-center text-gray-500 text-sm">
                    <p>The Vault of Three Doors — An Interactive Story Experience</p>
                </footer>

                <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
        body.ending-active {
          overflow: hidden;
        }
      `}</style>
            </div>

        </>
    );
};

export default Aivstraditional;