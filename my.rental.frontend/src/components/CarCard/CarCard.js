import './CarCard.css';
import {useState} from "react";
import {InfoButton} from "../InfoButton/InfoButton";
import {generateURL} from "../../hooks/UseQuery/UseQuery";
import {useTranslation} from "react-i18next";
import {CarDetail} from "../CarDetail/CarDetail";

export const CarCard = ({id, car, position= 'left'}) => {
    const {t} = useTranslation();
    const [expand, setExpand] = useState(false);
    const classes = `card ${position}Card ${ expand ? 'expand' : 'shrink'}`;
    const toggleExpansion = () => setExpand(prevState => !prevState);
    const URI = `car/image/${car.id}`;
    return (
            <div className={classes}>
                <div style={{height:'40%', float:position}}>
                    <img src={generateURL(URI)} alt={car.model}/>
                    <h3 className='cardTitle'>{car.model}</h3>
                    <p className='description'>{car.description}</p>
                    <InfoButton
                        text={t(expand ? 'card.hide' : 'card.show')}
                        expend={expand}
                        callback={toggleExpansion}
                        position={position}
                    />
                </div>
                <CarDetail
                    car={car}
                    position={position}
                    style={ expand ? {marginBottom: 0} : { opacity: 0, transition: 'opacity .2s ease-in' } }
                    close={()=>setExpand(false)}
                />
            </div>
    );
}
