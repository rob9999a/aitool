import React from "react";
import "./Four.css";
import { Helmet } from "react-helmet";
import Navbar from "../../Component/Website/Header/Navbar";

const PhantomDrone = () => {


    const categories = [
        {
            image: 'https://i.postimg.cc/85dFqthQ/freepik-the-style-is-candid-image-photography-with-natural-98941.jpg',
        },
        {
            image: 'https://i.postimg.cc/1zWkHNCG/freepik-the-style-is-candid-image-photography-with-natural-98942.jpg',
        },
        {
            image: 'https://i.postimg.cc/tgzfgVG0/freepik-the-style-is-candid-image-photography-with-natural-98943.jpg',
        },
    ];


    return (
        <>
            <Navbar />

            <section id="template">

                <Helmet>
                    <title>The Phantom Drone: AI & War Deception</title>
                    <meta
                        name="description"
                        content="Discover how a viral AI-generated video changed global perception in war — a phantom drone that never existed."
                    />
                    <meta name="keywords" content="AI, war, deception, phantom drone, misinformation, deepfake, military AI, fake warfare" />
                    <meta name="author" content="YourName" />
                    <meta name="robots" content="index, follow" />
                    <html lang="en" />

                    {/* Open Graph for social media */}
                    <meta property="og:title" content="The Phantom Drone: AI & War Deception" />
                    <meta
                        property="og:description"
                        content="A deepfake drone, a viral video, and a world misled. Explore how AI reshaped public opinion in modern conflict."
                    />
                    <meta property="og:type" content="article" />
                    <meta property="og:url" content="https://yourwebsite.com/phantom-drone-ai" />
                    <meta property="og:image" content="https://yourwebsite.com/images/phantom-drone-cover.jpg" />

                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="The Phantom Drone: AI & War Deception" />
                    <meta
                        name="twitter:description"
                        content="A fake drone fooled the world — and it was built by AI. See how digital deception is shaping modern warfare."
                    />
                    <meta name="twitter:image" content="https://yourwebsite.com/images/phantom-drone-cover.jpg" />
                    <meta name="twitter:site" content="@yourhandle" />
                </Helmet>


                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="div-cards">
                                <h1 className="title-cards">🛰️ The Phantom Drone: How AI Can Rewrite the Battlefield</h1>
                                <p className="contenu-cards">In the modern age of warfare, the enemy is no longer armed solely with missiles — but with algorithms.
                                    Drones no longer just threaten cities — now, fake information can be deadlier than actual explosives.
                                    And that’s where the most dangerous weapon in history emerges: The Phantom Drone.</p>
                            </div>

                            <div className="div-cards">
                                <h1 className="title-cards">⚠️ The New Reality:</h1>
                                <p className="contenu-cards">In early 2024, a video began circulating on Twitter and Telegram showing a drone strike on a military convoy somewhere in the Middle East.
                                    The sound was high-quality.
                                    The smoke, the screams, even the thermal camera overlay — everything seemed real.
                                    So real that major news outlets broadcast it live without hesitation.</p>
                            </div>

                            <div className="div-cards">
                                <h1 className="title-cards">But the shocking twist?</h1>
                                <p className="contenu-cards">The video was 100% AI-generated.
                                    Created using tools like RunwayML for animation and ElevenLabs for synthetic narration.
                                    There was no drone.
                                    No convoy.
                                    Nothing happened.
                                    Yet the damage was done:
                                    Political decisions were made.
                                    Angry tweets spread.
                                    Hashtags trended globally — all based on a lie.</p>
                            </div>

                            <div className="div-cards">
                                <h1 className="title-cards">🧠 The New Warzone: Your Mind
                                </h1>
                                <p className="contenu-cards">The wars of tomorrow won’t be fought with tanks — but with emotional deception.
                                    The enemy doesn’t need to invade your land — just your belief system.
                                    One fake video, and reality bends.</p>



                            </div>


                            <div className="div-cards">
                                <h1 className="title-cards">🎭 How Did AI Fool the World?
                                </h1>
                                <p className="contenu-cards">The video was 100% AI-generated.
                                    📽️ Deepfake Footage: The explosion was generated using GANs (Generative Adversarial Networks) trained on real military videos</p>
                                <p className="contenu-cards">🎙️ Synthetic Voice: The voice of a known military general was cloned using ElevenLabs, adding believability.</p>
                                <p className="contenu-cards">📰 Tactical Viral Spread: The clip was dropped into Telegram and Reddit war channels during a peak moment of tension, ensuring rapid viral spread.</p>



                            </div>


                            <div className="div-cards">
                                <h1 className="title-cards">💣 Why the Phantom Drone Is Dangerous
                                </h1>
                                <p className="contenu-cards">It creates an alternate reality inside your mind.
                                </p>
                                <p className="contenu-cards">It leads to real-world decisions based on falsehoods.
                                </p>
                                <p className="contenu-cards">A European intelligence official later admitted that the video led to an increase in military readiness levels.

                                </p>

                                <p className="contenu-cards">It sparks collective panic
                                </p>

                                <p className="contenu-cards">Just like the "Iron Dome Deepfake Crisis" of 2023 that triggered mass protests in U.S. cities based on AI-manipulated footage.

                                </p>


                            </div>


                            <div className="div-cards">

                                <h1 className="title-cardss text-center">Artificial Intelligence doesn’t pull the trigger —
                                    but it can guide your finger to it.</h1>

                            </div>
                        </div>

                        <div className="container py-5">
                            <div className="row g-4">
                                {categories.map((cat, index) => (
                                    <div className="col-md-4" key={index}>
                                        <div className="category-box">
                                            <img src={cat.image} alt={cat.title} className="img-fluid rounded" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>




            </section>

        </>
    );
};

export default PhantomDrone;
