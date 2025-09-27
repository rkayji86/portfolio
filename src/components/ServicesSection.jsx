import { Code, Database, Smartphone, Globe, Zap, Shield } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Full Stack Development",
            description: "End-to-end web application development using modern technologies and best practices."
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "API Development",
            description: "RESTful API design and development with proper documentation and security measures."
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Responsive Design",
            description: "Mobile-first responsive designs that work seamlessly across all devices and screen sizes."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Web Optimization",
            description: "Performance optimization, SEO implementation, and speed improvements for better user experience."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Bug Fixing & Maintenance",
            description: "Quick bug fixes, feature updates, and ongoing maintenance for existing applications."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Security Audits",
            description: "Comprehensive security reviews and implementation of security best practices."
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
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
                        <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md dark:shadow-lg transition-all duration-200">
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