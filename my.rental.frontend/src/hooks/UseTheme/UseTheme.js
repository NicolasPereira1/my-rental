import {createContext, useContext, useMemo, useState} from "react";
import {lightMode} from "./LightMode";
import {darkMode} from "./DarkMode";

export const ThemeContext = createContext(null);
export const useTheme = () => useContext(ThemeContext);

const ContextProvider = ({children}) => {
    const lightTheme = useMemo(() => lightMode, []);
    const darkTheme = useMemo(() => darkMode, []);
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(systemDark ? darkTheme : lightTheme);
    const switchTheme = ()=> setTheme(
        prevState => prevState === lightTheme ? darkTheme : lightTheme
    );
    return (
        <ThemeContext.Provider value={{theme, switchTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ContextProvider;