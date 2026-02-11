package com.excelr.service;

import com.excelr.entity.User;
import com.excelr.repository.UserRepository;
import com.excelr.requests.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Registration
    public void register(LoginRequest request) {
        User existing = userRepository.findByEmail(request.getEmail());
        if (existing != null) {
            throw new RuntimeException("Email already registered");
        }

        User user = new User();
        user.setName(request.getName());
        user.setDob(request.getDob());
        user.setPhoneNumber(request.getPhoneNumber());
        user.setCity(request.getCity());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // plain text for project

        userRepository.save(user);
    }

    // Login -> return User (not boolean)
    public User login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail());
        if (user == null) {
            return null;
        }
        if (!request.getPassword().equals(user.getPassword())) {
            return null;
        }
        return user; // full user with name, dob, phoneNumber, city, email
    }

    // Create reset token (forgot password)
    public String createResetToken(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return null;
        }
        String token = UUID.randomUUID().toString();
        user.setResetToken(token);
        user.setResetTokenExpiry(LocalDateTime.now().plusMinutes(15));
        userRepository.save(user);

        String link = "http://localhost:5173/reset-password?token=" + token;
        System.out.println("Reset link: " + link);
        return link;
    }

    // Reset password
    public boolean resetPassword(String token, String newPassword) {
        User user = userRepository.findByResetToken(token);
        if (user == null) return false;
        if (user.getResetTokenExpiry() == null ||
                user.getResetTokenExpiry().isBefore(LocalDateTime.now())) {
            return false;
        }

        user.setPassword(newPassword);
        user.setResetToken(null);
        user.setResetTokenExpiry(null);
        userRepository.save(user);
        return true;
    }
}
