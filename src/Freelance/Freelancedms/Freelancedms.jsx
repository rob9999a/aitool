import React from 'react';
import Navbar from '../../Component/Website/Header/Navbar';
import { Helmet } from "react-helmet";

const Freelancedms = () => {
    return (


        <>

            <Helmet>
                <title>What if Your Next 10 Freelance Clients Came from AI — Not Cold DMs?</title>

                <meta
                    name="description"
                    content="Explore how AI can help you land your next freelance clients effortlessly without the hassle of cold messaging."
                />

                <meta
                    name="keywords"
                    content="freelance clients, AI client acquisition, cold DMs alternative, Fyrexia AI, freelance automation"
                />

                <meta name="robots" content="index, follow" />
                <meta name="author" content="Fyrexia AI" />

                {/* Open Graph */}
                <meta property="og:title" content="What if Your Next 10 Freelance Clients Came from AI — Not Cold DMs?" />
                <meta
                    property="og:description"
                    content="Discover AI tools that automate client acquisition, helping freelancers grow without cold outreach."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fyrexia.co.uk/" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="What if Your Next 10 Freelance Clients Came from AI — Not Cold DMs?" />
                <meta
                    name="twitter:description"
                    content="Learn how Fyrexia AI can revolutionize your freelance client acquisition, eliminating the need for cold DMs."
                />
            </Helmet>


            <Navbar></Navbar>



            <div className="div-template min-h-screen bg-white text-gray-900 font-sans">
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center text-center px-6 py-20">
                    <h1 className="text-2xl md:text-4xl font-bold mb-6">
                        What if Your Next 10 Freelance Clients Came from AI — Not Cold DMs?
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
                        Most freelancers spend hours writing cold messages, chasing leads, and praying for replies. But what if AI could bring clients to you — with <span className="text-yellow-500 font-semibold">zero cold outreach</span>?
                    </p>

                </section>

                {/* Strategy Section */}
                <section id="start" className="bg-gray-100 py-16 px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"> Here's How It's Already Happening</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-red-500 mb-2">1. AI-Powered Content = Inbound Leads</h3>
                            <p>
                                Use ChatGPT or Jasper to generate high-quality, value-packed posts for LinkedIn, Twitter, or Medium. These posts attract attention, build authority, and pull clients to your inbox.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-red-500 mb-2">2. Automated Pitching Systems</h3>
                            <p>
                                Use tools like <span className="text-purple-600">ChatGPT + Zapier + Airtable</span> to find leads, personalize outreach, and send dynamic, client-specific proposals — all automatically.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-red-500 mb-2">3. Smart Portfolios & Case Studies</h3>
                            <p>
                                Let AI write stunning case studies, tailor your portfolio by industry, and explain your value in terms of ROI — no more boring portfolios.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-red-500 mb-2">4. SEO Blogs That Convert</h3>
                            <p>
                                Train AI to write optimized blog posts that rank on Google and drive traffic. Add lead magnets or CTAs to capture those visitors into clients — even while you sleep.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg md:col-span-2">
                            <h3 className="text-xl font-bold text-red-500 mb-2">5. AI as a Lead Qualifier</h3>
                            <p>
                                Use GPT-powered chatbots on your site to answer questions, qualify leads, and collect emails — 24/7. No more time wasted with dead-end leads.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="text-center px-6 py-20 bg-yellow-100">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">💰 So What If AI Really Could Bring Your Next 10 Clients?</h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        It’s not a fantasy. It’s already happening — but only for freelancers who stop chasing… and start building systems.
                    </p>

                </section>
            </div>

        </>
    );
};

export default Freelancedms;