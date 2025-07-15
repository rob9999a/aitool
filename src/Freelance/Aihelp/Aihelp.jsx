import React from "react";
import Navbar from "../../Component/Website/Header/Navbar";

const cards = [
    {
        title: "Personalized Proposals & Outreach",
        description:
            "AI tools like ChatGPT craft hyper-personalized proposals tailored for each client and job description — all in seconds. Better messages = higher reply rates = more booked calls.",
        img: "https://i.postimg.cc/gJXVx6YD/opened-ai-chat-laptop-1268-21506.avif",
    },
    {
        title: "Content that Showcases Your Expertise",
        description:
            "AI helps you create blogs, social posts, and newsletters that showcase your skills and knowledge. This content draws clients in like a magnet — they come to you.",
        img: "https://i.postimg.cc/SNTxv1Ln/woman-wearing-vr-glasses-gaming.jpg",
    },
    {
        title: "Smart Social Media Engagement",
        description:
            "AI tools schedule posts, respond to common questions, and suggest trending topics. Stay top-of-mind without spending hours on social media.",
        img: "https://i.postimg.cc/0QYNX8Zv/hand-holding-smartphone-social-media-concept.jpg",
    },
    {
        title: "Lead Qualification and Follow-Up",
        description:
            "AI chatbots and email automation engage prospects, answer FAQs, and send follow-ups — keeping your pipeline warm effortlessly.",
        img: "https://i.postimg.cc/MT2TYc7t/man-searching-freelancer-jobs-online-23-2148690607.jpg",
    },
];

export default function FreelanceAIClientCards() {
    return (

        <>
            <Navbar></Navbar>


            <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-20">
                <div className="div-template max-w-6xl mx-auto space-y-14">
                    {cards.map(({ title, description, img }, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-1 md:grid-cols-2 border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >


                            {/* Text */}
                            <div className="p-8 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold text-red-600 mb-4">{title}</h3>
                                <p className="text-black dark:text-gray-100 text-lg leading-relaxed">
                                    {description}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="w-full h-64 md:h-auto overflow-hidden">
                                <img
                                    src={img}
                                    alt={title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>


                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
