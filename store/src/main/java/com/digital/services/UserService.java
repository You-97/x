package com.digital.services;

import com.digital.entities.User;
import com.digital.exception.domain.*;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.List;

public interface UserService {

    User register(String firstName, String lastName, String username, String email) throws UserNotFoundException, UsernameExistException, EmailExistException, MessagingException;

    List<User> getUsers();

    User findUserByUsername(String username);

    User findUserByEmail(String email);

    User addNewUser(String firstName, String lastName, String username, String email, String role, MultipartFile profileImage, Boolean isNotLocked, Boolean isActive) throws UserNotFoundException, EmailExistException, UsernameExistException, IOException;

    User updateUser(String currentUsername, String newFirstName, String newLastName, String newUsername, String newEmail, String role, MultipartFile profileImage, Boolean isNotLocked, Boolean isActive) throws UserNotFoundException, EmailExistException, UsernameExistException, IOException;

    void deleteUser(long id);

    void resetPassword(String email, String last, String password) throws EmailNotFoundException;

    User updateProfileImage(String username, MultipartFile profileImage) throws UserNotFoundException, EmailExistException, UsernameExistException, IOException;
}
