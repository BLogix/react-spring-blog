package com.logix.demo.controller;

import com.logix.demo.entity.Meats;
import com.logix.demo.entity.Sides;
import com.logix.demo.entity.Sizes;
import com.logix.demo.entity.Types;
import com.logix.demo.service.FoodService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RestController
@RequestMapping("/foodService")
public class FoodController {
    @Autowired
    private FoodService service;

    @CrossOrigin
    @GetMapping(value="/meats", produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Meats> getAllMeats(){
        return service.allMeats();
    }

    @CrossOrigin
    @GetMapping(value="/sides", produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Sides> getAllSides(){
        return service.allSides();
    }

    @CrossOrigin
    @GetMapping(value="/sizes", produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Sizes> getAllSizes(){
        return service.allSizes();
    }

    @CrossOrigin
    @GetMapping(value="/types", produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Types> getAllTypes(){
        return service.allTypes();
    }
}