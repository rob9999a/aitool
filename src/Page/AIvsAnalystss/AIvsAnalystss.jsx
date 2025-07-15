import React from 'react';

const AIvsAnalystss = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-6 sm:px-10 md:px-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                    Can AI Help You Make Better Business Decisions Than a Team of Analysts?
                </h1>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    In boardrooms and startups alike, a big question is rising:
                    <br />
                    <span className="italic text-gray-900">Can AI — a machine — make smarter, faster, and more accurate business decisions than a group of experienced analysts?</span>
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    The answer? <strong>In many cases: yes. And faster. And cheaper.</strong>
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">🧠 Why AI Might Be Better (Sometimes)</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    AI processes millions of data points in seconds. No fatigue. No bias. No office politics.
                    Human analysts? They need time, energy, and occasionally make flawed assumptions.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">💼 Where AI Outperforms Humans</h2>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">📊 1. Data Analysis at Scale</h3>
                <p className="text-gray-700 mb-4">
                    Tools like <strong>Power BI + Copilot</strong> or <strong>Google BigQuery + AI</strong> analyze massive data sets in seconds.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">📈 2. Sales Forecasting</h3>
                <p className="text-gray-700 mb-4">
                    AI predicts future sales using history, trends, and external signals like weather or news.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">📦 3. Inventory & Supply Chain</h3>
                <p className="text-gray-700 mb-4">
                    AI reduces waste and delays by optimizing stock levels and anticipating disruptions.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">🛒 4. Customer Behavior Prediction</h3>
                <p className="text-gray-700 mb-4">
                    Netflix and Amazon use AI — not humans — to recommend what you’ll want next.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">📍 5. Real-Time Decisions</h3>
                <p className="text-gray-700 mb-6">
                    From ad campaign adjustments to dynamic pricing, AI can act <strong>instantly</strong> based on data.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">🧠 What Humans Still Do Better</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    Humans still win at:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                    <li>Ethical judgment and emotional intelligence</li>
                    <li>Creative, long-term strategy</li>
                    <li>Understanding context and nuance</li>
                    <li>Seeing the "big picture"</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">⚖️ Comparison Table</h2>
                <div className="overflow-x-auto border rounded-lg mb-6">
                    <table className="w-full text-left table-auto text-sm">
                        <thead className="bg-gray-100">
                            <tr className="text-gray-700 font-semibold">
                                <th className="px-4 py-3">Task</th>
                                <th className="px-4 py-3">AI Advantage ✅</th>
                                <th className="px-4 py-3">Human Advantage 🧠</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr className="border-t">
                                <td className="px-4 py-3">Data crunching</td>
                                <td className="px-4 py-3">Fast, precise, scalable</td>
                                <td className="px-4 py-3">Slower</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-3">Trend detection</td>
                                <td className="px-4 py-3">No fatigue, deep patterns</td>
                                <td className="px-4 py-3">Sometimes miss signals</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-3">Creative decisions</td>
                                <td className="px-4 py-3">Limited</td>
                                <td className="px-4 py-3">Strategic thinking</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-3">Ethical judgment</td>
                                <td className="px-4 py-3">Lacks empathy</td>
                                <td className="px-4 py-3">Deep understanding</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-3">Real-time action</td>
                                <td className="px-4 py-3">24/7 decisions</td>
                                <td className="px-4 py-3">Delayed by meetings</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">✅ Final Thought: Combine Strengths</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    AI isn’t here to replace your analysts. It’s here to amplify them.
                    Let AI do the data. Let your team drive the vision, context, and story.
                </p>

                <p className="text-gray-900 text-xl font-semibold italic">
                    The best decisions? Made by <strong>AI + humans</strong>, together.
                </p>
            </div>
        </div>
    );
};

export default AIvsAnalystss;
