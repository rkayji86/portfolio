const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-200">
                            I'm a passionate Full Stack Developer with over 4.5 years of experience working with PHP, Laravel, React, and Node.js. Throughout my journey, I've developed and delivered projects like CRM systems, booking applications, and real-time full-stack solutions. My focus has always been on building scalable, secure, and high-performing applications that solve real-world problems and create measurable value for businesses.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-200">
                            Beyond coding, I enjoy exploring new technologies, contributing to open-source, and occasionally mentoring developers who are just starting their journey. I believe in writing clean, maintainable code and following best practices to deliver solutions that not only meet client expectations but also stand the test of time.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Experience</h3>
                                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">4.5+ Years</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Projects Completed</h3>
                                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">10+ Projects</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Happy Clients</h3>
                                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">Currently building portfolio clients</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Response Time</h3>
                                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">Within 24 Hours</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:pl-12">
                        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg transition-colors duration-200">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-200">What I Do</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <div className="w-4 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-4"></div>
                                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Full Stack Web Development - End-to-end web applications using React, Laravel, and Node.js.</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-4 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-4"></div>
                                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-200">API Development & Integration - Secure REST APIs and third-party integrations for scalable apps.</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-4 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-4"></div>
                                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Authentication & Security - User authentication, role management, and data protection with Laravel Sanctum & JWT.</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-4 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-4"></div>
                                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Database Design & Optimization - Scalable database structures with MySQL, MariaDB, and PostgreSQL.</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-4 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-4"></div>
                                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Bug Fixing & Maintenance - Quick fixes, feature updates, and long-term support for existing projects.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;