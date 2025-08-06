import { Helmet } from "react-helmet";
import React, { useState } from 'react';
import Navbar from '../../Component/Website/Header/Navbar';

const JobAutomationReality = () => {
    const [showReality, setShowReality] = useState(false);

    const departments = [
        { name: 'Customer Service', automationLevel: 85, timeline: '2025 Q3' },
        { name: 'Data Entry', automationLevel: 95, timeline: '2025 Q1' },
        { name: 'Accounting', automationLevel: 75, timeline: '2025 Q4' },
        { name: 'HR Operations', automationLevel: 60, timeline: '2026 Q1' },
        { name: 'IT Support', automationLevel: 70, timeline: '2025 Q2' },
        { name: 'Sales Operations', automationLevel: 65, timeline: '2026 Q2' },
    ];

    const skillsAtRisk = [
        'Data Entry', 'Basic Accounting', 'Report Generation',
        'Scheduling', 'Inventory Management', 'Basic Customer Support'
    ];

    return (

        <>

            <Helmet>
                <title>What If the Future of Your Job Has Already Been Decided—But No One Told You?</title>
                <meta
                    name="description"
                    content="Explore how AI and silent automation are reshaping the future of work behind the scenes—and why your job may already be on the line without your knowledge."
                />
                <meta
                    name="keywords"
                    content="AI job loss, future of work, job automation, silent layoffs, automation strategy, AI displacement, workforce disruption"
                />
                <meta name="robots" content="index, follow" />
                <html lang="en" />

                {/* Open Graph for Facebook/LinkedIn */}
                <meta property="og:title" content="What If the Future of Your Job Has Already Been Decided—But No One Told You?" />
                <meta
                    property="og:description"
                    content="AI may have already determined the fate of your job — without you even realizing it. Learn how quiet automation is changing everything."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yourwebsite.com/ai-job-future" />
                <meta property="og:image" content="https://yourwebsite.com/images/ai-job-future.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="What If the Future of Your Job Has Already Been Decided—But No One Told You?" />
                <meta
                    name="twitter:description"
                    content="Discover how invisible automation may already be replacing your role — and what it means for the future of work."
                />
                <meta name="twitter:image" content="https://yourwebsite.com/images/ai-job-future.jpg" />
                <meta name="twitter:site" content="@yourhandle" />
            </Helmet>


            <Navbar>
            </Navbar>


            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4 sm:px-6 font-sans">
                <div className="div-template max-w-6xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            What if the future of your job has already been decided...
                            <span className="block mt-3 text-red-600">but no one told you?</span>
                        </h1>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Behind boardroom doors, companies may already know which roles will vanish,
                            which departments will shrink, and which human skills will soon be obsolete.
                        </p>
                    </header>

                    {/* Public Narrative */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border border-blue-100">
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-500 rounded-lg p-3 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-blue-800">The Public Narrative</h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8">
                            {['Innovation', 'Growth', 'Upskilling', 'Collaboration', 'Future', 'Progress'].map((term) => (
                                <div key={term} className="bg-blue-50 py-4 px-2 rounded-lg text-center border border-blue-200">
                                    <span className="font-bold text-blue-600">{term}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-50 rounded-xl p-5 mb-4 border border-blue-200">
                            <p className="text-blue-800 italic">
                                "Our greatest investment is in our people! We're embarking on an exciting transformation journey where everyone will have opportunities to grow and develop new skills."
                            </p>
                            <div className="mt-3 flex items-center text-blue-600 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                                <span>CEO at All-Hands Meeting</span>
                            </div>
                        </div>
                    </div>

                    {/* Hidden Reality */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border border-red-200 relative">
                        <div className="absolute top-5 -right-0 bg-red-600 text-white text-sm font-bold px-4 py-1 transform rotate-45">
                            CONFIDENTIAL
                        </div>

                        <div className="flex items-center mb-6">
                            <div className="bg-red-600 rounded-lg p-3 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-red-800">Boardroom Reality</h2>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-bold text-gray-800 mb-4 text-lg">Automation Targets by Department</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {departments.map((dept, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium text-gray-800">{dept.name}</span>
                                            <span className="text-red-600 font-bold">{dept.automationLevel}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div
                                                className="bg-red-600 h-2.5 rounded-full"
                                                style={{ width: `${dept.automationLevel}%` }}
                                            ></div>
                                        </div>
                                        <div className="mt-2 text-sm text-gray-600">
                                            Timeline: <span className="font-medium">{dept.timeline}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-bold text-gray-800 mb-3 text-lg">Skills Being Phased Out</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillsAtRisk.map((skill, index) => (
                                    <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                            <p className="text-red-800">
                                "Silent automation progresses while maintaining public innovation narrative.
                                Employee retraining focuses on skills with limited long-term value."
                            </p>
                            <div className="mt-2 flex items-center text-red-700 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Internal Strategy Document Excerpt</span>
                            </div>
                        </div>
                    </div>

                    {/* Employee Perspective */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border border-gray-300">
                        <div className="flex items-center mb-6">
                            <div className="bg-gray-800 rounded-lg p-3 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Employee Perspective</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                                <div className="flex items-start mb-3">
                                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mr-3" />
                                    <div>
                                        <h3 className="font-bold text-gray-800">Marketing Specialist</h3>
                                        <p className="text-sm text-gray-600">5 years at company</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">
                                    "I'm working harder than ever to 'upskill', but leadership avoids questions about role longevity.
                                    The innovation workshops feel like theater while our work is gradually being automated."
                                </p>
                            </div>

                            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                                <div className="flex items-start mb-3">
                                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mr-3" />
                                    <div>
                                        <h3 className="font-bold text-gray-800">Finance Analyst</h3>
                                        <p className="text-sm text-gray-600">3 years at company</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">
                                    "They keep talking about 'digital transformation' but won't clarify how it affects our team.
                                    I've noticed more tasks moving to automated systems with no explanation."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Visualization */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border border-purple-200">
                        <div className="flex items-center mb-6">
                            <div className="bg-purple-500 rounded-lg p-3 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-purple-800">Automation Timeline</h2>
                        </div>

                        <div className="relative pl-8 sm:pl-12 border-l-2 border-purple-300 ml-4">
                            <div className="mb-8 relative">
                                <div className="absolute -left-4 mt-1 bg-purple-500 border-2 border-white w-6 h-6 rounded-full"></div>
                                <div className="ml-6">
                                    <h3 className="font-bold text-gray-800">Current Phase</h3>
                                    <p className="text-gray-600 mb-2">Silent Implementation</p>
                                    <p className="text-gray-700">
                                        Automation tools being deployed without formal announcements.
                                        Employees receive minimal training on new systems.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 relative">
                                <div className="absolute -left-4 mt-1 bg-purple-300 border-2 border-white w-6 h-6 rounded-full"></div>
                                <div className="ml-6">
                                    <h3 className="font-bold text-gray-800">2025 Q1-Q2</h3>
                                    <p className="text-gray-600 mb-2">Workforce Optimization</p>
                                    <p className="text-gray-700">
                                        Natural attrition used to reduce headcount. Hiring freezes implemented in target departments.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 relative">
                                <div className="absolute -left-4 mt-1 bg-purple-300 border-2 border-white w-6 h-6 rounded-full"></div>
                                <div className="ml-6">
                                    <h3 className="font-bold text-gray-800">2025 Q3-Q4</h3>
                                    <p className="text-gray-600 mb-2">Restructuring Announcement</p>
                                    <p className="text-gray-700">
                                        Formal announcement of "efficiency initiatives". Voluntary separation packages offered.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-4 mt-1 bg-purple-300 border-2 border-white w-6 h-6 rounded-full"></div>
                                <div className="ml-6">
                                    <h3 className="font-bold text-gray-800">2026</h3>
                                    <p className="text-gray-600 mb-2">Full Transition</p>
                                    <p className="text-gray-700">
                                        Remaining roles transformed. Legacy positions eliminated. Focus shifts to AI management.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-lg p-8 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Protect Your Career Future</h2>
                        <p className="text-blue-100 max-w-2xl mx-auto mb-6">
                            Don't wait for the announcement. Develop skills that complement automation rather than compete with it.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                            {['AI Collaboration', 'Critical Thinking', 'Emotional Intelligence'].map((skill, index) => (
                                <div key={index} className="bg-white bg-opacity-20 p-3 rounded-lg">
                                    <span className="font-medium text-gray">{skill}</span>
                                </div>
                            ))}
                        </div>
                        <button className="mt-6 bg-white text-blue-700 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors">
                            Assess Your Automation Risk
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobAutomationReality;