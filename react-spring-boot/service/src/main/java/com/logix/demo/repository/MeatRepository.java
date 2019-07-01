package com.logix.demo.repository;

import com.logix.demo.entity.Meats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeatRepository extends JpaRepository<Meats, String> {
}
