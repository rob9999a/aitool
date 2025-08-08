import React from "react";
import Navbar from "../../Component/Website/Header/Navbar";

const cards = [
    {
        title: "Complex Supply Chains Need Smarter Tools",
        content:
            "Global supply chains are fragile and complex. Delays or disruptions anywhere can cascade and cause huge costs.",
    },
    {
        title: "AI Monitors Data in Real-Time",
        content:
            "AI systems analyze weather, political events, shipping data, and inventory levels continuously to spot early risk indicators.",
    },
    {
        title: "Predict Before Problems Arise",
        content:
            "With advanced forecasting, AI alerts businesses before disruptions occur, allowing time to adjust plans and avoid crises.",
    },
    {
        title: "Simulate Scenarios & Prepare",
        content:
            "AI simulations help companies test contingency plans and optimize for resilience across multiple risk factors.",
    },
    {
        title: "From Reactive to Proactive",
        content:
            "AI shifts supply chain management from reactive firefighting to proactive decision-making — saving time and money.",
    },
    {
        title: "Competitive Advantage for All",
        content:
            "Both startups and enterprises can leverage AI insights to build stronger, more reliable supply chains in an unpredictable world.",
    },
];

const SupplyChainAI = () => {
    return (

        <>
            <Helmet>
                <title>Can AI Predict Your Supply Chain Disruptions Before They Happen?</title>
                <meta
                    name="description"
                    content="Discover how AI-powered analytics can forecast supply chain disruptions before they occur—helping businesses stay resilient and proactive."
                />
                <meta
                    name="keywords"
                    content="AI supply chain, predictive logistics, supply chain disruption prediction, AI forecasting, business continuity"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://fyrexia.co.uk/ai-supply-chain-prediction" />
                <html lang="en" />

                {/* Open Graph */}
                <meta property="og:title" content="Can AI Predict Your Supply Chain Disruptions Before They Happen?" />
                <meta
                    property="og:description"
                    content="Explore AI-driven tools that forecast supply chain risks before they strike—empowering logistics leaders to react quickly and efficiently."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/ai-supply-chain-prediction" />
                <meta property="og:image" content="https://fyrexia.co.uk/images/ai-supply-chain.jpg" />
                <meta property="og:site_name" content="Fyrexia" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Can AI Predict Your Supply Chain Disruptions Before They Happen?" />
                <meta
                    name="twitter:description"
                    content="Discover how predictive AI protects businesses from unexpected supply chain breakdowns and ensures continuity."
                />
                <meta name="twitter:image" content="https://fyrexia.co.uk/images/ai-supply-chain.jpg" />
            </Helmet>


            <Navbar></Navbar>


            <div className="bg-white min-h-screen py-16 px-6 sm:px-12 md:px-20 font-sans text-gray-900">
                <article className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-red-600 mb-12 leading-tight text-center">
                        Can AI Predict Your Supply Chain Disruptions Before They Happen?
                    </h1>

                    <p className="mb-10 text-lg leading-relaxed max-w-3xl mx-auto text-center text-gray-700">
                        In today’s interconnected world, supply chains face unprecedented risks. AI-powered predictive analytics offers businesses the power to foresee disruptions and stay ahead.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cards.map(({ title, content }, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-xl shadow-lg border-2 border-red-400 hover:shadow-2xl transition-shadow duration-300 bg-red-50"
                            >
                                <h2 className="text-xl font-bold text-red-700 mb-3">{title}</h2>
                                <p className="text-gray-800">{content}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-14 text-center max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
                        AI is not just a tool for efficiency — it’s a strategic partner helping supply chains transform uncertainty into opportunity. The future belongs to those who predict, prepare, and adapt.
                    </p>
                </article>
            </div>
        </>
    );
};

export default SupplyChainAI;
