import React from "react";
import Navbar from "../../Component/Website/Header/Navbar";
import { Helmet } from "react-helmet";

const personalizationPoints = [
    {
        title: "🎯 Real-Time Recommendations",
        content:
            "AI learns from browsing and purchase behavior to offer personalized product or content suggestions instantly.",
    },
    {
        title: "📬 Smart Email Personalization",
        content:
            "Emails adapt automatically to each customer’s activity, preferences, and lifecycle stage — boosting open and click-through rates.",
    },
    {
        title: "💬 Context-Aware Support",
        content:
            "AI-powered chatbots remember users, adapt responses, and route them based on history and behavior.",
    },
    {
        title: "💡 Predictive Engagement",
        content:
            "AI detects signals of churn or high interest and nudges customers at the right time with the right message.",
    },
    {
        title: "💰 Dynamic Pricing & Offers",
        content:
            "Tailor discounts or bundles for high-value users, frequent buyers, or cart abandoners automatically.",
    },
    {
        title: "📊 Personalized Dashboards",
        content:
            "Each user sees a dashboard tailored to their role, goals, or past actions — driving retention and satisfaction.",
    },
];

const Interaction = () => {
    return (
        <>

            <Helmet>
                <title>How AI Is Powering Ultra-Personalized Customer Experiences</title>

                <meta
                    name="description"
                    content="Explore how artificial intelligence is transforming customer personalization by delivering tailored experiences, product recommendations, and messaging at scale."
                />

                <meta name="keywords" content="AI personalization, customer experience, AI marketing, personalized recommendations, artificial intelligence CRM" />
                <meta name="robots" content="index, follow" />
                <html lang="en" />

                {/* Open Graph tags */}
                <meta property="og:title" content="How AI Is Powering Ultra-Personalized Customer Experiences" />
                <meta
                    property="og:description"
                    content="Learn how businesses are using AI to personalize every interaction — from emails to product suggestions — and increase customer loyalty."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/ai-customer-personalization" />
                <meta property="og:image" content="https://fyrexia.co.uk/images/ai-personalization.jpg" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="How AI Is Powering Ultra-Personalized Customer Experiences" />
                <meta
                    name="twitter:description"
                    content="Discover how AI-driven personalization is reshaping the future of customer engagement."
                />
                <meta name="twitter:image" content="https://fyrexia.co.uk/images/ai-personalization.jpg" />
            </Helmet>


            <Navbar></Navbar>


            <div className="bg-white min-h-screen py-16 px-6 sm:px-12 md:px-24 text-gray-900 font-sans">
                <div className="div-template max-w-6xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 mb-10 text-center leading-tight">
                        What if AI Could Customize Every Customer Interaction Perfectly?
                    </h1>

                    <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
                        AI makes it possible to deliver personalized, relevant, and dynamic customer experiences at scale — turning passive users into loyal fans.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
                        {personalizationPoints.map((point, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-xl border border-indigo-100 shadow-md bg-indigo-50 hover:shadow-lg transition-shadow duration-300"
                            >
                                <h3 className="text-lg font-semibold text-indigo-800 mb-2">
                                    {point.title}
                                </h3>
                                <p className="text-gray-800 text-sm">{point.content}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 max-w-3xl mx-auto text-center">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            The future of customer interaction is deeply personal. Not with more staff. Not with guesswork.
                            <br />
                            <span className="text-indigo-700 font-semibold">With AI.</span>
                        </p>

                        <blockquote className="italic text-indigo-800 border-l-4 border-indigo-400 pl-4 mt-6">
                            One-size-fits-all is dead. AI enables one-size-fits-one — for every customer, in every moment.
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Interaction;
