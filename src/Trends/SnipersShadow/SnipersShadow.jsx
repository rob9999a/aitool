import React from 'react';
import Navbar from '../../Component/Website/Header/Navbar';
import { Helmet } from "react-helmet";

const SnipersShadow = () => {
    return (

        <>

            <Helmet>
                <title>Charlie Kirk Mystery - The Sniper’s Shadow</title>
                <meta name="description" content="Explore the chilling story behind Charlie Kirk’s assassination and the shadowy organization behind it." />
                <meta name="keywords" content="Charlie Kirk, sniper, conspiracy, politics, thriller" />
                <meta property="og:title" content="🔥 Charlie Kirk Mystery - The Sniper’s Shadow" />
                <meta property="og:description" content="Explore the chilling story behind Charlie Kirk’s assassination and the shadowy organization behind it." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://i.postimg.cc/pTPjsFty/ggg.png" />
                <meta property="og:url" content="https://fyrexia.co.uk/who-kill-charlie" />
                <link rel="icon" href="/favicon.ico" />
            </Helmet>
            <Navbar></Navbar>


            <div className="bg-white min-h-screen p-6 font-sans">
                <article className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Header Section */}
                    <header className="relative">
                        <h1 className="text-4xl font-bold text-center py-6 px-4 bg-gray-800 text-white">
                            Who is responsible for the assassination of American activist Charlie Kirk during the “American Comeback Tour” at Utah Valley University in 2025?
                        </h1>

                        {/* Main image */}
                        <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">
                            </span>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div className="p-6 space-y-6">
                        {/* First paragraph with image */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-2/3">
                                <p className="text-lg mb-4">
                                    On the morning of September 10, 2025, thousands of students gathered at Utah Valley University for the "American Comeback Tour," where prominent conservative activist Charlie Kirk was at the center, delivering a speech about promoting American values among youth. No one knew that this day would mark the beginning of a dark chapter in American politics.
                                </p>
                            </div>
                            <div className="md:w-1/3 h-64 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500">
                                    <img src='https://i.postimg.cc/pTPjsFty/ggg.png' alt="Who is responsible for the assassination of American activist Charlie Kirk during the “American Comeback Tour” at Utah Valley University in 2025?"></img>

                                </span>
                            </div>
                        </div>

                        {/* Second paragraph */}
                        <p className="text-lg">
                            As Kirk enthusiastically waved to the crowd, a watchful eye observed every move from the rooftop of a nearby building. This wasn't just an angry individual; it was a professional sniper operating within a secret network, whose threads stretched across the United States and beyond, aiming to eliminate prominent figures who threatened their political agenda.
                        </p>

                        {/* Third paragraph with image */}
                        <div className="flex flex-col md:flex-row-reverse gap-6">
                            <div className="md:w-2/3">
                                <p className="text-lg mb-4">
                                    A single shot found its mark in Kirk's neck. A chilling silence fell over the audience before security rushed to his aid, but the bullet had been precise and lethal. Later, the sniper rifle was found in a nearby forest—but it was just a piece of a much larger puzzle.
                                </p>
                            </div>
                            <div className="md:w-1/3 h-64 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500">
                                    <img src='https://i.postimg.cc/pTPjsFty/ggg.png' alt='Who is responsible for the assassination of American activist Charlie Kirk during the “American Comeback Tour” at Utah Valley University in 2025?'></img>

                                </span>
                            </div>
                        </div>

                        {/* Remaining paragraphs */}
                        <p className="text-lg">
                            Investigations revealed that the killer was not acting alone. Behind him stood a covert organization manipulating politics and public events, using violence as a tool to send a powerful message, hidden behind unexpected fronts: political activism, youth groups, or even small media outlets. Their goal wasn't merely to kill Kirk but to instill fear among activists and create strategic chaos.
                        </p>

                        <p className="text-lg">
                            So far, no suspect has been apprehended, and the identity of the organization remains shrouded in mystery. All investigators know is that this group plans meticulously, watches its targets, and vanishes into the shadows after each operation.
                        </p>

                        <p className="text-lg font-semibold italic">
                            And as the world waits for the day the veil is lifted, one terrifying question remains: Who will be their next target? And how long will the hidden shadow linger over American politics?
                        </p>
                    </div>

                    {/* Footer */}
                    <footer className="bg-gray-100 p-4 text-center text-gray-600">
                        Published on September 11, 2025 | Investigation Ongoing
                    </footer>
                </article>
            </div>
        </>


    );
};

export default SnipersShadow;