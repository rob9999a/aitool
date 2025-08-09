import React from "react";
import Navbar from "../../Component/Website/Header/Navbar";
import { Helmet } from "react-helmet";

export default function AIvsAnalysts() {
    return (

        <>

            <Helmet>
                <title>Can AI Help You Make Better Business Decisions Than a Team of Analysts?</title>
                <meta
                    name="description"
                    content="Discover how AI-powered tools can analyze data faster and more accurately than traditional analyst teams, helping you make smarter business decisions."
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Fyrexia AI" />
                <html lang="en" />

                {/* Open Graph */}
                <meta property="og:title" content="Can AI Help You Make Better Business Decisions Than a Team of Analysts?" />
                <meta
                    property="og:description"
                    content="Explore how AI is transforming business analytics by providing faster, deeper insights that can outperform human analysts."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/ai-vs-analysts" />
                <meta property="og:image" content="https://fyrexia.co.uk/images/ai-vs-analysts.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Can AI Help You Make Better Business Decisions Than a Team of Analysts?" />
                <meta
                    name="twitter:description"
                    content="Learn how AI-driven analytics can help your business make faster and more accurate decisions than traditional analyst teams."
                />
                <meta name="twitter:image" content="https://fyrexia.co.uk/images/ai-vs-analysts.jpg" />
                <meta name="twitter:site" content="@FyrexiaAI" />
            </Helmet>

            <Navbar></Navbar>


            <section className="bg-white min-h-screen py-16 px-6 md:px-16 font-sans text-gray-900">
                <div className="max-w-5xl mx-auto space-y-10">
                    <h1 className="text-4xl font-extrabold text-indigo-700 text-center">
                        Can AI Help You Make Better Business Decisions Than a Team of Analysts?
                    </h1>

                    <p className="text-lg leading-relaxed text-gray-800">
                        In the traditional business world, decision-making relies heavily on human analysts —
                        pouring over spreadsheets, building reports, and interpreting trends. That works… but it’s
                        slow, expensive, and prone to bias.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-800">
                        Now imagine an AI system that never sleeps, never misses a data point, and improves every
                        time it’s used.
                    </p>

                    <h2 className="text-2xl font-semibold text-indigo-600">
                        How AI Outperforms Traditional Analysis Teams:
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Speed & Scale",
                                text:
                                    "AI processes millions of data points in real time. What takes humans hours (or days), AI does in seconds.",
                            },
                            {
                                title: "Unbiased Insights",
                                text:
                                    "AI skips human bias and emotion. It spots hidden patterns, outliers, and connections people miss.",
                            },
                            {
                                title: "Continuous Learning",
                                text:
                                    "AI evolves with your business — it adapts to new data and improves its predictions over time.",
                            },
                            {
                                title: "Scenario Testing",
                                text:
                                    "Test what happens if you change pricing, inventory, or marketing. AI simulates outcomes instantly.",
                            },
                            {
                                title: "Actionable Recommendations",
                                text:
                                    "AI connects to your tools and tells you the next best action — no manual digging or second-guessing.",
                            },
                            {
                                title: "More Time for Strategy",
                                text:
                                    "AI handles the data grind, so leaders can focus on vision, decision, and growth.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <h3 className="text-xl font-semibold text-indigo-700 mb-3">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center italic text-gray-700 mt-12 text-lg font-medium">
                        AI won’t replace human strategy — but it will remove guesswork and manual grind. <br />
                        And yes — AI outperforms analysts who don’t use AI.
                    </p>
                </div>
            </section>
        </>
    );
}
