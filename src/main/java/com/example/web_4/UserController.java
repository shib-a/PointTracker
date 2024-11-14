package com.example.web_4;

import com.example.web_4.entitiesAndDTOs.STATUS;
import com.example.web_4.entitiesAndDTOs.StatusObj;
import com.example.web_4.entitiesAndDTOs.User;
import com.example.web_4.entitiesAndDTOs.UserDTO;
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
    public UserDTO login(@RequestBody UserDTO userDTO) {
        var user = UserClassConverter.toClass(userDTO);
        var fetchedByName = databaseService.findUserByUsername(user.getUsername());
        if(fetchedByName.size()==1){
            var  t = UserClassConverter.toDTO(databaseService.findByUsernameEqualsAndPasswordEquals(user.getUsername(),user.getPassword()));
            t.setMessage(new StatusObj(STATUS.SUCCESS,"logged in"));
            System.out.println(t.getMessage().getMessage());
            return t;
        }
        var t = UserClassConverter.toDTO(user);
        t.setMessage(new StatusObj(STATUS.FAILED,"user not logged in"));
        System.out.println(t.getMessage().getMessage());
        return t;
    }
    @PutMapping("/logout")
    public void logout(@RequestBody User user) {

    }
}
