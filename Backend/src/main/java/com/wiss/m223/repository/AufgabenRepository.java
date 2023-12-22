package com.wiss.m223.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.wiss.m223.model.Aufgaben;

@Repository
public interface AufgabenRepository extends JpaRepository<Aufgaben, Long> {
    List<Aufgaben> findByUsername(String username);
    List<Aufgaben> findByStatus(String status);
}
