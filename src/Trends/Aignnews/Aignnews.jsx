import { Helmet } from "react-helmet";
import React from 'react';
import Navbar from '../../Component/Website/Header/Navbar';

const articleData = {
    title: "Can AI Replace Human Journalists?",
    intro: "Not entirely — and not yet.",
    aiLimitations: {
        paragraph: "AI is exceptional at structured data-to-text tasks. It can turn financial numbers or weather patterns into readable summaries. But it lacks:",
        list: [
            "🧠 Critical thinking",
            "🕵️‍♂️ Investigative judgment",
            "🎤 Ethical sourcing & interviews",
            "❤️ Emotional nuance & storytelling depth"
        ],
        conclusion: "AI cannot verify sources, expose corruption, or navigate political sensitivities. It doesn’t ask uncomfortable questions or challenge power. For now, AI is a co-pilot, not a watchdog."
    },
    realWorldExamples: {
        title: "Real-World Examples",
        examples: [
            {
                source: "Bloomberg",
                description: "Their 'Cyborg' system generates thousands of earnings stories each quarter — faster than any journalist could."
            },
            {
                source: "The Washington Post",
                description: "“Heliograf,” their AI system, produced more than 850 articles in its first year."
            },
            {
                source: "AP (Associated Press)",
                description: "Uses AI to automate earnings reports and minor league baseball recaps."
            },
            {
                source: "Narrativa & OpenAI tools",
                description: "Used by smaller outlets to create content summaries or translate stories for global audiences."
            }
        ]
    },
    risks: {
        title: "The Risks",
        intro: "With great power comes responsibility — and AI journalism raises real concerns:",
        list: [
            "Misinformation: AI can hallucinate or misrepresent facts.",
            "Bias: AI models can reinforce biases present in their training data.",
            "Transparency: Should readers know when an article was written by AI?",
            "Job displacement: Will human journalists be replaced by machines?",
            "Credibility erosion: If readers can’t trust who wrote what, journalism suffers."
        ]
    },
    future: {
        title: "The Future: Collaboration, Not Replacement",
        intro: "Most experts agree: the future isn’t AI vs. journalists — it’s AI + journalists. Imagine:",
        list: [
            "AI doing the data crunching, summarization, and drafts",
            "Human reporters handling verification, analysis, and interviews",
            "Newsrooms publishing more efficiently, with broader coverage"
        ],
        conclusion: "This hybrid model allows journalists to focus on deep, meaningful storytelling, while AI handles the repetitive or data-heavy work."
    },
    finalThought: {
        title: "Final Thought",
        content: [
            "AI-generated news is not science fiction — it’s already here. But it doesn’t spell the end of journalism. Instead, it offers a powerful tool to make reporting faster, more scalable, and even more accessible.",
            "The future of journalism will be shaped by those who adapt, experiment, and combine technology with truth.",
            "In the hands of ethical journalists, AI won’t kill news — it will help it evolve."
        ]
    }
};

function Aignnews() {
    return (
        <>
            <Helmet>
                <title>Is AI-generated News the Future of Journalism?</title>

                <meta
                    name="description"
                    content="Explore how AI-generated news is transforming journalism and what the future holds for news creation, accuracy, and media ethics."
                />

                <link rel="canonical" href="https://yourwebsite.com/ai-generated-news-future-journalism" />

                {/* Open Graph tags for social sharing */}
                <meta property="og:title" content="Is AI-generated News the Future of Journalism?" />
                <meta
                    property="og:description"
                    content="Explore how AI-generated news is transforming journalism and what the future holds for news creation, accuracy, and media ethics."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yourwebsite.com/ai-generated-news-future-journalism" />
                <meta property="og:image" content="https://yourwebsite.com/images/ai-news-thumbnail.jpg" />
                <meta property="og:site_name" content="Your Website Name" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Is AI-generated News the Future of Journalism?" />
                <meta
                    name="twitter:description"
                    content="Explore how AI-generated news is transforming journalism and what the future holds for news creation, accuracy, and media ethics."
                />
                <meta name="twitter:image" content="https://yourwebsite.com/images/ai-news-thumbnail.jpg" />
            </Helmet>
            <Navbar></Navbar>

            <div className="min-h-screen bg-gray-50 text-gray-800 antialiased leading-relaxed">
                <header className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-6 shadow-lg">
                    <div className="div-template container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            {articleData.title}
                        </h1>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-10 md:py-16 max-w-4xl">
                    <section className="bg-white p-6 md:p-8 rounded-lg shadow-xl mb-12">
                        <p className="text-xl font-bold text-gray-900 mb-6">{articleData.intro}</p>
                        <p className="text-lg text-gray-700 mb-4">{articleData.aiLimitations.paragraph}</p>
                        <ul className="list-disc pl-8 text-lg text-gray-700 mb-6 space-y-2">
                            {articleData.aiLimitations.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-700">{articleData.aiLimitations.conclusion}</p>
                    </section>

                    <section className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center">
                            <span className="text-orange-500 mr-3 text-3xl">🧪</span> {articleData.realWorldExamples.title}
                        </h2>
                        <ul className="list-disc pl-8 text-lg text-gray-700 space-y-3">
                            {articleData.realWorldExamples.examples.map((example, index) => (
                                <li key={index}>
                                    <span className="font-semibold text-gray-800">{example.source}:</span> {example.description}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center">
                            <span className="text-red-500 mr-3 text-3xl">⚠️</span> {articleData.risks.title}
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">{articleData.risks.intro}</p>
                        <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                            {articleData.risks.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center">
                            <span className="text-teal-600 mr-3 text-3xl">🧭</span> {articleData.future.title}
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">{articleData.future.intro}</p>
                        <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
                            {articleData.future.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="text-lg text-gray-700 mt-4">{articleData.future.conclusion}</p>
                    </section>

                    <section className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center">
                            <span className="text-green-600 mr-3 text-3xl">✅</span> {articleData.finalThought.title}
                        </h2>
                        {articleData.finalThought.content.map((paragraph, index) => (
                            <p key={index} className="text-lg text-gray-700 mb-4 last:mb-0">{paragraph}</p>
                        ))}
                    </section>
                </main>


            </div>
        </>
    );
}

export default Aignnews;