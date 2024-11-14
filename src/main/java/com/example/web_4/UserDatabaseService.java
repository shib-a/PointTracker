package com.example.web_4;

import com.example.web_4.entitiesAndDTOs.User;
import com.example.web_4.entitiesAndDTOs.UserDTO;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDatabaseService {
    private final PasswordEncoder encoder;
    private final UserRepository userRepository;
    @Autowired
    public UserDatabaseService(UserRepository userRepository, PasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.encoder=encoder;
    }
    @Transactional
    public User save(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        System.out.println(user.getUsername());
        System.out.println(user.getPassword());
        var s = userRepository.save(user);
        return s;
    }
    @Transactional
    public List<User> findAll(){
        var s = userRepository.findAll();
        return s;
    }
    @Transactional
    public List<User> findUserByUsername(String username){
        return userRepository.findAllByUsernameEquals(username);
    }
    @Transactional
    public User findUserByUsernameAndPassword(User user){
        return userRepository.findByUsernameEqualsAndPasswordEquals(user.getUsername(), encoder.encode(user.getPassword()));
    }
    @Transactional
    public User findByUsernameEqualsAndPasswordEquals(String username, String password){
        return userRepository.findByUsernameEqualsAndPasswordEquals(username, encoder.encode(password));
    }
}