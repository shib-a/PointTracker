package com.example.web_4;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PointController {
//    @Autowired
    private final DatabaseService databaseService;
    @Autowired
    public PointController(DatabaseService databaseService){
        this.databaseService=databaseService;
    }

    @GetMapping("/points")
    public List<Point> getPoints(){
        var all = databaseService.findAll();
        System.out.println(all);
//        databaseService.save();
        return all;
    }
    @PostMapping("/points")
    public Point validate(@RequestBody Point point){
        System.out.println("cock");
        databaseService.save(point);
        return null;
    }
}
