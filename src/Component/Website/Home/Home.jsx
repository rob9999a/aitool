import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from "react-helmet";
import articlesWithHref from '../../../Data/Data';
import './Home.css'
import { useNavigate } from 'react-router-dom';
import { Flame, TrendingUp, DollarSign, Edit, Users, Calendar, Eye, Heart, ChevronRight, ChevronLeft } from 'lucide-react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Dadsense from '../../../Dadsense/Dadsense';

const Home = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('all');
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

    const sortedArticles = [...articlesWithHref].sort((a, b) => b.dateSort - a.dateSort);
    const filteredArticles = selectedCategory === 'all'
        ? sortedArticles
        : sortedArticles.filter(article => article.category === selectedCategory);

    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    const startIndex = (currentPage - 1) * articlesPerPage;
    const currentArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
        setCurrentPage(1);
    };


    const directLinks = [
        "https://www.profitableratecpm.com/ts9kq93ne?key=e5e1c90b28cf78fc9c41a80915c570b8",
        "https://www.profitableratecpm.com/uhazre74nz?key=9f55590e84e7ed6e96d725ceafcbdaed",
        "https://www.profitableratecpm.com/yiwuf7wnnc?key=dd81ef7fbf1436feddd26bc59d616562",
        "https://www.profitableratecpm.com/rtq2z7j24?key=20481a67c7fd38a88bff34ef651b4749"
    ];

    // دالة الضغط على المقال
    const handleArticleClick = (article) => {
        if (!article.href) return;

        // فتح إعلان عشوائي
        const randomLink = directLinks[Math.floor(Math.random() * directLinks.length)];
        window.open(randomLink, "_blank", "noopener,noreferrer,width=800,height=600");

        // الانتقال للمقال
        navigate(article.href);
    };

    useEffect(() => {
        const openAd = () => {
            const randomLink = directLinks[Math.floor(Math.random() * directLinks.length)];
            window.open(randomLink, "_blank", "noopener,noreferrer,width=800,height=600");
        };

        const handleFirstAction = () => {
            // يفتح الإعلان أول مرة
            openAd();

            // يعمل interval كل 25 ثانية
            const interval = setInterval(() => {
                openAd();
            }, 25000);

            // ينحي listener بعد أول تفاعل
            document.removeEventListener("click", handleFirstAction);
            document.removeEventListener("scroll", handleFirstAction);

            // ينحي interval وقت الخروج من الصفحة
            window.onbeforeunload = () => clearInterval(interval);
        };

        // يسمع لأول click أو scroll
        document.addEventListener("click", handleFirstAction);
        document.addEventListener("scroll", handleFirstAction);

        return () => {
            document.removeEventListener("click", handleFirstAction);
            document.removeEventListener("scroll", handleFirstAction);
        };
    }, []);


    return (
        <>
            <Helmet>
                <title>Fyrexia AI — Articles</title>
                <meta name="description" content="Fyrexia AI articles with ads." />
            </Helmet>

            <div className="my-section min-h-screen">
                <Navbar />

                {/* Hero Section */}
                <section id='template-home' className="py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-800 to-blue-600 mb-6 tracking-tight">
                        Fyrexia AI — Discover AI Tools That Transform Your Business
                    </h1>
                    <p className="text-xl text-gray-400 font-bold mb-8 max-w-4xl mx-auto">
                        Explore the latest articles on AI, business automation, content creation, and more.
                    </p>
                </section>

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
                                        className={`group relative p-6 rounded-xl border transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.id ? 'ct-bd text-xl' : 'ct-bds text-xl'}`}
                                    >
                                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-3`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="ct-text font-semibold text-sm mb-1">{category.name}</h4>
                                        <p className="text-description">{category.count} articles</p>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <Dadsense></Dadsense>


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

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentArticles.map((article) => (
                                <article
                                    key={article.id}
                                    className="group cursor-pointer"
                                    onClick={() => handleArticleClick(article)}
                                >
                                    <div className="div-card rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="p-6">
                                            <h4 className="title-card font-900 text-2xl mb-3">{article.title}</h4>
                                            <p className="text-gray-500 text-xl mb-4">{article.description}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pagination */}
                {totalPages > 1 && (
                    <section className="py-8">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`w-10 h-10 rounded-lg border transition flex items-center justify-center 
              ${currentPage === page
                                                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                                                : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
                                    >
                                        {page}
                                    </button>
                                ))}



                                <button
                                    onClick={() => handlePageChange(currentPage + 1 + selectedCategory)}
                                    disabled={currentPage === totalPages}
                                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>

                            </div>

                            <p className="text-center text-gray-500 mt-4">
                                Page {currentPage} of {totalPages}
                            </p>
                        </div>
                    </section>
                )}

                <Footer />
            </div>
        </>
    );
};

export default Home;
