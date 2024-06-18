import './PreviewPage.css';
import {CarCard} from "../../components/CarCard/CarCard";
import {useTheme} from "../../hooks/UseTheme/UseTheme";
import {useLoaderData} from "react-router-dom";
import {BookingForm} from "../../components/BookingForm/BookingForm";
import {FloatingArrow} from "../../components/FloatingArrow/FloatingArrow";
// import {AnimatedCar} from "../../components/AnimatedCar/AnimatedCar";
//import {useEffect, useState} from "react";

export const PreviewPage = () => {
    const {theme} = useTheme();
    const cars = useLoaderData().sort((carOne, carTwo) => carOne.id - carTwo.id);
    // const [carTwo, setCarTwo] = useState(false);
    // const [carThree, setCarThree] = useState(false);
    // const [carFour, setCarFour] = useState(false);
    // const [carFive, setCarFive] = useState(false);
    // useEffect(()=>{
    //     setTimeout(()=>setCarTwo(true), 4000);
    //     setTimeout(()=>setCarThree(true), 9000);
    //     setTimeout(()=>setCarFour(true), 13000);
    //     setTimeout(()=>setCarFive(true), 18000);
    // }, []);
    return (
        <div>
            <BookingForm/>
            <FloatingArrow/>
            <div className='previewContainer' style={theme.previewContainer}>
                {/*<AnimatedCar/>*/}
                {/*{carTwo && <AnimatedCar/>}*/}
                {/*{carThree && <AnimatedCar/>}*/}
                {/*{carFour && <AnimatedCar/>}*/}
                {/*{carFive && <AnimatedCar/>}*/}
                <h2 className='previewTitle' id='preview'>Vehicles preview :</h2>
                {
                    cars.map(car =>
                        <CarCard
                            key={car.id}
                            car={car}
                            position={car.id % 2 ? 'left' : 'right'}
                        />
                    )
                }
            </div>
        </div>
    );
}