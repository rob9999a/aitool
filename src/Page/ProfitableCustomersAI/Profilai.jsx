import React from "react";
import Navbar from "../../Component/Website/Header/Navbar";

const svgIcons = {
    userGroup: (
        <svg
            className="w-10 h-10 text-pink-600 mb-4 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 110-8 4 4 0 010 8z"
            ></path>
        </svg>
    ),
    chartBar: (
        <svg
            className="w-10 h-10 text-pink-600 mb-4 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3v18h18"
            ></path>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17V9m6 8V5"
            ></path>
        </svg>
    ),
    lightningBolt: (
        <svg
            className="w-10 h-10 text-pink-600 mb-4 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
        </svg>
    ),
};

const data = [
    {
        icon: svgIcons.userGroup,
        title: "Predict Customer Value",
        description:
            "AI analyzes vast data points — past purchases, browsing habits, social interactions — to predict which customers will bring the highest lifetime value even before their first purchase.",
    },
    {
        icon: svgIcons.chartBar,
        title: "Segment with Precision",
        description:
            "Unlike traditional segments, AI finds hidden patterns and groups customers by profitability potential, not just demographics or basic purchase history.",
    },
    {
        icon: svgIcons.lightningBolt,
        title: "Target & Personalize Offers",
        description:
            "With AI insights, you can deliver hyper-personalized campaigns and offers to your highest-value prospects — converting them faster and maximizing ROI.",
    },
];

const Profilai = () => {
    return (

        <>

            <Helmet>
                <title>Can AI Identify Your Most Profitable Customers Before They Buy?</title>
                <meta
                    name="description"
                    content="Discover how AI uses predictive analytics to pinpoint your most valuable customers before they've even made a purchase—boost ROI and personalize smarter."
                />
                <meta
                    name="keywords"
                    content="AI customer prediction, predictive analytics, profitable customers, customer lifetime value AI, AI customer insights"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://fyrexia.co.uk/ai-best-customers" />
                <html lang="en" />

                {/* Open Graph */}
                <meta property="og:title" content="Can AI Identify Your Most Profitable Customers Before They Buy?" />
                <meta
                    property="og:description"
                    content="Learn how AI-driven models can forecast who your top customers will be—before they even commit—driving smarter targeting and growth."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/ai-best-customers" />
                <meta property="og:image" content="https://fyrexia.co.uk/images/ai-best-customers.jpg" />
                <meta property="og:site_name" content="Fyrexia" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Can AI Identify Your Most Profitable Customers Before They Buy?" />
                <meta
                    name="twitter:description"
                    content="Explore how predictive AI analytics can spot your best future customers early, so you invest in the right leads first."
                />
                <meta name="twitter:image" content="https://fyrexia.co.uk/images/ai-best-customers.jpg" />
            </Helmet>

            <Navbar></Navbar>


            <div className="bg-white min-h-screen py-14 px-6 sm:px-10 md:px-20 font-sans text-gray-900">
                <div className="div-template max-w-7xl mx-auto text-center mb-12 px-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-black-600 mb-6 leading-tight">
                        🤖 Can AI Identify Your Most Profitable Customers Before They Buy?
                    </h1>
                    <p className="text-lg max-w-3xl mx-auto text-gray-700">
                        Imagine knowing which prospects will bring you the most profit — before they even make a purchase. AI is turning that vision into reality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {data.map(({ icon, title, description }, idx) => (
                        <div
                            key={idx}
                            className="border border-black-300 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                        >
                            {icon}
                            <h2 className="text-2xl font-semibold text-black-600 mb-3">{title}</h2>
                            <p className="text-gray-700 leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto mt-16 text-center">
                    <p className="text-lg text-gray-700 mb-6">
                        Traditional marketing treats all leads equally — but AI’s predictive models give you a huge edge by identifying your true VIP customers early.
                    </p>
                    <p className="text-black-600 font-bold text-xl">
                        The result? Smarter budgets, more conversions, and customers who stick around longer.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Profilai;
