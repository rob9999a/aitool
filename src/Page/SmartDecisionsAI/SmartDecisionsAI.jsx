import React from "react";
import Navbar from "../../Component/Website/Header/Navbar";

export default function SmartDecisionsAI() {
    return (

        <>
            <Navbar></Navbar>



            <section className="min-h-screen bg-white py-16 px-6 md:px-16 font-sans text-gray-900">
                <div className="max-w-4xl mx-auto space-y-10">
                    <h1 className="text-4xl font-extrabold text-indigo-700">
                        How Can AI Help Businesses Make Smarter Decisions Faster?
                    </h1>

                    <p className="text-lg leading-relaxed">
                        In today’s fast-paced market, businesses face an overwhelming amount of data and choices every day. Making the right decisions quickly can mean the difference between success and failure.
                    </p>

                    <p className="text-lg leading-relaxed">
                        AI empowers businesses to cut through the noise and make smarter decisions — faster than ever before.
                    </p>

                    <h2 className="text-2xl font-semibold text-indigo-600">
                        Here’s how AI boosts decision-making speed and quality:
                    </h2>

                    <ul className="list-disc list-inside space-y-6 text-lg text-gray-800">
                        <li>
                            <strong>Data Analysis at Scale:</strong> AI can analyze massive datasets in seconds — spotting trends, patterns, and anomalies that humans would miss or take days to uncover.
                        </li>
                        <li>
                            <strong>Predictive Insights:</strong> By learning from historical data, AI forecasts future outcomes, helping leaders anticipate market shifts, customer behavior, and risks before they happen.
                        </li>
                        <li>
                            <strong>Real-Time Recommendations:</strong> AI-driven dashboards provide instant, actionable advice tailored to current business conditions — enabling faster responses.
                        </li>
                        <li>
                            <strong>Scenario Simulation:</strong> AI models multiple “what-if” scenarios so businesses can test strategies virtually before making costly moves.
                        </li>
                    </ul>

                    <p className="italic text-gray-600 mt-8 text-center">
                        The result? Faster, data-backed decisions that improve performance, reduce risk, and increase competitive advantage.
                    </p>
                </div>
            </section>
        </>
    );
}
