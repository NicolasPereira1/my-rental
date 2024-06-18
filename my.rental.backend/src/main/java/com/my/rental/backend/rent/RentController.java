package com.my.rental.backend.rent;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/rent")
@AllArgsConstructor
public class RentController {
    private RentService rentService;

    @PostMapping("")
    public RentEntity createRent(@RequestBody RentDTO dto) {
        return rentService.createRent(dto);
    }
}
