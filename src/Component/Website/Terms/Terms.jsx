import React from 'react';
import Navbar from '../Header/Navbar';

const TermsOfService = () => {
    return (


        <>




            <Navbar></Navbar>

            <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-6 sm:px-12 md:px-24 lg:px-40">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
                    <h1 className="text-5xl font-extrabold text-indigo-700 mb-10 text-center">
                        Terms of Service
                    </h1>

                    <section className="space-y-8 text-gray-700 leading-relaxed text-lg">
                        <p>
                            Welcome to Fyrexia AI! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
                        </p>

                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
                                Use of Our Service
                            </h2>
                            <p>
                                You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
                                Intellectual Property
                            </h2>
                            <p>
                                All content, trademarks, and data on this website, including software, databases, text, graphics, and logos, are owned or licensed by AI Tools Hub and protected by intellectual property laws.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
                                User Conduct
                            </h2>
                            <p>
                                You agree not to misuse the website or interfere with its normal operation, including unauthorized access or use of data.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
                                Limitation of Liability
                            </h2>
                            <p>
                                AI Tools Hub shall not be liable for any damages arising from the use or inability to use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
                                Changes to Terms
                            </h2>
                            <p>
                                We reserve the right to modify these terms at any time. Continued use of the service after changes indicates acceptance.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
                                Contact Us
                            </h2>
                            <p>
                                For any questions regarding these Terms of Service, please contact us at{' '}
                                <a
                                    href="mailto:support@aitoolshub.com"
                                    className="text-indigo-700 font-semibold underline hover:text-indigo-900"
                                >
                                    jirkovik@gmail.com
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default TermsOfService;
