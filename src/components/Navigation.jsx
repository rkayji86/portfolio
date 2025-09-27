import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Sun,Moon } from "lucide-react";

// const useTheme = () => {
//     const [isDarkMode, setIsDarkMode] = useState(false);
//     return {
//         isDarkMode,
//         toggleTheme: () => setIsDarkMode(!isDarkMode)
//     };
// }

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    const navItems = ['About', 'Skills', 'Projects', 'Services', 'Contact'];

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId.toLowerCase())?.scrollIntoView({
            behavior: 'smooth'
        });
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio</div>

                    <div className="flex items-center gap-4">
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        {/* Mobile Navigation Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                                <span className="block w-full h-0.5 bg-gray-600 dark:bg-gray-300"></span>
                                <span className="block w-full h-0.5 bg-gray-600 dark:bg-gray-300"></span>
                                <span className="block w-full h-0.5 bg-gray-600 dark:bg-gray-300"></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="block w-full text-left py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;