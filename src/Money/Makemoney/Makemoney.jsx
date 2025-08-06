import React from 'react';
import { Helmet } from "react-helmet";
import { FaRobot, FaLaptop, FaDollarSign, FaClock, FaBeachUmbrella, FaChartLine, FaCog, FaShoppingCart, FaComments } from 'react-icons/fa';
import Navbar from '../../Component/Website/Header/Navbar';

const AIIncomePage = () => {
    return (

        <>

            <Navbar></Navbar>


            <Helmet>
                <title>Can AI Replace a Full-Time Job and Earn You $5,000/Month?</title>
                <meta
                    name="description"
                    content="Explore how artificial intelligence can potentially replace traditional full-time jobs and generate a steady income of $5,000 per month. Discover tools, strategies, and real-life examples of AI-powered side hustles and passive income streams."
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Fyrexia AI" />
                <html lang="en" />

                {/* Open Graph */}
                <meta property="og:title" content="Can AI Replace a Full-Time Job and Earn You $5,000/Month?" />
                <meta
                    property="og:description"
                    content="Discover how AI tools and automation can create sustainable income, potentially replacing full-time jobs. Learn proven strategies and real success stories."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/ai-fulltime-job-5000" />
                <meta property="og:image" content="https://fyrexia.co.uk/images/ai-earnings-thumbnail.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Can AI Replace a Full-Time Job and Earn You $5,000/Month?" />
                <meta
                    name="twitter:description"
                    content="Explore AI-powered income opportunities that can replace full-time jobs and generate $5,000/month. Real examples and strategies revealed."
                />
                <meta name="twitter:image" content="https://fyrexia.co.uk/images/ai-earnings-thumbnail.jpg" />
                <meta name="twitter:site" content="@FyrexiaAI" />
            </Helmet>






            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
                    <div className="div-template text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            <span className="block">Can AI Replace a Full-Time Job</span>
                            <span className="block text-blue-600">and Earn You $5,000 a Month?</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                            Discover how smart tools can automate income streams without a 9-5 job, inventory, or employees
                        </p>

                    </div>
                </div>

                {/* The Story Section */}
                <div className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <FaRobot className="text-blue-600 text-2xl" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">The Story of the Anonymous $5K Whisperer</h2>
                            </div>

                            <div className="space-y-6 text-gray-700 text-lg">
                                <p className="italic border-l-4 border-blue-500 pl-4 py-2">
                                    "I was done. Done with the endless 9-to-5 grind. Done with meetings about meetings. Done building someone else's dream."
                                </p>

                                <p>
                                    "I had no team. No big budget. Just time — and a restless curiosity."
                                </p>

                                <p>
                                    "Then AI showed up. Not the hype, but the real, game-changing tools — the kind that work while you sleep."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                How I Made $5,000 a Month Without Handling a Single Product
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                A fully automated dropshipping business powered by AI
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <FaShoppingCart className="text-blue-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Store Creation</h3>
                                <p>Launched in a day with Shopify</p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <FaCog className="text-purple-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Product Sourcing</h3>
                                <p>Fully automated with AutoDS</p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <FaComments className="text-green-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Content Creation</h3>
                                <p>Powered by ChatGPT</p>
                            </div>

                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <FaChartLine className="text-amber-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Customer Service</h3>
                                <p>AI-assisted chatbot replies</p>
                            </div>
                        </div>

                        <div className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white text-center">
                            <p className="text-xl md:text-2xl font-bold mb-4">
                                "I never touched a package. I never stayed up answering every email. I simply built a machine — and it started earning."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Workflow Section */}
                <div className="py-16 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-4">The Fully Automated Workflow</h2>
                        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            How $5,000/month is generated with minimal human intervention
                        </p>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 z-0"></div>

                            <div className="space-y-12">
                                {/* Step 1 */}
                                <div className="relative z-10 flex flex-col md:flex-row items-center">
                                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                                        <div className="bg-white rounded-xl shadow-md p-6">
                                            <div className="flex items-center gap-3 md:justify-end">
                                                <div className="bg-blue-100 p-2 rounded-full">
                                                    <span className="text-blue-600 font-bold">1</span>
                                                </div>
                                                <h3 className="text-xl font-bold">Storefront Setup</h3>
                                            </div>
                                            <p className="mt-3 text-gray-700">Built quickly on Shopify in under a day</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <div className="bg-blue-100 p-4 rounded-full">
                                            <FaLaptop className="text-blue-600 text-3xl" />
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative z-10 flex flex-col md:flex-row items-center">
                                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-2 md:order-1">
                                        <div className="bg-white rounded-xl shadow-md p-6">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-purple-100 p-2 rounded-full">
                                                    <span className="text-purple-600 font-bold">2</span>
                                                </div>
                                                <h3 className="text-xl font-bold">Product Sourcing</h3>
                                            </div>
                                            <p className="mt-3 text-gray-700">Automated with AutoDS to find winning products</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center order-1 md:order-2">
                                        <div className="bg-purple-100 p-4 rounded-full">
                                            <FaCog className="text-purple-600 text-3xl" />
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative z-10 flex flex-col md:flex-row items-center">
                                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                                        <div className="bg-white rounded-xl shadow-md p-6">
                                            <div className="flex items-center gap-3 md:justify-end">
                                                <div className="bg-green-100 p-2 rounded-full">
                                                    <span className="text-green-600 font-bold">3</span>
                                                </div>
                                                <h3 className="text-xl font-bold">Content Creation</h3>
                                            </div>
                                            <p className="mt-3 text-gray-700">Product descriptions and ads generated by ChatGPT</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <div className="bg-green-100 p-4 rounded-full">
                                            <FaComments className="text-green-600 text-3xl" />
                                        </div>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="relative z-10 flex flex-col md:flex-row items-center">
                                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-2 md:order-1">
                                        <div className="bg-white rounded-xl shadow-md p-6">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-amber-100 p-2 rounded-full">
                                                    <span className="text-amber-600 font-bold">4</span>
                                                </div>
                                                <h3 className="text-xl font-bold">Order Fulfillment</h3>
                                            </div>
                                            <p className="mt-3 text-gray-700">Completely hands-free, automated process</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center order-1 md:order-2">
                                        <div className="bg-amber-100 p-4 rounded-full">
                                            <FaShoppingCart className="text-amber-600 text-3xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Requirements Section */}
                <div className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                            <h2 className="text-3xl font-bold text-center mb-8">What You Need to Start</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <FaLaptop className="text-blue-600 text-3xl" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">A Laptop</h3>
                                    <p className="text-gray-700">Any modern computer will work</p>
                                </div>

                                <div className="text-center">
                                    <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <FaWifi className="text-purple-600 text-3xl" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Internet Access</h3>
                                    <p className="text-gray-700">Standard connection is sufficient</p>
                                </div>

                                <div className="text-center">
                                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <FaBrain className="text-green-600 text-3xl" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">The Right Mindset</h3>
                                    <p className="text-gray-700">Courage to break out of the 9-to-5</p>
                                </div>
                            </div>

                            <div className="mt-12 bg-white rounded-xl shadow-md p-6 text-center">
                                <p className="text-xl font-bold text-blue-600 mb-4">
                                    "You don't need coding skills or upfront investment — just the will to begin."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Thoughts */}
                <div className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            Final Thoughts: Can AI Really Replace Your Job?
                        </h2>

                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-10">
                            <p className="text-xl md:text-2xl font-bold mb-6">
                                "Can AI really replace your full-time job? Yes — but only if you start thinking like a builder of systems, not just an employee."
                            </p>

                            <p className="text-xl">
                                "My $5,000/month wasn't from working harder — it was from working smarter, with AI."
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                                Get the Step-by-Step Guide
                            </button>
                            <button className="px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-colors">
                                See the Tools I Used
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tools Section */}
                <div className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-4">AI Tools That Made $5,000/Month Possible</h2>
                        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            The exact tools used in this automated business model
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <a href="https://www.shopify.com/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                    <FaShoppingCart className="text-blue-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Shopify</h3>
                                <p className="text-gray-700 mb-4">E-commerce platform for store creation</p>
                                <span className="text-blue-600 font-medium">Visit Site →</span>
                            </a>

                            <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                    <FaComments className="text-green-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">ChatGPT</h3>
                                <p className="text-gray-700 mb-4">AI for content and product descriptions</p>
                                <span className="text-blue-600 font-medium">Visit Site →</span>
                            </a>

                            <a href="https://www.autods.com/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                    <FaCog className="text-purple-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">AutoDS</h3>
                                <p className="text-gray-700 mb-4">Automated product sourcing and fulfillment</p>
                                <span className="text-blue-600 font-medium">Visit Site →</span>
                            </a>

                            <a href="https://www.tidio.com/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="bg-amber-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                    <FaRobot className="text-amber-600 text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Tidio AI</h3>
                                <p className="text-gray-700 mb-4">AI-powered customer service chatbots</p>
                                <span className="text-blue-600 font-medium">Visit Site →</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Build Your AI-Powered Income Stream?
                        </h2>
                        <p className="text-xl mb-10 max-w-2xl mx-auto">
                            Start today and create your path to financial freedom with AI
                        </p>

                        <button className="px-10 py-5 bg-white text-blue-600 font-bold text-xl rounded-lg hover:bg-blue-50 transition-colors">
                            Start Your $5K/Month Journey
                        </button>
                        <p className="mt-4 text-blue-200">No experience required • Free training included</p>
                    </div>
                </div>


            </div>
        </>
    );
};

// Helper components
const FaWifi = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em">
        <path d="M12 21c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm9-10v3c0 .552-.447 1-1 1s-1-.448-1-1V7.054C19 4.277 16.757 2 14 2h-4C7.243 2 5 4.277 5 7.054V9c0 .552-.447 1-1 1s-1-.448-1-1V6c0-3.309 2.691-6 6-6h4c3.309 0 6 2.691 6 6z"></path>
    </svg>
);

const FaBrain = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em">
        <path d="M12 3c-1.654 0-3 1.346-3 3 0 1.302.839 2.401 2 2.815v.981c-1.629.139-3 1.299-3 2.816v.018c0 .414.336.75.75.75h8.5c.414 0 .75-.336.75-.75v-.018c0-1.517-1.371-2.677-3-2.816v-.981c1.161-.414 2-1.514 2-2.815 0-1.654-1.346-3-3-3zm0 12h-3c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h3v-7zm1 7h3c1.103 0 2-.897 2-2v-3c0-1.103-.897-2-2-2h-3v7z"></path>
    </svg>


);

export default AIIncomePage;