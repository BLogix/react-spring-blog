package com.logix.demo.service;

import com.logix.demo.entity.Meats;
import com.logix.demo.entity.Sides;
import com.logix.demo.entity.Sizes;
import com.logix.demo.entity.Types;

import org.springframework.beans.factory.annotation.Service;

import java.util.List;

@Service
public interface FoodService {
    List<Meats> allMeats();
    List<Sides> allSides();
    List<Sizes> allSizes();
    List<Types> allTypes();
}
