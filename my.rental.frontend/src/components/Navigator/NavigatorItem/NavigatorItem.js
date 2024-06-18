import './NavigatorItem.css';
import {useState} from "react";
import {useTheme} from "../../../hooks/UseTheme/UseTheme";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";

export const NavigatorItem = ({route, translationKey, lastItem=false}) => {
    const {theme} = useTheme();
    const {t} = useTranslation();
    const classes = `item ${lastItem ? 'lastItem' : ''}`;
    const [isHover, setHover] = useState(false);
    const toggleHover = () => setHover(prevState => !prevState);
    return  <span className={classes}>
                <NavLink
                    to={route}
                    style={({isActive}) => (isActive || isHover) ? theme.title : {}}
                    onMouseOver={toggleHover} onMouseOut={toggleHover}>
                    {t(translationKey)}
                </NavLink>
            </span>;

}