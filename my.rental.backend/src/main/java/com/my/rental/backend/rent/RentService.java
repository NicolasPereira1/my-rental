package com.my.rental.backend.rent;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RentService {
    private final ModelMapper mapper;
    private RentRepository rentRepository;

    public RentEntity createRent(RentDTO dto){
        RentEntity rent = mapper.map(dto, RentEntity.class);
        return rentRepository.save(rent);
    }
}
