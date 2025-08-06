import { Zap } from 'lucide-react';
import { Helmet } from "react-helmet";

import './Footer.css';

function Footer() {
    return (

        <>
            <Helmet>
                <title>Fyrexia AI — Revolutionize Your Business with Next-Gen AI Tools</title>
                <meta
                    name="description"
                    content="Unlock the power of Fyrexia AI's cutting-edge tools to automate, innovate, and skyrocket your business growth."
                />
                <meta
                    name="keywords"
                    content="Fyrexia AI, AI tools, artificial intelligence, business automation, AI innovation"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Fyrexia AI" />

                {/* Open Graph */}
                <meta property="og:title" content="Fyrexia AI — Revolutionize Your Business with Next-Gen AI Tools" />
                <meta
                    property="og:description"
                    content="Discover Fyrexia AI’s revolutionary AI tools designed to transform industries and fuel innovation."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fyrexia.co.uk/" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Fyrexia AI — Revolutionize Your Business with Next-Gen AI Tools" />
                <meta
                    name="twitter:description"
                    content="Unlock the power of Fyrexia AI's cutting-edge tools to automate, innovate, and skyrocket your business growth."
                />
            </Helmet>




            <footer className="footer backdrop-blur-lg border-t border-white/10 py-12">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Fyrexia AI
                        </h4>
                    </div>

                    <p className="text-gray-400 mb-6 max-w-xl text-xl mx-auto">
                        Stay ahead of the curve with the latest Fyrexia AI, strategies, and insights.
                        Join thousands of entrepreneurs and creators who trust our curated content.
                    </p>

                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
                        <a
                            href="/privacy-policy"
                            className="text-xl transition-colors duration-200 hover:text-white hover:underline"
                        >
                            Privacy Policy
                        </a>
                        <span>•</span>
                        <a
                            href="/terms-service"
                            className="text-xl transition-colors duration-200 hover:text-white hover:underline"
                        >
                            Terms of Service
                        </a>
                        <span>•</span>
                        <a
                            href="/contact"
                            className="text-xl transition-colors duration-200 hover:text-white hover:underline"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
