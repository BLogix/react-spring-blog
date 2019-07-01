package com.logix.demo.repository;

import com.logix.demo.entity.Types;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeRepository extends JpaRepository<Types, String> {
}
