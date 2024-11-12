package com.example.web_4;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DatabaseService {
//    @Autowired
    public SseController sseController;
    private final PointRepository pointRepository;
    @Autowired
    public DatabaseService(PointRepository pointRepository, SseController sseController) {
        this.pointRepository = pointRepository;
        this.sseController=sseController;
    }
    @Transactional
    public List<Point> findAll(){
        return pointRepository.findAll();
    }
    @Transactional
    public Point save(Point point){
        var s = pointRepository.save(point);
        sseController.sendUpdate(true);
        return s;
    }
    void delete(Point point){
        pointRepository.delete(point);
    }
    void deleteAll(){
        pointRepository.deleteAll();
    }
}
