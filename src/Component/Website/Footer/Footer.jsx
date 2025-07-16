import { Zap } from 'lucide-react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer backdrop-blur-lg border-t border-white/10 py-12">
            <div className="container mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl">
                        <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        AI Tools
                    </h4>
                </div>

                <p className="text-gray-400 mb-6 max-w-xl text-xl mx-auto">
                    Stay ahead of the curve with the latest AI tools, strategies, and insights.
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
    );
}

export default Footer;
