package com.example.web_4;

import com.example.web_4.entitiesAndDTOs.Point;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PointController {
//    @Autowired
    private final PointDatabaseService pointDatabaseService;
    @Autowired
    public PointController(PointDatabaseService pointDatabaseService){
        this.pointDatabaseService = pointDatabaseService;
    }

    @GetMapping("/get")
    public List<Point> getPoints(){
        var all = pointDatabaseService.findAll();
        System.out.println(all);
        return all;
    }
    @PostMapping("/post")
    public Point save(@RequestBody Point point){
        point.setHit(AreaCheckService.validate(point.getX(),point.getY(),point.getR()));
        pointDatabaseService.save(point);
        return null;
    }
    @DeleteMapping("/clear")
    public void clear(){
        pointDatabaseService.deleteAll();
    }
}
