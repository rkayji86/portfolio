import { ChevronDown } from 'lucide-react';
const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:liquid-bg-animated pt-20 transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:liquid-border dark:bg-gradient-to-r dark:from-blue-600 dark:to-indigo-700 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                        RK
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                        Rohit Kumar
                    </h1>
                    <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-200">
                        Full Stack Developer(React | Laravel | Node.js)
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto transition-colors duration-200">
                        I build scalable full-stack applications with Laravel, React, and Node.js. Passionate about clean code, problem-solving, and delivering business value.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button className="liquid-btn text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                        Hire Me
                    </button>
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="liquid-btn-secondary text-blue-400 dark:text-blue-300 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                        View Projects
                    </button>
                </div>

                <div className="animate-bounce">
                    <ChevronDown
                        className="w-6 h-6 text-gray-400 dark:text-gray-500 mx-auto cursor-pointer transition-colors duration-200 hover:text-blue-500 dark:hover:text-blue-400"
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;