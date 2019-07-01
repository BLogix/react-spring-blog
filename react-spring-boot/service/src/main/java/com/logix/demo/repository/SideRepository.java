package com.logix.demo.repository;

import com.logix.demo.entity.Sides;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SideRepository extends JpaRepository<Sides, String> {
}
