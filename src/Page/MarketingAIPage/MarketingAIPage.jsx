import React from 'react';
import Navbar from '../../Component/Website/Header/Navbar';

const MarketingAIPage = () => {
    return (
        <>
            <Navbar />

            <div className="bg-gradient-to-tr from-white via-blue-50 to-purple-100 min-h-screen py-14 px-6 sm:px-10 md:px-20 font-sans text-gray-800">
                <div className="max-w-8xl text-center mx-auto bg-white shadow-2xl rounded-2xl p-10 border border-purple-200">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-6 leading-tight tracking-tight">
                        🚀 How AI Can Automate Your Marketing — From Ads to Email Campaigns
                    </h1>

                    <p className="text-gray-600 mb-5 text-lg">
                        You’re running a brand or side hustle — but don’t have time to write ads, build email flows, or analyze funnels.
                    </p>

                    <div className="bg-purple-100 border-l-4 border-purple-500 pl-4 pr-3 py-3 rounded-md text-purple-800 italic mb-8 text-lg">
                        Imagine describing your product to AI… and it instantly builds your ads, emails, blogs, and more.
                    </div>

                    <section className="space-y-6">
                        <SectionTitle emoji="🚀" text="What Can AI Automate Today?" />
                        <Bullets bullets={[
                            "Write ad copy and headlines",
                            "Generate email sequences",
                            "Manage and optimize ad campaigns",
                            "Create blog content and social posts",
                            "Track analytics and improve ROI"
                        ]} />

                        <SectionTitle emoji="🎯" text="1. AI for Ads: Copy + Targeting" />
                        <Description text="Instead of testing ads manually, you can now let AI handle:" />
                        <Bullets bullets={[
                            "ChatGPT / Jasper: Generates ad variations",
                            "AdCreative.ai: Creates visuals & CTAs",
                            "Madgicx / Revealbot: Optimizes your budget"
                        ]} />
                        <Highlight text="🧠 Result: Better ROI, faster testing, and less guesswork" />

                        <SectionTitle emoji="📧" text="2. AI for Email Campaigns" />
                        <Description text="From welcome sequences to product launches, AI builds your emails in minutes." />
                        <Bullets bullets={[
                            "Flowrite / ChatGPT: Writes engaging email drafts",
                            "Mailchimp / ConvertKit AI: Automates flows",
                            "Brevo: Personalizes content + timing"
                        ]} />
                        <Highlight text="📈 Result: Higher open rates, faster campaigns, less burnout" />

                        <SectionTitle emoji="📲" text="3. Social Media Content Creation" />
                        <Description text="AI can plan, write, and schedule your monthly content." />
                        <Bullets bullets={[
                            "Copy.ai / ContentStudio: Captions & hashtags",
                            "Canva Magic / Firefly: Branded visuals & reels",
                            "Later / Buffer AI: Smart scheduling"
                        ]} />
                        <Highlight text="📅 Result: Consistent content — no manager needed" />

                        <SectionTitle emoji="🔍" text="4. Blog & SEO Automation" />
                        <Bullets bullets={[
                            "SurferSEO + ChatGPT: SEO blog articles",
                            "Frase / NeuronWriter: Content outlines + keywords",
                            "Writesonic / RankMath AI: On-page optimization"
                        ]} />
                        <Highlight text="📈 Result: More traffic, less time writing" />

                        <SectionTitle emoji="📊" text="5. Marketing Analytics with AI" />
                        <Bullets bullets={[
                            "GA4 + AI: Real-time traffic forecasting",
                            "Pecan.ai: Predict campaign performance",
                            "ChatGPT plugins: Summarize insights & KPIs"
                        ]} />
                        <Highlight text="📉 Result: Smarter decisions, less reporting work" />

                        <SectionTitle emoji="🤖" text="6. AI Chatbots for Marketing" />
                        <Bullets bullets={[
                            "Tidio / Intercom AI: Lead qualification + product help",
                            "ManyChat: Instagram & WhatsApp sales funnels",
                            "Landbot / Chatfuel: Interactive website bots"
                        ]} />
                        <Highlight text="🧠 Result: 24/7 support and conversion without humans" />

                        <SectionTitle emoji="💡" text="Real Case Study" />
                        <Description text="A solo coach used ChatGPT, Canva, and Mailchimp to:" />
                        <Bullets bullets={[
                            "Build a 5-email lead magnet funnel",
                            "Launch AI-generated Facebook ads",
                            "Schedule 30 days of content"
                        ]} />
                        <p className="italic text-blue-700">🏆 Result: 7 new clients in 10 days — no agency, no team</p>

                        <SectionTitle emoji="✅" text="Final Thought: You Don’t Need a Big Team" />
                        <p className="text-gray-700 mb-6">
                            AI is your strategist, writer, designer, and analyst.
                            You bring the vision — let automation do the heavy lifting.
                        </p>

                        <div className="bg-gradient-to-r from-blue-200 to-purple-300 text-purple-900 text-xl rounded-lg p-4 italic shadow">
                            Automate your marketing. Scale faster. Spend less.
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default MarketingAIPage;

// 🔧 Helper Components:

const SectionTitle = ({ emoji, text }) => (
    <h2 className="text-2xl font-bold text-red-600 mt-10 mb-3 text-center">{emoji} {text}</h2>
);

const Description = ({ text }) => (
    <p className="text-gray-700 mb-4">{text}</p>
);

const Bullets = ({ bullets }) => (
    <ul className="list-disc list-inside text-gray-700 space-y-1">
        {bullets.map((item, index) => (
            <li key={index}><span className="font-medium">{item}</span></li>
        ))}
    </ul>
);

const Highlight = ({ text }) => (
    <p className="text-green-700 font-semibold mt-2">{text}</p>
);
