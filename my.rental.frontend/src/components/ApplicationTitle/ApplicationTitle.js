import './ApplicationTitle.css';
import {NavLink} from "react-router-dom";
import {useTheme} from "../../hooks/UseTheme/UseTheme";
import {useTranslation} from "react-i18next";

export const ApplicationTitle = () => {
    const {t} = useTranslation();
    const {theme} = useTheme();
    return (
        <span className='titleSpan' >
            {t('greetings')} <NavLink to='/' style={theme.title} className='title'>My-rental.com</NavLink>
        </span>
    );
}