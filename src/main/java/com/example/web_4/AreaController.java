package com.example.web_4;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class AreaController {
    @PostMapping
    public Point validate(){
        return new Point();
    }
}
