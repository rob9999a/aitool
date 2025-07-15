import React from "react";
import Navbar from "../../Component/Website/Header/Navbar";

export default function SmallBizAICards() {
    const cards = [
        {
            title: "Automate Repetitive Tasks",
            content:
                "Customer support, scheduling, invoicing, and data entry — AI handles these quietly in the background, 24/7.",
        },
        {
            title: "Hyper-target Marketing",
            content:
                "AI analyzes your customers, finds patterns, and delivers personalized campaigns that convert without wasting ad dollars.",
        },
        {
            title: "Supercharge Customer Experience",
            content:
                "Instant responses, tailored recommendations, and predictive service keep customers happy and loyal without adding staff.",
        },
        {
            title: "Optimize Operations",
            content:
                "From inventory forecasting to demand prediction, AI keeps the supply chain tight and efficient.",
        },
        {
            title: "Faster Growth Without More Staff",
            content:
                "Scale efficiently with AI-powered tools, reducing overhead and complexity.",
        },
        {
            title: "More Time to Innovate",
            content:
                "Let AI handle routine work so you can focus on growing your business.",
        },
    ];

    return (

        <>
            <Navbar></Navbar>


            <section className="bg-white min-h-screen py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto text-gray-900 font-sans">
                    <h1 className="div-template text-4xl font-bold mb-12 text-center">
                        How Can AI Help Small Businesses Grow Faster Without Hiring More Staff?
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cards.map(({ title, content }, idx) => (
                            <div
                                key={idx}
                                className="border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
                                    {title}
                                </h2>
                                <p className="text-gray-700 leading-relaxed">{content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
