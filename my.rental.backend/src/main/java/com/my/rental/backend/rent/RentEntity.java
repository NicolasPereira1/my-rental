package com.my.rental.backend.rent;

import com.my.rental.backend.car.CarEntity;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RentEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "carId")
    private CarEntity car;
    private Date startDate;
    private Date endDate;
    @Nullable
    private Double rate;
    @Nullable
    private String comment;
}
