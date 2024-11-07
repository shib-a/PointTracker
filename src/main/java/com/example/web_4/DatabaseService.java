package com.example.web_4;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DatabaseService {
    private final PointRepository pointRepository;

    @Autowired
    public DatabaseService(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }
    public List<Point> findAll(){
        return pointRepository.findAll();
    }
    Point save(Point point){
        return pointRepository.save(point);
    }
    void delete(Point point){
        pointRepository.delete(point);
    }
    void deleteAll(){
        pointRepository.deleteAll();
    }
}
