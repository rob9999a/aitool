import React from 'react';
import { Helmet } from 'react-helmet';
import './Twopage.css';
import Navbar from '../../Component/Website/Header/Navbar';

const tools = [
    {
        name: 'ChatGPT',
        description: 'Smart AI assistant for writing, coding, and conversations.',
        tags: ['AI', 'chatbot', 'productivity'],
        stars: 5,
        link: 'https://chat.openai.com',
    },
    {
        name: 'Notion AI',
        description: 'Organize your thoughts and tasks with intelligent note-taking.',
        tags: ['notes', 'organization', 'AI assistant'],
        stars: 4,
        link: 'https://www.notion.so/product/ai',
    },
    {
        name: 'Leonardo AI',
        description: 'Create stunning art and graphics using prompt-based generation.',
        tags: ['art', 'design', 'image AI'],
        stars: 5,
        link: 'https://leonardo.ai',
    },
    {
        name: 'Copy.ai',
        description: 'Generate marketing copy, ads, and email content in seconds.',
        tags: ['copywriting', 'ads', 'SEO'],
        stars: 4,
        link: 'https://copy.ai',
    },
    {
        name: 'Pictory',
        description: 'Transform text content into short engaging videos.',
        tags: ['video', 'editing', 'social media'],
        stars: 4,
        link: 'https://pictory.ai',
    },
];

const AIToolsFlex = () => {
    return (
        <>
            <Navbar></Navbar>

            <div className="ai-wrapper">
                <Helmet>
                    <title>Top 5 Free AI Tools to Start Your Business in 2025</title>
                    <meta name="description" content="Discover the best free AI tools for starting and growing your business in 2025: ChatGPT, Notion AI, Copy.ai and more." />
                    <meta name="keywords" content="AI tools, free AI, ChatGPT, Notion AI, AI for startups, 2025 business tools" />
                </Helmet>

                <section id='template'>

                    <h1 className="ai-title">5 Best Free AI Tools to Start Your Business in 2025</h1>
                    <p className="ai-subtitle">
                        Use the power of artificial intelligence to launch your idea, save time, and grow faster in 2025.
                    </p>

                    <div className="ai-flex">
                        {tools.map((tool, index) => (
                            <div key={index} className="ai-card">
                                <h2 className="tool-name">{tool.name}</h2>
                                <p className="tool-desc">{tool.description}</p>
                                <div className="stars">
                                    {'★'.repeat(tool.stars)}{'☆'.repeat(5 - tool.stars)}
                                </div>
                                <div className="tags">
                                    {tool.tags.map((tag, i) => (
                                        <span key={i} className="tag">#{tag}</span>
                                    ))}
                                </div>
                                <a className="learn-btn" href={tool.link} target="_blank" rel="noreferrer">
                                    Learn More →
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default AIToolsFlex;
