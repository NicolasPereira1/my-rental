import './Input.css';
import { GrFormClose } from "react-icons/gr";
import {useRef, useState} from "react";
import {Calendar} from "../Calendar/Calendar";
import {useTranslation} from "react-i18next";
import {useDocumentClick} from "../../hooks/UseDocumentClick/UseDocumentClick";
const getFormattedValue = (type, language, value) => {
    switch (type) {
        case 'date':
            return value ?
                new Date(value).toLocaleDateString(
                    language,
                    { weekday:"long", month:"short", day:"numeric"}
                )
            : value;
        default:
            return value;
    }
}


export const Input = ({id, type, label, placeholder, icon}) => {
    const { i18n} = useTranslation();
    const input = useRef(null);
    const [value, setValue] = useState('');
    const [focused, setFocused] = useState(false);
    const focus = () => setFocused(true);
    const blur = () => setFocused(false);
    const resetValue = () => input.current.value = '';
    const handleChange = event => setValue(event.target.value);
    const handleClick = () => {
        const anchor = document.getElementById('booking').getBoundingClientRect();
        window.scrollTo(0, anchor.top - ( 120 - window.scrollY ) )
    }
    const calendarRef = useDocumentClick(blur, [focused]);
    return (
        <div className='input' ref={calendarRef}>
            <label htmlFor={id}>
                {label}
            </label>
            <div className='iconWrapper'>
                <span className='inputIcon fixLeft'>{icon}</span>
                <input
                    ref={input} id={id} type='text' placeholder={placeholder}
                    value={getFormattedValue(type, i18n.language, value)}
                    onChange={handleChange} onFocus={focus} onClick={handleClick}/>
                <GrFormClose className='inputIcon fixRight' onClick={resetValue} style={{cursor: 'pointer'}}/>
            </div>
            { type === 'date' && <Calendar state={[value, setValue]} focused={focused}/> }
        </div>);
}