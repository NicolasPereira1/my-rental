import './CalendarContent.css';
import {useEffect} from "react";

export const CalendarContent = ({timestamp, state})=> {
    const [selected, setSelected] = state;
    useEffect( () => setSelected(new Date().getTime()), [setSelected]);
    const date = new Date(timestamp);
    date.setDate(1);
    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;
    const days = [];

    for (let x = date.getDay(); x > 0; x--) {
        const dayNumber = prevLastDay - x + 1;
        days.push(<div className="prev-date" key={dayNumber + 'prevDay'}>{dayNumber}</div>);
    }

    for (let i = 1; i <= lastDay; i++) {
        let currentDate = new Date(date.getFullYear(), date.getMonth(), i);
        const selectedDate = new Date(selected);
        const isSelected = (selectedDate.getFullYear() === currentDate.getFullYear()
            && selectedDate.getMonth() === currentDate.getMonth()
            && selectedDate.getDate() === currentDate.getDate());
        days.push(
            <div
                key={i + 'day'}
                onClick={() => setSelected(currentDate.getTime())}
                className={isSelected ? 'selected' : ''}>
                {i}
            </div>
        );
    }

    for (let j = 1; j <= nextDays; j++)
        days.push(<div className="next-date" key={j + 'nextDay'}>{j}</div>);
    return (
        <div className="days">
            {days.map(day => day)}
        </div>
    );
}