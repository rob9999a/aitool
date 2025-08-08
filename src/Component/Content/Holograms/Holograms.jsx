import React, { useState } from 'react';
import Navbar from '../../Website/Header/Navbar';

const Holograms = () => {
    const [activeTab, setActiveTab] = useState('technology');
    const [isHovering, setIsHovering] = useState(false);

    return (

        <>

            <Helmet>
                <title>✨ Holograms Are Back — and They're More Real Than Ever | Fyrexia AI Tools</title>
                <meta
                    name="description"
                    content="Discover how holograms have made a spectacular comeback with cutting-edge technology making them more realistic than ever."
                />
                <meta
                    name="keywords"
                    content="Holograms, Holographic Technology, Realistic Holograms, AI, Tech Innovation, Fyrexia"
                />
                <meta property="og:title" content="✨ Holograms Are Back — and They're More Real Than Ever" />
                <meta
                    property="og:description"
                    content="Discover how holograms have made a spectacular comeback with cutting-edge technology making them more realistic than ever."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fyrexia.co.uk/hologram-comeback" />
                <link rel="canonical" href="https://fyrexia.co.uk/hologram-comeback" />
            </Helmet>


            <Navbar></Navbar>


            <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
                <div className="div-template max-w-6xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-10 mt-8">
                        <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                            Tech Revolution
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            ✨ Holograms Are Back — and They're More Real Than Ever
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Next-gen holograms are becoming ultra-realistic, interactive, and ready for everyday life
                        </p>
                    </header>

                    {/* Hologram Visualization */}
                    <div className="mb-16 relative">
                        <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                            {/* Hologram Effect */}
                            <div className="h-96 bg-gradient-to-b from-gray-900 to-black flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://i.postimg.cc/sf5MZ3fC/freepik-the-style-is-candid-image-photography-with-natural-71913.jpg')] bg-cover"></div>

                                {/* Hologram Person */}
                                <div
                                    className="relative z-10 text-center transition-all duration-500"
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div className={`rounded-full mb-6 mx-auto transition-all duration-700 ${isHovering ? 'scale-110' : ''}`}>
                                        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full p-4 inline-block">
                                            <div className="bg-gradient-to-br from-purple-200 to-blue-200 w-48 h-48 rounded-full flex items-center justify-center text-5xl">
                                                👤
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
                                        <p className="text-white font-medium">
                                            {isHovering ? "Hello! How can I help you?" : "Interactive Hologram"}
                                        </p>
                                    </div>
                                </div>

                                {/* Hologram Glow */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className={`w-72 h-72 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 filter blur-3xl transition-all duration-1000 ${isHovering ? 'opacity-100 scale-125' : 'opacity-50'}`}></div>
                                </div>
                            </div>

                            {/* Hologram Info */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                                <div className="bg-black/80 text-white px-4 py-2 rounded-full flex items-center">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                    <span>Live Interaction Enabled</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 text-center text-gray-600">
                            <p>Hover over the hologram to see interactive capabilities</p>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {[
                            { id: 'technology', label: 'Technology', emoji: '🧠' },
                            { id: 'applications', label: 'Applications', emoji: '🌍' },
                            { id: 'usecase', label: 'Real Use Case', emoji: '🧪' },
                            { id: 'reactions', label: 'Reactions', emoji: '😲' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-3 rounded-full font-medium transition-all flex items-center ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                    }`}
                            >
                                <span className="mr-2 text-lg">{tab.emoji}</span> {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content Sections */}
                    <div className="mb-16">
                        {/* Technology Section */}
                        {activeTab === 'technology' && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">🧠 The Technology Behind the Magic</h2>
                                    <p className="text-gray-700 mb-6">
                                        Modern holograms rely on breakthroughs in light field technology, AI image reconstruction, and real-time projection.
                                    </p>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                title: "Volumetric Capture",
                                                description: "Recording a 3D object or person from all angles",
                                                icon: "📐"
                                            },
                                            {
                                                title: "Real-time Rendering",
                                                description: "Powered by GPUs and AI prediction models",
                                                icon: "⚡"
                                            },
                                            {
                                                title: "Laser-based Projection",
                                                description: "Casting images into actual 3D space",
                                                icon: "🔦"
                                            },
                                            {
                                                title: "Light Field Displays",
                                                description: "True depth perception from any angle",
                                                icon: "👁️"
                                            }
                                        ].map((tech, index) => (
                                            <div key={index} className="flex items-start p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                                                <div className="text-2xl mr-4">{tech.icon}</div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">{tech.title}</h3>
                                                    <p className="text-gray-600 mt-1">{tech.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 w-full">
                                        <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl mb-4 flex items-center justify-center">
                                            <div className="text-center p-4">
                                                <div className="text-5xl mb-3">🔬</div>
                                                <p className="text-gray-600">Hologram Technology Visualization</p>
                                            </div>
                                        </div>
                                        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                                            "Together, they produce life-sized, full-color holograms that look like they're really standing in front of you."
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Applications Section */}
                        {activeTab === 'applications' && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">🌍 Where You'll See Them Next</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                    {[
                                        {
                                            title: "Concerts",
                                            description: "Artists like Whitney Houston and Tupac have already 'returned' via hologram tours",
                                            icon: "🎤"
                                        },
                                        {
                                            title: "Virtual Meetings",
                                            description: "Beam someone into your office with Microsoft Mesh or Looking Glass",
                                            icon: "💼"
                                        },
                                        {
                                            title: "Museums & History",
                                            description: "Imagine talking to a life-sized AI-powered Abraham Lincoln",
                                            icon: "🏛️"
                                        },
                                        {
                                            title: "Retail & Advertising",
                                            description: "Interactive holograms in malls that respond to shoppers",
                                            icon: "🛍️"
                                        },
                                        {
                                            title: "Education",
                                            description: "Doctors training on 3D human anatomy holograms they can walk around",
                                            icon: "🎓"
                                        },
                                        {
                                            title: "Healthcare",
                                            description: "Surgeons visualizing complex procedures in 3D space",
                                            icon: "⚕️"
                                        }
                                    ].map((app, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow"
                                        >
                                            <div className="text-3xl mb-3">{app.icon}</div>
                                            <h3 className="font-bold text-gray-800 text-lg mb-1">{app.title}</h3>
                                            <p className="text-gray-600">{app.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Real Use Case Section */}
                        {activeTab === 'usecase' && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">🧪 Real Use Case: Hologram Portals</h2>

                                    <div className="space-y-6">
                                        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-6">
                                            <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                                                <span className="mr-2">🚪</span> How Hologram Portals Work
                                            </h3>
                                            <p className="text-gray-700 mb-4">
                                                Companies like Proto and Holoconnects now offer 7-foot-tall hologram booths that can "teleport" people into another space in real time — no headset needed.
                                            </p>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                                                <div>
                                                    <p>Just step inside one, and your full body is projected into another room — like FaceTime in 3D.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                {
                                                    title: "Proto Hologram",
                                                    features: "7-foot booth, Real-time projection",
                                                    price: "$60,000"
                                                },
                                                {
                                                    title: "Holoconnects",
                                                    features: "Life-size interaction, Multi-user",
                                                    price: "$75,000"
                                                }
                                            ].map((product, index) => (
                                                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4">
                                                    <h3 className="font-semibold text-gray-800 mb-2">{product.title}</h3>
                                                    <p className="text-gray-600 text-sm mb-2">{product.features}</p>
                                                    <div className="text-lg font-bold text-gray-900">{product.price}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center">
                                    <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6 h-full">
                                        <h3 className="text-xl font-bold mb-4">Current Limitations</h3>
                                        <ul className="space-y-3">
                                            {[
                                                "Cost is still high (tens of thousands of dollars per unit)",
                                                "Needs controlled lighting and space",
                                                "Ethical concerns if holograms of real people are misused",
                                                "Legal questions around replication without consent",
                                                "Power consumption and hardware requirements"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="text-yellow-400 mr-2">•</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Reactions Section */}
                        {activeTab === 'reactions' && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">😲 The Reactions</h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    {[
                                        {
                                            quote: "It was like she was really there. I tried to walk around her.",
                                            author: "Sarah K.",
                                            icon: "👩"
                                        },
                                        {
                                            quote: "I reached out to touch it — and I swear my brain thought it was real.",
                                            author: "Michael T.",
                                            icon: "✋"
                                        },
                                        {
                                            quote: "It's better than VR. It doesn't feel fake. The depth perception is incredible.",
                                            author: "David R.",
                                            icon: "👓"
                                        }
                                    ].map((reaction, index) => (
                                        <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                            <div className="text-4xl mb-4">{reaction.icon}</div>
                                            <p className="text-gray-700 italic mb-4">"{reaction.quote}"</p>
                                            <p className="text-gray-600">— {reaction.author}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                                    <div className="flex items-center">
                                        <div className="text-4xl mr-4">💡</div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 text-lg mb-1">Why Our Brains Believe</h3>
                                            <p className="text-gray-600">
                                                The combination of true depth perception, realistic lighting, and interactive capabilities tricks our visual cortex into perceiving holograms as real objects.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Final Thought */}
                    <div className="text-center py-12 border-t border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            🔮 Final Thought: The Holographic Future
                        </h2>

                        <div className="max-w-2xl mx-auto">
                            <p className="text-gray-700 text-lg mb-6">
                                We're not in the Star Wars cantina yet — but we're close. Holograms are no longer just for tech expos or sci-fi movies.
                            </p>

                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-gray-200 mb-8">
                                <p className="text-xl font-bold text-gray-800 italic">
                                    "The next time you attend a virtual event, you might not be looking at a screen — but a glowing, living image right in front of you."
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg text-gray-800 mb-3">Today's Reality</h3>
                                    <p className="text-gray-600">
                                        Concerts, museum exhibits, and corporate meetings with realistic holograms
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg text-gray-800 mb-3">Tomorrow's Potential</h3>
                                    <p className="text-gray-600">
                                        Holographic classrooms, telepresence, and interactive 3D interfaces in every home
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hologram Technology Showcase */}
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mb-16">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">Experience the Holographic Revolution</h3>
                            <p className="mb-6 opacity-90">
                                From entertainment to education, holograms are transforming how we interact with digital content
                            </p>
                            <div className="inline-flex flex-wrap justify-center gap-3">
                                {[
                                    'Volumetric Capture',
                                    'Light Field Displays',
                                    'Real-time Interaction',
                                    'AI Reconstruction',
                                    '3D Projection'
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

export default Holograms;