import React from "react";

const viralSections = [
    {
        title: "What Makes Content Go Viral?",
        points: [
            "Relevance (trending topics, relatable themes)",
            "Emotion (humor, surprise, inspiration)",
            "Timing (posting when your audience is online)",
            "Format (short-form, mobile-friendly visuals or videos)",
            "Optimization (hooks, captions, hashtags)",
        ],
        desc: `Traditionally, these were hit-or-miss — now AI makes them predictable and scalable.`,
    },
    {
        title: "1. Trend Detection",
        points: [
            "What’s trending in your niche",
            "Which sounds, memes, or hashtags are exploding",
            "What your competitors are posting",
        ],
        tools: "Exploding Topics, BuzzSumo, Glimpse, TrendSpider",
        desc: `AI tools can scan TikTok, Twitter/X, Reddit, Instagram, and YouTube in real time to tell you:`,
    },
    {
        title: "2. Content Creation",
        points: [
            "Catchy TikTok scripts with call-to-action hooks",
            "Instagram captions written for emotion or curiosity",
            "LinkedIn posts with story-driven intros",
        ],
        tools: "ChatGPT, Copy.ai, Jasper, StoryLab",
        desc: `AI can now generate viral-style posts, captions, and scripts with tone and structure designed to perform.`,
    },
    {
        title: "3. Visuals & Video Editing",
        points: [
            "AI tools can generate Instagram-ready graphics, TikTok backgrounds, or Reels thumbnails.",
            "AI video editors can auto-cut, subtitle, and add music to keep viewers engaged.",
        ],
        tools: "Runway, Pictory, CapCut AI, Canva Magic",
        desc: `Need eye-catching visuals or short-form edits?`,
    },
    {
        title: "4. Performance Prediction",
        points: [
            "Structure and clarity",
            "Emotional tone",
            "Past audience behavior",
        ],
        tools: "Lately.ai, Socialbakers AI, Hootsuite Insights",
        desc: `Some AI tools now simulate how content might perform before you even post it.`,
    },
    {
        title: "5. Scheduling & Optimization",
        points: [
            "Find your best posting times",
            "Test different hashtags",
            "Repost top content automatically",
        ],
        desc: `AI can also:`,
    },
];

export default function Canaihelpgoviral() {
    return (
        <div className="bg-white min-h-screen p-6 sm:p-12 md:p-24 font-sans text-gray-900">
            <div className="max-w-5xl mx-auto space-y-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 text-center mb-12">
                    Can AI Help You Go Viral on Social Media?
                </h1>

                <p className="text-lg max-w-3xl mx-auto leading-relaxed text-center">
                    Everyone wants to go viral. But in the crowded world of social media,
                    where attention spans are short and trends change by the hour, it’s no
                    easy feat.
                </p>

                <p className="text-lg max-w-3xl mx-auto leading-relaxed text-center mb-8">
                    That’s where AI comes in.
                    <br />
                    Today, creators, brands, and marketers are using AI not just to save
                    time — but to engineer content that’s more likely to catch fire. From
                    timing to tone, visuals to video cuts, AI tools can now help optimize
                    every piece of the viral puzzle.
                </p>

                <h2 className="text-3xl font-semibold text-blue-600 mb-6">Let’s break it down.</h2>

                {viralSections.map(({ title, desc, points, tools }, idx) => (
                    <section
                        key={idx}
                        className="bg-blue-50 rounded-lg shadow-lg p-8 sm:p-12 hover:shadow-2xl transition-shadow duration-300"
                    >
                        <h3 className="text-2xl font-bold text-blue-700 mb-4">{title}</h3>
                        {desc && <p className="mb-4 text-gray-800">{desc}</p>}
                        {points && (
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                {points.map((pt, i) => (
                                    <li key={i}>{pt}</li>
                                ))}
                            </ul>
                        )}
                        {tools && (
                            <p className="italic text-blue-800 font-semibold">
                                Example tools: {tools}
                            </p>
                        )}
                    </section>
                ))}

                <section className="max-w-3xl mx-auto mt-16 bg-green-50 border-l-8 border-green-400 p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-green-700 mb-4">Real-World Example</h3>
                    <p className="text-gray-800 leading-relaxed">
                        A solo creator used ChatGPT to script videos, Pictory to auto-edit
                        them, and a trend tracker to time the post. Within a week, they went
                        from 800 to 35,000 followers on TikTok — with zero ad spend.
                    </p>
                </section>

                <section className="max-w-3xl mx-auto mt-12 text-center space-y-4">
                    <p className="text-lg text-gray-800">
                        AI won’t guarantee virality — but it removes the guesswork and stacks
                        the odds in your favor.
                    </p>
                    <p className="text-lg font-semibold text-blue-700">
                        Whether you're a personal brand, startup, or content team, using AI is
                        like having a growth strategist, copywriter, and editor — all in one.
                    </p>
                    <p className="text-xl font-bold mt-6">So yes, AI can help you go viral.</p>
                    <p className="text-lg italic text-gray-600">
                        You still need creativity, but now you have a powerful co-pilot to take
                        you further, faster.
                    </p>
                </section>
            </div>
        </div>
    );
}
