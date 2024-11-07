package com.example.web_4;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PointRepository extends JpaRepository<Point, Long> {
    Optional<Point> getAllByHitNotNull();
}
