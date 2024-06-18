import './Navigator.css';
import {ThemeButton} from "../ThemeButton/ThemeButton";
import {useState} from "react";
import {useTheme} from "../../hooks/UseTheme/UseTheme";
import {LanguageSelector} from "../LangageSelector/LanguageSelector";
import {ApplicationTitle} from "../ApplicationTitle/ApplicationTitle";
import {NavigatorItem} from "./NavigatorItem/NavigatorItem";
import { HiMenu, HiOutlineX } from "react-icons/hi";

import {useWindowWidth} from "../../hooks/UseWindowWitdth/UseWindowWidth";
import {useDocumentClick} from "../../hooks/UseDocumentClick/UseDocumentClick";

export const Navigator = () => {
    const {theme} = useTheme();
    const windowWidth = useWindowWidth();
    const [showNav, setShowNav] = useState(false);
    const mobileDevice = windowWidth < 1200;
    const navRef = useDocumentClick(
        () => setShowNav(false),[mobileDevice, showNav]);
    const toggleNav = () => setShowNav(prevState => !prevState);
    return (
        <div ref={navRef} className='navigatorContainer' style={theme.navigatorContainer}>
            <div className='titleContainer'>
                <ApplicationTitle/>
                {
                    mobileDevice &&
                    ( showNav ?
                        <HiOutlineX className='navigatorIcon' onClick={toggleNav}/> :
                        <HiMenu className='navigatorIcon' onClick={toggleNav}/> )
                }
            </div>
            {
                (!mobileDevice || showNav) &&
                <nav className='navigator'>
                    <NavigatorItem route='/home' translationKey='navigator.home'/>
                    <NavigatorItem route='/vehicles' translationKey='navigator.vehicles'/>
                    <NavigatorItem route='/your-rental' translationKey='navigator.yourRental'/>
                    <NavigatorItem route='/account' translationKey='navigator.account' lastItem={true}/>
                    <div className='buttonContainer'>
                        <LanguageSelector/>
                        <ThemeButton/>
                    </div>
                </nav>
            }
        </div>
    );
}