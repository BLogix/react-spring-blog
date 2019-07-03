package com.logix.demo.service.impl;

import com.logix.demo.entity.Meats;
import com.logix.demo.entity.Sides;
import com.logix.demo.entity.Sizes;
import com.logix.demo.entity.Types;
import com.logix.demo.repository.MeatRepository;
import com.logix.demo.repository.SideRepository;
import com.logix.demo.repository.SizeRepository;
import com.logix.demo.repository.TypeRepository;
import com.logix.demo.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodServiceImpl implements FoodService {
    @Autowired
    private MeatRepository meatRepository;
    @Autowired
    private SideRepository sideRepository;
    @Autowired
    private SizeRepository sizeRepository;
    @Autowired
    private TypeRepository typeRepository;

    public List<Meats> allMeats (){
        return meatRepository.findAll();
    }

    public List<Sides> allSides() {
        return sideRepository.findAll();
    }

    public List<Sizes> allSizes(){
        return sizeRepository.findAll();
    }

    public List<Types> allTypes(){
        return typeRepository.findAll();
    }
}
