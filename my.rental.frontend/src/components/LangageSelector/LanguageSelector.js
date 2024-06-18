import './LanguageSelector.css';
import {useTranslation} from "react-i18next";
export const LanguageSelector = () => {
    const { i18n } = useTranslation();
    return (
        <img
            alt={i18n.language}
            title={i18n.language}
            src={`/flags/${i18n.language}.png`}
            className='flagImage'
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
        />
    );
}