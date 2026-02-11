package com.excelr.repository;

import com.excelr.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);  // used in login
    User findByResetToken(String resetToken);
}
