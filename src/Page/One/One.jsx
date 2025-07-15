import React, { useState } from 'react';
import './One.css'
import Header from '../../Component/Website/Header/Navbar';
import Footer from '../../Component/Website/Footer/Footer';
import Navbar from '../../Component/Website/Header/Navbar';

const tools = [
    {
        name: 'Jasper AI',
        rating: '4.9',
        description: 'Create marketing content, blog posts, and social media captions using advanced AI.',
        features: ['Marketing templates', 'Creative writing', '29+ languages'],
        image: 'https://i.postimg.cc/hvgPYb0p/jasper-6xb6.jpg',
        link: 'https://www.jasper.ai/',
        color: '#FF6B35'
    },
    {
        name: 'Copy.ai',
        rating: '4.8',
        description: 'Instantly generate high-quality copy for ads, emails, and more.',
        features: ['Ad copy', 'Email writing', 'Blog content'],
        image: 'https://i.postimg.cc/m2hCXs2c/629a702fc90e970b2626cd52-fb-og.jpg',
        link: 'https://www.copy.ai/',
        color: '#3B82F6'
    },
    {
        name: 'Writesonic',
        rating: '4.7',
        description: 'Create SEO blogs, ads, and product descriptions in seconds.',
        features: ['SEO blogs', 'AI chatbot', 'Product copy'],
        image: 'https://i.postimg.cc/fTj7SKLC/1727560539891.jpg',
        link: 'https://writesonic.com',
        color: '#10B981'
    },
    {
        name: 'Sudowrite',
        rating: '4.6',
        description: 'AI tool for fiction writers and storytellers.',
        features: ['Fiction assistance', 'Story rewriting', 'Character development'],
        image: 'https://i.postimg.cc/yxhR91Vx/sudowrite-review.jpg',
        link: 'https://www.sudowrite.com/',
        color: '#8B5CF6'
    },
    {
        name: 'Notion AI',
        rating: '4.5',
        description: 'Boost your Notion workspace with smart AI writing.',
        features: ['Integrated AI', 'Smart suggestions', 'Outline & summarize'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg',
        link: 'https://www.notion.so/product/ai',
        color: '#6B7280'
    },
    {
        name: 'Quillbot',
        rating: '4.8',
        description: 'Best tool for rephrasing and summarizing text.',
        features: ['Paraphraser', 'Grammar checker', 'Citation generator'],
        image: 'https://i.postimg.cc/J7BC8ynM/Quill-Bot-Logo.jpg',
        link: 'https://quillbot.com',
        color: '#059669'
    }
];

const AiToolsSimple = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (

        <>

            <Navbar></Navbar>




            <div className='container-fluid'>
                <div className="row">


                    <div className='div-card'>

                        {/* Header */}
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h1 className='title-section'>
                                AI Writing Tools
                            </h1>
                            <p style={{
                                fontSize: '1.4rem',
                                color: '#6b7280',
                                maxWidth: '800px',
                                margin: '0 auto'
                            }}>
                                Discover the best AI-powered writing tools to boost your productivity
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '2rem',
                            marginBottom: '4rem'
                        }}>
                            {tools.map((tool, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: '20px',
                                        boxShadow: hoveredCard === index
                                            ? '0 20px 40px rgba(0,0,0,0.1)'
                                            : '0 4px 20px rgba(0,0,0,0.08)',
                                        transition: 'all 0.3s ease',
                                        transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                                        overflow: 'hidden',
                                        border: '1px solid #e5e7eb'
                                    }}
                                >
                                    {/* Image Section */}
                                    <div style={{
                                        height: '300px',
                                        backgroundColor: '#f9fafb',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1rem',
                                        position: 'relative'
                                    }}>
                                        <img
                                            src={tool.image}
                                            alt={tool.name}
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                objectFit: 'contain',
                                                borderRadius: '8px'
                                            }}
                                            onError={(e) => {
                                                e.target.src = `https://via.placeholder.com/200x120/${tool.color.replace('#', '')}/ffffff?text=${tool.name.replace(' ', '+')}`;
                                            }}
                                        />

                                        {/* Rating Badge */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '1rem',
                                            right: '1rem',
                                            backgroundColor: 'white',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '25px',
                                            fontSize: '0.95rem',
                                            fontWeight: '600',
                                            color: '#f59e0b',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                        }}>
                                            ⭐ {tool.rating}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div style={{ padding: '2rem' }}>
                                        <h3 style={{
                                            fontSize: '1.6rem',
                                            fontWeight: '700',
                                            color: '#1f2937',
                                            marginBottom: '0.75rem'
                                        }}>
                                            {tool.name}
                                        </h3>

                                        <p style={{
                                            color: '#6b7280',
                                            lineHeight: '1.6',
                                            marginBottom: '1.5rem'
                                        }}>
                                            {tool.description}
                                        </p>

                                        {/* Features */}
                                        <div style={{ marginBottom: '2rem' }}>
                                            <h4 style={{
                                                fontSize: '1.2rem',
                                                fontWeight: '600',
                                                color: tool.color,
                                                marginBottom: '0.75rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em'
                                            }}>
                                                Key Features
                                            </h4>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                {tool.features.map((feature, i) => (
                                                    <div key={i} style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        color: '#6b7280',
                                                        fontSize: '1rem'
                                                    }}>
                                                        <div style={{
                                                            width: '6px',
                                                            height: '6px',
                                                            backgroundColor: tool.color,
                                                            borderRadius: '50%',
                                                            marginRight: '0.75rem'
                                                        }}></div>
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <a
                                            href={tool.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '100%',
                                                padding: '1rem',
                                                backgroundColor: tool.color,
                                                color: 'white',
                                                textDecoration: 'none',
                                                borderRadius: '12px',
                                                fontWeight: '600',
                                                fontSize: '1rem',
                                                transition: 'all 0.2s ease',
                                                boxShadow: `0 4px 12px ${tool.color}40`
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.transform = 'translateY(-2px)';
                                                e.target.style.boxShadow = `0 6px 20px ${tool.color}60`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.transform = 'translateY(0)';
                                                e.target.style.boxShadow = `0 4px 12px ${tool.color}40`;
                                            }}
                                        >
                                            <span>Try {tool.name}</span>
                                            <svg
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    marginLeft: '0.5rem'
                                                }}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default AiToolsSimple;