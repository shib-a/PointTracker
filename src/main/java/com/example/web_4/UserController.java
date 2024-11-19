package com.example.web_4;

import com.example.web_4.entitiesAndDTOs.STATUS;
import com.example.web_4.entitiesAndDTOs.StatusObj;
import com.example.web_4.entitiesAndDTOs.User;
import com.example.web_4.entitiesAndDTOs.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserDatabaseService databaseService;

    @Autowired
    public UserController(UserDatabaseService userDatabaseService){this.databaseService=userDatabaseService;}


    @PostMapping("/register")
    public UserDTO register(@RequestBody UserDTO userDTO) {
        var user = UserClassConverter.toClass(userDTO);
        var fetchUserWithLogin = databaseService.findUserByUsername(user.getUsername());
        if (fetchUserWithLogin.isEmpty()) {
            databaseService.save(user);
            String token = JwtUtil.generateToken(user.getUsername());
            userDTO.setMessage(new StatusObj(STATUS.SUCCESS,token));
            return userDTO;
        } else {
            userDTO.setMessage(new StatusObj(STATUS.FAILED,"user already exists"));
            return userDTO;
        }
    }
    @PutMapping("/login")
    public UserDTO login(@RequestBody UserDTO userDTO) {
        var user = UserClassConverter.toClass(userDTO);
        var fetchedByName = databaseService.findUserByUsername(user.getUsername());
        System.out.println(userDTO.getUsername());
        if(fetchedByName.size()==1){
            String token = JwtUtil.generateToken(user.getUsername());
            userDTO.setMessage(new StatusObj(STATUS.SUCCESS,token));
            System.out.println(userDTO.getMessage().getMessage());
            return userDTO;
        }
        userDTO.setMessage(new StatusObj(STATUS.FAILED,"user not logged in"));
        System.out.println(userDTO.getMessage().getMessage());
        return userDTO;
    }
    @PutMapping("/logout")
    public void logout(@RequestBody User user) {

    }
}
