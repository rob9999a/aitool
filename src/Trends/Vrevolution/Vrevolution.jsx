import React from 'react';
import Navbar from '../../Component/Website/Header/Navbar';

const Vrevolution = () => {
    return (
        <>

            <Helmet>
                <title>New VR Game Lets You Feel Heat, Cold, and Touch — In Real Time</title>
                <meta
                    name="description"
                    content="Discover the groundbreaking VR game that lets players feel heat, cold, and physical sensations in real time, revolutionizing immersive gaming experiences."
                />
                <meta name="keywords" content="VR game, sensory gaming, virtual reality, haptic feedback, immersive gaming, VR technology" />
                <meta name="robots" content="index, follow" />
                <html lang="en" />

                {/* Open Graph */}
                <meta property="og:title" content="New VR Game Lets You Feel Heat, Cold, and Touch — In Real Time" />
                <meta
                    property="og:description"
                    content="Experience the next level of VR gaming with real-time heat, cold, and touch sensations."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/vr-sensory-gaming" />
                <meta property="og:image" content="https://fyrexia.co.uk/images/vr-sensory-gaming.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="New VR Game Lets You Feel Heat, Cold, and Touch — In Real Time" />
                <meta
                    name="twitter:description"
                    content="Discover how this VR game delivers real-time sensory feedback for a truly immersive experience."
                />
                <meta name="twitter:image" content="https://fyrexia.co.uk/images/vr-sensory-gaming.jpg" />
            </Helmet>
            <Navbar></Navbar>


            <div className="bg-white min-h-screen p-4 sm:p-6 md:p-8">
                <div className="div-template max-w-7Feel the virtual world xl mx-auto">

                    {/* Header */}
                    <header className="text-center mb-10 mt-8">
                        <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            Sensory Revolution
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            🎮 New VR Game Lets You Feel Heat, Cold, and Touch — In Real Time
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Experience virtual worlds with full-body sensory feedback - thermal, tactile, and pressure sensations
                        </p>
                    </header>

                    {/* Hero Section with Thermal Visualization */}
                    <div className="mb-16 relative">
                        <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                            {/* Thermal Gradient Visualization */}
                            <div className="h-64 md:h-96 w-full flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-transparent to-red-500 opacity-30"></div>

                                {/* Hot/Cold Zones */}
                                <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-red-500 rounded-full filter blur-2xl opacity-40 animate-pulse"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500 rounded-full filter blur-2xl opacity-40 animate-pulse"></div>

                                {/* Center Glove */}
                                <div className="relative z-10 text-center">
                                    <div className="inline-flex items-center justify-center w-32 h-32 bg-white/80 backdrop-blur-sm rounded-full border-2 border-gray-200 shadow-lg">
                                        <div className="text-5xl">
                                            <img src='https://i.postimg.cc/g2ssgBX0/11280329.png'></img>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-lg font-semibold text-gray-800 bg-white/80 py-2 px-4 rounded-full inline-block">
                                        Feel the virtual world
                                    </p>
                                </div>
                            </div>

                            {/* Thermal Legend */}
                            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm py-2 px-4 rounded-full flex justify-between">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                                    <span className="text-white text-sm">Cold Sensation</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                                    <span className="text-white text-sm">Heat Sensation</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 text-center text-gray-600">
                            <p>Thermal feedback technology creates realistic temperature sensations in VR environments</p>
                        </div>
                    </div>

                    {/* Technology Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div>
                            <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                                <span className="mr-2">🔬</span> The Technology: Beyond Vibration
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: '🖐️',
                                        title: 'Haptic Gloves',
                                        desc: 'Microfluidic actuators simulate pressure, texture, and resistance',
                                        color: 'bg-blue-50 border-blue-200'
                                    },
                                    {
                                        icon: '🌡️',
                                        title: 'Thermal Fabric Nodes',
                                        desc: 'Heat up or cool down based on virtual environments',
                                        color: 'bg-red-50 border-red-200'
                                    },
                                    {
                                        icon: '🔌',
                                        title: 'Neuro-Responsive Suits',
                                        desc: 'Mimic surface-level sensations like wind, rain, or impact',
                                        color: 'bg-purple-50 border-purple-200'
                                    }
                                ].map((tech, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-start p-5 rounded-xl border ${tech.color}`}
                                    >
                                        <div className="text-3xl mr-4">{tech.icon}</div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 text-lg">{tech.title}</h3>
                                            <p className="text-gray-600 mt-1">{tech.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <blockquote className="mt-8 p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                                <p className="text-gray-700 italic">
                                    "We wanted players to not just see and hear the virtual world — but to live in it"
                                </p>
                                <p className="mt-2 text-gray-600 font-medium">— Dr. Alan Mitsu, Lead Engineer at NeuroReach</p>
                            </blockquote>
                        </div>

                        <div>
                            <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                                <span className="mr-2">🕹️</span> The Game: EchoRealms
                            </h2>

                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-6 mb-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                                        Fantasy RPG
                                    </div>
                                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                        Open World
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-4">
                                    An immersive world where every biome has distinct physical sensations:
                                </p>

                                <div className="space-y-4">
                                    {[
                                        { icon: '❄️', text: 'Icy mountains: Chill in your fingertips' },
                                        { icon: '🔥', text: 'Lava pits: Heat radiating through your arms' },
                                        { icon: '🦊', text: 'Petting animals: Soft fur-like pressure' },
                                        { icon: '🏹', text: 'Combat hits: Gentle thump in chest rig' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="text-2xl mr-3">{item.icon}</div>
                                            <p className="text-gray-700">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-4 mt-8">
                                <span className="mr-2">👁️‍🗨️</span> Realism Without Wires
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    'Wireless & lightweight',
                                    'USB-C rechargeable',
                                    'Bluetooth-synced',
                                    'Breathable fabric',
                                    'Moisture-wicking',
                                    '<100ms latency'
                                ].map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex items-center"
                                    >
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Applications Section */}
                    <div className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">⚠️</span> Real World Implications
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { icon: '🏥', title: 'Medical Rehab', desc: 'Regaining sensory awareness' },
                                { icon: '🎓', title: 'Education', desc: 'High-risk simulations training' },
                                { icon: '✈️', title: 'Virtual Travel', desc: 'Real physical sensations of locations' },
                                { icon: '💞', title: 'Social VR', desc: 'Feeling hugs across distance' }
                            ].map((app, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-4xl mb-3">{app.icon}</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-1">{app.title}</h3>
                                    <p className="text-gray-600 text-sm">{app.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Considerations */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                            <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
                                <span className="mr-2">🧠</span> But Is It Too Real?
                            </h3>

                            <ul className="space-y-3 text-gray-700">
                                {[
                                    "Discomfort with prolonged 'heat' or 'cold' exposure",
                                    "Overwhelming sensations in action sequences",
                                    "Mental confusion with sensory mismatch",
                                    "Potential for motion sickness amplification",
                                    "Emotional distress in intense scenarios"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-yellow-500 mr-2">•</span> {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 bg-white p-4 rounded-lg border border-yellow-300">
                                <p className="text-gray-700 font-medium">
                                    Safety features include:
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {[
                                        'Temperature limits',
                                        'Duration controls',
                                        'Haptic strength adjustment',
                                        'Sensation filters',
                                        'Emergency pause'
                                    ].map((feature, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-xl p-6 h-full">
                                <h3 className="text-xl font-bold mb-4">Final Thought: A New Era of Gaming</h3>
                                <p className="mb-3 opacity-90">
                                    This is more than a game. It's a merging of digital and physical reality.
                                </p>
                                <p className="mb-3 opacity-90">
                                    The screen no longer separates us from the world — it brings that world to us.
                                </p>
                                <p className="opacity-90">
                                    The future of interaction isn't just visual or audible — it's touchable.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Thermal Tech Showcase */}
                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-2xl p-8 text-center mb-16">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Experience Thermal Reality</h2>
                            <p className="text-gray-600 mb-4">
                                Revolutionary technology that bridges the gap between virtual and physical sensations
                            </p>
                            <div className="inline-flex space-x-4">
                                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-medium">
                                    Heat Simulation
                                </div>
                                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                                    Cold Simulation
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Vrevolution;