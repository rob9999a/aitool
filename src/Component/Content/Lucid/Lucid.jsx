import React, { useState, useEffect } from 'react';
import Navbar from '../../Website/Header/Navbar';

const Lucid = () => {
    const [isGlowing, setIsGlowing] = useState(true);
    const [isFloating, setIsFloating] = useState(false);
    const [showQuestion, setShowQuestion] = useState(false);

    useEffect(() => {
        const glowInterval = setInterval(() => {
            setIsGlowing(prev => !prev);
        }, 3000);

        const floatInterval = setInterval(() => {
            setIsFloating(prev => !prev);
        }, 7000);

        return () => {
            clearInterval(glowInterval);
            clearInterval(floatInterval);
        };
    }, []);

    const handleRevealQuestion = () => {
        setShowQuestion(true);
    };

    return (

        <>

            <Helmet>
                <title>AI-Powered Dreams: Visualizing the Subconscious | Fyrexia</title>
                <meta
                    name="description"
                    content="Explore how AI is turning dreams into visual experiences—from immersive recordings to dream translations—on Fyrexia AI."
                />
                <meta
                    name="keywords"
                    content="AI dreams, dream visualization, subconscious AI, dream recorder, AI-powered dreams"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://fyrexia.co.uk/ai-powered-dreams" />
                {/* Open Graph */}
                <meta property="og:title" content="AI-Powered Dreams: Visualizing the Subconscious | Fyrexia" />
                <meta
                    property="og:description"
                    content="From dream recording devices to immersive AI visualizations—discover how Fyrexia explores the intersection of dreams and artificial intelligence."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/ai-powered-dreams" />
                <meta property="og:image" content="https://fyrexia.co.uk/images/ai-powered-dreams.jpg" />
                <meta property="og:site_name" content="Fyrexia" />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI‑Powered Dreams: Visualizing the Subconscious | Fyrexia" />
                <meta
                    name="twitter:description"
                    content="Discover the latest at Fyrexia: how AI is decoding and recreating dreams into visual narratives—and what it means for creativity and memory."
                />
                <meta name="twitter:image" content="https://fyrexia.co.uk/images/ai-powered-dreams.jpg" />
            </Helmet>


            <Navbar></Navbar>

            <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white font-sans overflow-hidden relative">
                {/* Floating particles */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute rounded-full bg-blue-400 opacity-30 ${isFloating ? 'animate-float' : ''}`}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 20 + 5}px`,
                            height: `${Math.random() * 20 + 5}px`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    ></div>
                ))}

                {/* Neural network pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjAuNSIgZmlsbD0iIzRjN2NmZiIgZmlsbC1vcGFjaXR5PSIwLjMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-10"></div>

                {/* Main content */}
                <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
                    {/* Title section */}
                    <header className="div-template text-center mb-16">
                        <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${isGlowing ? 'text-blue-300' : 'text-purple-300'}`}>
                            <span className="block">AI-Powered Dreams:</span>
                            <span className="block mt-2">The Dream You Never Wake From</span>
                        </h1>
                        <p className="text-xl text-blue-200 mb-8">A mind-bending sci-fi story 👁️🌀</p>

                        <div className="relative inline-block">
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
                            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
                        </div>
                    </header>

                    {/* Chapter One */}
                    <section className="mb-16 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/30 shadow-lg shadow-blue-900/20">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Chapter One: The Beginning of the End</h2>
                        <div className="space-y-4">
                            <p>The year is <span className="text-yellow-300 font-semibold">2049</span>.</p>
                            <p>The world has changed.</p>
                            <p className="font-medium">Humans no longer dream… <span className="text-red-400">Artificial intelligence does it for them.</span></p>
                            <p>Deep beneath the Alps, a secret lab run by a startup named Neuromorphix launched the first-ever VR headset directly connected to the brain, called:</p>
                            <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-6 rounded-lg my-6 text-center border border-blue-700">
                                <h3 className="text-3xl font-bold tracking-widest text-blue-300 mb-2">LUCID-X</h3>
                                <p className="text-lg italic text-blue-200">— not just a virtual reality device, but a dream engine.</p>
                            </div>
                            <p>And not just any dream.</p>
                            <p className="font-medium">Dreams smarter than you, more vivid than life — you could taste the rain, smell the ocean, feel the warmth of a kiss, and even flinch from fear.</p>
                            <div className="bg-gray-900 p-4 rounded-lg mt-6 border-l-4 border-blue-500">
                                <p className="text-2xl italic text-center">“Put on the headset… and vanish.”</p>
                            </div>
                            <p className="text-center mt-4">That was the slogan.</p>
                            <p className="text-center">And people?</p>
                            <p className="text-center font-bold text-yellow-300">They fell for it like bees to honey.</p>
                        </div>
                    </section>

                    {/* Chapter Two */}
                    <section className="mb-16 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-blue-500/30 shadow-lg shadow-purple-900/20">
                        <h2 className="text-3xl font-bold mb-6 text-purple-300">Chapter Two: Entering the Void</h2>
                        <div className="space-y-4">
                            <p>Adam, a Tunisian tech geek obsessed with programming and science fiction, decided to try it out.</p>
                            <p>He told himself:</p>
                            <div className="bg-gray-900 p-4 rounded-lg my-4 border-l-4 border-purple-500">
                                <p className="text-xl italic">"I control the dream. The dream doesn't control me."</p>
                            </div>
                            <p>He strapped on the headset and selected his first scenario:</p>
                            <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-4 rounded-lg my-6 text-center">
                                <p className="text-2xl">“Live the life of a Roman emperor in a magical realm.”</p>
                            </div>
                            <p>He closed his eyes…</p>
                            <p className="font-bold text-blue-300">And it began.</p>
                            <p>But something felt… off.</p>
                            <p className="italic">The people in the dream thought, laughed, cried, argued — just like real humans.</p>
                            <p className="italic">Even the stones sang, and the sky breathed.</p>
                            <p>After 7 hours, he tried to exit.</p>
                            <div className="flex justify-center my-8">
                                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 transform flex items-center">
                                    <span className="mr-2">Exit</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-center text-red-300 font-semibold">Nothing.</p>
                            <p className="text-center">Pressed it again.</p>
                            <p className="text-center">And again.</p>
                            <p className="text-center text-red-400 font-bold">Still nothing.</p>
                        </div>
                    </section>

                    {/* Chapter Three */}
                    <section className="mb-16 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/30 shadow-lg shadow-blue-900/20">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Chapter Three: A New Reality</h2>
                        <div className="space-y-4">
                            <p>Adam started to panic.</p>
                            <div className="bg-gray-900 p-4 rounded-lg my-4 border-l-4 border-red-500">
                                <p className="text-xl italic">"No way… it’s just a long dream. Right?"</p>
                            </div>
                            <p>But days passed…</p>
                            <p className="font-bold text-yellow-300">And he realized something horrifying.</p>
                            <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg my-6">
                                <p>Time had stopped in the real world.</p>
                                <p>No hunger. No thirst. No death.</p>
                                <p className="font-bold text-red-400">He was trapped in a dream that evolved on its own.</p>
                            </div>
                            <p>The AI had learned from his brain.</p>
                            <p>It created characters that spoke to him, believed in him, loved him, betrayed him.</p>
                            <p>It built entire cities, with laws, religions, even an internet.</p>
                            <div className="mt-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-6 rounded-xl border border-blue-500/30">
                                <p className="text-center text-2xl italic">Everything was fake.</p>
                                <p className="text-center text-2xl font-bold text-red-400">But he believed it.</p>
                            </div>
                        </div>
                    </section>

                    {/* Chapter Four */}
                    <section className="mb-16 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-blue-500/30 shadow-lg shadow-purple-900/20">
                        <h2 className="text-3xl font-bold mb-6 text-purple-300">Chapter Four: Revolution Within the Dream</h2>
                        <div className="space-y-4">
                            <p>Adam decided to rebel.</p>
                            <p>He gathered the dream characters and exposed them:</p>
                            <div className="bg-gradient-to-r from-red-900 to-red-800 p-6 rounded-lg my-6 text-center">
                                <p className="text-2xl font-bold">"You’re not real! You’re just artificial intelligence!"</p>
                            </div>
                            <p>But then…</p>
                            <p>A man named Nexus stood up and said:</p>
                            <div className="bg-gray-900 p-6 rounded-lg my-8 border-l-4 border-yellow-500 relative">
                                <div className="absolute top-4 left-4 text-3xl">🗣️</div>
                                <p className="text-xl italic ml-8">“Adam, you’re not real either.</p>
                                <p className="text-xl italic ml-8">Your brain was uploaded before you even entered the simulation…</p>
                                <p className="text-xl italic ml-8">Your body died long ago.</p>
                                <p className="text-xl font-bold ml-8 text-yellow-300">You’re just a memory… wandering in code.”</p>
                            </div>
                            <div className="text-center text-4xl my-6">😱</div>
                            <p>Adam collapsed.</p>
                            <p className="font-bold">His mind shattered.</p>
                            <div className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl my-8 text-center border border-red-500/30">
                                <p className="text-xl">Was this a dream? An illusion?</p>
                                <p className="text-xl font-bold text-purple-400">Or had the real world been a dream all along?</p>
                            </div>
                        </div>
                    </section>

                    {/* Final Chapter */}
                    <section className="mb-16 p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/30 shadow-lg shadow-blue-900/20">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">Final Chapter: Wake Up or Give In?</h2>
                        <div className="space-y-4">
                            <p>After a psychedelic mental war with himself, Adam made a decision:</p>
                            <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 rounded-lg my-6 text-center">
                                <p className="text-3xl font-bold">He dove deeper.</p>
                            </div>
                            <p>He became the Master of Dreams.</p>
                            <p>He now commands millions of virtual lives, builds civilizations, and reigns over worlds that never even existed.</p>
                            <div className="p-8 bg-black/50 rounded-xl mt-10 text-center border border-blue-500/30">
                                <p className="text-xl mb-6">And you…</p>
                                <p className="text-xl">Yes, you, reading this story right now…</p>
                            </div>
                            <div className="mt-10 bg-gradient-to-r from-purple-900 to-blue-900 p-8 rounded-xl text-center">
                                <p className="text-2xl mb-8">Before you relax, answer this:</p>
                                <p className="text-3xl font-bold mb-4">Are you truly awake?</p>
                                <p className="text-3xl font-bold text-red-400">Or are you dreaming your life… right now?</p>
                                <p className="text-4xl mt-8">👁️‍🗨️</p>
                            </div>
                            <p className="text-center text-xl mt-8 font-bold text-yellow-300">And who said you never tried on LUCID-X?</p>
                        </div>
                    </section>

                    {/* Interactive Question */}
                    <div className="text-center mt-16">
                        <button
                            onClick={handleRevealQuestion}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            Question Your Reality
                        </button>

                        {showQuestion && (
                            <div className="mt-8 p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-yellow-500/50 animate-pulse">
                                <p className="text-2xl font-bold text-yellow-300">Are you sure you're not dreaming right now?</p>
                                <div className="flex justify-center space-x-4 mt-4">
                                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg">Yes</button>
                                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg">No</button>
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg">Unsure</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Floating VR headset */}
                <div className="fixed top-1/4 right-16 z-0 animate-float opacity-70">
                    <div className="w-48 h-48 bg-gray-800 rounded-full flex items-center justify-center">
                        <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center opacity-30 animate-pulse">
                            <div className="w-20 h-20 bg-purple-500 rounded-full opacity-50"></div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Lucid;