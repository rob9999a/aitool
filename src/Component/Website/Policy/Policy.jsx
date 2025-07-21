import React from 'react';
import { Helmet } from "react-helmet";
import Navbar from '../Header/Navbar';

const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Fyrexia AI</title>
                <meta
                    name="description"
                    content="Learn how Fyrexia AI collects, uses, and protects your personal information. Your privacy is our top priority."
                />
            </Helmet>

            <Navbar />

            <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-6 sm:px-12 md:px-24 lg:px-40">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
                    <h1 className="text-5xl font-extrabold text-indigo-700 mb-10 text-center">
                        Privacy Policy
                    </h1>

                    <section className="space-y-8 text-gray-700 leading-relaxed text-lg">
                        <p>
                            At <span className="font-semibold text-indigo-600">Fyrexia AI</span>, your privacy is our top priority. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
                        </p>

                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Information We Collect</h2>
                            <p>
                                We may collect personal information such as your name, email address, and any data you voluntarily provide through forms or newsletter sign-ups.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">How We Use Your Information</h2>
                            <p>
                                Your data helps us improve content, provide personalized services, and keep you updated. We never sell or share your data with third parties without your permission.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Cookies</h2>
                            <p>
                                We use cookies to enhance your browsing experience and gather anonymous analytics to improve our site.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Security</h2>
                            <p>
                                We use industry-standard security measures to safeguard your information from unauthorized access.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Your Rights</h2>
                            <p>
                                You can access, update, or delete your personal data anytime by contacting us.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Contact Us</h2>
                            <p>
                                If you have any questions or concerns, please reach out at{' '}
                                <a
                                    href="mailto:jirkovik@gmail.com"
                                    className="text-indigo-700 font-semibold underline hover:text-indigo-900"
                                >
                                    jirkovik@gmail.com
                                </a>.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
