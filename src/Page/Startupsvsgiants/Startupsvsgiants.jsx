import React from "react";
import Navbar from "../../Component/Website/Header/Navbar";

const strategies = [
    {
        title: "⚡ Rapid Prototyping",
        detail:
            "Startups use AI tools like GPT, DALL·E, and Sora to generate product concepts, branding, and MVPs in hours — not months.",
    },
    {
        title: "💬 Automated Customer Support",
        detail:
            "With chatbots like Tidio or Intercom AI, startups offer 24/7 support without hiring full teams — matching enterprise-level service.",
    },
    {
        title: "🎯 Hyper-Personalized Marketing",
        detail:
            "AI helps startups deliver content tailored to user behavior and demographics, increasing conversions and lowering ad spend.",
    },
    {
        title: "📈 Real-Time Analytics",
        detail:
            "Tools like Pecan.ai and GA4 AI extensions allow startups to monitor KPIs, predict trends, and pivot instantly.",
    },
    {
        title: "🧠 Smart Hiring & HR",
        detail:
            "AI screens candidates, schedules interviews, and helps build productive, lean teams without HR departments.",
    },
    {
        title: "💡 Agile Innovation",
        detail:
            "Startups experiment with AI-driven product tweaks, A/B testing, and micro-feedback loops to outpace slower giants.",
    },
];

const Startupsvsgiants = () => {
    return (

        <>
            <Navbar></Navbar>


            <div className="bg-white min-h-screen py-16 px-6 sm:px-12 md:px-20 text-gray-900 font-sans">
                <div className="div-template max-w-6xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-bold text-red-600 mb-8 text-center leading-tight">
                        How Startups Are Using AI to Compete with Billion-Dollar Companies
                    </h1>

                    <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                        With limited resources but limitless creativity, startups are leveraging AI to move faster, work smarter, and punch above their weight — often outpacing corporate giants in innovation and agility.
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {strategies.map((s, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-red-50 to-orange-100 p-6 rounded-xl border border-red-200 shadow hover:shadow-xl transition"
                            >
                                <h2 className="text-xl font-semibold text-red-700 mb-2">
                                    {s.title}
                                </h2>
                                <p className="text-gray-800 text-sm leading-relaxed">{s.detail}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 max-w-3xl mx-auto text-center">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            The rules have changed. In the AI era, size is no longer the greatest advantage — **speed, creativity, and tech adoption** are.
                        </p>
                        <blockquote className="italic text-red-700 border-l-4 border-red-400 pl-4 mt-6">
                            The underdogs are rising — and AI is their secret weapon.
                        </blockquote>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Startupsvsgiants;
