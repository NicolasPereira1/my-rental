import './ThemeButton.css';
import {useTheme} from "../../hooks/UseTheme/UseTheme";
import {PiMoonFill, PiSunFill} from "react-icons/pi";


export const ThemeButton = () => {
    const { theme, switchTheme } = useTheme();
    return (
        <div className='themeButton' style={theme.themeButton} onClick={switchTheme}>
            { theme.name === 'dark' ? <PiMoonFill/> : <PiSunFill/> }
        </div>
    );
}