import React, { useState } from 'react';
import Navbar from '../../Component/Website/Header/Navbar';
import { Helmet } from 'react-helmet';

const Usairan = () => {
    const [activePhase, setActivePhase] = useState(0);

    const phases = [
        {
            title: "Phase 1: Rising Tensions in the Middle East",
            content: [
                "Iran accelerates its nuclear program despite international sanctions.",
                "The U.S. increases military presence in the Persian Gulf and imposes new sanctions on Iranian oil exports.",
                "Proxy conflicts flare across Iraq, Syria, and Yemen, creating regional instability.",
                "Global oil prices rise sharply as traders anticipate supply disruptions, putting pressure on economies worldwide."
            ],
            image: "https://i.postimg.cc/0Nb9zmys/1x-1.webp",
            color: "bg-blue-100"
        },
        {
            title: "Phase 2: The Spark",
            content: [
                "A direct U.S.-Iran military clash occurs after a high-profile attack on a U.S. base or fleet in the Gulf.",
                "Iran retaliates by targeting oil infrastructure and shipping lanes.",
                "Fear of escalating conflict causes oil prices to surge past $200 per barrel.",
                "Global markets panic: stock indices fall, emerging markets face currency crises, and safe-haven assets like gold spike."
            ],
            image: "https://i.postimg.cc/15sPpb3M/1000.jpg",
            color: "bg-red-100"
        },
        {
            title: "Phase 3: The Dollar Under Siege",
            content: [
                "Investors lose confidence in U.S. debt and the dollar, fearing skyrocketing military expenditures and worsening deficits.",
                "Other nations, particularly China, Russia, and the EU, accelerate the use of alternative currencies in international trade.",
                "Countries begin establishing gold-backed or digital currency reserves to reduce dependence on the U.S. dollar.",
                "The dollar weakens rapidly, triggering inflation in the U.S. as imports become more expensive."
            ],
            image: "https://i.postimg.cc/pL1HMTY1/2048px-GBU39-F-35-02.jpg",
            color: "bg-yellow-100"
        },
        {
            title: "Phase 4: Global Economic Fallout",
            content: [
                "International trade slows as uncertainty spreads; supply chains are disrupted.",
                "U.S. stock and bond markets experience unprecedented volatility.",
                "Banks in countries heavily exposed to U.S. debt face insolvency risks.",
                "Emerging economies with dollar-denominated debt struggle to service loans, leading to defaults and social unrest."
            ],
            image: "https://i.postimg.cc/rpB2zPH1/army-commander-defense-minister-survey-drones.jpg",
            color: "bg-purple-100"
        },
        {
            title: "Phase 5: Domestic Crisis in the U.S.",
            content: [
                "Inflation spirals, wiping out savings for ordinary Americans.",
                "Public anger grows over the cost of war and economic mismanagement.",
                "Social unrest and political polarization intensify.",
                "The Federal Reserve is forced into extreme monetary interventions, but confidence in the dollar continues to erode."
            ],
            image: "https://i.postimg.cc/BQGkrDWv/image-For-Entry14-ol-I.jpg",
            color: "bg-orange-100"
        },
        {
            title: "Phase 6: Global Reordering",
            content: [
                "Nations increasingly bypass the dollar in bilateral and multilateral trade.",
                "Gold, cryptocurrencies, and other stable currencies surge in value.",
                "The U.S. loses its ability to borrow cheaply, weakening its global influence.",
                "A new multipolar financial system emerges, challenging decades of American economic hegemony."
            ],
            image: "https://i.postimg.cc/XYsPBzrZ/Wright-Beirut-Bombing.webp",
            color: "bg-green-100"
        },
        {
            title: "Phase 7: Long-Term Consequences",
            content: [
                "Global energy markets are reshaped, with alternative suppliers gaining leverage.",
                "The dollar may recover partially, but its era as the uncontested global reserve currency ends.",
                "Military conflicts and economic crises have lasting humanitarian impacts worldwide.",
                "The U.S., once a superpower economically and militarily, faces a period of uncertainty and decline."
            ],
            image: "https://i.postimg.cc/Px1sDMGB/Zolfaghar-missile-1200.jpg",
            color: "bg-gray-100"
        }
    ];

    return (


        <>


            <Helmet>
                {/* Page Title */}
                <title>The Dollar Collapse: How a U.S.-Iran War Could Shatter the Global Economy</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Explore the hidden truth behind the U.S. dollar’s decline and the looming threat of war with Iran. Discover how geopolitical tensions, economic crises, and military conflict could trigger a global financial meltdown."
                />

                {/* Open Graph for Social Sharing */}
                <meta property="og:title" content="The Dollar Collapse: How a U.S.-Iran War Could Shatter the Global Economy" />
                <meta property="og:description" content="Explore the hidden truth behind the U.S. dollar’s decline and the looming threat of war with Iran." />
                <meta property="og:image" content="https://i.postimg.cc/6phXjcyw/VVVVVV.png" /> {/* public image path */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk//usa-vs-iran" />

            </Helmet>
            <Navbar></Navbar>



            <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">The Fall of the Dollar: A Geopolitical Thriller</h1>
                    <p className="text-center text-gray-600 mb-12">A speculative scenario combining real economic vulnerabilities with geopolitical risks</p>

                    {/* Phase Navigation */}
                    <div className="flex flex-wrap justify-center mb-12 gap-2">
                        {phases.map((phase, index) => (
                            <button
                                key={index}
                                onClick={() => setActivePhase(index)}
                                className={`px-4 py-2 rounded-lg font-medium ${activePhase === index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            >
                                Phase {index + 1}
                            </button>
                        ))}
                    </div>

                    {/* Current Phase Display */}
                    <div className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${phases[activePhase].color}`}>
                        <div className="md:flex">
                            <div className="md:flex-shrink-0 md:w-1/2">
                                <img
                                    className="h-64 w-full object-cover md:h-full md:w-full" content='world war usa vs iran soon'
                                    src={phases[activePhase].image}
                                    alt={phases[activePhase].title}
                                />
                            </div>
                            <div className="p-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">{phases[activePhase].title}</h2>
                                <ul className="list-disc pl-5 space-y-2">
                                    {phases[activePhase].content.map((point, index) => (
                                        <li key={index} className="text-gray-700">{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Key Insight */}
                    <div className="mt-12 p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">💡 Key Insight</h3>
                        <p className="text-gray-700">
                            This scenario isn't purely hypothetical—it combines real economic vulnerabilities (debt, inflation, declining confidence in the dollar) with geopolitical risks (Middle East conflicts, global energy dependence). Any combination of military escalation, oil supply shocks, and financial mismanagement could accelerate these events.
                        </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-12">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Progress through scenario</span>
                            <span className="text-sm font-medium text-gray-700">{Math.round(((activePhase + 1) / phases.length) * 100)}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                            <div
                                className="h-full bg-blue-600 rounded-full"
                                style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Usairan;