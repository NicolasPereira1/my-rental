package com.my.rental.backend.car.exceptions;

public class CarNotFoundException extends Exception {
    public CarNotFoundException(String message){
        super(message);
    }
}
