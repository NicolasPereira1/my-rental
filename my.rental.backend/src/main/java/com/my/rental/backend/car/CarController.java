package com.my.rental.backend.car;

import com.my.rental.backend.car.exceptions.CarNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/car")
@AllArgsConstructor
public class CarController {
    private CarService carService;

    @PostMapping("")
    public CarEntity createCar(@RequestBody CarDTO car){
        return carService.createCar(car);
    }

    @GetMapping()
    public CarEntity getCar(@RequestParam("id") Long id ) throws CarNotFoundException {
        return carService.getCarById(id);
    }

    @GetMapping("/all")
    public List<CarEntity> getAllCars(){
        return carService.getAllCar();
    }

    @GetMapping("/image/{id}")
    public byte[] getCarImage(@PathVariable() Long id ) throws IOException {
        return carService.getCarImageById(id);
    }
}
