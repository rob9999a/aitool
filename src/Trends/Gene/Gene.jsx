import React from 'react';
import Navbar from '../../Component/Website/Header/Navbar';

const Gene = () => {
    return (

        <>

            <Helmet>
                <title>New Gene Edit Lets Humans Stay Awake for Days — Without Fatigue</title>
                <meta
                    name="description"
                    content="Discover the breakthrough gene editing technology that allows humans to stay awake for days without feeling tired. Explore the science and implications behind this revolutionary discovery."
                />
                <meta name="keywords" content="gene editing, sleep, fatigue, biotechnology, human enhancement, staying awake" />
                <meta name="robots" content="index, follow" />
                <html lang="en" />

                {/* Open Graph */}
                <meta property="og:title" content="New Gene Edit Lets Humans Stay Awake for Days — Without Fatigue" />
                <meta
                    property="og:description"
                    content="Explore the science behind the new gene editing technique that could eliminate the need for sleep and fatigue in humans."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/sleep-gene-edit" />
                <meta property="og:image" content="https://fyrexia.co.uk/images/sleep-gene-edit.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="New Gene Edit Lets Humans Stay Awake for Days — Without Fatigue" />
                <meta
                    name="twitter:description"
                    content="Discover how gene editing is revolutionizing human sleep, allowing prolonged wakefulness without fatigue."
                />
                <meta name="twitter:image" content="https://fyrexia.co.uk/images/sleep-gene-edit.jpg" />
            </Helmet>

            <Navbar></Navbar>


            <div className="bg-white min-h-screen p-4 sm:p-6 md:p-8">
                <div className="div-template max-w-4xl mx-auto">

                    {/* Header */}
                    <header className="text-center mb-10 mt-8">
                        <div className="inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            Genetic Revolution
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            🧬 New Gene Edit Lets Humans Stay Awake for Days — Without Fatigue
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            A breakthrough in genetic science that could eliminate the need for sleep without exhaustion or cognitive decline
                        </p>
                    </header>

                    {/* Hero Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="flex flex-col justify-center">
                            <p className="text-lg text-gray-700 mb-4">
                                Researchers have used CRISPR-Cas9 gene editing to modify the DEC2 gene, allowing subjects to remain alert for up to 96 hours without traditional sleep.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">CRISPR-Cas9</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">DEC2 Gene</span>
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">No Fatigue</span>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg flex items-center justify-center">
                                <div className="text-center p-4">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white border-2 border-dashed border-purple-300 rounded-xl text-purple-500 text-2xl">
                                        🧬
                                    </div>
                                    <p className="mt-4 text-gray-500">Gene editing visualization</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Discovery Section */}
                    <div className="mb-12 p-6 bg-purple-50 rounded-xl border border-purple-100">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-4">
                            <span className="mr-2">🔬</span> The Discovery
                        </h2>
                        <p className="text-gray-700 mb-3">
                            South Korean researchers with Swiss neurogeneticists used CRISPR-Cas9 to modify a variant of the DEC2 gene associated with short sleep cycles.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                            <div className="bg-white p-3 rounded-lg border border-purple-200">
                                <h3 className="font-semibold text-purple-700">Animal Trials</h3>
                                <p className="text-gray-600 text-sm">Mice and primates awake 3-4 days with no performance drop</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-purple-200">
                                <h3 className="font-semibold text-purple-700">Human Organoids</h3>
                                <p className="text-gray-600 text-sm">Mini brains showed no neural stress during deprivation</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-purple-200">
                                <h3 className="font-semibold text-purple-700">Human Participants</h3>
                                <p className="text-gray-600 text-sm">90+ hours of alert wakefulness with normal function</p>
                            </div>
                        </div>
                    </div>

                    {/* How It Works */}
                    <div className="mb-12">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🧠</span> How Does It Work?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: 'Cellular Cleanup', desc: 'Enhanced autophagy that normally occurs during deep sleep', emoji: '🔄' },
                                { title: 'Neurotransmitter Regulation', desc: 'Maintains focus and mental clarity', emoji: '🧪' },
                                { title: 'Mitochondrial Resilience', desc: 'Reduces fatigue at cellular level', emoji: '⚡' },
                                { title: 'Circadian Suppression', desc: 'Removes the brain\'s "sleep timer"', emoji: '⏱️' }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <div className="text-2xl mr-4 bg-white p-2 rounded-full">{item.emoji}</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                        <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                            <p className="text-gray-700 italic">
                                "Essentially, it tricks the body into thinking it has already rested — and keeps it running like it just woke up."
                            </p>
                        </div>
                    </div>

                    {/* Applications Section */}
                    <div className="mb-12">
                        <h2 className="flex items-center text-2xl font-bold text-gray-800 mb-6">
                            <span className="mr-2">🚨</span> Potential Applications
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: '🪖', field: 'Military', desc: 'Soldiers alert for days without rest' },
                                { icon: '🏥', field: 'Medicine', desc: 'Surgeons work through emergencies fatigue-free' },
                                { icon: '🚀', field: 'Space Travel', desc: 'Astronauts extend work cycles' },
                                { icon: '💼', field: 'Entrepreneurship', desc: 'Uninterrupted creative windows' },
                                { icon: '🚒', field: 'Emergency Services', desc: 'Sustained focus during disasters' },
                                { icon: '🔬', field: 'Research', desc: 'Continuous scientific experiments' }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-2xl mr-3">{item.icon}</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{item.field}</h3>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Safety & Ethics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-red-50 p-6 rounded-xl">
                            <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
                                <span className="mr-2">❓</span> Safety Concerns
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                {[
                                    "Hormonal balance disruption",
                                    "Emotional regulation issues",
                                    "Long-term memory consolidation effects",
                                    "Unknown brain health consequences",
                                    "Potential for burnout despite alertness"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-red-500 mr-2">⚠️</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-xl">
                            <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
                                <span className="mr-2">🧬</span> Ethics & Accessibility
                            </h3>
                            <div className="space-y-4">
                                {[
                                    "Who gets access? Military vs civilians?",
                                    "Creating a productivity divide between 'edited' and 'natural' humans",
                                    "Should we enhance humans at all?",
                                    "Potential for new forms of inequality",
                                    "Sleep as a weakness vs biological necessity"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="bg-gray-300 rounded-full h-2 w-2 mt-2 mr-3"></div>
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Final Thought */}
                    <div className="text-center py-8 border-t border-gray-200">
                        <p className="text-gray-600 mb-2 italic">
                            "Sleep has been a constant across all of human history — a sacred, mysterious necessity."
                        </p>
                        <p className="text-lg font-semibold text-gray-900">
                            Is this liberation from biology... or a step toward a sleepless dystopia?
                        </p>
                        <p className="mt-4 text-gray-700">
                            Only time — and testing — will tell.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gene;