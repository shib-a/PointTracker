package com.example.web_4;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name="users", schema = "public")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;
    @Column(name = "username",nullable = false,unique = true)
    private String username;
    @Column(name = "password", nullable = false)
    private String password;
    public User() {}
    public User(String username, String password) {}
}
