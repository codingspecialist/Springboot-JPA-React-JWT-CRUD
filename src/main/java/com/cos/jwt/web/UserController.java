package com.cos.jwt.web;

import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.user.User;
import com.cos.jwt.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;

/**
 * 회원정보, 회원수정 하지 않고 간단하게 구현!!
 * 그래서 Service 따로 안만들었음.
 */

@RequiredArgsConstructor
@RestController
public class UserController {

	private final UserRepository personRepository;
	private final HttpSession session;
	
	// (1) 로그인 -  필터에 등록함.
	
	// (2) 회원가입
	@PostMapping("/join")
	public ResponseEntity<?> join(@RequestBody User person) {
		personRepository.save(person);
		return new ResponseEntity<String>("ok", HttpStatus.CREATED);
	}
	
	// (3) 로그아웃
	@GetMapping("/logout")
	public ResponseEntity<?> logout() {
		session.invalidate();
		return new ResponseEntity<String>("ok", HttpStatus.OK);
	}
}
