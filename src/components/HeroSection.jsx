import { ChevronDown } from 'lucide-react';
const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-20 transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 flex items-center justify-center text-white text-4xl font-bold">
                        JD
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
                    <button className="bg-blue-600 dark:bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200 font-semibold">
                        Hire Me
                    </button>
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-colors duration-200 font-semibold"
                    >
                        View Projects
                    </button>
                </div>

                <div className="animate-bounce">
                    <ChevronDown
                        className="w-6 h-6 text-gray-400 dark:text-gray-500 mx-auto cursor-pointer transition-colors duration-200"
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;