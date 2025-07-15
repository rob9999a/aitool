import React from "react";
import Navbar from "../../Component/Website/Header/Navbar";

const departments = [
    {
        title: "🎯 Marketing",
        result: "Lower ad spend, higher conversions.",
        description:
            "AI analyzes campaigns, customer behavior, and trends to personalize content, optimize channels, and improve ROI.",
    },
    {
        title: "💼 Sales",
        result: "Higher close rates and shorter cycles.",
        description:
            "AI scores leads, analyzes calls, and recommends next actions, helping sales reps prioritize and close deals faster.",
    },
    {
        title: "👥 HR",
        result: "Better hires, lower turnover.",
        description:
            "AI helps screen candidates, predict employee churn, and enhance career development for better team stability.",
    },
    {
        title: "🏭 Operations",
        result: "Fewer disruptions, lower costs.",
        description:
            "AI forecasts demand, predicts equipment failures, and streamlines inventory and supply chain efficiency.",
    },
    {
        title: "💰 Finance",
        result: "Faster, safer financial decisions.",
        description:
            "AI spots anomalies, simulates budgets, and runs predictive models to boost forecasting accuracy.",
    },
    {
        title: "🛠 Customer Support",
        result: "Happier customers, fewer escalations.",
        description:
            "AI-driven bots and sentiment tools resolve queries in real-time, routing and adapting responses with context.",
    },
];

const Decisionmaking = () => {
    return (

        <>
            <Navbar></Navbar>


            <div className="bg-white min-h-screen py-16 px-6 sm:px-12 md:px-24 font-sans text-gray-900">
                <div className="div-template max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-indigo-700 text-center mb-10">
                        How AI-Driven Analytics Improve Decision-Making Across Departments
                    </h1>

                    <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
                        AI analytics aren’t just dashboards — they’re powerful engines that help marketing, sales, HR, operations, and more make faster, smarter, and data-driven decisions in real time.
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {departments.map((dep, index) => (
                            <div
                                key={index}
                                className="p-6 bg-indigo-50 border border-indigo-200 rounded-xl shadow hover:shadow-lg transition"
                            >
                                <h2 className="text-xl font-semibold text-indigo-800 mb-2">
                                    {dep.title}
                                </h2>
                                <p className="text-gray-700 text-sm mb-3">{dep.description}</p>
                                <p className="text-green-700 font-medium">✅ {dep.result}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 max-w-3xl mx-auto text-center">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            When every department is powered by real-time insights, your entire organization becomes faster, smarter, and more aligned.
                        </p>
                        <blockquote className="italic text-indigo-800 border-l-4 border-indigo-400 pl-4 mt-6">
                            Businesses no longer guess — they decide with data.
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Decisionmaking;
