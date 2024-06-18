import './CarDetail.css';
import {useTranslation} from "react-i18next";
import { LiaCoinsSolid } from "react-icons/lia";
import { TbManualGearbox, TbAutomaticGearbox, TbBatteryCharging } from "react-icons/tb";
import { MdOutlineAirlineSeatReclineNormal, MdLocalGasStation, MdElectricBolt, MdLuggage, MdNoLuggage, MdSpeed } from "react-icons/md";
import { DiCodrops } from "react-icons/di";
import {useTheme} from "../../hooks/UseTheme/UseTheme";
import {SubmitButton} from "../SubmitButton/SubmitButton";
import {HiOutlineX} from "react-icons/hi";

const DetailDiv = ({detailList}) =>
    <div className='detailDiv'>{
        detailList.map(
            (detail, idx) =>
                <div className='detailIconContainer' key={`detail${idx}`}>
                    <span>{detail.icon}</span>
                    <p>{detail.value}</p>
                </div>
        )
    }</div>;

export const CarDetail = ({car, position, style, close}) => {
    const {theme} = useTheme();
    const {t} = useTranslation();
    const mainDetails = [
        { icon: <MdSpeed/>, value: `${car.acceleration} ${t('card.seconds')}` },
        { icon: car.transmission === 'Manual' ? <TbManualGearbox/> :  <TbAutomaticGearbox/>, value: car.transmission },
        { icon: car.fuel === 'Electric' ? <MdElectricBolt/> : <MdLocalGasStation/>, value: car.fuel },
        { icon: <LiaCoinsSolid/>, value: car.dayPrice + ' €' }
    ];
    const secondaryDetails = [
        { icon: car.fuel === 'Electric' ? <TbBatteryCharging/> : <DiCodrops/>, value: `${car.consumption} ${car.fuel === 'Electric' ? 'kw/h' : 'L/100km'}`},
        { icon: <MdOutlineAirlineSeatReclineNormal/>, value: `${car.seating} ${t('card.seat')}` },
        { icon: car.boot ? <MdLuggage/> : <MdNoLuggage/>, value: car.boot ? t('card.luggage') : t('card.noLuggage')},
    ];
    return (
        <div className={`detailContainer ${position}CardDetail`} style={{...style, ...theme.carDetails}}>
            <h3 className='detailTitle'>{t('card.details')}</h3>
            <HiOutlineX className='closeCross' onClick={close}/>
            <hr />
            <DetailDiv detailList={mainDetails}/>
            <DetailDiv detailList={secondaryDetails}/>
            <SubmitButton
                text={t('card.book')+' !'}
                style={theme.carDetails.button}
            />
        </div>
    );
}