import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import Navbar from '../../Component/Website/Header/Navbar';

const Aireason = () => {
    const [activeTab, setActiveTab] = useState('winners');

    return (

        <>
            <Helmet>
                <title>Why Some People Are Winning Big with AI — While Others Stay Stuck</title>
                <meta
                    name="description"
                    content="Discover the real difference between those crushing it with AI and those falling behind. It's not just tools — it's mindset, timing, and how they act on the opportunity. Find out where you stand."
                />
                <meta name="robots" content="index, follow" />
                <html lang="en" />

                {/* Open Graph (Facebook, LinkedIn) */}
                <meta property="og:title" content="Why Some People Are Winning Big with AI — While Others Stay Stuck" />
                <meta
                    property="og:description"
                    content="Learn the mindset, tools, and decisions that separate AI winners from those still struggling. What’s really holding people back from AI success?"
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yourwebsite.com/ai-winners-vs-stuck" />
                <meta property="og:image" content="https://yourwebsite.com/images/ai-gap.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Why Some People Are Winning Big with AI — While Others Stay Stuck" />
                <meta
                    name="twitter:description"
                    content="Not everyone wins with AI. But those who do follow a different path. Learn what sets them apart."
                />
                <meta name="twitter:image" content="https://yourwebsite.com/images/ai-gap.jpg" />
                <meta name="twitter:site" content="@yourhandle" />
            </Helmet>

            <Navbar></Navbar>

            <div className="min-h-screen bg-white font-sans text-gray-800">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-16 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="div-template text-3xl md:text-5xl font-bold mb-4">
                            What's the Real Reason Some People Are Winning Big with AI — and Others Are Stuck?
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 mt-6">
                            The Brutally Honest Story You Haven't Heard Yet
                        </p>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="max-w-7xl mx-auto px-4 py-12">
                    {/* Scene 1 */}
                    <div className="mb-20">
                        <div className="flex items-center mb-6">
                            <span className="text-4xl mr-4">💻</span>
                            <h2 className="text-2xl md:text-3xl font-bold">Scene 1: Same Tools, Same Internet… Totally Different Outcomes</h2>
                        </div>
                        <div className="ml-12">
                            <p className="mb-4">Two people. Same laptop. Same Wi-Fi. Same access to ChatGPT, Midjourney, Notion AI, and all the trendy AI tools.</p>
                            <p className="mb-4 text-xl font-medium bg-yellow-50 p-4 border-l-4 border-yellow-500">But fast-forward 30 days…</p>

                            <div className="flex flex-col md:flex-row gap-8 my-10">
                                <div className="flex-1 bg-green-50 rounded-xl p-6 border border-green-200">
                                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4 mx-auto" />
                                    <h3 className="text-xl font-bold text-center mb-3 text-green-700">Person A</h3>
                                    <p className="text-center font-medium mb-3">Making $3,000–$10,000/month</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start"><span className="mr-2">✓</span> Selling AI-generated content</li>
                                        <li className="flex items-start"><span className="mr-2">✓</span> Running a dropshipping store</li>
                                        <li className="flex items-start"><span className="mr-2">✓</span> Automating services with bots</li>
                                    </ul>
                                </div>

                                <div className="flex-1 bg-red-50 rounded-xl p-6 border border-red-200">
                                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4 mx-auto" />
                                    <h3 className="text-xl font-bold text-center mb-3 text-red-700">Person B</h3>
                                    <p className="text-center font-medium mb-3">Still stuck consuming content</p>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start"><span className="mr-2">✗</span> Watching YouTube videos</li>
                                        <li className="flex items-start"><span className="mr-2">✗</span> Saving tutorials</li>
                                        <li className="flex items-start"><span className="mr-2">✗</span> Wondering "Why is nothing working?"</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="text-2xl font-bold text-center mt-8">So what's really going on?</p>
                        </div>
                    </div>

                    {/* The Myth */}
                    <div className="mb-20">
                        <div className="flex items-center mb-6">
                            <span className="text-4xl mr-4">🚫</span>
                            <h2 className="text-2xl md:text-3xl font-bold">The Myth: "You Just Need the Right Tool"</h2>
                        </div>
                        <div className="ml-12">
                            <p className="mb-4">No, that's not it. Everyone has access to the same tools now.</p>

                            <div className="bg-purple-50 rounded-xl p-6 my-8 border-l-4 border-purple-600">
                                <p className="text-xl font-medium mb-3">The AI winners aren't smarter.</p>
                                <p>They don't have a degree in computer science.</p>
                                <p>They don't code 10 hours a day.</p>
                            </div>

                            <div className="bg-red-100 p-6 rounded-xl mt-10 text-center">
                                <p className="text-2xl font-bold">The truth?</p>
                                <p className="text-3xl font-bold mt-4 text-red-600">Winners don't wait. Losers don't start.</p>
                            </div>
                        </div>
                    </div>

                    {/* The True Story */}
                    <div className="mb-20">
                        <div className="flex items-center mb-6">
                            <span className="text-4xl mr-4">🔥</span>
                            <h2 className="text-2xl md:text-3xl font-bold">The True Story: Why Most People Stay Stuck</h2>
                        </div>
                        <div className="ml-12">
                            <p className="mb-6">Let me tell you about Adam and Liam — two real people who messaged me last year.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Adam */}
                                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                                    <div className="flex items-center mb-4">
                                        <span className="text-3xl mr-3">🧍‍♂️</span>
                                        <h3 className="text-xl font-bold">Adam: The Action Taker</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-start"><span className="mr-2">•</span> No idea what prompt engineering meant</li>
                                        <li className="flex items-start"><span className="mr-2">•</span> No big audience or money for ads</li>
                                        <li className="flex items-start"><span className="mr-2">•</span> Simple idea: AI Dating Bio Generator</li>
                                        <li className="flex items-start"><span className="mr-2">•</span> Launched in <span className="font-bold">48 hours</span> using Gumroad + ChatGPT</li>
                                    </ul>

                                    <div className="mt-6 bg-white p-4 rounded-lg border border-blue-300">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="font-bold">Results:</p>
                                                <p className="text-sm">$287 first weekend → $1,100/month in 3 months</p>
                                            </div>
                                            <div className="text-3xl">💰</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Liam */}
                                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                                    <div className="flex items-center mb-4">
                                        <span className="text-3xl mr-3">🧍‍♂️</span>
                                        <h3 className="text-xl font-bold">Liam: The Overthinker</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex items-start"><span className="mr-2">•</span> Had all the same tools</li>
                                        <li className="flex items-start"><span className="mr-2">•</span> Asked endless questions instead of starting</li>
                                        <li className="flex items-start"><span className="mr-2">•</span> "What niche is best?", "What if no one buys?"</li>
                                        <li className="flex items-start"><span className="mr-2">•</span> Perfectionism paralysis</li>
                                    </ul>

                                    <div className="mt-6 bg-white p-4 rounded-lg border border-orange-300">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="font-bold">Results:</p>
                                                <p className="text-sm">3 months later → Still planning, still stuck</p>
                                            </div>
                                            <div className="text-3xl">😫</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Real Difference */}
                    <div className="mb-20">
                        <div className="flex items-center mb-6">
                            <span className="text-4xl mr-4">💡</span>
                            <h2 className="text-2xl md:text-3xl font-bold">So What's the Real Difference?</h2>
                        </div>
                        <div className="ml-12">
                            <div className="bg-gray-100 p-6 rounded-xl mb-8">
                                <p className="text-xl font-bold text-center mb-4">It's not about:</p>
                                <div className="flex justify-center gap-4 flex-wrap">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold border border-gray-300">Tools ❌</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold border border-gray-300">Time ❌</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold border border-gray-300">Money ❌</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold border border-gray-300">Talent ❌</span>
                                </div>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl mt-10 mb-8 border-l-4 border-green-600">
                                <p className="text-xl font-bold">It's about speed, courage, and direction.</p>
                                <p className="mt-2">Winners ship fast. Losers polish ideas they never launch.</p>
                                <p className="mt-2 font-bold">Winners fail publicly and adapt. Losers fail privately in their mind — by never even trying.</p>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-xl font-bold text-center mb-8">How AI Winners Think Differently:</h3>

                                {/* Tab navigation */}
                                <div className="flex mb-6 border-b">
                                    <button
                                        className={`py-3 px-6 font-medium ${activeTab === 'winners' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500'}`}
                                        onClick={() => setActiveTab('winners')}
                                    >
                                        AI Winner Mindset
                                    </button>
                                    <button
                                        className={`py-3 px-6 font-medium ${activeTab === 'losers' ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-500'}`}
                                        onClick={() => setActiveTab('losers')}
                                    >
                                        AI Loser Mindset
                                    </button>
                                </div>

                                {/* Tab content */}
                                {activeTab === 'winners' ? (
                                    <div className="bg-indigo-50 p-6 rounded-xl">
                                        <ul className="space-y-4">
                                            <MindsetItem
                                                quote="Let me launch and learn."
                                                comment="Starts immediately with imperfect solutions"
                                            />
                                            <MindsetItem
                                                quote="Done is better than perfect."
                                                comment="Prioritizes action over perfection"
                                            />
                                            <MindsetItem
                                                quote="I'll test 5 tools."
                                                comment="Experiments quickly with multiple options"
                                            />
                                            <MindsetItem
                                                quote="I can always improve later."
                                                comment="Focuses on iterative improvement"
                                            />
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="bg-red-50 p-6 rounded-xl">
                                        <ul className="space-y-4">
                                            <MindsetItem
                                                quote="Let me learn before I launch."
                                                comment="Paralyzed by the need to know everything first"
                                                isNegative
                                            />
                                            <MindsetItem
                                                quote="Perfect... or nothing."
                                                comment="Delays starting until everything is flawless"
                                                isNegative
                                            />
                                            <MindsetItem
                                                quote="I'll pick the best tool (next week)."
                                                comment="Analysis paralysis prevents any decision"
                                                isNegative
                                            />
                                            <MindsetItem
                                                quote="What if it doesn't work?"
                                                comment="Fear of failure prevents any action"
                                                isNegative
                                            />
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Brutal Truth */}
                    <div className="mb-20">
                        <div className="flex items-center mb-6">
                            <span className="text-4xl mr-4">🎤</span>
                            <h2 className="text-2xl md:text-3xl font-bold">Here's the Brutal Truth</h2>
                        </div>
                        <div className="ml-12">
                            <div className="bg-black text-white p-8 rounded-xl mb-6">
                                <p className="text-2xl md:text-3xl font-bold text-center">
                                    You don't need 10 more tutorials.<br />
                                    You need 1 launch.<br />
                                    One landing page.<br />
                                    One ugly idea — that you test in the real world.
                                </p>
                            </div>

                            <p className="text-2xl font-bold text-center mt-10 text-indigo-700">
                                AI won't build your dream unless you move.
                            </p>
                        </div>
                    </div>

                    {/* What to Do Now */}
                    <div className="mb-20">
                        <div className="flex items-center mb-6">
                            <span className="text-4xl mr-4">⚡</span>
                            <h2 className="text-2xl md:text-3xl font-bold">What You Should Do Now</h2>
                        </div>
                        <div className="ml-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                <ActionStep
                                    icon="🚫"
                                    title="Forget waiting"
                                    description="Stop delaying your start"
                                />
                                <ActionStep
                                    icon="🔍"
                                    title="Forget researching forever"
                                    description="Knowledge without action is wasted"
                                />
                                <ActionStep
                                    icon="🗓️"
                                    title="Forget 'one day'"
                                    description="That day will never come on its own"
                                />
                            </div>

                            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl text-center">
                                <p className="text-3xl font-bold mb-6">Launch something ugly in the next 72 hours.</p>
                                <p className="text-xl mb-6">Let AI help you build it — and the market will tell you what's next.</p>
                                <div className="text-5xl">💥</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-2xl p-8 my-16 text-white text-center">
                        <div className="text-5xl mb-6">🎁</div>
                        <h2 className="text-3xl font-bold mb-4">Want Help Launching?</h2>
                        <p className="mb-6 text-lg">I created a free action kit for people who want to stop being stuck</p>

                        <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto text-gray-800 shadow-xl">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <li className="flex items-center p-3 bg-purple-50 rounded-md">✅ 3 fast AI business models</li>
                                <li className="flex items-center p-3 bg-purple-50 rounded-md">✅ Pre-written ChatGPT prompts</li>
                                <li className="flex items-center p-3 bg-purple-50 rounded-md">✅ Tools that require ZERO coding</li>
                                <li className="flex items-center p-3 bg-purple-50 rounded-md">✅ Launch roadmap (48 hours to live)</li>
                            </ul>
                            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105 duration-300 ease-in-out">
                                👉 Download the Free Action Kit
                            </button>
                        </div>
                    </div>

                    {/* Final Line */}
                    <div className="text-center py-10">
                        <div className="text-4xl mb-6">🧠</div>
                        <p className="text-3xl font-bold mb-4">Everyone has AI.</p>
                        <p className="text-3xl font-bold mb-6">But not everyone has the guts to use it.</p>

                        <div className="flex justify-center gap-8 my-10">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <div className="text-5xl mb-4">📱</div>
                                <p className="text-xl font-bold">Some scroll.</p>
                            </div>
                            <div className="bg-green-100 p-6 rounded-lg">
                                <div className="text-5xl mb-4">💰</div>
                                <p className="text-xl font-bold">Some sell.</p>
                            </div>
                        </div>

                        <p className="text-3xl font-bold mt-10">Which one are you?</p>
                    </div>
                </div>
            </div>
        </>
    );
};

// Reusable components
const MindsetItem = ({ quote, comment, isNegative }) => (
    <li className="flex items-start">
        <div className={`mr-4 mt-1 flex-shrink-0 ${isNegative ? 'text-red-600' : 'text-indigo-600'}`}>
            {isNegative ? '✗' : '✓'}
        </div>
        <div>
            <p className="font-bold text-lg">{quote}</p>
            <p className="text-gray-600">{comment}</p>
        </div>
    </li>
);

const ActionStep = ({ icon, title, description }) => (
    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm text-center">
        <div className="text-4xl mb-3">{icon}</div>
        <h4 className="font-bold mb-2">{title}</h4>
        <p>{description}</p>
    </div>
);

export default Aireason;