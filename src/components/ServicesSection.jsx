import { Code, Database, Smartphone, Globe, Zap, Shield, MessageCircleCode, BugOff } from 'lucide-react';
import { SiFastapi } from 'react-icons/si';

const ServicesSection = () => {
    const services = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Full Stack Development",
            description: "End-to-end development of scalable, secure, and maintainable web applications using Laravel, PHP, React, and Node.js, following modern best practices."
        },
        {
            icon: <SiFastapi className="w-8 h-8" />,
            title: "API Development & Integration",
            description: "Custom RESTful API creation with Laravel or Node.js/Express, including secure authentication (Sanctum/JWT), well-documented endpoints, and smooth third-party service integrations."
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Authentication & Security",
            description: "Implementation of secure login systems, role-based access control, and data protection practices, ensuring applications meet industry standards for privacy and security."
        },
        {
            icon: <MessageCircleCode className="w-8 h-8" />,
            title: "Real-Time Applications",
            description: "Development of real-time features like chat systems, notifications, and live updates using Node.js, Express, and WebSockets, enhancing user engagement and experience."
        },
        {
            icon: <BugOff className="w-8 h-8" />,
            title: "Bug Fixing & Maintenance",
            description: "Quick resolution of bugs, errors, and performance bottlenecks, along with feature updates, security patches, and continuous monitoring. I provide ongoing maintenance to ensure your applications stay stable, efficient, and up-to-date with evolving technologies."
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Database Design & Management",
            description: "Structuring efficient and scalable database schemas, handling migrations, and optimizing queries for MySQL and PostgreSQL to ensure reliability and high performance."
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50 dark:bg-gradient-to-tr dark:from-black dark:to-gray-900 transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Services I Offer</h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
                        Comprehensive web development services to help your business grow online
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md dark:shadow-lg dark:hover:shadow-xl transition-all duration-200 border dark:border-gray-600 hover:dark:border-gray-500">
                            <div className="text-blue-600 dark:text-blue-400 mb-4 transition-colors duration-200">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;