import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import Navbar from '../../Website/Header/Navbar';

const Createpost = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [activeTool, setActiveTool] = useState('chatgpt');

    const steps = [
        {
            title: "Find What's Trending",
            description: "Discover viral content ideas before they peak using AI tools",
            prompt: "Give me 10 viral video ideas in the niche of personal finance for the upcoming week.",
            tools: ['ChatGPT', 'BuzzSumo', 'Exploding Topics']
        },
        {
            title: "Write Scroll-Stopping Hooks",
            description: "Create attention-grabbing openings that keep viewers engaged",
            prompt: "Write 10 TikTok-style hooks that sound like MrBeast or Alex Hormozi, focused on productivity.",
            tools: ['Jasper', 'ChatGPT', 'Notion AI']
        },
        {
            title: "Record Once, Repurpose Everywhere",
            description: "Transform one video into multiple platform-ready clips",
            prompt: "",
            tools: ['Pictory', 'CapCut AI', 'OpusClip']
        },
        {
            title: "Generate Captions & Hashtags",
            description: "Automatically create optimized captions and trending hashtags",
            prompt: "Write a short, viral Instagram caption with a call to action and five trending hashtags for a reel about AI and content creation.",
            tools: ['ChatGPT', 'Metricool', 'Buffer']
        },
        {
            title: "Schedule & Publish",
            description: "Automate your content distribution across platforms",
            prompt: "",
            tools: ['Metricool', 'Buffer', 'Hootsuite']
        }
    ];

    const tools = {
        chatgpt: {
            name: "ChatGPT",
            description: "AI-powered text generation for content ideas, scripts, hooks, and captions",
            useCases: ["Content ideation", "Hook generation", "Caption writing", "Hashtag research"]
        },
        pictory: {
            name: "Pictory",
            description: "AI video editing tool that transforms long videos into short clips",
            useCases: ["Video clipping", "Auto-captions", "Format conversion", "Highlight extraction"]
        },
        leonardo: {
            name: "Leonardo AI",
            description: "AI design tool for creating eye-catching visuals and thumbnails",
            useCases: ["Thumbnail creation", "Social graphics", "Brand assets", "Template design"]
        },
        metricool: {
            name: "Metricool",
            description: "All-in-one social media management with scheduling and analytics",
            useCases: ["Content scheduling", "Performance analytics", "Cross-platform posting", "Competitor tracking"]
        }
    };

    return (

        <>
            <Helmet>
                <title>Create Viral Social Media Content with AI — Templates, Tools & Strategy</title>
                <meta
                    name="description"
                    content="Learn how to use AI to create viral content for Instagram, TikTok, and YouTube. From hooks and captions to video ideas and carousels — AI makes going viral easier than ever."
                />
                <meta name="robots" content="index, follow" />
                <html lang="en" />

                {/* Open Graph */}
                <meta property="og:title" content="Create Viral Social Media Content with AI" />
                <meta
                    property="og:description"
                    content="Use AI tools to generate viral captions, videos, reels, and posts. Learn how creators use ChatGPT, Midjourney, and editing automation to explode reach."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yourwebsite.com/ai-viral-content" />
                <meta property="og:image" content="https://yourwebsite.com/images/ai-viral.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Create Viral Social Media Content with AI" />
                <meta
                    name="twitter:description"
                    content="Go viral with AI! Discover how to generate high-performing content using ChatGPT, templates, and editing tools — no burnout required."
                />
                <meta name="twitter:image" content="https://yourwebsite.com/images/ai-viral.jpg" />
                <meta name="twitter:site" content="@yourhandle" />
            </Helmet>
            <Navbar></Navbar>

            <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="div-template text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
                            Create <span className="text-indigo-600">Viral Social Media Content</span> with AI
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                            How Anyone Can Go Viral Without Being a Designer, Editor, or Copywriter
                        </p>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-2xl mx-auto rounded mb-10">
                            <h2 className="text-lg font-bold text-gray-900 mb-2">The Truth Most Creators Ignore</h2>
                            <p className="text-gray-700">
                                Everyone tells you to "post daily." But no one tells you how to do that without burning out.
                                With AI, you can create a week's worth of content in just a few hours.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">The AI-Powered Viral Content System</h3>
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${activeStep === index
                                            ? 'bg-indigo-600 text-white shadow-lg transform -translate-y-1'
                                            : 'bg-white border border-gray-200 hover:bg-indigo-50'
                                            }`}
                                        onClick={() => setActiveStep(index)}
                                    >
                                        <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                                            {index + 1}
                                        </div>
                                        <span className="font-medium">{step.title}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl mb-6">
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">{steps[activeStep].title}</h4>
                                <p className="text-gray-700 mb-4">{steps[activeStep].description}</p>

                                {steps[activeStep].prompt && (
                                    <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg">
                                        <p className="text-xl text-indigo-800 font-medium mb-1">AI Prompt:</p>
                                        <p className="text-gray-800 italic">"{steps[activeStep].prompt}"</p>
                                    </div>
                                )}

                                <div className="mt-4">
                                    <p className="font-medium text-gray-900 mb-2">Recommended Tools:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {steps[activeStep].tools.map((tool, idx) => (
                                            <span key={idx} className="bg-white border border-indigo-200 text-indigo-700 px-3 py-1 rounded-full text-sm">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How Creators Use AI Section */}
                <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How Creators Use AI Like a Team</h2>
                        <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
                            Think of AI as your creative department that works 24/7 without burnout
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {Object.keys(tools).map((key) => (
                            <div
                                key={key}
                                className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all cursor-pointer ${activeTool === key
                                    ? 'border-indigo-500 shadow-lg transform -translate-y-1'
                                    : 'border-transparent hover:border-indigo-300'
                                    }`}
                                onClick={() => setActiveTool(key)}
                            >
                                <div className="p-6">
                                    <div className="bg-indigo-100 text-indigo-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        {tools[key].name.charAt(0)}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tools[key].name}</h3>
                                    <p className="text-gray-600 mb-4">{tools[key].description}</p>
                                    <div>
                                        <p className="font-medium text-gray-900 mb-2">Use Cases:</p>
                                        <ul className="space-y-1">
                                            {tools[key].useCases.map((useCase, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-indigo-500 mr-2">•</span>
                                                    <span className="text-gray-700">{useCase}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Real Example: Personal Branding</h3>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
                            <div className="bg-white/10 p-4 rounded-lg">
                                <div className="text-2xl font-bold mb-2">1</div>
                                <p>Generate content ideas with ChatGPT</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg">
                                <div className="text-2xl font-bold mb-2">2</div>
                                <p>Record short 45-second takes</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg">
                                <div className="text-2xl font-bold mb-2">3</div>
                                <p>AI cuts & subtitles for platforms</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg">
                                <div className="text-2xl font-bold mb-2">4</div>
                                <p>Write captions & hashtags with AI</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg">
                                <div className="text-2xl font-bold mb-2">5</div>
                                <p>Schedule for next 7 days</p>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <p className="text-xl font-medium">Result: 10+ pieces of content created in under 2 hours</p>
                        </div>
                    </div>
                </div>

                {/* Final Thought */}
                <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Final Thought</h3>
                        <p className="text-xl text-gray-700 mb-6">
                            AI won't replace your creativity. But it will multiply it.
                        </p>
                        <div className="bg-indigo-50 rounded-xl p-6 max-w-2xl mx-auto">
                            <p className="text-lg text-gray-800 mb-4">
                                "The people who win on social media in 2025 aren't the ones working harder.
                                They're the ones creating smarter."
                            </p>
                            <p className="text-gray-700">
                                They use AI to generate, optimize, repurpose, and scale.
                                And now, so can you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Createpost;