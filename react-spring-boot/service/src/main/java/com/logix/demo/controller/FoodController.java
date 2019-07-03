package com.logix.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping('/rest')
public class FoodController {
    @Autowired
    private FoodService service;

    @CrossOrigin
    @GetMapping(value='/meats', produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Meats> getAllMeats(){
        
    }
}