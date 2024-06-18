import './FloatingArrow.css';
import { HiOutlineChevronDown } from "react-icons/hi";

export const FloatingArrow = () => {
    const handleClick = () => {
        const anchor = document.getElementById('preview').getBoundingClientRect();
        window.scrollTo(0, anchor.top - (150 - window.scrollY ) )
    }
    return <HiOutlineChevronDown className='floatingArrow' onClick={handleClick}/>;
}