package com.example.web_4;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private UserDatabaseService databaseService;

    @Autowired
    public UserController(UserDatabaseService userDatabaseService){this.databaseService=userDatabaseService;}
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        var fetchUserWithLogin = databaseService.findUserByUsername(user.getUsername());
        if (fetchUserWithLogin.isEmpty()) {
            return databaseService.save(user);
        } else {
            return login(user);
        }
    }
    @PutMapping("/login")
    public User login(@RequestBody User user) {
        return databaseService.findUserByUsernameAndPassword(user);
    }
    @PutMapping("/logout")
    public void logout(@RequestBody User user) {

    }
}
