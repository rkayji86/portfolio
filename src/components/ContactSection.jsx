import { useState } from "react";
import { Mail, Linkedin, Star, Github } from "lucide-react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = () => {
        // Handle form submission here
        if (formData.name && formData.email && formData.message) {
            console.log('Form submitted:', formData);
            alert('Message sent! I\'ll get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        } else {
            alert('Please fill in all fields.');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Get In Touch</h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
                        Ready to start your project? Let's discuss how I can help bring your ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-200">Let's Connect</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-200">
                            I'm always interested in new opportunities and exciting projects.
                            Whether you need a complete web application or just want to discuss an idea,
                            I'd love to hear from you.
                        </p>

                        <div className="space-y-4">
                            <a
                                href="mailto:rohitkumar001888@gmail.com"
                                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                <Mail className="w-5 h-5 mr-4" />
                                rohitkumar001888@gmail.com
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mrrkayji/"
                                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="w-5 h-5 mr-4" />
                                LinkedIn Profile
                            </a>
                            <a
                                href="https://github.com/rkayji86"
                                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-5 h-5 mr-4" />
                                GitHub Profile
                            </a>
                            <a
                                href="https://fiverr.com/johndoe"
                                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Star className="w-5 h-5 mr-4" />
                                Fiverr Profile
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-blue-600 dark:bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200 font-semibold"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;