import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from "react-helmet";
import articlesWithHref from '../../../Data/Data';
import './Home.css'
import { useNavigate } from 'react-router-dom';
import { Flame, Zap, TrendingUp, DollarSign, Edit, Users, ChevronLeft, ChevronRight, Calendar, Eye, Heart, Shield, X } from 'lucide-react';
import Header from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import SocialBar from '../../../Socialbar/Socialbar';

// ===== مكونات نظام الإعلانات =====

// كاشف AdBlock
const AdBlockDetector = ({ onAdBlockDetected }) => {
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        const detectAdBlock = () => {
            const testAd = document.createElement('div');
            testAd.innerHTML = '&nbsp;';
            testAd.className = 'adsbox';
            testAd.style.position = 'absolute';
            testAd.style.left = '-10000px';
            document.body.appendChild(testAd);

            setTimeout(() => {
                const isBlocked = testAd.offsetHeight === 0;
                document.body.removeChild(testAd);

                if (isBlocked) {
                    setShowWarning(true);
                    onAdBlockDetected && onAdBlockDetected(true);
                }
            }, 100);
        };

        detectAdBlock();
    }, [onAdBlockDetected]);

    return showWarning ? (
        <div className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center relative">
                <button
                    onClick={() => setShowWarning(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                        <Shield className="w-8 h-8 text-red-500" />
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">AdBlock Detected</h3>
                <p className="text-gray-600 mb-6">
                    Please disable your ad blocker to support our free content and keep Fyrexia AI running.
                </p>

                <div className="space-y-3">
                    <button
                        onClick={() => window.location.reload()}
                        className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                    >
                        Reload Page
                    </button>
                    <button
                        onClick={() => setShowWarning(false)}
                        className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200"
                    >
                        Continue Anyway
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

// إعلان البانر العلوي
const TopBannerAd = ({ show }) => {
    const adRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (show && adRef.current && !isLoaded) {
            const script = document.createElement('script');
            script.async = true;
            script.setAttribute('data-cfasync', 'false');
            script.src = '//pl27448508.profitableratecpm.com/c39b3bd3eab4b0b5a5910cf7fc622ee2/invoke.js';

            script.onload = () => setIsLoaded(true);
            script.onerror = () => console.log('Top banner ad failed to load');

            document.head.appendChild(script);
        }
    }, [show, isLoaded]);

    if (!show) return null;

    return (
        <div className="ad-container my-8">
            <div className="text-center">
                <span className="text-xs text-gray-400 mb-2 block">Advertisement</span>
                <div
                    ref={adRef}
                    id="container-c39b3bd3eab4b0b5a5910cf7fc622ee2"
                    className="mx-auto max-w-4xl min-h-[90px] bg-gray-50/10 rounded-lg border border-gray-200/20 flex items-center justify-center"
                >
                    {!isLoaded && (
                        <div className="text-gray-400 text-sm">Loading advertisement...</div>
                    )}
                </div>
            </div>
        </div>
    );
};

// إعلان وسط المحتوى
const InContentAd = ({ show, position = "middle" }) => {
    const adRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (show && adRef.current && !isLoaded) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//pl27467223.profitableratecpm.com/d6/5c/01/d65c01c5970c1ebe052b2207b76b2cda.js';

            script.onload = () => setIsLoaded(true);
            script.onerror = () => console.log('In-content ad failed to load');

            adRef.current.appendChild(script);
        }
    }, [show, isLoaded]);

    if (!show) return null;

    return (
        <div className="ad-container my-12">
            <div className="text-center">
                <span className="text-xs text-gray-400 mb-2 block">Advertisement</span>
                <div
                    ref={adRef}
                    className="mx-auto max-w-2xl min-h-[200px] bg-gray-50/10 rounded-lg border border-gray-200/20 flex items-center justify-center"
                >
                    {!isLoaded && (
                        <div className="text-gray-400 text-sm">Loading advertisement...</div>
                    )}
                </div>
            </div>
        </div>
    );
};

// ===== المكون الرئيسي المحدث =====

