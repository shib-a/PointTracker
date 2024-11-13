package com.example.web_4;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {
    @PostMapping("/register")
    public void register(@RequestBody User user) {

    }
    @PutMapping("login")
    public void login(@RequestBody User user) {

    }
}
