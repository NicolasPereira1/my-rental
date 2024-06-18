// import './AnimatedCar.css';
// import {useEffect, useState} from "react";
//
// export const AnimatedCar = () => {
//     const vehicles = [
//         { className:'animatedCar', name:'van1'},
//         { className:'animatedCar', name:'van2'},
//         { className:'animatedCar', name:'van3'},
//         { className:'animatedCar', name:'car1'},
//         { className:'animatedCar', name:'car2'},
//         { className:'animatedCar', name:'car3'},
//         { className:'animatedCar', name:'car1'},
//         { className:'animatedCar', name:'car2'},
//         { className:'animatedCar', name:'car3'},
//         { className:'animatedCar', name:'car1'},
//         { className:'animatedCar', name:'car2'},
//         { className:'animatedCar', name:'car3'},
//         { className:'animatedBus', name:'bus1'},
//         { className:'animatedBus', name:'bus2'}
//     ];
//     const randomIdx = () => Math.random()*(vehicles.length-1);
//     const [carIndex, setCarIndex] = useState(randomIdx());
//     useEffect(() => {
//         const interval = setInterval(() => {
//                 setCarIndex(prev =>{
//                     let idx;
//                     do {
//                         idx = randomIdx();
//                     } while (idx === prev);
//                     return idx;
//                 });
//             }, 70000);
//         return () => clearInterval(interval);
//     }, []);
//     const car = vehicles[Math.round(carIndex)];
//     return <img className={`animateVehicles ${car.className}`}
//                  src={`/cars/${car.name}.png`} alt={car.name}
//             />;
// }