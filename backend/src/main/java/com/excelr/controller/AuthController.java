package com.excelr.controller;

import com.excelr.entity.User;
import com.excelr.requests.LoginRequest;
import com.excelr.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody LoginRequest request) {
        userService.register(request);
        return ResponseEntity.ok("Registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        // return the authenticated user instead of just boolean
        User user = userService.login(request);

        if (user == null) {
            return ResponseEntity.status(401).body("Invalid email or password");
        }

        // React will receive JSON with name, dob, phoneNumber, city, email, etc.
        return ResponseEntity.ok(user);
    }

    @PostMapping("/forgot")
    public ResponseEntity<String> forgot(@RequestParam String email) {
        String link = userService.createResetToken(email);
        if (link == null) {
            return ResponseEntity.ok("If this email exists, a reset link was generated.");
        }
        return ResponseEntity.ok(link);
    }

    public static class ResetPasswordRequest {
        private String token;
        private String newPassword;

        public String getToken() { return token; }
        public void setToken(String token) { this.token = token; }

        public String getNewPassword() { return newPassword; }
        public void setNewPassword(String newPassword) { this.newPassword = newPassword; }
    }

    @PostMapping("/reset")
    public ResponseEntity<String> reset(@RequestBody ResetPasswordRequest req) {
        boolean ok = userService.resetPassword(req.getToken(), req.getNewPassword());
        if (ok) {
            return ResponseEntity.ok("Password reset successfully");
        }
        return ResponseEntity.badRequest().body("Invalid or expired token");
    }
}
