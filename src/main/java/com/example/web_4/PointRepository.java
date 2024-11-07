package com.example.web_4;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface PointRepository extends JpaRepository<Point, Long> {
}
