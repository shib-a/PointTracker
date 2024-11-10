package com.example.web_4;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DatabaseService {
//    @Autowired
    private final PointRepository pointRepository;
    @Autowired
    public DatabaseService(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }
    @Transactional
    public List<Point> findAll(){
        return pointRepository.findAll();
    }
    @Transactional
    public Point save(Point point){
        return pointRepository.save(point);
    }
    void delete(Point point){
        pointRepository.delete(point);
    }
    void deleteAll(){
        pointRepository.deleteAll();
    }
}
