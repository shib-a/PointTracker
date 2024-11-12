package com.example.web_4;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@RequestMapping("/api")
public class PointController {
//    @Autowired
    private final DatabaseService databaseService;
    @Autowired
    public PointController(DatabaseService databaseService){
        this.databaseService=databaseService;
    }

    @GetMapping("/get")
    public List<Point> getPoints(){
        var all = databaseService.findAll();
        System.out.println(all);
        return all;
    }
    @PostMapping("/post")
    public Point save(@RequestBody Point point){
        System.out.println("cock");
        point.setHit(AreaCheckService.validate(point.getX(),point.getY(),point.getR()));
        System.out.println(point.getHit());
        System.out.println(point.getX());
        System.out.println(point.getY());
        System.out.println(point.getR());
        databaseService.save(point);
        return null;
    }
}
