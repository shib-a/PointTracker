package com.example.web_4;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface PointRepository extends JpaRepository<Point, Long> {
}
