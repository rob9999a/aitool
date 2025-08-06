import React from "react";

export default function AIBuildsBusiness() {
    return (


        <section className="bg-white min-h-screen py-16 px-6 md:px-16 font-sans text-gray-900">
            <div className="max-w-5xl mx-auto space-y-12">
                <h1 className="text-4xl font-extrabold text-center text-indigo-700">
                    What If AI Could Build Your Next Business Idea — Before You Spend a Dollar on It?
                </h1>

                <p className="text-lg text-center text-gray-800 max-w-3xl mx-auto">
                    In the old world, testing a business idea took months of work and thousands in costs.
                    But now, AI helps you validate, build, and even launch — before you spend a cent.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        {
                            title: "AI Market Research",
                            desc: "Scan trends, analyze demand, and find market gaps — before building anything.",
                        },
                        {
                            title: "Instant Branding",
                            desc: "Generate names, logos, and taglines with tools like ChatGPT and Looka.",
                        },
                        {
                            title: "Landing Pages Fast",
                            desc: "Use Framer AI or Durable.co to create beautiful launch pages in minutes.",
                        },
                        {
                            title: "Product Mockups",
                            desc: "Generate visuals, descriptions, and demo videos — no real product required.",
                        },
                        {
                            title: "Test Ad Creatives",
                            desc: "Launch AI-powered TikTok, Meta, or YouTube ads to test real audience interest.",
                        },
                        {
                            title: "No-Code Validation",
                            desc: "Validate your concept with real user actions — before investing your time.",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="p-6 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <p className="italic text-center text-gray-700 text-lg mt-12">
                    This isn’t a dream — it’s the new way to launch smarter, faster, and with zero risk.
                    <br />
                    Let AI test your next idea — before your wallet does.
                </p>
            </div>
        </section>
    );
}
