import React from 'react';
import { Helmet } from "react-helmet";

import Navbar from '../../Component/Website/Header/Navbar';

const DataFortunes = () => {
    return (


        <>

            <Navbar></Navbar>


            <Helmet>
                <title>Are the Free Data We Give Away Building Hidden Fortunes?</title>
                <meta
                    name="description"
                    content="Explore how the free data we share online contributes to hidden fortunes built by corporations and powers the data-driven economy."
                />
                <meta
                    name="keywords"
                    content="free data profits, data economy, hidden fortunes, personal data value, data monetization"
                />
            </Helmet>

            <div className="min-h-screen bg-white text-gray-800 font-sans">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-24 pb-16 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Are the Free Data We Give Away <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                                Building Hidden Fortunes?
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
                            Exploring how corporations turn our personal data into billions while we remain unaware and uncompensated
                        </p>

                        <div className="flex justify-center space-x-4">
                            <button className="px-6 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-gray-100 transition shadow-lg">
                                Discover How
                            </button>
                            <button className="px-6 py-3 bg-blue-900 rounded-lg font-medium hover:bg-indigo-900 transition shadow-lg">
                                Protect Yourself
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="max-w-6xl mx-auto px-4 py-12 -mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <div className="text-3xl font-bold text-blue-600 mb-2">$3.5T</div>
                            <p className="text-gray-600">Data economy value by 2025</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <div className="text-3xl font-bold text-blue-600 mb-2">1.7MB</div>
                            <p className="text-gray-600">Data collected per person per second</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <div className="text-3xl font-bold text-blue-600 mb-2">$0</div>
                            <p className="text-gray-600">Average compensation for users</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <div className="text-3xl font-bold text-blue-600 mb-2">83%</div>
                            <p className="text-gray-600">Unaware how their data is monetized</p>
                        </div>
                    </div>
                </div>

                {/* How Data Creates Wealth */}
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How Your Free Data Builds Fortunes</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="relative">
                                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
                                <div className="absolute top-12 left-12 w-64 h-64 bg-indigo-100 rounded-full opacity-50"></div>
                                <div className="relative space-y-8">
                                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                                <span className="text-blue-700 font-bold">1</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Data Collection</h3>
                                                <p className="text-gray-600">Every click, search, location check-in, and social media interaction is recorded by corporations.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                                <span className="text-blue-700 font-bold">2</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Data Processing</h3>
                                                <p className="text-gray-600">AI algorithms analyze your data to predict behavior, preferences, and vulnerabilities.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                                <span className="text-blue-700 font-bold">3</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Monetization</h3>
                                                <p className="text-gray-600">Your data profile is sold to advertisers, insurers, employers, and political campaigns.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
                            <h3 className="text-2xl font-bold mb-6 text-blue-800">The Hidden Data Economy</h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium">Data Collection</span>
                                        <span className="font-medium">Revenue</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 w-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span>Social Media Data</span>
                                            <span className="font-bold">$45B</span>
                                        </div>
                                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500" style={{ width: '92%' }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span>Location Data</span>
                                            <span className="font-bold">$21B</span>
                                        </div>
                                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-indigo-500" style={{ width: '78%' }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span>Search History</span>
                                            <span className="font-bold">$33B</span>
                                        </div>
                                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-400" style={{ width: '85%' }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span>Shopping Habits</span>
                                            <span className="font-bold">$28B</span>
                                        </div>
                                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-indigo-400" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Company Profits */}
                <div className="bg-gray-50 py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fortune 500 Companies Built on Your Data</h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                        <div className="w-8 h-8 bg-blue-500 rounded-sm"></div>
                                    </div>
                                    <h3 className="text-xl font-bold">Meta (Facebook)</h3>
                                </div>
                                <p className="text-gray-600 mb-4">Average revenue per user: <span className="font-bold">$48.76</span></p>
                                <p className="text-gray-600">Total annual revenue from user data: <span className="font-bold">$117B</span></p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                                        <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                                    </div>
                                    <h3 className="text-xl font-bold">Google</h3>
                                </div>
                                <p className="text-gray-600 mb-4">Average revenue per user: <span className="font-bold">$65.42</span></p>
                                <p className="text-gray-600">Total annual revenue from user data: <span className="font-bold">$283B</span></p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                                        <div className="w-8 h-8 bg-gray-500 rounded-md"></div>
                                    </div>
                                    <h3 className="text-xl font-bold">Amazon</h3>
                                </div>
                                <p className="text-gray-600 mb-4">Average revenue per user: <span className="font-bold">$38.94</span></p>
                                <p className="text-gray-600">Total annual revenue from user data: <span className="font-bold">$95B</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Protection Section */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Take Control of Your Data</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">How to protect yourself in the data economy</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
                            <h3 className="text-2xl font-bold mb-6 text-blue-800">Practical Steps</h3>

                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span>Review privacy settings on all apps and websites</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span>Use privacy-focused browsers and search engines</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span>Regularly clear cookies and browsing history</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span>Be selective about what you share on social media</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span>Support legislation for data rights and compensation</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 text-blue-800">The Future of Data Ownership</h3>

                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                    <h4 className="font-bold text-lg mb-3 text-blue-700">Data as Property</h4>
                                    <p>Emerging concepts suggest personal data should be considered personal property with ownership rights.</p>
                                </div>

                                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                                    <h4 className="font-bold text-lg mb-3 text-indigo-700">Universal Basic Data Income</h4>
                                    <p>Proposals for users to receive compensation when their data generates revenue for corporations.</p>
                                </div>

                                <div className="bg-blue-100 p-6 rounded-lg border border-blue-300">
                                    <h4 className="font-bold text-lg mb-3 text-blue-800">Transparency Requirements</h4>
                                    <p>Growing demand for corporations to disclose exactly how they use and profit from user data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Data Has Value</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            It's time to recognize our collective role in building the world's largest fortunes through our personal information
                        </p>

                    </div>
                </div>


            </div>
        </>
    );
};

export default DataFortunes;