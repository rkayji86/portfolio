import { useState } from "react";
import { Mail, Linkedin, Star, Github, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { sendContactForm } from "../utils/api";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState({
        type: '', // 'success', 'error', or ''
        message: '',
        visible: false
    });

    const showFeedback = (type, message) => {
        setFeedback({ type, message, visible: true });
        // Auto-hide after 5 seconds for success, longer for errors
        setTimeout(() => {
            setFeedback(prev => ({ ...prev, visible: false }));
        }, type === 'success' ? 5000 : 8000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Reset previous feedback
        setFeedback({ type: '', message: '', visible: false });
        
        // Validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            showFeedback('error', 'Please fill in all fields before submitting.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFeedback('error', 'Please enter a valid email address.');
            return;
        }

        try {
            setLoading(true);
            const result = await sendContactForm(formData);
            // Success feedback
            showFeedback('success', result.message || "Thanks for reaching out! I'll get back to you within 24 hours.");
            
            // Clear form on success
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            // Error feedback with actionable information
            const errorMessage = error.message || 
                "Unable to send your message right now. Please try again or contact me directly via email.";
            showFeedback('error', errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        
        // Clear feedback when user starts typing again
        if (feedback.visible) {
            setFeedback(prev => ({ ...prev, visible: false }));
        }
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Feedback Toast */}
                {feedback.visible && (
                    <div className={`fixed top-4 right-4 z-50 max-w-md p-4 rounded-lg shadow-lg transform transition-all duration-300 ${
                        feedback.type === 'success' 
                            ? 'bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700' 
                            : 'bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700'
                    }`}>
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                {feedback.type === 'success' ? (
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 text-red-400" />
                                )}
                            </div>
                            <div className="ml-3">
                                <p className={`text-sm font-medium ${
                                    feedback.type === 'success' 
                                        ? 'text-green-800 dark:text-green-200' 
                                        : 'text-red-800 dark:text-red-200'
                                }`}>
                                    {feedback.type === 'success' ? 'Message Sent!' : 'Error'}
                                </p>
                                <p className={`mt-1 text-sm ${
                                    feedback.type === 'success' 
                                        ? 'text-green-700 dark:text-green-300' 
                                        : 'text-red-700 dark:text-red-300'
                                }`}>
                                    {feedback.message}
                                </p>
                            </div>
                            <button
                                onClick={() => setFeedback(prev => ({ ...prev, visible: false }))}
                                className={`ml-auto pl-3 ${
                                    feedback.type === 'success' 
                                        ? 'text-green-400 hover:text-green-500' 
                                        : 'text-red-400 hover:text-red-500'
                                }`}
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}

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
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={loading}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={loading}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    disabled={loading}
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 dark:bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {loading ? (
                                    <>
                                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                                        Sending Message...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;