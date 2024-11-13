package com.example.web_4;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDatabaseService {
    private final UserRepository userRepository;
    @Autowired
    public UserDatabaseService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Transactional
    public User save(User user) {
        var s = userRepository.save(user);
        return s;
    }

}