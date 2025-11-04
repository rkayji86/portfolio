import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiTailwindcss,
  SiGit,
  SiMysql,
  SiNextdotjs,
  SiDocker,
  SiLaravel,
  SiPostgresql
} from 'react-icons/si';
const SkillsSection = () => {
    const skills = [
        { name: 'PHP', icon: <SiPhp className=" text-indigo-400" />, level: 80 },
        { name: 'Laravel', icon: <SiLaravel className=" text-red-600" />, level: 90 },
        { name: 'React', icon: <SiReact className=" text-sky-400" />, level: 85 },
        { name: 'Node.js(Express)', icon: <SiNodedotjs className=" text-green-500" />, level: 80 },
        { name: 'TailwindCSS', icon: <SiTailwindcss className=" text-teal-400" />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript className=" text-yellow-400" />, level: 85 },
        { name: 'NextJs', icon: <SiNextdotjs className="" />, level: 65 },
        { name: 'MySQL', icon: <SiMysql className=" text-blue-600" />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql className=" text-blue-900" />, level: 75 },
        { name: 'Docker', icon: <SiDocker className=" text-blue-500" />, level: 70 },
        { name: 'Git & GitHub', icon: <SiGit className=" text-red-500" />, level: 85 },
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-200">
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
                        <div key={index} className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md dark:shadow-lg dark:hover:shadow-xl transition-all duration-200 text-center border dark:border-gray-700 hover:dark:border-gray-600">
                            <div className="text-4xl mb-4 flex justify-center items-center">{skill.icon}</div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">{skill.name}</h3>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
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