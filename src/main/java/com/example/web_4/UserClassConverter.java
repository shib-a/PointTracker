package com.example.web_4;

import com.example.web_4.entitiesAndDTOs.User;
import com.example.web_4.entitiesAndDTOs.UserDTO;

public class UserClassConverter{
    public static UserDTO toDTO(User user) {
        return new UserDTO(user.getId(), user.getUsername(), user.getPassword());
    }

    public static User toClass(UserDTO dto) {
        return new User(dto.getId(),dto.getUsername(),dto.getPassword());
    }
}
