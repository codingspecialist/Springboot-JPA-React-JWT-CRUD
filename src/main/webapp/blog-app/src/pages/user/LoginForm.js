import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login } from '../../store';

const LoginForm = (props) => {

	const dispatch = useDispatch();
	const [user, setUser] = useState({
		username: '',
		password: ''
	});

	const submitLogin = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(user)
		}).then(res => {
			// 로컬 스토리지 저장
			for (let header of res.headers.entries()) {
				if (header[0] === "authorization") {
					localStorage.setItem("Authorization", header[1]);
				}
			}
			return res.text();
		}).then(res => {
			if (res === "ok") {
				// 로그인 상태 값 리덕스 저장
				dispatch(login());
				props.history.push("/");
			} else {
				alert('아이디 혹은 비번을 다시 입력하세요!');
			}
		});
	}

	const changeValue = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	}

	return (
		<Form>
			<Form.Group>
				<Form.Label>Username</Form.Label>
				<Form.Control type="text" placeholder="Enter username" name="username" onChange={changeValue} />
			</Form.Group>

			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Enter password" name="password" onChange={changeValue} />
			</Form.Group>
			<Button variant="primary" type="submit" onClick={submitLogin}>
				로그인
  			</Button>
		</Form>
	);
};

export default LoginForm;