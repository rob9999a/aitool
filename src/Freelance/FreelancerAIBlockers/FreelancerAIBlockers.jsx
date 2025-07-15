import React from "react";
import Navbar from "../../Component/Website/Header/Navbar";

export default function FreelancerAIBlockers() {
    return (

        <>
            <Navbar></Navbar>


            <section className="min-h-screen bg-gradient-to-br from-red-100 via-white to-purple-100 py-20 px-6 md:px-16 text-gray-900 font-sans">
                <div className="div-template max-w-5xl mx-auto shadow-2xl border border-gray-300 rounded-3xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-red-600 text-white py-10 px-8 md:px-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug tracking-tight text-center">
                            🤯 What’s stopping most freelancers from using AI to 10x their output —
                            <br className="hidden md:block" />
                            <span className="text-yellow-300">fear, confusion, or habit?</span>
                        </h1>
                    </div>

                    {/* Body */}
                    <div className="bg-white p-10 md:p-16 space-y-10 text-lg leading-relaxed">
                        {/* Intro */}
                        <p className="text-gray-800">
                            AI is here. It’s fast. It’s powerful. And it’s changing freelancing forever.
                            So why aren’t more freelancers using it to multiply their output, attract premium clients, and free up time?
                        </p>

                        {/* Fear Block */}
                        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-md shadow-sm">
                            <h2 className="text-2xl font-bold text-red-600 mb-2">😨 1. Fear</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>"Will AI replace me?"</li>
                                <li>"What if clients don’t value my work anymore?"</li>
                                <li>"What if I lose my creative edge?"</li>
                            </ul>
                            <p className="mt-3">
                                The truth? <strong>AI doesn’t replace skilled freelancers — it replaces unskilled ones who refuse to adapt.</strong>
                            </p>
                        </div>

                        {/* Confusion Block */}
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-md shadow-sm">
                            <h2 className="text-2xl font-bold text-yellow-600 mb-2">🤔 2. Confusion</h2>
                            <p>Too many tools. Too many options. It’s overwhelming.</p>
                            <p className="mt-2 font-semibold">
                                But here’s the secret: You don’t need everything. Just master one AI tool that solves one problem — and let that build momentum.
                            </p>
                        </div>

                        {/* Habit Block */}
                        <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-md shadow-sm">
                            <h2 className="text-2xl font-bold text-purple-600 mb-2">🔁 3. Habit</h2>
                            <p>
                                Comfort is the enemy of growth. Freelancers stay stuck doing things the slow, manual way — just because it’s familiar.
                            </p>
                            <p className="mt-2 italic">AI is here to upgrade your habits — not erase your talent.</p>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-black text-white p-8 rounded-xl shadow-lg text-center space-y-4">
                            <h3 className="text-2xl font-semibold text-yellow-400">
                                So… what’s really holding you back?
                            </h3>
                            <p>
                                Are you afraid? Overwhelmed? Just doing what you’ve always done?
                            </p>
                            <p className="font-bold text-lg">
                                Don’t compete with AI. <br /> ✨ Collaborate with it — and 10x your freelance business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
