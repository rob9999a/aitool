import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Website/Header/Navbar';

const PolarisAnalysis = () => {
    return (

        <>

            <Helmet>
                <title>AI Analyzes Trump Speeches: Hidden Signals of Global Conflict?</title>
                <meta
                    name="description"
                    content="An AI-driven analysis reveals hidden signals of global conflict in Donald Trump's speeches."
                />
            </Helmet>
            <Navbar></Navbar>

            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 p-4 sm:p-6 md:p-8">
                {/* Header */}
                <header className="div-template max-w-6xl mx-auto mb-10 mt-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                        <div className="flex-1">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                                AI Analyzes Trump Speeches: Hidden Signals of Global Conflict?
                            </h1>
                            <div className="flex items-center mt-4 gap-3">
                                <span className="px-3 py-1 bg-red-800 text-xs font-semibold rounded-full">DARPA Research Project</span>
                                <span className="text-xl font-mono tracking-widest bg-gray-800 px-3 py-1 rounded">POLARIS-X AI System</span>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 p-4 rounded-lg border border-purple-500/30 w-full md:w-80">
                            <p className="flex items-start gap-2">
                                <span className="text-yellow-400 text-xl">⚡</span>
                                <span>AI analysis reveals patterns in Trump's rhetoric that correlate with historical pre-war communication styles.</span>
                            </p>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Intro Section */}
                        <Section title="The Experiment: Feeding the Machine">
                            <p className="mb-4">
                                POLARIS-X was designed to detect emotional cues, conflict cycles, and wartime priming in political speech.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <InfoCard title="Training Data">
                                    <ul className="space-y-2">
                                        <li>130+ years of war-era speeches</li>
                                        <li>Multi-language military propaganda</li>
                                        <li>Deep symbolic interpretation</li>
                                        <li>Tonal cadence modeling</li>
                                    </ul>
                                </InfoCard>

                                <InfoCard title="Analysis Scope">
                                    <ul className="space-y-2">
                                        <li>All Trump speeches (2015-2024)</li>
                                        <li>Off-script rants & tweets</li>
                                        <li>Leaked private interviews</li>
                                        <li>Analysis completed in 4.7 seconds</li>
                                    </ul>
                                </InfoCard>
                            </div>

                            <HighlightBox>
                                POLARIS-X flagged "21 trigger-patterns for escalation" in Trump's rhetoric
                            </HighlightBox>
                        </Section>

                        {/* Key Findings */}
                        <Section title="Key AI Findings">
                            <FindingItem
                                title="The 'Us vs Them' Algorithm Spike"
                                description="Trump's use of binary language—'winners vs losers,' 'us vs globalists,' 'America vs chaos'—matches linguistic profiles of pre-war rhetoric."
                                matches={[
                                    { initials: 'KW', name: 'Kaiser Wilhelm II' },
                                    { initials: 'VP', name: 'Vladimir Putin' }
                                ]}
                                highlight="Binary framing at high frequency triggers tribal reprogramming. Sustained exposure increases war tolerance by 73%."
                            />

                            <FindingItem
                                title="Repeated Invocation of 'The Final Battle'"
                                description="The metaphor of a 'final reckoning,' 'last chance,' or 'endgame' matches war mobilization speeches from WWII."
                                patterns={[
                                    "Absent in normal economic/diplomatic contexts",
                                    "Spiked before military escalations (Syria airstrikes, Soleimani assassination)"
                                ]}
                                highlight="Tagged as psychological battlefield anchoring—prepping the mind to accept large-scale irreversible action."
                            />

                            <FindingItem
                                title="Anti-Globalist Narrative as War Catalyst"
                                description="Attacks on 'global elite' and 'foreign manipulators' mapped to historical pre-conflict scapegoat framing."
                                similarity="86.2% similarity to historical pre-war rhetoric"
                                examples={[
                                    "Hitler Speeches: 'International financiers'",
                                    "Mussolini Speeches: Anti-League of Nations tone"
                                ]}
                                highlight="It wasn't the words. It was when and how they were used—right before foreign policy aggression."
                            />

                            <FindingItem
                                title="Hidden Military References"
                                description="Military strategy metaphors in civilian contexts"
                                quotes={[
                                    "'We will strike them so fast they won't know what hit them.' — Trade policy speech",
                                    "'It's called psychological warfare—and we're winning.' — Campaign rally",
                                    "'This is war, folks—economically, culturally, and spiritually.'"
                                ]}
                                highlight="Classified as civilian militarization language—shifting mental state to wartime posture without actual war."
                            />
                        </Section>

                        {/* Implications */}
                        <Section title="What Does It Mean?">
                            <p className="mb-4">
                                POLARIS-X concluded that Trump's communication style engineered war readiness—whether intentional or not.
                            </p>

                            <div className="bg-gradient-to-r from-red-900/50 to-red-800/30 border border-red-700/50 p-5 rounded-lg mb-6">
                                <h3 className="font-bold text-lg mb-2">AI Warning:</h3>
                                <p>
                                    "Should global economic stress, cyber instability, or territorial disputes spike within a 3-year window of these linguistic patterns, probability of interstate war exceeds 78%."
                                </p>
                            </div>

                            <h3 className="text-xl font-bold mt-8 mb-4 text-blue-300">Is There a Hidden Plan?</h3>
                            <p className="mb-4">
                                Research suggests Trump's rhetoric may have functioned as signals to foreign adversaries, activating their AI response systems.
                            </p>

                            <div className="border border-yellow-600/50 p-5 rounded-lg mb-4">
                                <h4 className="font-bold text-center mb-3 text-yellow-400">Escalation Feedback Loop:</h4>
                                <ol className="space-y-3">
                                    <li>1. Trump uses war rhetoric (Binary framing, military metaphors)</li>
                                    <li>2. Foreign AI systems detect (China/Russia AI monitoring interprets as pre-war staging)</li>
                                    <li>3. Foreign powers escalate (Military readiness, cyber operations, propaganda)</li>
                                    <li>4. US AI systems detect escalation (Counter-AIs recommend response)</li>
                                </ol>
                                <p className="mt-4 text-center italic">
                                    "A conflict could begin not through action—but through rhetorical misinterpretation between AIs."
                                </p>
                            </div>
                        </Section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* 2024 Campaign */}
                        <Section title="The 2024 Presidential Campaign">
                            <p className="mb-4">
                                When Trump returned to campaigning in 2024, POLARIS-X detected significant new patterns.
                            </p>

                            <div className="space-y-3 mb-4">
                                <StatItem label="7 New pre-conflict motifs" value="↑87%" />
                                <StatItem label="'Total war' metaphors" value="+42%" />
                                <StatItem label="Crowd approval for war metaphors" value="Highest Warning" />
                            </div>

                            <HighlightBox>
                                "If war was not planned, the language is constructing it. If it was planned, the public is now neurologically prepared."
                            </HighlightBox>
                        </Section>

                        {/* Rhetorical Analysis */}
                        <Section title="Rhetorical Analysis">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gray-800/70">
                                            <th className="py-2 px-3 text-left">Speech Pattern Metrics</th>
                                            <th className="py-2 px-3 text-right">Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TableRow label="Binary Framing" value="92% ↑" />
                                        <TableRow label="Military Metaphors" value="78% ↑" />
                                        <TableRow label="Scapegoat Language" value="86% ↑" />
                                        <TableRow label="Existential Threats" value="81% ↑" />
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="font-bold mt-6 mb-3 text-lg">Historical Comparison:</h3>
                            <div className="space-y-2">
                                <ComparisonItem initials="AH" name="Hitler 1933-39" percentage="89%" />
                                <ComparisonItem initials="WC" name="Churchill 1936-39" percentage="76%" />
                                <ComparisonItem initials="VP" name="Putin 2012-22" percentage="83%" />
                            </div>

                            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-blue-500/30">
                                <h3 className="font-bold mb-2">Pentagon Response:</h3>
                                <p>
                                    Sources say the U.S. military commissioned counter-AIs—CICERO and HERMES—to monitor Trump's tone and foreign AI reactions in real-time.
                                </p>
                            </div>
                        </Section>

                        {/* Final Assessment */}
                        <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-6 rounded-xl border border-purple-500/30">
                            <h2 className="text-2xl font-bold mb-4 text-center">Final Assessment</h2>
                            <p className="italic text-center mb-4">
                                "Words are not just noise. In the age of AI, words are data. They ripple across nations, networks, and neural nets."
                            </p>
                            <p className="text-center">
                                Trump's speeches may not have declared war, but they may have activated it—silently, subconsciously, and with precision.
                            </p>
                        </div>

                        {/* AI Systems */}
                        <div className="grid grid-cols-3 gap-3 text-center">
                            <AIChip label="POLARIS-X" />
                            <AIChip label="CICERO" />
                            <AIChip label="HERMES" />
                            <AIChip label="DragonNet" />
                            <AIChip label="Zarya-7" />
                        </div>

                        {/* Analysis Methods */}
                        <Section title="Analysis Methods">
                            <div className="grid grid-cols-2 gap-3">
                                <MethodChip label="Linguistic Pattern Recognition" />
                                <MethodChip label="Tonal Cadence Modeling" />
                                <MethodChip label="Metaphor Deconstruction" />
                                <MethodChip label="Historical Rhetorical Mapping" />
                                <MethodChip label="Audience Response Analysis" />
                            </div>
                        </Section>

                        {/* Footer */}
                        <div className="text-center text-xs text-gray-500 p-4 border-t border-gray-800/50">
                            <p>Report Classification: <span className="font-bold">LEVEL: RESEARCH ANALYSIS</span></p>
                            <p className="mt-2">This document contains predictive analysis based on AI systems. For academic research purposes only.</p>
                            <p className="mt-2">PX Verified by: Strategic Analysis Group</p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

