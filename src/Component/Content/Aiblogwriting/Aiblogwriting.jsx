// src/App.js
import React, { useState } from 'react';
import Navbar from '../../Website/Header/Navbar';

function Aiblogwriting() {
    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        {
            id: 1,
            title: "Choose Niche + Goal",
            description: "Decide who you're writing for, what problem you're solving, and what action you want readers to take",
            example: "Niche: Personal finance\nGoal: Get readers to download a budgeting PDF",
            icon: "🎯"
        },
        {
            id: 2,
            title: "Generate Blog Topics",
            description: "Prompt AI tools with your niche to get SEO-friendly, actionable blog post ideas",
            example: "Give me 10 blog post ideas for beginners in personal finance that are SEO-friendly and actionable",
            icon: "💡"
        },
        {
            id: 3,
            title: "Create Detailed Outline",
            description: "Ask AI to build a complete blog structure with headings and subheadings",
            example: "Create a detailed blog outline for a 1,000-word post titled '7 Budgeting Mistakes That Keep You Broke'",
            icon: "📝"
        },
        {
            id: 4,
            title: "Generate Full Draft",
            description: "Get AI to write the complete post based on your outline",
            example: "Write a 1,000-word blog post based on this outline. Make the tone friendly and practical, and use short paragraphs.",
            icon: "✍️"
        },
        {
            id: 5,
            title: "Add Personal Touch",
            description: "Edit tone, add anecdotes, insert links, and optimize for SEO",
            example: "Add a personal story about budgeting mistakes, insert link to free budgeting tool",
            icon: "✨"
        },
        {
            id: 6,
            title: "Design & Publish",
            description: "Create visuals with AI tools and publish to your CMS",
            example: "Use Canva AI to create feature image, paste into WordPress, hit publish",
            icon: "🚀"
        }
    ];

    const tools = [
        { name: "ChatGPT", category: "Content Generation", icon: "🤖" },
        { name: "Canva AI", category: "Visual Design", icon: "🎨" },
        { name: "SurferSEO", category: "SEO Optimization", icon: "🔍" },
        { name: "Zapier", category: "Automation", icon: "⚙️" },
        { name: "Jasper", category: "Content Generation", icon: "📄" },
        { name: "Leonardo AI", category: "Visual Design", icon: "🖼️" },
    ];

    const currentStep = steps.find(step => step.id === activeStep);

    return (

        <>


            <Navbar></Navbar>


            <div className="min-h-screen bg-white">
                {/* Header Section */}
                <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
                    <div className="div-template max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-1/2 mb-10 md:mb-0">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Use AI to Write Blog Posts Automatically</h1>
                                <p className="text-xl mb-6 opacity-90">The Fast, Scalable Way to Create Quality Content in 2025</p>

                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 w-80 h-80 flex items-center justify-center">
                                        <div className="text-5xl">

                                        </div>
                                    </div>
                                    <div className="absolute -top-6 -right-6 bg-white text-indigo-600 p-4 rounded-xl shadow-lg">
                                        <div className="text-3xl">10x</div>
                                        <div className="font-bold">Faster</div>
                                    </div>
                                    <div className="absolute -bottom-6 -left-6 bg-white text-indigo-600 p-4 rounded-xl shadow-lg">
                                        <div className="text-3xl">5x</div>
                                        <div className="font-bold">More Output</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Pain Points Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">The Pain of Traditional Blogging</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                                <div className="text-4xl mb-4">⏱️</div>
                                <h3 className="text-xl font-bold mb-2">Time-Consuming</h3>
                                <p>Writing takes hours of focused effort that could be spent elsewhere</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
                                <div className="text-4xl mb-4">😫</div>
                                <h3 className="text-xl font-bold mb-2">Writer's Block</h3>
                                <p>Staring at a blank screen as ideas refuse to come</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                                <div className="text-4xl mb-4">📉</div>
                                <h3 className="text-xl font-bold mb-2">Inconsistent Results</h3>
                                <p>Posts may not rank or convert despite your effort</p>
                            </div>
                        </div>

                        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
                            <div className="text-2xl text-center font-bold text-gray-800 mb-6">"That's why creators, marketers, and entrepreneurs are turning to AI-powered blogging"</div>
                            <p className="text-center text-gray-600">Not as a shortcut, but as a scalable system to save time and publish faster</p>
                        </div>
                    </div>
                </section>

                {/* Step-by-Step Process */}
                <section className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-4">Here's exactly how to do it — step by step</h2>
                        <p className="text-gray-600 text-center mb-12">The complete AI blogging workflow</p>

                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Steps Navigation */}
                            <div className="md:w-1/3">
                                <div className="sticky top-24">
                                    {steps.map(step => (
                                        <div
                                            key={step.id}
                                            className={`p-4 mb-4 rounded-lg cursor-pointer transition-all ${activeStep === step.id
                                                ? 'bg-blue-600 text-white shadow-lg transform -translate-x-1'
                                                : 'bg-gray-100 hover:bg-gray-200'
                                                }`}
                                            onClick={() => setActiveStep(step.id)}
                                        >
                                            <div className="flex items-center">
                                                <div className="text-2xl mr-4">{step.icon}</div>
                                                <div>
                                                    <div className="font-bold">Step {step.id}</div>
                                                    <div>{step.title}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Step Details */}
                            <div className="md:w-2/3">
                                {currentStep && (
                                    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-8">
                                        <div className="flex items-center mb-6">
                                            <div className="text-4xl mr-4">{currentStep.icon}</div>
                                            <div>
                                                <div className="text-sm text-gray-500">Step {currentStep.id}</div>
                                                <h3 className="text-2xl font-bold">{currentStep.title}</h3>
                                            </div>
                                        </div>

                                        <p className="text-gray-700 mb-6 text-lg">{currentStep.description}</p>

                                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-6">
                                            <h4 className="font-bold text-blue-800 mb-2">Example Prompt:</h4>
                                            <div className="bg-white p-4 rounded font-mono text-sm whitespace-pre-line">
                                                {currentStep.example}
                                            </div>
                                        </div>

                                        {currentStep.id === 4 && (
                                            <div className="bg-gray-800 text-white p-4 rounded-lg mb-6">
                                                <div className="font-bold mb-2">Pro Tip:</div>
                                                <p>Use detailed prompts: "Use storytelling in the intro. Add real-life examples. Make each mistake easy to relate to. End with a strong CTA."</p>
                                            </div>
                                        )}

                                        {currentStep.id === 5 && (
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                                    <div className="font-bold mb-2">✓ Edit tone</div>
                                                    <p>Match to your brand voice</p>
                                                </div>
                                                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                                    <div className="font-bold mb-2">✓ Add anecdotes</div>
                                                    <p>Personal stories increase engagement</p>
                                                </div>
                                                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                                    <div className="font-bold mb-2">✓ Insert links</div>
                                                    <p>To products, email lists, or offers</p>
                                                </div>
                                                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                                    <div className="font-bold mb-2">✓ Optimize SEO</div>
                                                    <p>Use tools like SurferSEO</p>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex justify-between mt-8">
                                            <button
                                                className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
                                                disabled={activeStep === 1}
                                                onClick={() => setActiveStep(activeStep - 1)}
                                            >
                                                Previous
                                            </button>
                                            <button
                                                className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
                                                disabled={activeStep === steps.length}
                                                onClick={() => setActiveStep(activeStep + 1)}
                                            >
                                                Next Step
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bonus Section */}
                <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Bonus: Automate the Entire Workflow</h2>
                            <p className="text-gray-700 max-w-2xl mx-auto">Using these platforms, you could write a month's worth of blog posts in a weekend</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {tools.map((tool, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-md p-6 flex items-center hover:shadow-lg transition"
                                >
                                    <div className="text-4xl mr-4">{tool.icon}</div>
                                    <div>
                                        <div className="font-bold text-lg">{tool.name}</div>
                                        <div className="text-gray-600">{tool.category}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6">
                                    Workflow Example
                                </div>
                                <h3 className="text-2xl font-bold mb-6">Automated Content Pipeline</h3>

                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-2">1</div>
                                        <div>AI generates content</div>
                                    </div>
                                    <div className="flex items-center text-2xl">→</div>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-2">2</div>
                                        <div>Auto-schedule posts</div>
                                    </div>
                                    <div className="flex items-center text-2xl">→</div>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-2">3</div>
                                        <div>Auto-share to socials</div>
                                    </div>
                                    <div className="flex items-center text-2xl">→</div>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-2">4</div>
                                        <div>Analyze performance</div>
                                    </div>
                                </div>

                                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition">
                                    Automate Your Blogging Today
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Thoughts */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-6">Final Thoughts</h2>
                            <div className="bg-gray-800 text-white p-8 rounded-xl max-w-2xl mx-auto">
                                <div className="text-5xl mb-6">💡</div>
                                <p className="text-xl mb-4">
                                    "AI isn't here to replace real writers. It's here to eliminate the grunt work."
                                </p>
                                <div className="h-px bg-gray-700 my-6"></div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="font-bold text-blue-300">You Bring</div>
                                        <ul className="mt-2 space-y-2">
                                            <li className="flex items-center">
                                                <span className="text-green-400 mr-2">✓</span> Strategy
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-green-400 mr-2">✓</span> Expertise
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-green-400 mr-2">✓</span> Personal Touch
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="font-bold text-blue-300">AI Brings</div>
                                        <ul className="mt-2 space-y-2">
                                            <li className="flex items-center">
                                                <span className="text-green-400 mr-2">✓</span> Speed
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-green-400 mr-2">✓</span> Scalability
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-green-400 mr-2">✓</span> Consistency
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-center text-white">
                            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Blogging?</h3>
                            <p className="mb-6 max-w-2xl mx-auto">Join thousands of creators who are publishing 5x more content with 80% less effort</p>

                        </div>
                    </div>
                </section>


            </div>
        </>
    );
}

export default Aiblogwriting;