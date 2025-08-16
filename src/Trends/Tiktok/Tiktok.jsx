import React, { useState, useEffect } from 'react';
import Navbar from '../../Component/Website/Header/Navbar';
import { Helmet } from "react-helmet";

const Tiktok = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [filterStyle, setFilterStyle] = useState('shonen');

    useEffect(() => {
        // Animation trigger for demo effect
        const timer = setTimeout(() => {
            setIsAnimating(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const startTransformation = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setShowResult(true);
        }, 1500);
    };

    const resetDemo = () => {
        setIsAnimating(false);
        setShowResult(false);
    };

    const filterStyles = [
        { id: 'shonen', name: 'Shonen Hero', emoji: '💥' },
        { id: 'ghibli', name: 'Studio Ghibli', emoji: '🐉' },
        { id: 'bishonen', name: 'Bishōnen', emoji: '🎭' },
        { id: 'kawaii', name: 'Kawaii Style', emoji: '🌸' },
    ];

    return (

        <>

            <Helmet>
                <title>TikTok Anime Filter: The Viral Trend Transforming Faces</title>
                <meta
                    name="description"
                    content="Explore the TikTok anime filter phenomenon that's taking social media by storm, turning everyday faces into stunning anime characters."
                />
                <meta name="keywords" content="TikTok anime filter, viral TikTok trends, anime face filter, social media filters, TikTok effects" />
                <meta name="robots" content="index, follow" />
                <html lang="en" />

                {/* Open Graph */}
                <meta property="og:title" content="TikTok Anime Filter: The Viral Trend Transforming Faces" />
                <meta
                    property="og:description"
                    content="Discover how the TikTok anime filter works and why it's captivating millions worldwide."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/tiktok-anime-filter" />
                <meta property="og:image" content="https://i.postimg.cc/C5D2T4hD/aesthetic-anime-character-gaming-23-2151560674.avif" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="TikTok Anime Filter: The Viral Trend Transforming Faces" />
                <meta
                    name="twitter:description"
                    content="Learn about the TikTok anime filter trend and how it's changing social media aesthetics."
                />
                <meta name="twitter:image" content="https://fyrexia.co.uk/images/tiktok-anime-filter.jpg" />
            </Helmet>

            <Navbar></Navbar>


            <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
                <div className="div-template max-w-6xl mx-auto">

                    {/* Header */}
                    <header className="text-center mb-10 mt-8">
                        <div className="inline-flex items-center bg-pink-100 text-pink-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            <span className="mr-2">🔥</span> Viral Sensation
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TikTok Filter Transforms You Into Anime Character — With Unbelievable Accuracy
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Blend of AI and pop culture that turns your face into a fully animated anime-style character with stunning realism
                        </p>
                    </header>

                    {/* Transformation Demo */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl border border-gray-200 shadow-sm">
                                <div className="relative h-96 overflow-hidden rounded-xl bg-white">
                                    {/* Real Face */}
                                    <div className={`absolute inset-0 transition-all duration-1000 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <div className="bg-gradient-to-r from-blue-200 to-indigo-200 w-48 h-48 rounded-full absolute -top-16 -left-16 opacity-50 blur-xl"></div>
                                            <div className="bg-gradient-to-r from-pink-200 to-purple-200 w-48 h-48 rounded-full absolute -bottom-16 -right-16 opacity-50 blur-xl"></div>

                                            <div className="relative z-10">
                                                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto mb-6" />
                                                <div className="text-center">
                                                    <h3 className="font-bold text-lg text-gray-800">Real You</h3>
                                                    <p className="text-gray-500 text-sm">Before transformation</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Anime Transformation */}
                                    <div className={`absolute inset-0 transition-all duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 w-48 h-48 rounded-full absolute -top-16 -left-16 opacity-70 blur-xl"></div>
                                            <div className="bg-gradient-to-r from-pink-100 to-purple-100 w-48 h-48 rounded-full absolute -bottom-16 -right-16 opacity-70 blur-xl"></div>

                                            <div className="relative z-10">
                                                <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 border-2 border-white rounded-xl w-48 h-48 mx-auto mb-6 shadow-lg overflow-hidden">
                                                    <div className="absolute inset-0 bg-[url('https://i.imgur.com/9w2Qp2F.png')] bg-cover bg-center mix-blend-multiply opacity-30"></div>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="bg-gray-800 w-24 h-24 rounded-full opacity-20"></div>
                                                    </div>
                                                    <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white to-transparent"></div>
                                                </div>
                                                <div className="text-center">
                                                    <h3 className="font-bold text-lg text-gray-800">Anime You</h3>
                                                    <p className="text-gray-500 text-sm">{filterStyles.find(f => f.id === filterStyle)?.name} Style</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Transformation Effect */}
                                    <div className={`absolute inset-0 transition-all duration-700 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className={`w-0 h-0 rounded-full bg-pink-500 absolute transition-all duration-1000 ${isAnimating ? 'scale-[20] opacity-0' : 'scale-0'}`}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                                    <button
                                        onClick={startTransformation}
                                        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Transform Me!
                                    </button>
                                    <button
                                        onClick={resetDemo}
                                        className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition-all"
                                    >
                                        Reset Demo
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                                    <span className="mr-2">📱</span> How It Works
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    The "AI Manga Filter" uses advanced generative AI and facial mapping to convert your selfie into a highly stylized anime version of yourself.
                                </p>

                                <div className="space-y-4 mb-6">
                                    {[
                                        "Detailed facial expressions preserved",
                                        "Unique hair transformations",
                                        "Anime-style lighting and backgrounds",
                                        "Eye movement synced with real expressions",
                                        "Not just a skin overlay - builds a new character"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="bg-pink-100 p-1 rounded-full mr-3 mt-1">
                                                <div className="bg-pink-500 w-2 h-2 rounded-full"></div>
                                            </div>
                                            <p className="text-gray-700">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                                    <p className="text-blue-800 italic">
                                        "Like seeing yourself as the main character of a Studio Ghibli movie."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why It's Blowing Up */}
                    <div className="mb-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🤯</span> Why It's Blowing Up
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { value: "200M+", label: "Videos in first week", emoji: "📈" },
                                { value: "1000s", label: "Reaction videos", emoji: "🎬" },
                                { value: "Global", label: "Celebrity adoption", emoji: "🌟" },
                                { value: "Cosplay", label: "Digital makeovers", emoji: "🎭" },
                            ].map((stat, index) => (
                                <div key={index} className="bg-white p-5 rounded-xl border border-pink-200 shadow-sm text-center">
                                    <div className="text-4xl mb-3">{stat.emoji}</div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                    <p className="text-gray-600">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technology Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                                <span className="mr-2">🧠</span> The Technology Behind It
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Deep Learning Networks",
                                        desc: "Trained on thousands of anime styles",
                                        color: "bg-gradient-to-r from-blue-100 to-cyan-100"
                                    },
                                    {
                                        title: "Real-time Facial Tracking",
                                        desc: "Preserves micro-expressions and timing",
                                        color: "bg-gradient-to-r from-purple-100 to-pink-100"
                                    },
                                    {
                                        title: "StyleGAN-based Synthesis",
                                        desc: "Customizes your unique look",
                                        color: "bg-gradient-to-r from-amber-100 to-yellow-100"
                                    },
                                    {
                                        title: "AI Upscaling",
                                        desc: "4K-quality output without lag",
                                        color: "bg-gradient-to-r from-green-100 to-emerald-100"
                                    }
                                ].map((tech, index) => (
                                    <div key={index} className={`p-5 rounded-xl ${tech.color}`}>
                                        <h3 className="font-bold text-lg text-gray-800 mb-1">{tech.title}</h3>
                                        <p className="text-gray-700">{tech.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                                <span className="mr-2">👁️</span> Personalized and Hyper-Real
                            </h2>

                            <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
                                <p className="text-gray-700 mb-4">
                                    Each anime result feels hand-drawn with dramatic shadows and fluttering eyelashes. The filter adapts to your unique features:
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: '👨‍🎤', label: 'Gender' },
                                        { icon: '🧔', label: 'Facial Hair' },
                                        { icon: '💡', label: 'Lighting' },
                                        { icon: '😊', label: 'Emotions' },
                                        { icon: '👓', label: 'Accessories' },
                                        { icon: '🎨', label: 'Style Matching' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                            <div className="text-2xl mb-2">{item.icon}</div>
                                            <span className="text-gray-700 text-sm">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-pink-50 p-4 rounded-xl border border-pink-200">
                                <p className="text-pink-800">
                                    "A tough guy gets a shonen anime hero look. A quiet user becomes a mysterious bishōnen. A kid's face becomes a Studio Ghibli-style adventurer."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Creative Uses */}
                    <div className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🎨</span> Creative Uses
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Animated Storytelling",
                                    desc: "Creating animated skits for storytelling accounts",
                                    icon: "📖",
                                    color: "bg-blue-100"
                                },
                                {
                                    title: "Couple Transformations",
                                    desc: "Revealing anime versions of each other",
                                    icon: "💑",
                                    color: "bg-pink-100"
                                },
                                {
                                    title: "Gaming Profiles",
                                    desc: "Making anime profile pics and intros",
                                    icon: "🎮",
                                    color: "bg-purple-100"
                                },
                                {
                                    title: "Character Inspiration",
                                    desc: "Artists exploring new character ideas",
                                    icon: "🎨",
                                    color: "bg-amber-100"
                                },
                                {
                                    title: "Cosplay Design",
                                    desc: "Planning real-world cosplay outfits",
                                    icon: "👘",
                                    color: "bg-red-100"
                                },
                                {
                                    title: "Virtual Identity",
                                    desc: "Creating anime avatars for social media",
                                    icon: "👤",
                                    color: "bg-green-100"
                                }
                            ].map((use, index) => (
                                <div key={index} className={`p-5 rounded-xl border border-gray-200 ${use.color} hover:shadow-lg transition-shadow`}>
                                    <div className="text-3xl mb-3">{use.icon}</div>
                                    <h3 className="font-bold text-lg text-gray-800 mb-1">{use.title}</h3>
                                    <p className="text-gray-700">{use.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Concerns and Final Thought */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
                                <span className="mr-2">⚠️</span> Privacy Concerns
                            </h2>
                            <ul className="space-y-3 text-gray-700">
                                {[
                                    "Face data collection practices",
                                    "Potential for digital cloning",
                                    "Misuse in deepfakes or impersonation",
                                    "Long-term data storage policies",
                                    "Consent for biometric processing"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 bg-white p-4 rounded-lg border border-gray-300">
                                <p className="text-gray-700 font-medium">
                                    TikTok's response:
                                </p>
                                <p className="text-gray-600 mt-1">
                                    "All processing occurs on-device or is encrypted, and users can delete data at any time."
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 rounded-xl">
                            <h2 className="text-xl font-bold mb-4">🌟 Final Thought</h2>
                            <p className="mb-3 opacity-90">
                                This isn't just a fun filter. It's a glimpse into the future of identity and creativity.
                            </p>
                            <p className="mb-3 opacity-90">
                                A tool that turns your real-world face into a fantasy avatar — live, expressive, and completely believable.
                            </p>
                            <p className="opacity-90">
                                As AI art and augmented reality continue to merge, one thing is clear:
                            </p>
                            <p className="mt-4 text-lg font-semibold">
                                You don't need a studio to become an anime character anymore. You just need a phone.
                            </p>
                        </div>
                    </div>

                    {/* Style Selector */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-16">
                        <h3 className="font-bold text-lg text-gray-800 mb-4 text-center">Try Different Anime Styles</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {filterStyles.map(style => (
                                <button
                                    key={style.id}
                                    onClick={() => setFilterStyle(style.id)}
                                    className={`px-4 py-2 rounded-full font-medium transition-all ${filterStyle === style.id
                                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                        }`}
                                >
                                    <span className="mr-2">{style.emoji}</span> {style.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tiktok;