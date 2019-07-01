package com.logix.demo.service;

import com.logix.demo.entity.Meats;
import com.logix.demo.entity.Sides;
import com.logix.demo.entity.Sizes;
import com.logix.demo.entity.Types;

import java.util.List;

public interface FoodService {
    List<Meats> allMeats();
    List<Sides> allSides();
    List<Sizes> allSizes();
    List<Types> allTypes();
}
