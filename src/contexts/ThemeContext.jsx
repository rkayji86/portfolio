import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

export const ThemeProvider = ({ children }) => {
    // This function runs ONLY ONCE, on initial component mount.
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }

        // If no theme is saved, check the user's OS preference.
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // This effect runs whenever the `isDarkMode` state changes.
    useEffect(() => {
        const root = window.document.documentElement;
        const newTheme = isDarkMode ? 'dark' : 'light';

        // 1. Clean up previous theme classes
        root.classList.remove('dark', 'light');

        // 2. Add the new theme class
        root.classList.add(newTheme);

        // 3. Force color-scheme CSS property
        root.style.colorScheme = newTheme;

        // 3. Update localStorage with the new theme
        localStorage.setItem('theme', newTheme);
    }, [isDarkMode]);
    
    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };


    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};