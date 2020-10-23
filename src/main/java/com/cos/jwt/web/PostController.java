package com.cos.jwt.web;

import javax.servlet.http.HttpSession;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.post.Post;
import com.cos.jwt.domain.user.User;
import com.cos.jwt.service.PostService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class PostController {

	private final PostService postService;
	private final HttpSession session;
	
	// 모두 접근 가능
	@GetMapping({"", "/"})
	public ResponseEntity<?> home(@PageableDefault(size = 5, sort = "id", direction = Sort.Direction.DESC) Pageable pageable){
		return new ResponseEntity<Page<Post>>(postService.글목록(pageable), HttpStatus.OK);
	}
	 
	// JWT 토큰만 있으면 접근 가능
	@GetMapping("/post/{id}")
	public ResponseEntity<?> detail(@PathVariable int id){
		return new ResponseEntity<Post>(postService.글상세(id), HttpStatus.OK);
	}
	
	// JWT 토큰만 있으면 접근 가능
	@PostMapping("/post")
	public ResponseEntity<?> save(@RequestBody Post post){
		User principal = (User) session.getAttribute("principal");
		postService.글쓰기(post, principal);
		return new ResponseEntity<String>("ok", HttpStatus.CREATED);
	}
	
	// JWT 토큰으로 동일인 체크 후 접근 가능
	@DeleteMapping("/post/{id}")
	public ResponseEntity<?> delete(@PathVariable int id){
		User principal = (User) session.getAttribute("principal");
		int result = postService.글삭제(id, principal);
		
		if(result == 1) {
			return new ResponseEntity<String>("ok", HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("fail", HttpStatus.FORBIDDEN);
		}
	}
	
	// JWT 토큰으로 동일인 체크 후 접근 가능
	@PutMapping("/post/{id}")
	public ResponseEntity<?> update(@RequestBody Post post, @PathVariable int id){
		User principal = (User) session.getAttribute("principal");
		int result = postService.글수정(post, id, principal);
		
		if(result == 1) {
			return new ResponseEntity<String>("ok", HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("fail", HttpStatus.FORBIDDEN);
		}
	}
	
}








