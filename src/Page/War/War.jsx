import React from "react";
import "./War.css";
import { Helmet } from "react-helmet";

const Aiwars = () => {
    return (
        <div className="container-fluid">
            <Helmet>
                <title>Can AI Manipulate War Information?</title>
                <meta
                    name="description"
                    content="Explore how AI can manipulate war facts, with real examples and illustrations."
                />
                <meta name="keywords" content="AI, war, misinformation, propaganda, fake news" />
                <meta name="author" content="YourName" />
            </Helmet>

            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="magic-container bg-white text-dark">
                        <h1 className="magic-title">Can AI Manipulate War Information and Distort Facts?</h1>

                        <div className="magic-step">
                            <h2 className="magic-step-title">The Power of AI in Misinformation</h2>
                            <p className="magic-step-desc">
                                Yes, artificial intelligence can manipulate war information. AI can generate fake news, altered images, and deepfake videos that spread rapidly online.
                            </p>
                            <img
                                src="https://i.imgur.com/N7xYtWk.jpg"
                                alt="AI-generated war image"
                                className="magic-image"
                            />
                        </div>

                        <div className="magic-step">
                            <h2 className="magic-step-title">Example: The Ghost Fighter Hoax</h2>
                            <p className="magic-step-desc">
                                In 2024, a video of a so-called "ghost fighter" who allegedly destroyed enemy drones went viral. It was later proven to be a deepfake created using generative AI tools.
                            </p>
                            <img
                                src="https://i.imgur.com/4hLXlOa.jpg"
                                alt="Fake drone attack footage"
                                className="magic-image"
                            />
                        </div>

                        <div className="magic-step">
                            <h2 className="magic-step-title">The Risk of Belief</h2>
                            <p className="magic-step-desc">
                                Such AI-generated stories can influence public opinion, escalate conflicts, and confuse global audiences.
                            </p>
                            <img
                                src="https://i.imgur.com/oM9sK1V.jpg"
                                alt="Propaganda in war"
                                className="magic-image"
                            />
                        </div>

                        <div className="magic-step">
                            <h2 className="magic-step-title">How to Protect Truth</h2>
                            <p className="magic-step-desc">
                                Verifying sources, using trusted fact-checkers, and understanding how AI works are key to resisting misinformation.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aiwars;
