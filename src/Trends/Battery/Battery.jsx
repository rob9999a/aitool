import React from 'react';
import Navbar from '../../Component/Website/Header/Navbar';

const Battery = () => {
    return (

        <>

            <Helmet>
                <title>This Nano Battery Could Last 50 Years Without a Recharge</title>

                <meta
                    name="description"
                    content="Discover how nano battery technology promises up to 50 years of power without recharging — and what it means for the future of energy and devices."
                />
                <meta
                    name="keywords"
                    content="nano battery, 50 year battery, battery innovation, long life battery, AI energy future, nano tech power"
                />
                <link rel="canonical" href="https://fyrexia.co.uk/nano-battery-50-years" />

                {/* Open Graph tags */}
                <meta property="og:title" content="This Nano Battery Could Last 50 Years Without a Recharge" />
                <meta
                    property="og:description"
                    content="Explore the revolutionary nano battery that could power devices for half a century — a breakthrough in long-term energy solutions."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/nano-battery-50-years" />
                <meta property="og:image" content="https://fyrexia.co.uk/images/nano-battery.jpg" />
                <meta property="og:site_name" content="Fyrexia" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="This Nano Battery Could Last 50 Years Without a Recharge" />
                <meta
                    name="twitter:description"
                    content="Discover how nano battery technology is reshaping energy and innovation — with a lifespan measured in decades."
                />
                <meta name="twitter:image" content="https://fyrexia.co.uk/images/nano-battery.jpg" />
            </Helmet>

            <Navbar></Navbar>


            <div className="bg-white min-h-screen p-4 sm:p-6 md:p-8">
                <div className="div-template max-w-4xl mx-auto">

                    {/* Header */}
                    <header className="text-center mb-10 mt-8">
                        <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            Energy Revolution
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            🔋 The 50-Year Battery: Nano Cell That Never Needs Charging
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Imagine a world where your phone, smartwatch, or electric car never needs charging - not once in your lifetime.
                        </p>
                    </header>

                    {/* Hero Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center">
                                <div className="text-center p-4">
                                    <div className="inline-block bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                                    <p className="mt-4 text-gray-500">Battery prototype visualization</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="text-lg text-gray-700 mb-4">
                                Recent breakthroughs in nano-battery technology suggest this future may be closer than we think. Scientists have unveiled a prototype "50-Year Battery" that could last five decades without recharging.
                            </p>
                            <div className="flex space-x-2">
                                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Non-toxic</span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Recyclable</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Radiation-safe</span>
                            </div>
                        </div>
                    </div>

                    {/* Technology Section */}
                    <div className="mb-12">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">⚙️</span> How Does It Work?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            {[
                                { emoji: '💠', title: 'Diamond Shielding', desc: 'Stable, non-toxic, resistant to extreme environments' },
                                { emoji: '⚛️', title: 'Nickel-63/Carbon-14', desc: 'Safe isotopes for long-term energy output' },
                                { emoji: '🔬', title: 'Nano-Architecture', desc: 'Maximizes efficiency while minimizing size' }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <div className="text-2xl mb-2">{item.emoji}</div>
                                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-700">
                            This isn't your typical lithium-ion battery. It uses nano-diamond semiconductors with radioactive isotopes to generate steady current through "betavoltaic energy conversion" - transforming radioactive decay directly into electricity.
                        </p>
                    </div>

                    {/* Applications Section */}
                    <div className="mb-12">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🚀</span> What Could It Power?
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                "Smartphones & laptops that never die",
                                "Medical implants avoiding replacement surgeries",
                                "Spacecraft & satellites for remote environments",
                                "Military tech needing long-term stealth power",
                                "Emergency devices with permanent reliability",
                                "Electric vehicles with lifetime batteries"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                                        <div className="bg-green-500 w-2 h-2 rounded-full"></div>
                                    </div>
                                    <p className="text-gray-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Safety & Sustainability */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
                                <span className="mr-2">🔒</span> Is It Safe?
                            </h3>
                            <p className="text-gray-700 mb-3">
                                While using radioactive material, the battery is entirely safe. Radioactive elements are sealed in ultra-hard diamond layers, preventing radiation escape.
                            </p>
                            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
                                "It's safer than your smoke detector" - Lead Engineer at NDB
                            </blockquote>
                        </div>

                        <div className="bg-green-50 p-6 rounded-xl">
                            <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
                                <span className="mr-2">🌱</span> Sustainability Benefits
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    "✅ No rare earth mining required",
                                    "✅ Eliminates toxic battery waste",
                                    "✅ 100% recyclable core materials",
                                    "✅ Dramatically reduces e-waste"
                                ].map((item, index) => (
                                    <li key={index} className="text-gray-700">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Battery;