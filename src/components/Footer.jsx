const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-8 transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-400 dark:text-gray-500 transition-colors duration-200">
                    © {year} Rohit Kumar. All rights reserved. Built with React & TailwindCSS.
                </p>
            </div>
        </footer>
    );
}

export default Footer;