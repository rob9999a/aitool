import React from "react";
import Navbar from "../../Component/Website/Header/Navbar";

export default function Mskfreelance() {
    return (

        <>
            <Navbar></Navbar>


            <section className="min-h-screen flex flex-col md:flex-row bg-white text-gray-900 overflow-hidden">

                {/* Left side with subtle colored overlay and title */}
                <div className="md:w-1/2 relative flex items-center justify-center p-12 bg-gradient-to-br from-red-100 via-pink-100 to-purple-100">
                    <div className="absolute inset-0 bg-pink-50 -skew-y-3 transform origin-top-left"></div>
                    <h1 className="relative text-6xl md:text-5xl font-extrabold leading-tight tracking-wide max-w-md z-10">
                        ❗ The #1 Mistake Freelancers Make with AI —
                        <span className="block mt-3 text-red-600">And How to Avoid It</span>
                    </h1>
                </div>

                {/* Right side content */}
                <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-8 text-lg leading-relaxed font-semibold">

                    <p className="italic text-gray-600">
                        AI tools promise to make freelancing easier, faster, and more profitable. Yet many freelancers jump in and end up frustrated — wasting time and getting mediocre results.
                    </p>

                    <p className="font-bold">Why?</p>

                    <p>
                        Because they make one critical mistake:
                    </p>

                    <p className="font-extrabold text-xl text-red-600">
                        They treat AI like a magic button — instead of a powerful tool that requires skill and strategy.
                    </p>

                    <div>
                        <h2 className="text-red-500 font-bold text-2xl mb-20">The mistake explained:</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 font-normal">
                            <li>Trying AI for random tasks without a plan.</li>
                            <li>Expecting perfect results immediately.</li>
                            <li>Ignoring the need for clear prompts.</li>
                            <li>Failing to integrate AI into workflows.</li>
                            <li>Forgetting their own creativity is key.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-red-500 font-bold text-2xl mb-20">How to avoid this trap:</h2>
                        <ol className="list-decimal list-inside space-y-3 text-gray-700 font-normal">
                            <li><strong>Craft strong prompts:</strong> Good input = good output.</li>
                            <li><strong>Build workflows:</strong> Automate daily tasks consistently.</li>
                            <li><strong>Combine AI + your skills:</strong> Polish and personalize AI ideas.</li>
                            <li><strong>Iterate & improve:</strong> Treat AI like a partner you train.</li>
                        </ol>
                    </div>

                    <p className="text-red-600 font-bold text-lg">
                        Master AI as a skill — not a shortcut — and watch your freelance business thrive.
                    </p>
                </div>
            </section>
        </>
    );
}
