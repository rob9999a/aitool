import React, { useState } from 'react';
import Navbar from '../../Component/Website/Header/Navbar';

const Aimovie = () => {
    const [activeMovie, setActiveMovie] = useState('titanic');
    const [isGenerating, setIsGenerating] = useState(false);
    const [endingPrompt, setEndingPrompt] = useState('');
    const [customEnding, setCustomEnding] = useState('');

    const movies = {
        titanic: {
            title: "Titanic",
            originalEnding: "Jack dies in the freezing water after giving Rose the floating door.",
            aiEnding: "After surviving on a floating door with Rose, Jack is rescued by a passing submarine, only to discover he's been pulled into a steampunk future where he leads a revolution against machine overlords.",
            prompt: "Make Jack survive and become a time traveler"
        },
        starwars: {
            title: "Star Wars: The Empire Strikes Back",
            originalEnding: "Luke resists Vader's offer to join the Dark Side and escapes.",
            aiEnding: "Instead of resisting Vader's offer, Luke accepts — and the two destroy the Emperor together. Cut to the final shot: Luke's eyes glowing red.",
            prompt: "What if Luke joined the Dark Side?"
        },
        matrix: {
            title: "The Matrix",
            originalEnding: "Neo defeats Agent Smith and becomes 'The One' to free humanity.",
            aiEnding: "After defeating Agent Smith, Neo decides that humanity is too chaotic and becomes the new Architect, rebuilding the Matrix as a utopia... but at what cost?",
            prompt: "Neo becomes the system instead of freeing humanity"
        },
        inception: {
            title: "Inception",
            originalEnding: "Cobb returns to his children, uncertain if he's still dreaming.",
            aiEnding: "The top falls... then keeps spinning. The camera pans out, revealing Cobb hooked up to a machine. Everything — including his supposed 'real life' — was a layer within a corporate experiment.",
            prompt: "Reveal that everything was still a dream"
        }
    };

    const generateCustomEnding = () => {
        if (!endingPrompt.trim()) return;

        setIsGenerating(true);

        // Simulate AI generation delay
        setTimeout(() => {
            const movie = movies[activeMovie];
            const customEndings = [
                `In this AI-generated ending, ${movie.title} takes a surprising turn: ${endingPrompt}. The characters find themselves in a parallel universe where the rules of their world no longer apply.`,
                `Based on your prompt: "${endingPrompt}", here's an alternative ending: The story concludes with a twist no one saw coming - revealing that the entire narrative was actually a simulation created by future historians.`,
                `Your creative input has inspired this ending: ${endingPrompt}. The final scene shows the main characters discovering they're actually characters in a movie, breaking the fourth wall in a meta-commentary on storytelling itself.`,
                `AI-generated alternative ending: ${endingPrompt}. The film concludes with a musical number where all characters reconcile their differences through song, transitioning into a post-credits scene that sets up an unexpected sequel.`
            ];

            setCustomEnding(customEndings[Math.floor(Math.random() * customEndings.length)]);
            setIsGenerating(false);
        }, 2000);
    };

    return (

        <>

            <Helmet>
                <title>The Rise of AI Story Generators | Fyrexia</title>
                <meta
                    name="description"
                    content="Explore how AI story generators are revolutionizing storytelling, from crafting movie endings to empowering writers with dynamic narratives and creative tools."
                />
                <meta
                    name="keywords"
                    content="AI story generators, AI movie endings, generative storytelling, AI writers tools, creative AI"
                />
                <meta name="robots" content="index, follow" />
                <html lang="en" />

                {/* Open Graph */}
                <meta property="og:title" content="The Rise of AI Story Generators | Fyrexia" />
                <meta
                    property="og:description"
                    content="Dive into the world of AI-powered story generation—discover tools that craft narrative endings, assist writers, and shape the future of creative media."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://fyrexia.co.uk/ai-movie-endings" />
                <meta property="og:image" content="https://fyrexia.co.uk/images/ai-story-generators.jpg" />
                <meta property="og:site_name" content="Fyrexia" />
            </Helmet>

            <Navbar></Navbar>


            <div className="min-h-screen bg-gradient-to-b from-white-900 to-white text-white p-4 sm:p-6 md:p-8">
                {/* Cinematic Header */}
                <div className="div-template max-w-6xl mx-auto">
                    <header className="text-center mb-12 relative">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>

                        <div className="inline-block bg-blue-600 text-black-100 px-4 py-1 rounded-full text-sm font-medium mb-4 mt-8">
                            AI Storytelling Revolution
                        </div>
                        <h1 className='text-black font-bold'>
                            🎬 AI Writes Alternative Endings to Your Favorite Movies
                        </h1>

                        <p className="text-blue-600 max-w-2xl mx-auto text-lg">
                            And they're wilder than anything Hollywood ever imagined...
                        </p>

                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
                    </header>

                    {/* Movie Selection */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                            <span className="mr-2">🤖</span> The Rise of AI Story Generators
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-blue-300 mb-4 text-lg">
                                    Using AI models, fans input classic film plots and ask for rewritten endings with prompts like:
                                </p>

                                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Make it a happy ending",
                                            "What if the villain won?",
                                            "Add a sci-fi twist",
                                            "Rewrite from villain's perspective",
                                            "Combine with another franchise",
                                            "Set it in a different era"
                                        ].map((prompt, index) => (
                                            <div key={index} className="bg-gray-900 p-3 rounded-lg flex items-center">
                                                <div className="bg-yellow-500 w-2 h-2 rounded-full mr-3"></div>
                                                <span className="text-gray-300">{prompt}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
                                <h3 className="font-bold text-xl mb-4 flex items-center">
                                    <span className="mr-2">🍿</span> Choose a Movie to Rewrite
                                </h3>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {Object.keys(movies).map((movieKey) => (
                                        <button
                                            key={movieKey}
                                            onClick={() => {
                                                setActiveMovie(movieKey);
                                                setCustomEnding('');
                                            }}
                                            className={`py-3 px-4 rounded-lg text-center transition-all ${activeMovie === movieKey
                                                ? 'bg-yellow-600 text-white shadow-lg'
                                                : 'bg-gray-700 hover:bg-gray-600'
                                                }`}
                                        >
                                            {movies[movieKey].title}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex items-center text-gray-400 mb-2">
                                    <span className="mr-2">🎭</span>
                                    <span className="text-sm">Selected: {movies[activeMovie].title}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Movie Ending Showcase */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Original Ending */}
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-red-500 w-3 h-3 rounded-full mr-2"></div>
                                    <h2 className="text-xl font-bold">Original Ending</h2>
                                </div>

                                <div className="h-48 overflow-y-auto p-4 bg-gray-900 rounded-lg mb-4">
                                    <p className="text-gray-300 italic">{movies[activeMovie].originalEnding}</p>
                                </div>

                                <div className="bg-gray-900 rounded-lg p-4">
                                    <div className="flex justify-center mb-4">
                                        <div className="bg-gray-700 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-2xl">
                                            🎥
                                        </div>
                                    </div>
                                    <div className="text-center text-gray-400 text-sm">
                                        The ending we all know
                                    </div>
                                </div>
                            </div>

                            {/* AI Rewritten Ending */}
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-yellow-700 p-6 relative">
                                <div className="absolute top-4 right-4 bg-yellow-600 text-yellow-100 px-3 py-1 rounded-full text-xs">
                                    AI Generated
                                </div>

                                <div className="flex items-center mb-4">
                                    <div className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
                                    <h2 className="text-xl font-bold">AI Rewritten Ending</h2>
                                </div>

                                <div className="h-48 overflow-y-auto p-4 bg-gray-900 rounded-lg mb-4">
                                    <p className="text-gray-300">{movies[activeMovie].aiEnding}</p>
                                </div>

                                <div className="bg-gray-900 rounded-lg p-4">
                                    <div className="flex justify-center mb-4">
                                        <div className="bg-gradient-to-br from-yellow-600 to-orange-600 border-2 border-yellow-500 rounded-xl w-16 h-16 flex items-center justify-center text-2xl">
                                            🤖
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                                            Prompt: {movies[activeMovie].prompt}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Create Your Own Ending */}
                    <div className="mb-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="mr-2">✍️</span> Create Your Own AI Ending
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <div className="mb-6">
                                    <label className="block text-gray-300 mb-2">
                                        For: <span className="font-bold">{movies[activeMovie].title}</span>
                                    </label>

                                    <textarea
                                        value={endingPrompt}
                                        onChange={(e) => setEndingPrompt(e.target.value)}
                                        placeholder="Describe how you want to change the ending..."
                                        className="w-full h-32 bg-gray-900 text-white border border-gray-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    />
                                </div>

                                <button
                                    onClick={generateCustomEnding}
                                    disabled={isGenerating || !endingPrompt.trim()}
                                    className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-all ${isGenerating || !endingPrompt.trim()
                                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 shadow-lg hover:shadow-xl'
                                        }`}
                                >
                                    {isGenerating ? (
                                        <span className="flex items-center justify-center">
                                            <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-yellow-400 mr-2"></span>
                                            Generating your ending...
                                        </span>
                                    ) : (
                                        "Generate Custom Ending"
                                    )}
                                </button>
                            </div>

                            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                                <h3 className="font-bold text-lg mb-4 flex items-center">
                                    <span className="mr-2">✨</span> Your Custom AI Ending
                                </h3>

                                <div className="bg-gray-800 rounded-lg p-4 min-h-[150px]">
                                    {customEnding ? (
                                        <p className="text-gray-300 italic">{customEnding}</p>
                                    ) : (
                                        <div className="text-gray-500 h-full flex items-center justify-center text-center">
                                            {endingPrompt.trim()
                                                ? "Your AI-generated ending will appear here"
                                                : "Enter a prompt to generate your custom ending"}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-4 text-sm text-gray-500">
                                    <span className="flex items-center">
                                        <span className="mr-2">💡</span>
                                        AI models used: ChatGPT, Claude, Gemini
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tools Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="mr-2">🎭</span> Why People Love AI Rewrites
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <p className="text-blue-300 mb-6 text-lg">
                                    There's a strange thrill in seeing beloved stories broken open and rebuilt. AI enables:
                                </p>

                                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                                    <ul className="space-y-4">
                                        {[
                                            "Exploring fan theories at scale",
                                            "Creating mashups across franchises (Harry Potter x Marvel?)",
                                            "Injecting humor, horror, or romance into unexpected places",
                                            "Customizing endings based on mood or preference",
                                            "Reviving old characters in new contexts",
                                            "Experimenting with different genres for the same story"
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-yellow-500 mr-2">•</span>
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                                <h3 className="font-bold text-xl mb-4 flex items-center">
                                    <span className="mr-2">🛠️</span> Tools Behind the Madness
                                </h3>

                                <div className="space-y-4">
                                    {[
                                        {
                                            name: "ChatGPT (OpenAI)",
                                            description: "For nuanced, character-driven rewrites",
                                            icon: "💬"
                                        },
                                        {
                                            name: "Sudowrite",
                                            description: "For creative plot twists and stylistic diversity",
                                            icon: "✏️"
                                        },
                                        {
                                            name: "NovelAI",
                                            description: "For fantasy or anime-style rewrites",
                                            icon: "📖"
                                        },
                                        {
                                            name: "Runway ML",
                                            description: "For video-based edits and narration overlays",
                                            icon: "🎥"
                                        },
                                        {
                                            name: "Sora (Coming Soon)",
                                            description: "Text-to-video models for visual endings",
                                            icon: "🎬"
                                        }
                                    ].map((tool, index) => (
                                        <div key={index} className="flex items-start p-3 bg-gray-800 rounded-lg">
                                            <div className="text-2xl mr-4">{tool.icon}</div>
                                            <div>
                                                <h4 className="font-bold text-gray-200">{tool.name}</h4>
                                                <p className="text-gray-400 text-sm">{tool.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controversy Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl text-black font-bold mb-6 flex items-center">
                            <span className="mr-2 text-blue">⚠️</span> But Should We Rewrite Art?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-black-300 to-red-800/20 rounded-2xl border border-red-800/50 p-6">
                                <h3 className="font-bold text-2xl text-black mb-4 flex items-center">
                                    <span className="mr-2 text-2xl">👎</span> The Critics Say
                                </h3>
                                <p className="text-gray-300 text-xl mb-4">
                                    Some filmmakers argue that stories have meaning precisely because they end a certain way. AI rewrites undermine the author's vision.
                                </p>
                                <ul className="space-y-3  text-xl text-gray-400">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        "It disrespects the original creator's intent"
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        "Removes the emotional impact of the original ending"
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        "Could lead to copyright and ownership issues"
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        "Devalues the art of storytelling"
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-blue-900/30 to-green-800/20 rounded-2xl border border-green-800/50 p-6">
                                <h3 className="font-bold text-xl mb-4 flex items-center">
                                    <span className="mr-2">👍</span> The Supporters Say
                                </h3>
                                <p className="text-black-300 text-xl mb-4">
                                    Others see it as harmless fun — modern fan fiction supercharged by AI.
                                </p>
                                <ul className="space-y-3  text-xl text-gray-400">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        "It's just digital fan fiction - no harm done"
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        "Helps keep classic stories relevant to new generations"
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        "Encourages creativity and engagement with media"
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span className="italic">"If Shakespeare had GPT, Hamlet would've had a musical number by now."</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Final Thought */}
                    <div className="text-center py-12 border-t border-gray-800 relative">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-30"></div>

                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                                🔮 Final Thought: A New Kind of Entertainment
                            </h2>

                            <div className="text-lg text-gray-300 space-y-4">
                                <p>
                                    We've entered an era where stories aren't fixed. With a single prompt, fans can bend reality, reverse death, merge universes, and ask:
                                </p>

                                <p className="text-2xl font-bold text-yellow-400">
                                    What if?
                                </p>

                                <p>
                                    AI isn't just writing endings — it's giving everyone the power to become the writer.
                                </p>

                                <p className="text-xl italic">
                                    And when the audience becomes the author? The endings are only the beginning.
                                </p>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30"></div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Aimovie;