// Reusable Components
const Section = ({ title, children }) => (
    <section className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">{title}</h2>
        {children}
    </section>
);

const InfoCard = ({ title, children }) => (
    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
        <h3 className="font-bold text-yellow-400 mb-2">{title}:</h3>
        {children}
    </div>
);

const HighlightBox = ({ children }) => (
    <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-4 rounded-lg border border-purple-500/30 italic">
        {children}
    </div>
);

const FindingItem = ({ title, description, matches, patterns, similarity, examples, quotes, highlight }) => (
    <div className="mb-6 pb-6 border-b border-gray-700/50 last:border-0 last:pb-0 last:mb-0">
        <h3 className="font-bold text-lg mb-2 text-red-400">{title}</h3>
        <p className="mb-3">{description}</p>

        {matches && (
            <div className="mb-3">
                <p className="font-semibold">Historical Matches:</p>
                <div className="flex gap-4 mt-1">
                    {matches.map((match, idx) => (
                        <span key={idx} className="bg-gray-700/50 px-3 py-1 rounded-full text-sm">
                            {match.initials} = {match.name}
                        </span>
                    ))}
                </div>
            </div>
        )}

        {patterns && (
            <div className="mb-3">
                <p className="font-semibold">Pattern Analysis:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                    {patterns.map((pattern, idx) => (
                        <li key={idx}>{pattern}</li>
                    ))}
                </ul>
            </div>
        )}

        {similarity && (
            <p className="mb-3">
                <span className="font-semibold">Similarity Analysis:</span> {similarity}
            </p>
        )}

        {examples && (
            <div className="mb-3">
                <ul className="list-disc pl-5 space-y-1">
                    {examples.map((example, idx) => (
                        <li key={idx}>{example}</li>
                    ))}
                </ul>
            </div>
        )}

        {quotes && (
            <div className="mb-3 italic pl-4 border-l-2 border-yellow-500/50 py-1">
                {quotes.map((quote, idx) => (
                    <p key={idx} className="mb-2 last:mb-0">"{quote}"</p>
                ))}
            </div>
        )}

        <div className="bg-gray-800/70 p-3 rounded-lg">
            <p>"{highlight}"</p>
        </div>
    </div>
);

