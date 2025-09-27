import { Github, ExternalLink } from 'lucide-react';
const ProjectSection = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured e-commerce platform with user authentication, payment integration, and admin dashboard.",
            tech: ["React", "Laravel", "MySQL", "Stripe API"],
            github: "https://github.com/username/project1",
            live: "https://project1.com",
            image: "🛒"
        },
        {
            title: "Task Management App",
            description: "Collaborative task management application with real-time updates and team collaboration features.",
            tech: ["Node.js", "React", "PostgreSQL", "Socket.io"],
            github: "https://github.com/username/project2",
            live: "https://project2.com",
            image: "📋"
        },
        {
            title: "Restaurant Booking System",
            description: "Online reservation system for restaurants with table management and customer notifications.",
            tech: ["Laravel", "Vue.js", "MySQL", "Twilio API"],
            github: "https://github.com/username/project3",
            live: "https://project3.com",
            image: "🍽️"
        },
        {
            title: "Real Estate Portal",
            description: "Property listing platform with advanced search filters, map integration, and user profiles.",
            tech: ["React", "Node.js", "MongoDB", "Mapbox API"],
            github: "https://github.com/username/project4",
            live: "https://project4.com",
            image: "🏠"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
                        Here are some of my recent projects that showcase my skills and expertise
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg dark:shadow-xl transition-all duration-200">
                            <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center text-6xl">
                                {project.image}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm transition-colors duration-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        Code
                                    </a>
                                    <a
                                        href={project.live}
                                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default ProjectSection;