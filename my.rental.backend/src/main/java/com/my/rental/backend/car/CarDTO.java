package com.my.rental.backend.car;

import com.my.rental.backend.car.enums.FuelEnum;
import com.my.rental.backend.car.enums.TransmissionEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarDTO {
    private String model;
    private String description;
    private FuelEnum fuel;
    private double dayPrice;
    private double consumption;
    private TransmissionEnum transmission;
    private int seating;
    private boolean boot;
    private double acceleration;
}
