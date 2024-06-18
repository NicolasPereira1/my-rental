import './InfoButton.css';
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";

export const InfoButton = ({text, expend = false, callback}) => {
    return (
        <span onClick={callback} className='infoSpan'>
            { text }
            { !expend ? <RiArrowRightSLine className='icon'/> : <RiArrowLeftSLine className='icon'/>}
        </span>)
        ;
}