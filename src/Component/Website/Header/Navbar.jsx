import React, { useState } from 'react';
import { Helmet } from "react-helmet";

import { Flame, Zap, TrendingUp, DollarSign, Edit, Users, ChevronLeft, ChevronRight, Calendar, Eye, Heart, Menu, X } from 'lucide-react';
import './Navbar.css'


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/', icon: Zap },
        { name: 'Trending', href: '/trending', icon: TrendingUp },

    ];

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

                {/* Open Graph */}
                <meta property="og:title" content="Fyrexia AI — Revolutionize Your Business with Next-Gen AI Tools" />
                <meta
                    property="og:description"
                    content="Discover Fyrexia AI’s revolutionary AI tools designed to transform industries and fuel innovation."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://aitools-eosin.vercel.app/" />
                <meta property="og:image" content="https://aitools-eosin.vercel.app/og-image.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Fyrexia AI — Revolutionize Your Business with Next-Gen AI Tools" />
                <meta
                    name="twitter:description"
                    content="Unlock the power of Fyrexia AI's cutting-edge tools to automate, innovate, and skyrocket your business growth."
                />
                <meta name="twitter:image" content="https://aitools-eosin.vercel.app/og-image.png" />
            </Helmet>




            <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">

                        {/* Logo Section */}
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <a href='/' className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Fyrexia AI
                                </a>
                                <p className="text-gray-500 text-2sm hidden sm:block">Discover the future of productivity</p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="nav-links hidden lg:flex items-center space-x-2 your-class">
                            {navItems.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="nav-links flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium text-xl"
                                    >
                                        <IconComponent className="w-4 h-4" />
                                        {item.name}
                                    </a>
                                );
                            })}
                        </div>

                        {/* Hot Badge & Mobile Menu Button */}
                        <div className="flex items-center gap-4">


                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden border-t border-gray-200 py-4">
                            <div className="flex flex-col space-y-2">
                                {navItems.map((item) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                            {item.name}
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Mobile Hot Badge */}
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 rounded-full text-white font-medium mx-4">
                                    <Flame className="w-4 h-4" />
                                    Trending Tools
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav >
        </>
    );
}

export default Navbar;