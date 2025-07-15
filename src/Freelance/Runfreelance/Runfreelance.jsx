import React from 'react';
import Navbar from '../../Component/Website/Header/Navbar';

const sections = [
    {
        emoji: '🤖',
        title: 'What If AI Could Run Half Your Freelance Business — Would You Finally Scale or Stay Stuck?',
        body: [
            "You’re good at what you do — no doubt.",
            "Clients like your work.",
            "You’re booked... sometimes.",
            "But every time you try to scale, something breaks.",
            "You’re stuck in a loop: Deliver > Email > Invoice > Chase > Repeat.",
            "And every task you do manually… is a task AI could handle in seconds.",
        ],
    },
    {
        emoji: '🤯',
        title: 'What If AI Took 50% of Your Work Off Your Plate?',
        body: [
            "You still:",
            "- Design, write, or code creatively",
            "- Talk to clients",
            "- Deliver final results",
            "- Make high-level decisions",
            "But AI handles:",
            "- Proposals",
            "- Meeting scheduling",
            "- Initial drafts",
            "- Follow-ups",
            "- Invoicing",
            "- Calendar management",
            "- Summarizing feedback",
            "- Social media repurposing",
            "- SEO suggestions",
            "- Even brainstorming",
            "That’s not replacing you. That’s scaling you.",
        ],
    },
    {
        emoji: '🧠',
        title: 'You’re Not Replacing Yourself. You’re Upgrading Yourself.',
        body: [
            "Think of AI like a virtual team:",
            "- One assistant that writes proposals",
            "- One that schedules clients",
            "- One that manages your files and tags",
            "- One that helps you ideate 10x faster",
            "But you only pay… nothing (or $20/month).",
            "And they never sleep.",
        ],
    },
    {
        emoji: '🚀',
        title: 'So Why Are You Still Doing Everything Manually?',
        body: [
            "Seriously. Why?",
            "Most freelancers say:",
            "“I don’t trust AI to do it right.”",
            "“It feels like cheating.”",
            "“I haven’t had time to learn.”",
            "But while you’re thinking, others are automating, scaling, and earning more.",
            "The tools are here.",
            "The systems are proven.",
            "The opportunity is real.",
        ],
    },
    {
        emoji: '💬',
        title: 'The Real Question Isn’t: “Can AI Help Me?”',
        body: [
            "It’s: Why are you still trying to do this alone?",
            "Because the truth is:",
            "- If you’re drowning in admin work",
            "- If you’re turning down clients",
            "- If you’re delivering great work but not growing",
            "Then you don’t have a freelance problem. You have a system problem.",
            "And AI is the system you’ve been waiting for.",
        ],
    },
    {
        emoji: '💡',
        title: 'Final Thought: Automate to Elevate',
        body: [
            "Let AI handle the repetitive, so you can focus on the remarkable.",
            "The freelancer who learns to delegate to AI in 2025?",
            "Will outperform the one who tries to do it all — every single time.",
            "So… Will you scale or stay stuck?",
        ],
    },
];

export default function Runfreelance() {
    return (

        <>
            <Navbar></Navbar>

            <div className="bg-white dark:bg-gray-900 text-black dark:text-white px-6 md:px-20 py-16">
                <div className="div-template max-w-6xl mx-auto space-y-16">
                    {sections.map((sec, i) => (
                        <div key={i}>
                            <h2 className="text-3xl md:text-3xl font-800 text-red-600 mb-4">
                                {sec.emoji} {sec.title}
                            </h2>
                            <div className="space-y-2 text-lg leading-relaxed">
                                {sec.body.map((line, idx) => (
                                    <p key={idx} className={line.startsWith('-') ? 'pl-4 ml-2 border-l-4 border-gray-300 dark:border-gray-700' : ''}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
