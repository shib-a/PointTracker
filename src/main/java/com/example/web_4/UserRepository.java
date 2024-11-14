package com.example.web_4;

import com.example.web_4.entitiesAndDTOs.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    public List<User> findAllByUsernameEquals(String username);
    public User findByUsernameEqualsAndPasswordEquals(String username, String password);
}
