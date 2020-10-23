package com.cos.jwt.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	User findByUsernameAndPassword(String username, String password);
}
