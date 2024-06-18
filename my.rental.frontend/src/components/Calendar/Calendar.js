import './Calendar.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {useState} from "react";
import {CalendarContent} from "./CalendarContent/CalendarContent";
import {useTranslation} from "react-i18next";
import {useTheme} from "../../hooks/UseTheme/UseTheme";

export const Calendar = ({state, focused}) => {
    const {t} = useTranslation();
    const {theme} = useTheme();
    const [currentTimestamp, setCurrentTimestamp] = useState(new Date().getTime());
    const currentDate = new Date(currentTimestamp);
    const months = t('calendar.months', { returnObjects: true });
    const currentMonth = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    const weekdays = t('calendar.weekdays', { returnObjects: true });
    const dayList = ''; //weekdays.map((weekday, key) => <div key={key+'weekday'}>{weekday}</div>);
    const arrowClicked = (value) => {
        currentDate.setMonth(currentDate.getMonth() + value);
        setCurrentTimestamp(currentDate.getTime());
    };
    const calendarStyle = focused ? {...theme.calendar, height: '450px'} : {...theme.calendar, height: '0px'};

    console.log(months);
    console.log(weekdays);

    return (
        <div className="calendarContainer">
            <div className="calendar" style={calendarStyle}>
                <div className="month">
                    <MdKeyboardArrowLeft className='arrow' onClick={() => arrowClicked(-1)}/>
                    <h3>{currentMonth}</h3>
                    <MdKeyboardArrowRight className='arrow' onClick={() => arrowClicked(1)}/>
                </div>
                <div className="weekdays">{dayList}</div>
                <hr/>
                <CalendarContent timestamp={currentTimestamp} state={state}/>
            </div>
        </div>
    );
}