const Home = () => {
    const containerRef = useRef(null);
    const [clickCount, setClickCount] = useState(0);
    const [lastClickTime, setLastClickTime] = useState(0);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showInterstitialAd, setShowInterstitialAd] = useState(false);
    const [adClickCount, setAdClickCount] = useState(0);
    const [lastAdTime, setLastAdTime] = useState(0);
    const [adBlockDetected, setAdBlockDetected] = useState(false);
    const articlesPerPage = 6;

    const categories = [
        { id: 'all', name: 'All Articles', icon: Flame, color: 'from-red-500 to-orange-500', count: 60 },
        { id: 'business', name: 'Business AI', icon: TrendingUp, color: 'from-blue-500 to-cyan-500', count: 50 },
        { id: 'money', name: 'Make Money', icon: DollarSign, color: 'from-green-500 to-emerald-500', count: 12 },
        { id: 'content', name: 'Content Creation', icon: Edit, color: 'from-purple-500 to-pink-500', count: 12 },
        { id: 'freelance', name: 'Freelancing', icon: Users, color: 'from-indigo-500 to-blue-500', count: 18 },
        { id: 'news', name: 'News', icon: Users, color: 'from-indigo-500 to-blue-500', count: 20 },
    ];

    // تتبع الضغطات الذكي
    const handleSmartClick = () => {
        const now = Date.now();
        const timeDiff = now - lastClickTime;

        if (timeDiff < 2000) { // أقل من ثانيتين
            setClickCount(prev => prev + 1);
        } else {
            setClickCount(1);
        }

        setLastClickTime(now);
    };

    // ترتيب وفلترة المقالات
    const sortedArticles = [...articlesWithHref].sort((a, b) => b.dateSort - a.dateSort);
    const filteredArticles = selectedCategory === 'all'
        ? sortedArticles
        : sortedArticles.filter(article => article.category === selectedCategory);

    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    const startIndex = (currentPage - 1) * articlesPerPage;
    const currentArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

    const handlePageChange = (page) => {
        handleSmartClick();
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCategoryChange = (categoryId) => {
        handleSmartClick();
        setSelectedCategory(categoryId);
        setCurrentPage(1);
    };

    const handleArticleClick = (article) => {
        handleSmartClick();
        const now = Date.now();

        // منطق ذكي لعرض الإعلانات
        const shouldShowAd = () => {
            if (adBlockDetected) return false;

            const timeSinceLastAd = now - lastAdTime;
            const minTimeBetweenAds = 120000; // دقيقتان

            if (timeSinceLastAd < minTimeBetweenAds) return false;

            const probability = Math.min(0.15 + (adClickCount * 0.03), 0.3);
            return Math.random() < probability;
        };

        if (shouldShowAd()) {
            setShowInterstitialAd(true);
            setLastAdTime(now);
            setAdClickCount(prev => prev + 1);

            setTimeout(() => {
                setShowInterstitialAd(false);
                if (article.href) {
                    navigate(article.href);
                }
            }, 3000);
        } else {
            if (article.href) {
                navigate(article.href);
            }
        }
    };

    // إعلان Interstitial محسن
    const InterstitialAd = () => (
        <div className="interstitial-ad-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="interstitial-ad-content" style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '24px',
                maxWidth: '500px',
                width: '90%',
                maxHeight: '80vh',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}>
                <div className="ad-header" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                    paddingBottom: '12px',
                    borderBottom: '1px solid #eee'
                }}>
                    <h3 style={{ margin: 0, color: '#333', fontSize: '18px' }}>Advertisement</h3>
                    <div className="countdown" style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }}>3</div>
                </div>
                <div className="ad-body">
                    <div
                        ref={(el) => {
                            if (el && !el.hasChildNodes()) {
                                const script = document.createElement("script");
                                script.type = "text/javascript";
                                script.src = "//pl27467223.profitableratecpm.com/d6/5c/01/d65c01c5970c1ebe052b2207b76b2cda.js";
                                el.appendChild(script);
                            }
                        }}
                        style={{
                            width: '100%',
                            height: '320px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '12px',
                            border: '1px solid #dee2e6'
                        }}
                    />
                </div>
                <button
                    className="skip-ad-btn"
                    onClick={() => setShowInterstitialAd(false)}
                    style={{
                        marginTop: '16px',
                        width: '100%',
                        padding: '14px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                    }}
                >
                    Skip Ad (3s)
                </button>
            </div>
        </div>
    );

    return (
        <>
            <Helmet>
                <title>Fyrexia AI — Revolutionize Your Business with Next-Gen AI Tools in 2025</title>
                <meta name="description" content="Unlock the power of Fyrexia AI's cutting-edge tools to automate, innovate, and skyrocket your business growth in 2025 and beyond." />
                <meta name="keywords" content="Fyrexia AI, next-generation AI tools, business automation, AI innovation, AI strategies 2025, smart AI solutions" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Fyrexia AI" />
                <meta property="og:title" content="Fyrexia AI — Revolutionize Your Business with Next-Gen AI Tools in 2025" />
                <meta property="og:description" content="Discover Fyrexia AI's revolutionary AI tools designed to transform industries, automate workflows, and fuel innovation." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fyrexia.co.uk/" />
                <meta property="og:image" content="https://fyrexia.co.uk/og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Fyrexia AI — Revolutionize Your Business with Next-Gen AI Tools in 2025" />
                <meta name="twitter:description" content="Unlock the power of Fyrexia AI's cutting-edge tools to automate, innovate, and skyrocket your business growth." />
                <meta name="twitter:image" content="https://fyrexia.co.uk/og-image.png" />
            </Helmet>

            {/* كاشف AdBlock */}
            <AdBlockDetector onAdBlockDetected={setAdBlockDetected} />

            {/* إعلان Interstitial */}
            {showInterstitialAd && <InterstitialAd />}

            <div className="my-section min-h-screen">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-4 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
                    <div className="absolute top-1/3 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-700"></div>
                    <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10">
                    <Navbar />

                    {/* Hero Section */}
                    <section id='template-home' className="py-16">
                        <div className="container mx-auto px-4 text-center">
                            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-800 to-blue-600 mb-6 tracking-tight">
                                Fyrexia AI — Discover AI Tools That Transform Your Business
                            </h1>
                            <p className="text-xl text-gray-400 font-bold mb-8 max-w-4xl mx-auto">
                                At <span className="text-blue-600 font-extrabold">Fyrexia AI</span>, discover the hottest AI tools and strategies in 2025, from automation to content creation, reshaping industries worldwide.
                            </p>
                        </div>
                    </section>

                    <SocialBar />

                    {/* إعلان البانر العلوي */}
                    <TopBannerAd show={!adBlockDetected} />

                    {/* Hot Categories */}
                    <section className="py-8">
                        <div className="container mx-auto px-4">
                            <h3 className="text-2xl mb-6 flex items-center gap-2">
                                <Flame className="w-8 h-8" />
                                Hot Categories
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {categories.map((category) => {
                                    const IconComponent = category.icon;
                                    return (
                                        <button
                                            key={category.id}
                                            onClick={() => handleCategoryChange(category.id)}
                                            className={`group relative p-6 rounded-xl border transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.id
                                                ? 'ct-bd text-xl'
                                                : 'ct-bds text-xl'
                                                }`}
                                        >
                                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-3`}>
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <h4 className="ct-text font-semibold text-sm mb-1">{category.name}</h4>
                                            <p className="text-description">{category.count} articles</p>
                                            {selectedCategory === category.id && (
                                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl animate-pulse"></div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    <SocialBar></SocialBar>

                    {/* Articles Grid */}
                    <section className="py-12">
                        <div className="container mx-auto px-12">
                            <div className="flex items-center justify-between mb-10">
                                <h3 className="text-2xl font-bold text-gray">
                                    {selectedCategory === 'all'
                                        ? 'Latest Articles (Sorted by Date)'
                                        : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
                                </h3>
                                <div className="text-gray-400">
                                    Showing {startIndex + 1}-{Math.min(startIndex + articlesPerPage, filteredArticles.length)} of {filteredArticles.length} articles
                                </div>
                            </div>

                            {/* النصف الأول من المقالات */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {currentArticles.slice(0, Math.ceil(currentArticles.length / 2)).map((article) => (
                                    <article
                                        key={article.id}
                                        className="group cursor-pointer"
                                        onClick={() => handleArticleClick(article)}
                                    >
                                        <div className="div-card rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                                            <div className="relative">
                                                <img
                                                    src={article.image}
                                                    alt={article.title}
                                                    className="image-ct w-full h-15 object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                                {article.isHot && (
                                                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-1 animate-pulse">
                                                        <Flame className="w-3 h-3" />
                                                        Hot
                                                    </div>
                                                )}
                                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg text-white text-xs">
                                                    {article.readTime}
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className={`px-2 py-1 rounded-lg text-xs font-medium bg-gradient-to-r ${categories.find(c => c.id === article.category)?.color} text-white`}>
                                                        {categories.find(c => c.id === article.category)?.name}
                                                    </span>
                                                    <span className="text-gray-400 text-xs flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {article.date}
                                                    </span>
                                                </div>

                                                <h4 className="title-card font-900 text-2xl mb-3 transition-colors">
                                                    {article.title}
                                                </h4>

                                                <p className="text-gray-500 text-xl mb-4">
                                                    {article.description}
                                                </p>

                                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                                    <div className="flex items-center gap-4 text-xs text-gray-400">
                                                        <span className="flex items-center gap-1">
                                                            <Eye className="w-3 h-3" />
                                                            {article.views}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Heart className="w-3 h-3" />
                                                            {article.likes}
                                                        </span>
                                                    </div>
                                                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                        Read More
                                                        <ChevronRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* إعلان وسط المحتوى */}
                            <InContentAd show={!adBlockDetected && currentArticles.length > 3} />

                            {/* النصف الثاني من المقالات */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {currentArticles.slice(Math.ceil(currentArticles.length / 2)).map((article) => (
                                    <article
                                        key={article.id}
                                        className="group cursor-pointer"
                                        onClick={() => handleArticleClick(article)}
                                    >
                                        <div className="div-card rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                                            <div className="relative">
                                                <img
                                                    src={article.image}
                                                    alt={article.title}
                                                    className="image-ct w-full h-15 object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                                {article.isHot && (
                                                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-1 animate-pulse">
                                                        <Flame className="w-3 h-3" />
                                                        Hot
                                                    </div>
                                                )}
                                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg text-white text-xs">
                                                    {article.readTime}
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className={`px-2 py-1 rounded-lg text-xs font-medium bg-gradient-to-r ${categories.find(c => c.id === article.category)?.color} text-white`}>
                                                        {categories.find(c => c.id === article.category)?.name}
                                                    </span>
                                                    <span className="text-gray-400 text-xs flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {article.date}
                                                    </span>
                                                </div>

                                                <h4 className="title-card font-900 text-2xl mb-3 transition-colors">
                                                    {article.title}
                                                </h4>

                                                <p className="text-gray-500 text-xl mb-4">
                                                    {article.description}
                                                </p>

                                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                                    <div className="flex items-center gap-4 text-xs text-gray-400">
                                                        <span className="flex items-center gap-1">
                                                            <Eye className="w-3 h-3" />
                                                            {article.views}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Heart className="w-3 h-3" />
                                                            {article.likes}
                                                        </span>
                                                    </div>
                                                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                        Read More
                                                        <ChevronRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <section className="py-12 text-center">
                            <div className="container text-center mx-auto px-4">
                                <div className="flex items-center justify-center gap-4">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="p-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>

                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`w-10 h-10 rounded-lg border transition-all ${currentPage === page
                                                ? 'bg-gradient-to-r from-cyan-800 to-purple-500 border-transparent text-white shadow-lg'
                                                : ' text-xl text-gray bg-gray/2 border-red/20 hover:bg-gray/20'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="p-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>

                                <p className="text-center text-gray-400 mt-4">
                                    Page {currentPage} of {totalPages}
                                </p>
                            </div>
                        </section>
                    )}

                    <Footer />
                </div>
            </div>

            {/* CSS إضافي للإعلانات */}
            <style jsx>{`
                .ad-container {
                    transition: all 0.3s ease;
                }
                
                .ad-container:hover {
                    transform: translateY(-2px);
                }
                
                /* تحسين عرض الإعلانات */
                .ad-container > div {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                }
                
                /* تحسين الاستجابة على الموبايل */
                @media (max-width: 768px) {
                    .ad-container {
                        margin: 1rem 0;
                    }
                    
                    .interstitial-ad-content {
                        width: 95% !important;
                        padding: 16px !important;
                    }
                }
                
                /* تأثير التحميل للإعلانات */
                .ad-container > div > div:last-child {
                    animation: shimmer 2s infinite;
                }
                
                @keyframes shimmer {
                    0% { opacity: 0.6; }
                    50% { opacity: 0.8; }
                    100% { opacity: 0.6; }
                }
            `}</style>
        </>
    );
};

export default Home;