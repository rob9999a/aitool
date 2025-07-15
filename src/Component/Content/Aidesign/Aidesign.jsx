import React, { useState } from 'react';
import Navbar from '../../Website/Header/Navbar';

const Aidesign = () => {
    const [designStyle, setDesignStyle] = useState('scandinavian');
    const [activeRoom, setActiveRoom] = useState('living');
    const [isVRMode, setIsVRMode] = useState(false);

    const designStyles = [
        { id: 'scandinavian', name: 'Scandinavian', color: 'bg-blue-100' },
        { id: 'modern', name: 'Modern', color: 'bg-gray-100' },
        { id: 'rustic', name: 'Rustic', color: 'bg-amber-100' },
        { id: 'minimalist', name: 'Minimalist', color: 'bg-white border border-gray-200' },
        { id: 'industrial', name: 'Industrial', color: 'bg-gray-800 text-white' },
    ];

    const rooms = [
        { id: 'living', name: 'Living Room', icon: '🛋️' },
        { id: 'kitchen', name: 'Kitchen', icon: '🍳' },
        { id: 'bedroom', name: 'Bedroom', icon: '🛏️' },
        { id: 'bathroom', name: 'Bathroom', icon: '🚿' },
        { id: 'outdoor', name: 'Outdoor', icon: '🌳' },
    ];

    const realExamples = [
        {
            title: "Tokyo Couple",
            description: "Co-designed their future home in VR, finalized in one afternoon",
            location: "Tokyo, Japan",
            image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
        },
        {
            title: "LA Real Estate",
            description: "VR 'try before you buy' for listed homes",
            location: "Los Angeles, USA",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
        },
        {
            title: "Memory Reconstruction",
            description: "Student recreated her childhood home from memory",
            location: "Oslo, Norway",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
        }
    ];

    return (

        <>

            <Navbar></Navbar>

            <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
                <div className="div-template max-w-6xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-12 mt-8">
                        <div className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                            Architectural Revolution
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Can AI Design Your Dream Home Inside a VR World?
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Walk into a room that doesn't exist yet - walls rise as you imagine them, spaces transform with your voice
                        </p>
                    </header>

                    {/* Interactive Demo */}
                    <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                            <h2 className="flex items-center text-xl font-bold text-gray-800 mb-4">
                                <span className="mr-2">🏡</span> Design Your Dream Home
                            </h2>

                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2">Describe your dream home:</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="e.g. 'Two-story cabin with Scandinavian interiors and forest view'"
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <button className="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg">
                                        Generate
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="font-medium text-gray-800 mb-2">Design Style</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {designStyles.map(style => (
                                            <button
                                                key={style.id}
                                                onClick={() => setDesignStyle(style.id)}
                                                className={`px-3 py-1 rounded-full text-sm ${designStyle === style.id
                                                    ? 'ring-2 ring-blue-500 ' + style.color
                                                    : 'bg-gray-100 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {style.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsVRMode(!isVRMode)}
                                    className="px-4 py-2 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg flex items-center"
                                >
                                    <span className="mr-2">{isVRMode ? "Exit VR" : "Enter VR"}</span>
                                    <span>👓</span>
                                </button>
                            </div>

                            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-xl p-4">
                                <div className="flex justify-between items-center mb-3">
                                    <div>
                                        <div className="text-sm text-gray-400">CURRENT DESIGN</div>
                                        <h3 className="font-bold">
                                            {designStyle === 'scandinavian' && "Nordic Pine Retreat"}
                                            {designStyle === 'modern' && "Urban Minimalist Villa"}
                                            {designStyle === 'rustic' && "Mountain Log Cabin"}
                                            {designStyle === 'minimalist' && "Zen Space Pod"}
                                            {designStyle === 'industrial' && "Loft Warehouse"}
                                        </h3>
                                    </div>
                                    <div className="bg-blue-500 rounded-full w-3 h-3 animate-pulse"></div>
                                </div>

                                <div className="aspect-video bg-gradient-to-br from-blue-800/20 to-teal-800/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-30 bg-[url('https://i.postimg.cc/mgxrVqdW/3d-rendering-cartoon-house-23-2150165652.jpg')] bg-cover"></div>
                                    <div className="text-center z-10">
                                        <div className="text-5xl mb-4"></div>
                                        <p>AI-Generated Home Preview</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                                <span className="mr-2">🚀</span> The Rise of AI-Driven Virtual Architecture
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Traditional home design involves blueprints and compromises. With AI, you describe your vision and instantly walk through it in VR.
                            </p>

                            <div className="space-y-4 mt-6">
                                {[
                                    { icon: '⏱️', title: 'Instant Generation', desc: 'Minutes instead of weeks' },
                                    { icon: '💸', title: 'Cost Reduction', desc: 'No renderers or multiple drafts' },
                                    { icon: '👥', title: 'Co-Creation', desc: 'Anyone can design with a headset' },
                                    { icon: '🎨', title: 'Personalization', desc: 'No two designs are the same' }
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="text-2xl mr-4">{feature.icon}</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="mb-16 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-200">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🌌</span> Not Just Design — Experience
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: '🚶‍♂️',
                                    title: 'Walk Through Spaces',
                                    description: 'Explore hallways and rooms at your own pace'
                                },
                                {
                                    icon: '🌅',
                                    title: 'Experience Lighting',
                                    description: 'See how natural light changes throughout the day'
                                },
                                {
                                    icon: '👂',
                                    title: 'Spatial Audio',
                                    description: 'Hear the acoustics of each space realistically'
                                },
                                {
                                    icon: '🔥',
                                    title: 'Ambient Elements',
                                    description: 'Feel the warmth of a virtual fireplace'
                                },
                                {
                                    icon: '🔄',
                                    title: 'Real-time Changes',
                                    description: 'Adjust walls, materials, and layouts instantly'
                                },
                                {
                                    icon: '👫',
                                    title: 'Social Experience',
                                    description: 'Invite others to tour your virtual home'
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-1">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Real Examples */}
                    <div className="mb-16">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🏆</span> Real Examples Already in Action
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {realExamples.map((example, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={example.image}
                                            alt={example.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="font-bold text-gray-800 text-lg">{example.title}</h3>
                                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                                {example.location}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-4">{example.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Impact Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div>
                            <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                                <span className="mr-2">🏗️</span> What Changes for Architecture?
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Democratized Design",
                                        description: "Anyone can become a co-creator without technical skills",
                                        icon: "👨‍👩‍👧‍👦"
                                    },
                                    {
                                        title: "Instant Iterations",
                                        description: "Make changes in seconds instead of weeks",
                                        icon: "⚡"
                                    },
                                    {
                                        title: "Emotional Connection",
                                        description: "Experience spaces before they're built",
                                        icon: "❤️"
                                    },
                                    {
                                        title: "Sustainable Planning",
                                        description: "Reduce physical mockups and material waste",
                                        icon: "🌱"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start p-4 bg-white rounded-lg border border-gray-200">
                                        <div className="text-2xl mr-4">{item.icon}</div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6">
                            <h3 className="text-xl font-bold mb-4">The Catch? Important Considerations</h3>
                            <ul className="space-y-3">
                                {[
                                    "Can AI account for local building codes and regulations?",
                                    "Will people trust designs they can't touch yet?",
                                    "Could hyper-personalization harm resale value?",
                                    "How to handle structural engineering requirements?",
                                    "Will physical homes ever feel sufficient after perfect virtual ones?"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-yellow-400 mr-2">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Room Explorer */}
                    <div className="mb-16 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🚪</span> Explore Your Future Home
                        </h2>

                        <div className="flex flex-wrap gap-3 mb-6">
                            {rooms.map(room => (
                                <button
                                    key={room.id}
                                    onClick={() => setActiveRoom(room.id)}
                                    className={`px-4 py-3 rounded-lg flex items-center ${activeRoom === room.id
                                        ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                        }`}
                                >
                                    <span className="mr-2 text-xl">{room.icon}</span> {room.name}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">
                                        {activeRoom === 'living' && '🛋️'}
                                        {activeRoom === 'kitchen' && '🍳'}
                                        {activeRoom === 'bedroom' && '🛏️'}
                                        {activeRoom === 'bathroom' && '🚿'}
                                        {activeRoom === 'outdoor' && '🌳'}
                                    </div>
                                    <p className="text-gray-700 font-medium">
                                        {activeRoom === 'living' && 'Living Room Preview'}
                                        {activeRoom === 'kitchen' && 'Kitchen Preview'}
                                        {activeRoom === 'bedroom' && 'Bedroom Preview'}
                                        {activeRoom === 'bathroom' && 'Bathroom Preview'}
                                        {activeRoom === 'outdoor' && 'Outdoor Space Preview'}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="bg-white border border-gray-200 rounded-xl p-5">
                                    <h3 className="font-bold text-lg text-gray-800 mb-3">Customize This Room</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { icon: '🎨', option: 'Wall Color' },
                                            { icon: '🪵', option: 'Floor Material' },
                                            { icon: '💡', option: 'Lighting' },
                                            { icon: '🪟', option: 'Window Size' }
                                        ].map((item, index) => (
                                            <button
                                                key={index}
                                                className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
                                            >
                                                <span className="text-2xl mb-1">{item.icon}</span>
                                                <span className="text-sm">{item.option}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final Thought */}
                    <div className="text-center py-12 border-t border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            🔮 Final Thought: The Future of Home Design
                        </h2>

                        <div className="max-w-2xl mx-auto">
                            <p className="text-gray-700 text-lg mb-6">
                                AI isn't replacing the dream of building a home. It's removing the barriers between idea and reality.
                            </p>

                            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8 border border-gray-200 mb-8">
                                <p className="text-xl font-bold text-gray-800 italic">
                                    "Soon, designing a house won't require technical skills — just curiosity, taste, and a willingness to explore."
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg text-gray-800 mb-3">Traditional Design</h3>
                                    <p className="text-gray-600">
                                        Blueprints → Revisions → Physical models → Construction
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg text-gray-800 mb-3">AI + VR Design</h3>
                                    <p className="text-gray-600">
                                        Imagination → Instant VR creation → Refinement → Construction
                                    </p>
                                </div>
                            </div>

                            <p className="mt-8 text-gray-900 font-semibold">
                                The future of architecture begins with words, not bricks. And the doorway? It's already open.
                            </p>
                        </div>
                    </div>

                    {/* VR Experience */}
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-center text-white mb-16">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4">Experience the VR Design Revolution</h3>
                            <p className="mb-6 opacity-90">
                                Design, explore, and refine your dream home in immersive virtual reality
                            </p>
                            <div className="inline-flex flex-wrap justify-center gap-3">
                                {[
                                    'AI-Powered Design',
                                    'Real-time Modifications',
                                    'Photorealistic Visualization',
                                    'Spatial Audio Experience',
                                    'Multi-user Collaboration'
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

export default Aidesign;