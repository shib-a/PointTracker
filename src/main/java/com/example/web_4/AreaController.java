package com.example.web_4;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class AreaController {
    @GetMapping("/")
    public String welcome(){
        return "hello";
    }
    @PostMapping
    public Point validate(){
        return new Point();
    }
}
