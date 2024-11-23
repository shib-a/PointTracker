package com.example.web_4.entitiesAndDTOs;

public class StatusObj {
    private STATUS status;
    private String message;
    public StatusObj(STATUS status, String message) {
        this.status = status;
        this.message = message;
    }

    public STATUS getStatus() {return status;}
    public String getMessage() {return message;}
    public void setStatus(STATUS status) {this.status = status;}
    public void setMessage(String message) {this.message = message;}

}