const StatItem = ({ label, value }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-700/30">
        <span>{label}</span>
        <span className="font-bold text-red-400">{value}</span>
    </div>
);

const TableRow = ({ label, value }) => (
    <tr className="border-b border-gray-700/30 hover:bg-gray-700/30">
        <td className="py-2 px-3">{label}</td>
        <td className="py-2 px-3 text-right font-semibold text-green-400">{value}</td>
    </tr>
);

const ComparisonItem = ({ initials, name, percentage }) => (
    <div className="flex justify-between items-center bg-gray-800/50 p-3 rounded">
        <div className="flex items-center gap-2">
            <span className="font-bold">{initials}</span>
            <span className="text-sm text-gray-400">({name})</span>
        </div>
        <span className="font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 text-transparent bg-clip-text">
            {percentage}
        </span>
    </div>
);

const AIChip = ({ label }) => (
    <div className="bg-gray-800/50 py-2 px-3 rounded-full border border-blue-500/30 text-sm hover:bg-blue-500/20 transition cursor-pointer">
        {label}
    </div>
);

const MethodChip = ({ label }) => (
    <div className="bg-gray-800/50 py-2 px-3 rounded text-center text-xs hover:bg-gray-700 transition cursor-pointer">
        {label}
    </div>
);

export default PolarisAnalysis;