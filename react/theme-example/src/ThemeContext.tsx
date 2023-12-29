import { createContext, useContext, useState } from "react";

type ThemeContextType = {
    darkmode: boolean;
    toggleDarkmode: () => void;
    backgroundColor: string;
    primaryColor: string;
    secondaryColor: string;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
    const theme = useContext(ThemeContext);
    if (!theme) throw new Error("useTheme must be used within a ThemeProvider");
    return theme;
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [darkmode, setDarkmode] = useState<boolean>(false);
    const toggleDarkmode = () => setDarkmode(!darkmode);
    const backgroundColor = darkmode ? "black" : "white";
    const primaryColor = darkmode ? "white" : "black";
    const secondaryColor = darkmode ? "gray" : "silver";
    return (
        <ThemeContext.Provider value={{ darkmode, toggleDarkmode, backgroundColor, primaryColor, secondaryColor }}>
            {children}
        </ThemeContext.Provider>
    )
}
