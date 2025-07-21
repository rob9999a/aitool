import React, { useState } from 'react';
import { Helmet } from "react-helmet";

import Navbar from '../Header/Navbar';

const Trending = () => {
    // State for search functionality
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    // Categories for filtering
    const categories = [
        'All', 'Video Editing', 'Audio Tools', 'Content Creation',
        'Thumbnails & SEO', 'Avatars & Voice', 'Automation'
    ];

    // Trending AI tools data
    const tools = [
        {
            id: 1,
            name: "Descript",
            logo: "🔧",
            category: "Video Editing",
            description: "AI-powered editing for podcasts and videos",
            features: ["Auto-cut filler words", "Multi-track editing", "Screen recording"],
            popularity: "High",
            freeTier: true,
            link: "#"
        },
        {
            id: 2,
            name: "Runway ML",
            logo: "🎬",
            category: "Video Editing",
            description: "Advanced AI video editing with machine learning",
            features: ["Green screen removal", "Motion tracking", "Style transfer"],
            popularity: "Medium",
            freeTier: true,
            link: "#"
        },
        {
            id: 3,
            name: "VEED.IO",
            logo: "📝",
            category: "Video Editing",
            description: "Online video editor with AI capabilities",
            features: ["Auto subtitles", "Background removal", "Text-to-speech"],
            popularity: "High",
            freeTier: true,
            link: "#"
        },
        {
            id: 4,
            name: "ElevenLabs",
            logo: "🔊",
            category: "Audio Tools",
            description: "Most realistic AI voice generator",
            features: ["Emotion control", "Multi-language", "Voice cloning"],
            popularity: "Very High",
            freeTier: true,
            link: "#"
        },
        {
            id: 5,
            name: "Beatoven.ai",
            logo: "🎵",
            category: "Audio Tools",
            description: "Create custom royalty-free music",
            features: ["Genre selection", "Mood adjustment", "Beat matching"],
            popularity: "Medium",
            freeTier: true,
            link: "#"
        },
        {
            id: 6,
            name: "Synthesia",
            logo: "👤",
            category: "Avatars & Voice",
            description: "Create videos with AI avatars",
            features: ["100+ avatars", "120+ languages", "No filming needed"],
            popularity: "High",
            freeTier: false,
            link: "#"
        },
        {
            id: 7,
            name: "HeyGen",
            logo: "🎥",
            category: "Avatars & Voice",
            description: "AI video generation with digital avatars",
            features: ["Custom avatars", "Voice cloning", "Template library"],
            popularity: "Medium",
            freeTier: true,
            link: "#"
        },
        {
            id: 8,
            name: "Pictory",
            logo: "📽️",
            category: "Content Creation",
            description: "Transform long videos into short clips",
            features: ["AI highlights", "Auto captions", "Social media formatting"],
            popularity: "High",
            freeTier: true,
            link: "#"
        },
        {
            id: 9,
            name: "Lumen5",
            logo: "✨",
            category: "Content Creation",
            description: "Turn articles into engaging videos",
            features: ["Text-to-video", "Media library", "Brand customization"],
            popularity: "Medium",
            freeTier: true,
            link: "#"
        },
        {
            id: 10,
            name: "TubeBuddy",
            logo: "📊",
            category: "Thumbnails & SEO",
            description: "YouTube optimization and analytics",
            features: ["Keyword research", "Thumbnail generator", "A/B testing"],
            popularity: "Very High",
            freeTier: true,
            link: "#"
        },
        {
            id: 11,
            name: "Canva AI",
            logo: "🎨",
            category: "Thumbnails & SEO",
            description: "AI-powered design tool for creators",
            features: ["Magic Design", "Background removal", "Text-to-image"],
            popularity: "High",
            freeTier: true,
            link: "#"
        },
        {
            id: 12,
            name: "InVideo",
            logo: "🚀",
            category: "Automation",
            description: "AI video creation at scale",
            features: ["Template library", "Text-to-video", "Collaboration"],
            popularity: "Medium",
            freeTier: true,
            link: "#"
        }
    ];

    // Filter tools based on search and category
    const filteredTools = tools.filter(tool => {
        const matchesSearch =
            tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tool.category.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            activeCategory === 'All' || tool.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    return (

        <>
            <Helmet>
                <title>Trending Fyrexia AI for Creators</title>

                <meta
                    name="description"
                    content="Discover the latest AI tools on Fyrexia AI designed specifically for creators to innovate and grow in 2025."
                />

                <meta property="og:title" content="Trending Fyrexia AI for Creators" />
                <meta
                    property="og:description"
                    content="Explore cutting-edge AI tools tailored for creators. Boost your creativity and business with Fyrexia AI."
                />

                <meta name="twitter:title" content="Trending Fyrexia AI for Creators" />
                <meta
                    name="twitter:description"
                    content="Discover innovative AI tools on Fyrexia AI for creators to transform their work and business."
                />
            </Helmet>

            <Navbar></Navbar>


            <div className="min-h-screen bg-white text-gray-800 font-sans">
                {/* Header */}
                <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16 px-4 md:px-8">
                    <div className="div-template max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    Trending Fyrexia AI for Creators
                                </h1>
                                <p className="text-xl text-blue-100 max-w-3xl">
                                    Discover the most powerful AI tools that content creators are using in 2025 - 2080
                                </p>
                            </div>
                            <div className="mt-6 md:mt-0">
                                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                                    <p className="text-center text-blue-100 font-medium mb-2">Updated Daily</p>
                                    <div className="text-3xl font-bold text-center">July 15, 2025</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Search and Filter Section */}
                <section className="py-8 bg-gray-50 border-b border-gray-200">
                    <div className="max-w-6xl mx-auto px-4 md:px-8">
                        <div className="flex flex-col md:flex-row gap-4 justify-between">
                            <div className="flex-1">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search AI tools..."
                                        className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <svg
                                        className="absolute right-4 top-4 h-5 w-5 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Submit Tool
                                </button>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="flex flex-wrap gap-3 mt-6 justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === category
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 bg-white">
                    <div className="max-w-6xl mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 text-center">
                                <div className="text-3xl font-bold text-blue-600">250+</div>
                                <div className="text-gray-600 mt-2">AI Tools Listed</div>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-100 text-center">
                                <div className="text-3xl font-bold text-green-600">87%</div>
                                <div className="text-gray-600 mt-2">Offer Free Tier</div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 text-center">
                                <div className="text-3xl font-bold text-purple-600">1.2M+</div>
                                <div className="text-gray-600 mt-2">Active Creators</div>
                            </div>
                            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100 text-center">
                                <div className="text-3xl font-bold text-yellow-600">24/7</div>
                                <div className="text-gray-600 mt-2">New Tools Added</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tools Grid */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 md:px-8">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold">
                                {activeCategory === 'All' ? 'All Trending Tools' : activeCategory + ' Tools'}
                                <span className="text-gray-500 font-normal ml-2">({filteredTools.length})</span>
                            </h2>
                            <div className="text-sm text-gray-500">
                                Sorted by: <span className="font-medium text-gray-700">Popularity</span>
                            </div>
                        </div>

                        {filteredTools.length === 0 ? (
                            <div className="bg-white p-12 rounded-xl text-center">
                                <div className="text-5xl mb-4">🔍</div>
                                <h3 className="text-xl font-bold mb-2">No tools found</h3>
                                <p className="text-gray-600">
                                    Try adjusting your search or filter to find what you're looking for
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredTools.map((tool) => (
                                    <div
                                        key={tool.id}
                                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all"
                                    >
                                        <div className="p-6">
                                            <div className="flex items-start">
                                                <div className="text-3xl mr-4">{tool.logo}</div>
                                                <div>
                                                    <div className="flex justify-between">
                                                        <h3 className="text-xl font-bold">{tool.name}</h3>
                                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${tool.popularity === 'Very High'
                                                            ? 'bg-red-100 text-red-800'
                                                            : tool.popularity === 'High'
                                                                ? 'bg-orange-100 text-orange-800'
                                                                : 'bg-blue-100 text-blue-800'
                                                            }`}>
                                                            {tool.popularity}
                                                        </span>
                                                    </div>
                                                    <div className="mt-1">
                                                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                                            {tool.category}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-gray-600">{tool.description}</p>

                                            <div className="mt-4">
                                                <h4 className="font-medium text-gray-700 mb-2">Key Features:</h4>
                                                <ul className="space-y-1">
                                                    {tool.features.map((feature, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-600">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="mt-6 flex justify-between items-center">
                                                <div>
                                                    {tool.freeTier ? (
                                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                            Free Tier Available
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                                                            Premium Only
                                                        </span>
                                                    )}
                                                </div>
                                                <a
                                                    href={tool.link}
                                                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                                                >
                                                    Learn more
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>



            </div>
        </>
    );
};

export default Trending;