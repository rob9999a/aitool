// src/pages/FastWar.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Component/Website/Header/Navbar";

export default function FastWar() {
    const posts = [
        {
            id: 1,
            title: "Breaking: World War 3 Escalation",
            category: "World News",
            img: "https://i.postimg.cc/7L0WQd3n/war-scene.jpg",
            alt: "World War 3 battlefield with smoke and destruction",
            text: "Tensions have escalated rapidly, with multiple nations mobilizing troops. Experts warn of a large-scale global conflict.",
        },
        {
            id: 2,
            title: "NATO Response and Global Impact",
            category: "Politics",
            img: "https://i.postimg.cc/2SVgCrtm/nato-meeting.jpg",
            alt: "NATO leaders meeting to discuss World War 3 strategy",
            text: "NATO leaders are holding emergency meetings to decide the next steps as the conflict spreads beyond Europe.",
        },
        {
            id: 3,
            title: "Civilian Crisis and Humanitarian Aid",
            category: "Humanitarian",
            img: "https://i.postimg.cc/mk4mF0cP/refugees.jpg",
            alt: "Refugees fleeing during World War 3 humanitarian crisis",
            text: "Millions are displaced, with international organizations rushing to provide aid to affected civilians.",
        },
    ];

    return (

        <>
            <Navbar></Navbar>

            {/* SEO Meta */}
            <Helmet>
                <title>World War 3 Hot News | FastWar</title>
                <meta
                    name="description"
                    content="Latest World War 3 hot news with categories, images, and analysis. Stay updated on global conflict, politics, and humanitarian crisis."
                />
                <meta name="keywords" content="World War 3, WW3, global conflict, NATO, humanitarian crisis, hot news" />
                <meta property="og:title" content="World War 3 Hot News | FastWar" />
                <meta property="og:description" content="Breaking updates and analysis on World War 3. Latest images, news, and categories." />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="bg-gray-50 min-h-screen">


                {/* Header */}
                <header className="bg-black text-white py-6 shadow-md">
                    <div className="max-w-6xl mx-auto px-4">
                        <h1 className="text-3xl font-bold tracking-wide"> FastWar – World War 3 Hot Page</h1>
                        <p className="text-gray-300 mt-2">Breaking news, categories, and global insights</p>
                    </div>
                </header>

                {/* Posts */}
                <main className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <img
                                src={post.img}
                                alt={post.alt}
                                className="w-full h-56 object-cover rounded-t-2xl"
                                loading="lazy"
                            />
                            <div className="p-5">
                                <span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                    {post.category}
                                </span>
                                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                                <p className="text-gray-700 text-sm leading-relaxed">{post.text}</p>
                            </div>
                        </article>
                    ))}
                </main>

            </div>
        </>

    );
}
