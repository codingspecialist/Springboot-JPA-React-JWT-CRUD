package com.cos.jwt.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cos.jwt.config.filter.CorsFilter;
import com.cos.jwt.config.jwt.JwtAuthenticationFilter;
import com.cos.jwt.config.jwt.JwtAuthorizationFilter;
import com.cos.jwt.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Configuration
public class FilterConfig {
	
	private final UserRepository personRepository;
	
	@Bean
	public FilterRegistrationBean<CorsFilter> corsFilter(){
		System.out.println("CORS 필터 등록");
		FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter());
		bean.addUrlPatterns("/*");
		bean.setOrder(0); // 낮은 번호부터 실행됨.
		return bean;
	}
	
	@Bean
	public FilterRegistrationBean<JwtAuthenticationFilter> jwtAuthenticationFilter(){
		System.out.println("JwtAuthenticationFilter 필터 등록");
		FilterRegistrationBean<JwtAuthenticationFilter> bean = 
				new FilterRegistrationBean<>(new JwtAuthenticationFilter(personRepository));
		bean.addUrlPatterns("/login");
		bean.setOrder(1); // 낮은 번호부터 실행됨.
		return bean;
	}
	
	@Bean
	public FilterRegistrationBean<JwtAuthorizationFilter> jwtAuthorizationFilter(){
		System.out.println("JwtAuthorizationFilter 필터 등록");
		FilterRegistrationBean<JwtAuthorizationFilter> bean = 
				new FilterRegistrationBean<>(new JwtAuthorizationFilter(personRepository));
		bean.addUrlPatterns("/post/*");
		bean.setOrder(2); // 낮은 번호부터 실행됨.
		return bean;
	}
}
