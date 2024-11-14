package com.example.web_4.entitiesAndDTOs;

import java.io.Serializable;

public class UserDTO implements Serializable {
    private Long id;
    private String username;
    private String password;
    private StatusObj message;
    public UserDTO() {}
    public UserDTO(Long id, String username, String password, String message) {}
    public UserDTO(Long id, String username, String password) {
        this.id=id;
        this.username=username;
        this.password=password;
    }
    public Long getId() {
        return id;
    }

    public StatusObj getMessage() {
        return message;
    }

    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setMessage(StatusObj message) {
        this.message = message;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
