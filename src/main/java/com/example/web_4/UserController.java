package com.example.web_4;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserDatabaseService databaseService;

    @Autowired
    public UserController(UserDatabaseService userDatabaseService){this.databaseService=userDatabaseService;}
    @PostMapping("/register")
    public UserDTO register(@RequestBody UserDTO userDTO) {
        var user = UserClassConverter.toClass(userDTO);
        var fetchUserWithLogin = databaseService.findUserByUsername(user.getUsername());
        if (fetchUserWithLogin.isEmpty()) {
            var t = UserClassConverter.toDTO(databaseService.save(user));
            t.setMessage(new StatusObj(STATUS.SUCCESS,"registered"));
            return t;
        } else {
            userDTO.setMessage(new StatusObj(STATUS.FAILED,"user already exists"));
            return userDTO;
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
