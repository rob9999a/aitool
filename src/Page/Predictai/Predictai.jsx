import React, { useState } from 'react';
import { Helmet } from "react-helmet";

import Navbar from '../../Component/Website/Header/Navbar';

const Predictai = () => {
    const [activeTab, setActiveTab] = useState('prediction');
    const [showCaseStudy, setShowCaseStudy] = useState(null);

    const caseStudies = {
        '2008': {
            title: "2008 Financial Crisis",
            prediction: "Some AI models detected abnormal mortgage patterns in 2006",
            factors: ["Subprime mortgage defaults", "Leverage ratios", "Housing price bubbles", "Credit default swaps"],
            accuracy: "Early warning signals but no precise prediction"
        },
        '2020': {
            title: "COVID-19 Market Crash",
            prediction: "AI detected unusual market volatility in February 2020",
            factors: ["Supply chain disruptions", "Consumer behavior shifts", "Commodity price fluctuations", "Travel restrictions"],
            accuracy: "Predicted market drop but underestimated severity"
        },
        '2022': {
            title: "2022 Inflation Crisis",
            prediction: "AI flagged inflationary pressures in late 2021",
            factors: ["Supply-demand imbalances", "Energy price spikes", "Monetary policy shifts", "Labor market tightness"],
            accuracy: "Accurate prediction 6 months in advance"
        }
    };

    return (

        <>

            <Helmet>
                <title>Can Artificial Intelligence Predict Economic Crises Before They Happen?</title>
                <meta
                    name="description"
                    content="Discover how AI technology is used to forecast economic crises ahead of time and its potential to revolutionize financial markets."
                />
                <meta
                    name="keywords"
                    content="AI economic crisis prediction, artificial intelligence forecasting, economic crisis early warning, financial AI"
                />
            </Helmet>

            <Navbar>  </Navbar>



            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-sans">
                {/* Header */}
                <header className="pt-20 pb-12 px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-block p-3 bg-blue-100 rounded-full mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Can AI Predict <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">Economic Crises</span> Before They Happen?
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Exploring the capabilities and limitations of artificial intelligence in forecasting financial downturns
                        </p>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-6xl mx-auto px-4 pb-20">
                    {/* Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex bg-white rounded-xl p-1 shadow-md">
                            <button
                                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all ${activeTab === 'prediction' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
                                onClick={() => setActiveTab('prediction')}
                            >
                                Prediction Capabilities
                            </button>
                            <button
                                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all ${activeTab === 'methods' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
                                onClick={() => setActiveTab('methods')}
                            >
                                AI Methods
                            </button>
                            <button
                                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all ${activeTab === 'limitations' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
                                onClick={() => setActiveTab('limitations')}
                            >
                                Limitations
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
                        {activeTab === 'prediction' && (
                            <div>
                                <h2 className="text-2xl font-bold mb-8 text-center">AI's Predictive Power in Economics</h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 text-blue-700">Success Factors</h3>
                                        <div className="space-y-6">
                                            <div className="flex items-start">
                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold mb-1">Pattern Recognition</h4>
                                                    <p className="text-gray-700">AI identifies complex patterns across diverse data sources that humans miss</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold mb-1">Real-time Analysis</h4>
                                                    <p className="text-gray-700">Processes market data, news, and social sentiment in milliseconds</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold mb-1">Network Analysis</h4>
                                                    <p className="text-gray-700">Maps connections between financial institutions to identify systemic risks</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold mb-4 text-blue-700">Prediction Accuracy Timeline</h3>
                                        <div className="relative h-64">
                                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>

                                            {/* Crisis Events */}
                                            <div className="absolute left-1/4 bottom-0">
                                                <div className="text-center w-32 -ml-16">
                                                    <div className="h-3 w-3 bg-red-500 rounded-full mx-auto mb-1"></div>
                                                    <div className="text-sm font-medium">2008 Crisis</div>
                                                    <div className="text-xs text-gray-500">6-12 month warning</div>
                                                </div>
                                            </div>

                                            <div className="absolute left-1/2 bottom-0">
                                                <div className="text-center w-32 -ml-16">
                                                    <div className="h-3 w-3 bg-red-500 rounded-full mx-auto mb-1"></div>
                                                    <div className="text-sm font-medium">2020 Crash</div>
                                                    <div className="text-xs text-gray-500">1-2 month warning</div>
                                                </div>
                                            </div>

                                            <div className="absolute left-3/4 bottom-0">
                                                <div className="text-center w-32 -ml-16">
                                                    <div className="h-3 w-3 bg-red-500 rounded-full mx-auto mb-1"></div>
                                                    <div className="text-sm font-medium">2022 Inflation</div>
                                                    <div className="text-xs text-gray-500">6-9 month warning</div>
                                                </div>
                                            </div>

                                            {/* Prediction Accuracy */}
                                            <div className="absolute left-0 top-0 w-full">
                                                <div className="flex justify-between mb-2">
                                                    <span className="text-sm text-gray-600">2010</span>
                                                    <span className="text-sm text-gray-600">2025</span>
                                                </div>
                                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-green-400 to-blue-500"
                                                        style={{ width: '75%' }}
                                                    ></div>
                                                </div>
                                                <div className="text-right mt-1 text-sm text-gray-600">Current accuracy: ~75%</div>
                                            </div>

                                            {/* AI Prediction Line */}
                                            <div className="absolute bottom-0 left-0 w-full" style={{ height: '90%' }}>
                                                <div className="relative h-full">
                                                    <div className="absolute top-0 left-0 h-full w-1 bg-blue-500 ml-8"></div>
                                                    <div className="absolute top-0 left-0 w-full">
                                                        <div className="h-8 w-8 bg-blue-500 rounded-full -ml-4 -mt-4 flex items-center justify-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'methods' && (
                            <div>
                                <h2 className="text-2xl font-bold mb-8 text-center">How AI Predicts Economic Crises</h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {[
                                        {
                                            title: "Machine Learning Models",
                                            icon: (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                                </svg>
                                            ),
                                            description: "Analyzing historical data to identify patterns preceding past crises",
                                            techniques: ["Neural networks", "Support vector machines", "Random forests"]
                                        },
                                        {
                                            title: "Natural Language Processing",
                                            icon: (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                                </svg>
                                            ),
                                            description: "Analyzing news, reports, and social media for early warning signals",
                                            techniques: ["Sentiment analysis", "Topic modeling", "Event extraction"]
                                        },
                                        {
                                            title: "Network Analysis",
                                            icon: (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                                </svg>
                                            ),
                                            description: "Mapping financial connections to identify systemic vulnerabilities",
                                            techniques: ["Interbank exposure mapping", "Supply chain analysis", "Contagion modeling"]
                                        }
                                    ].map((method, index) => (
                                        <div key={index} className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                                    {method.icon}
                                                </div>
                                                <h3 className="text-xl font-bold text-blue-700">{method.title}</h3>
                                            </div>
                                            <p className="text-gray-700 mb-4">{method.description}</p>
                                            <div>
                                                <h4 className="font-bold mb-2 text-blue-600">Techniques:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {method.techniques.map((tech, i) => (
                                                        <span key={i} className="px-3 py-1 bg-white rounded-full text-sm border border-blue-200">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="text-xl font-bold mb-4 text-center">Key Predictive Indicators</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        {[
                                            "Debt-to-GDP ratios",
                                            "Housing price trends",
                                            "Stock market volatility",
                                            "Yield curve inversions",
                                            "Consumer confidence",
                                            "Commodity prices",
                                            "Unemployment trends",
                                            "Credit spreads"
                                        ].map((indicator, i) => (
                                            <div key={i} className="flex items-center">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                <span>{indicator}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'limitations' && (
                            <div>
                                <h2 className="text-2xl font-bold mb-8 text-center">Challenges and Limitations</h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                    <div>
                                        <div className="bg-red-50 p-6 rounded-xl border border-red-200 mb-8">
                                            <h3 className="text-xl font-bold mb-4 text-red-700">Fundamental Challenges</h3>
                                            <ul className="space-y-4">
                                                <li className="flex items-start">
                                                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold mb-1">Black Swan Events</h4>
                                                        <p className="text-gray-700">Unpredictable events (pandemics, wars) that disrupt all models</p>
                                                    </div>
                                                </li>

                                                <li className="flex items-start">
                                                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold mb-1">Data Quality Issues</h4>
                                                        <p className="text-gray-700">Incomplete, inaccurate, or manipulated economic data</p>
                                                    </div>
                                                </li>

                                                <li className="flex items-start">
                                                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold mb-1">Reflexivity Problem</h4>
                                                        <p className="text-gray-700">Predictions can alter behavior, changing the predicted outcome</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                                            <h3 className="text-xl font-bold mb-4 text-yellow-700">Ethical Considerations</h3>
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <div className="text-yellow-500 mr-3">•</div>
                                                    <span>Who should have access to crisis predictions?</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="text-yellow-500 mr-3">•</div>
                                                    <span>Risk of creating self-fulfilling prophecies</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="text-yellow-500 mr-3">•</div>
                                                    <span>Potential for market manipulation using predictive models</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="text-yellow-500 mr-3">•</div>
                                                    <span>Over-reliance on AI leading to complacency</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold mb-4 text-blue-700">The Confidence Gap</h3>
                                        <div className="bg-white border border-gray-200 rounded-xl p-6 h-64 flex flex-col justify-center">
                                            <div className="text-center mb-6">
                                                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-2">
                                                    Economic Forecast Confidence
                                                </div>
                                                <p className="text-gray-600">Probability that AI predictions will be correct</p>
                                            </div>

                                            <div className="flex items-end h-32 gap-2 justify-center">
                                                {[30, 45, 65, 80].map((percent, i) => (
                                                    <div key={i} className="flex flex-col items-center w-16">
                                                        <div
                                                            className="w-12 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t-lg"
                                                            style={{ height: `${percent}%` }}
                                                        ></div>
                                                        <div className="text-sm mt-2">{['1 month', '3 months', '6 months', '1 year'][i]}</div>
                                                        <div className="font-bold text-blue-700">{percent}%</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
                                            <h4 className="font-bold mb-3 text-gray-700">Key Insight</h4>
                                            <p className="text-gray-700">
                                                AI is better at predicting the likelihood of a crisis than its exact timing or magnitude.
                                                Current systems can identify vulnerability with 80% accuracy but predict timing with only 65% accuracy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Case Studies */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
                        <h2 className="text-2xl font-bold text-center mb-12">AI Prediction Case Studies</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {Object.keys(caseStudies).map((key) => (
                                <div
                                    key={key}
                                    className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 cursor-pointer transition-all hover:shadow-lg ${showCaseStudy === key ? 'ring-2 ring-blue-500' : ''}`}
                                    onClick={() => setShowCaseStudy(showCaseStudy === key ? null : key)}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-blue-800">{caseStudies[key].title}</h3>
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {showCaseStudy === key ? (
                                        <div className="mt-4 space-y-4">
                                            <div className="bg-white p-4 rounded-lg">
                                                <div className="text-sm text-blue-700 font-medium mb-1">AI Prediction</div>
                                                <p>{caseStudies[key].prediction}</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg">
                                                <div className="text-sm text-blue-700 font-medium mb-1">Key Factors Identified</div>
                                                <ul className="list-disc pl-5 space-y-1">
                                                    {caseStudies[key].factors.map((factor, i) => (
                                                        <li key={i}>{factor}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-blue-100 p-4 rounded-lg">
                                                <div className="text-sm text-blue-700 font-medium mb-1">Accuracy Assessment</div>
                                                <p>{caseStudies[key].accuracy}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="h-20 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-gradient-to-t from-blue-50 to-transparent"></div>
                                            <p className="text-gray-700">
                                                {caseStudies[key].prediction.substring(0, 100)}...
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Future Outlook */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-center mb-10">The Future of Economic Prediction</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                                    <h3 className="font-bold text-xl mb-4">Improving Accuracy</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <div className="mr-3">•</div>
                                            <span>Integration of alternative data sources (satellite imagery, web traffic)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="mr-3">•</div>
                                            <span>Quantum computing for complex simulations</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="mr-3">•</div>
                                            <span>Real-time global economic monitoring systems</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="mr-3">•</div>
                                            <span>Improved behavioral economic models</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                                    <h3 className="font-bold text-xl mb-4">Potential Applications</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <div className="mr-3">•</div>
                                            <span>Early warning systems for governments and central banks</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="mr-3">•</div>
                                            <span>Automated policy adjustment recommendations</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="mr-3">•</div>
                                            <span>Personal financial crisis prevention tools</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="mr-3">•</div>
                                            <span>Global economic stability indexes</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10 text-center">
                                <div className="inline-block bg-white/20 px-6 py-3 rounded-full">
                                    <p className="text-lg italic">
                                        "By 2030, AI may predict economic crises with 90% accuracy 12 months in advance"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </>
    )
}

export default Predictai