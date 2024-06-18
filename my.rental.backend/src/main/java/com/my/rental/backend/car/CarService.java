package com.my.rental.backend.car;

import com.my.rental.backend.car.exceptions.CarNotFoundException;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CarService {
    private final ModelMapper mapper;
    private final CarRepository carRepository;

    public CarEntity createCar(CarDTO dto) {
        CarEntity car = mapper.map(dto, CarEntity.class);
        return carRepository.save(car);
    }

    public CarEntity getCarById(Long id) throws CarNotFoundException {
        Optional<CarEntity> car = carRepository.findById(id);
        if(car.isEmpty())
            throw new CarNotFoundException(String.format("Unable to found this car id : %d", id));
        return car.get();
    }

    public CarEntity deleteCarById(Long id) throws CarNotFoundException {
        CarEntity car = getCarById(id);
        carRepository.delete(car);
        return car;
    }

    public List<CarEntity> getAllCar() {
        return carRepository.findAll();
    }

    public byte[] getCarImageById(Long id) throws IOException {
        String path = String.format("cars/vignette/%d.png", id);
        InputStream in = getClass().getClassLoader().getResourceAsStream(path);
        assert in != null;
        return in.readAllBytes();
    }
}
