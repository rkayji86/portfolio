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
                            I'm a passionate full-stack developer with over 5 years of experience creating
                            digital solutions that make a difference. I specialize in modern web technologies
                            and love turning complex problems into simple, beautiful designs.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-200">
                            When I'm not coding, you'll find me exploring new technologies, contributing to
                            open-source projects, or mentoring aspiring developers. I believe in writing
                            clean, maintainable code and delivering projects that exceed expectations.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Experience</h3>
                                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">5+ Years</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Projects Completed</h3>
                                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">50+ Projects</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Happy Clients</h3>
                                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">30+ Clients</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Response Time</h3>
                                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">24 Hours</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:pl-12">
                        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg transition-colors duration-200">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-200">What I Do</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-4"></div>
                                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Full Stack Web Development</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-4"></div>
                                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-200">API Development & Integration</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-4"></div>
                                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Database Design & Optimization</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-4"></div>
                                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Performance Optimization</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-4"></div>
                                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Technical Consulting</span>
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