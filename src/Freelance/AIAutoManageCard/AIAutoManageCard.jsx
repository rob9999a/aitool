import React from 'react';
import Navbar from '../../Component/Website/Header/Navbar';

export default function AIAutoManageCard() {
    return (

        <>
            <Navbar></Navbar>



            <section className="bg-white py-16 px-6 md:px-16">
                <div className="div-template max-w-8xl mx-auto bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">

                    {/* Header image */}
                    <img
                        src="https://i.postimg.cc/bN6hD1Gk/futuristic-robot-interacting-with-money-23-2151612625.jpg"
                        alt="AI managing freelance projects"
                        className="w-full h-64 object-cover"
                    />

                    {/* Content */}
                    <div className="p-8 space-y-6 text-gray-800 text-lg">
                        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                            🤖 What if AI could manage your client projects better than you can?
                        </h1>

                        <p>
                            Let’s be honest — as freelancers, we’re often juggling everything:
                        </p>

                        <ul className="list-disc list-inside space-y-1">
                            <li>Client deadlines</li>
                            <li>Scope creep</li>
                            <li>Revision cycles</li>
                            <li>Follow-up emails</li>
                            <li>Project tracking</li>
                            <li>Invoicing</li>
                        </ul>

                        <p>…while still trying to stay creative and sane.</p>
                        <p><strong>But what if you could hand most of that off… to an AI?</strong></p>

                        <hr className="border-gray-300" />

                        <h2 className="text-2xl font-semibold text-start text-red-600">✅ Automated onboarding</h2>
                        <p>
                            Tools like <a href="https://tally.so" className="text-blue-600 underline" target="_blank">Tally</a> + <a href="https://www.notion.so/product/ai" className="text-blue-600 underline" target="_blank">Notion AI</a> can guide clients through forms, generate scope summaries, and create workspaces — without a single manual message.
                        </p>

                        <h2 className="text-2xl font-semibold text-start text-red-600">🗂️ Project planning in seconds</h2>
                        <p>
                            Use <a href="https://chat.openai.com" className="text-blue-600 underline" target="_blank">ChatGPT</a> to turn briefs into timelines, deliverables, and milestones.
                            No more scattered notes or “Where were we again?” moments.
                        </p>

                        <h2 className="text-2xl font-semibold text-start text-red-600">💬 24/7 Communication</h2>
                        <p>
                            GPT-powered chatbots can answer FAQs, update clients, and keep projects moving — even when you're offline.
                        </p>

                        <h2 className="text-2xl font-semibold text-start text-red-600">🧠 Smart reminders & nudges</h2>
                        <p>
                            Tools like <a href="https://zapier.com" className="text-blue-600 underline" target="_blank">Zapier</a> + Notion AI remind you of deadlines, suggest next steps, and even auto-update your client.
                        </p>

                        <h2 className="text-2xl font-semibold text-start text-red-600">💸 Faster feedback loops</h2>
                        <p>
                            AI can summarize client feedback, extract tasks, and help you respond professionally — saving time *and* energy.
                        </p>

                        <hr className="border-gray-300" />

                        <h2 className="text-xl font-bold text-start text-red-600">So… what if AI really could manage your projects better than you?</h2>
                        <p>You’d gain:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>⏱️ Time</li>
                            <li>🎯 Focus</li>
                            <li>⚡ Energy</li>
                            <li>📈 Clients</li>
                            <li>🚀 Growth</li>
                        </ul>

                        <p>
                            Not because you worked harder…
                            But because you worked <strong>smarter</strong> — with a digital co-pilot by your side.
                        </p>

                        <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-600">
                            💡 The future of freelancing isn’t doing more. It’s automating better.
                        </blockquote>

                        <p className="text-xl font-semibold mt-4">
                            Are you ready to delegate to AI — and finally scale?
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
