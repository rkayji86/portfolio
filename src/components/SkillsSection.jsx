const SkillsSection = () => {
    const skills = [
        { name: 'React', icon: '⚛️', level: 95 },
        { name: 'Laravel', icon: '🔶', level: 90 },
        { name: 'Node.js', icon: '🟢', level: 88 },
        { name: 'PHP', icon: '🐘', level: 92 },
        { name: 'MySQL', icon: '🗄️', level: 85 },
        { name: 'PostgreSQL', icon: '🐘', level: 80 },
        { name: 'TailwindCSS', icon: '🎨', level: 90 },
        { name: 'JavaScript', icon: '📜', level: 93 }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Skills & Technologies</h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
                        Here are the technologies I work with to bring your ideas to life
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md dark:shadow-lg transition-all duration-200 text-center">
                            <div className="text-4xl mb-4">{skill.icon}</div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">{skill.name}</h3>
                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                                <div
                                    className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">{skill.level}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default SkillsSection;