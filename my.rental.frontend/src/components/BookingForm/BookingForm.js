import './BookingForm.css';
import {useTranslation} from "react-i18next";
import {useWindowWidth} from "../../hooks/UseWindowWitdth/UseWindowWidth";
import {Input} from "../Input/Input";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiCurrentLocation } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";
import {SubmitButton} from "../SubmitButton/SubmitButton";

export const BookingForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(Object.entries(event.target).map(el => el[1].value));
    }
    const {t} = useTranslation();
    const windowWidth = useWindowWidth();
    const backgroundSource = `/wallpapers/new-york${ windowWidth <= 660 ? '-mobile' : ''}.jpg`;
    return (
        <div>
            <img
                className='bookingFormBackground'
                src={backgroundSource}
                alt='New York City Wallpaper'
            />
            <form onSubmit={handleSubmit} className='bookingForm' autoComplete='off'>
                <h2 className='bookingTitle' id='booking'>{t('bookingForm.title')}</h2>
                <div className='inputContainer'>
                    <div className='box'>
                        <Input id='pickup' type='text'
                               label={t('bookingForm.pickUp')}
                               placeholder={t('bookingForm.placeholder1')}
                               icon={<BiCurrentLocation/>}
                        />
                        <Input id='return' type='text'
                               label={t('bookingForm.return')}
                               placeholder={t('bookingForm.placeholder2')}
                               icon={<BiCurrentLocation/>}
                        />
                    </div>
                    <div className='box'>
                        <Input id='start' type='date'
                               label={t('bookingForm.pickUpDate')}
                               placeholder={t('bookingForm.placeholder3')}
                               icon={<LuCalendarDays/>}
                        />
                        <Input id='end' type='date'
                               label={t('bookingForm.returnDate')}
                               placeholder={t('bookingForm.placeholder4')}
                               icon={<LuCalendarDays/>}
                        />
                    </div>
                    <div className='box'>
                        <SubmitButton
                            text={t('bookingForm.search')}
                            icon={<FaMagnifyingGlass className='submitButtonIcon'/>}
                            style={{color:'#fff', backgroundColor: 'rgb(255,155,7)'}}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}