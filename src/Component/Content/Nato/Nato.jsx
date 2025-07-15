import React from 'react';
import Navbar from '../../Website/Header/Navbar';

const Nato = () => {
    return (
        <>
            <Navbar></Navbar>


            <div className="bg-white min-h-screen font-serif text-gray-800">
                {/* Header */}
                <header className="border-b border-gray-200 py-4">
                    <div className="div-container container mx-auto px-4 flex justify-between items-center">
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold">Global Security Review</h1>
                            <p className="text-xs text-gray-500">Independent International Journalism</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm">July 15, 2025</p>
                            <p className="text-xs text-gray-500">Tuesday</p>
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <main className="container mx-auto px-4 py-8 max-w-3xl">
                    {/* Article Header */}
                    <div className="mb-8">
                        <div className="mb-4">
                            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                                Exclusive
                            </span>
                            <span className="ml-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                Politics
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            Leaked Audio: Trump Privately Discussed Dismantling NATO
                        </h1>

                        <div className="border-t border-gray-200 pt-6">
                            <p className="text-lg italic">
                                "This is not rumor. This is the voice of a former U.S. President, casually suggesting the collapse of the Western world's most important military alliance."
                            </p>
                        </div>
                    </div>

                    {/* Article Body */}
                    <div className="prose prose-lg max-w-none">
                        <p className="mb-6">
                            In a bombshell revelation that has sent shockwaves across diplomatic circles, a leaked audio recording from a closed-door meeting at Mar-a-Lago in late 2020 allegedly captures former President Donald Trump privately discussing the possibility of withdrawing the United States from NATO—or even dismantling the alliance entirely.
                        </p>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                            <h3 className="font-bold text-lg mb-2">The implications are profound:</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>What if the recording is authentic?</li>
                                <li>What did Trump say exactly?</li>
                                <li>And why did this conversation never reach the public—until now?</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">The Recording: What Was Said</h2>
                        <p className="mb-4">
                            The 42-minute audio file—leaked by a former White House staffer who claims to have "kept it in case the world needed the truth"—has been verified by two independent audio forensics labs as authentic and consistent with Trump's voiceprint.
                        </p>
                        <p className="mb-4">
                            In the audio, Trump is heard speaking to three top donors and a former military official during a private dinner:
                        </p>

                        <div className="border-l-4 border-gray-800 pl-4 my-6 italic">
                            <p className="mb-3">"NATO is a bad deal for us. We defend them. They pay nothing. If I had a second term, I'd pull us out. What do we need it for? Europe won't fight."</p>
                            <p className="mb-3">"We could build a new alliance—with countries that actually respect us. Maybe even bring in Russia. Russia doesn't want to invade if they're treated with respect."</p>
                            <p>At one point, he laughs: "Let NATO fall apart. Let Germany handle it. Let's see how long they last without us."</p>
                        </div>

                        <h2 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">The Context: Why It Matters</h2>
                        <p className="mb-4">
                            Throughout his presidency, Trump frequently criticized NATO, calling it:
                        </p>
                        <ul className="list-disc pl-8 mb-4 space-y-1">
                            <li>"Obsolete"</li>
                            <li>"A drain on U.S. taxpayers"</li>
                            <li>"A scam that benefits Europe more than America"</li>
                        </ul>
                        <p className="mb-4">
                            But while his public criticism was loud, his private stance—as revealed in this audio—is far more extreme.
                        </p>
                        <p className="font-semibold mb-6">
                            This isn't about reforming NATO. This is about breaking it.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">Trump's History with NATO</h2>
                        <p className="mb-4">
                            During his 2016 campaign, Trump hinted at questioning Article 5—the core clause that says an attack on one NATO country is an attack on all.
                        </p>
                        <p className="mb-4">
                            As president, he:
                        </p>
                        <ul className="list-disc pl-8 mb-4 space-y-1">
                            <li>Repeatedly pressured member states to increase military spending</li>
                            <li>Threatened to "go it alone" if allies didn't comply</li>
                            <li>Delayed military exercises</li>
                            <li>Reportedly discussed withdrawing the U.S. from NATO as early as 2018 (according to The New York Times)</li>
                        </ul>
                        <div className="bg-gray-50 p-4 my-6 border-l-4 border-gray-400">
                            <p className="italic">"Trump didn't understand what NATO was for. He thought it was a business deal, not a defense alliance."</p>
                            <p className="text-right mt-2 font-medium">— Former National Security Advisor John Bolton</p>
                        </div>
                        <p className="mb-6">
                            The new audio suggests that those internal fears were well-founded.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">Who Else Was in the Room?</h2>
                        <p className="mb-4">
                            While names are redacted in the leak, investigative cross-referencing of travel logs and event calendars suggests that the following individuals may have been present:
                        </p>
                        <ul className="list-disc pl-8 mb-4 space-y-1">
                            <li>A former three-star general with ties to U.S. European Command</li>
                            <li>A billionaire donor involved in Eastern European energy markets</li>
                            <li>A former Trump campaign advisor linked to controversial meetings in Moscow</li>
                        </ul>
                        <p className="mb-6">
                            Jared Kushner reportedly entered the room halfway through but didn't speak. No official confirmation has been made by the Trump team, but none have denied being at Mar-a-Lago on the date in question.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">Fallout from the Leak</h2>
                        <p className="mb-4">
                            Since the audio emerged:
                        </p>
                        <ul className="list-disc pl-8 mb-4 space-y-1">
                            <li>NATO officials have reportedly held emergency meetings to assess U.S. loyalty</li>
                            <li>European leaders have privately expressed fear of a 2028 Trump comeback</li>
                            <li>The Pentagon has refused to comment, but one anonymous general stated: "If this is real—and it sounds real—it's the most dangerous statement a U.S. president has ever made about our collective security."</li>
                        </ul>
                        <div className="bg-blue-50 p-4 my-6 border-l-4 border-blue-400">
                            <p className="italic">"We knew he was reckless, but this is geopolitical sabotage."</p>
                            <p className="text-right mt-2 font-medium">— Senior GOP senator, speaking off record</p>
                        </div>

                        <h2 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">Why Wasn't This Revealed Sooner?</h2>
                        <p className="mb-4">
                            According to the whistleblower who released the audio:
                        </p>
                        <div className="border-l-4 border-gray-800 pl-4 my-6 italic">
                            <p>"I waited because I feared retaliation. But now, with global alliances strained, people deserve to know what Trump really intended."</p>
                        </div>
                        <p className="mb-6">
                            The whistleblower claims they tried to contact journalists, intelligence committees, and watchdog groups, but no one responded. Possible reasons include fear of Trump's influence, fear of lawsuits, and the loyalty culture surrounding Trump's inner circle.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">Strategic Implications</h2>
                        <p className="mb-4 font-semibold">
                            If Trump had withdrawn from NATO:
                        </p>
                        <ul className="list-disc pl-8 mb-4 space-y-1">
                            <li>U.S. forces in Germany, Poland, and the Baltics would have likely been redeployed or isolated</li>
                            <li>Russia would have faced no collective military deterrent in Eastern Europe</li>
                            <li>China could have seen a fractured West as an opening to advance in Taiwan, the South China Sea, and Africa</li>
                            <li>Europe would have been forced to create a new military alliance without U.S. backing</li>
                        </ul>
                        <p className="font-semibold mb-6">
                            In short: The Western order could have collapsed—peacefully or violently.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">What Happens Now?</h2>
                        <p className="mb-4">
                            The Biden administration has not officially commented, but anonymous sources say:
                        </p>
                        <ul className="list-disc pl-8 mb-4 space-y-1">
                            <li>The authenticity of the recording is being reviewed</li>
                            <li>European allies are being reassured behind closed doors</li>
                            <li>Intelligence officials are concerned that Russia and China may have had knowledge of Trump's NATO stance in real time</li>
                        </ul>
                        <div className="bg-gray-100 p-4 my-6">
                            <p className="italic">"If Russia knew Trump was planning a NATO exit, it explains why they played the long game in Ukraine. They were waiting for his second term."</p>
                            <p className="text-right mt-2 font-medium">— Former CIA officer</p>
                        </div>

                        <h2 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">Final Thoughts</h2>
                        <p className="mb-4">
                            This leaked audio isn't just a political scandal. It's a glimpse into what could have been—and what might still happen.
                        </p>
                        <p className="mb-4">
                            Trump may run again. If he wins, the future of NATO could hang in the balance.
                        </p>
                        <p className="font-semibold mb-6">
                            And now we know: He wasn't bluffing. He was planning.
                        </p>

                        <div className="border-t border-gray-300 pt-8 text-center mt-12">
                            <p className="text-lg italic">End.</p>
                            <p className="mt-4 text-gray-600">
                                In international politics, words matter. But behind closed doors, words can destroy alliances before a single shot is fired.
                            </p>
                        </div>
                    </div>
                </main>


            </div>
        </>
    );
};

export default Nato;