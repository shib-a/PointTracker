package com.example.web_4;

import com.example.web_4.entitiesAndDTOs.Point;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PointDatabaseService {
//    @Autowired
    private final PointRepository pointRepository;
    @Autowired
    public PointDatabaseService(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }
    @Transactional
    public List<Point> findAll(){
        return pointRepository.findAll();
    }
    @Transactional
    public Point save(Point point){
        var s = pointRepository.save(point);
        return s;
    }
    void delete(Point point){
        pointRepository.delete(point);
    }
    @Transactional
    public void deleteAll(){
        pointRepository.deleteAll();
    }
}
