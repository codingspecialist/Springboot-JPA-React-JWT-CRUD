import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const JoinForm = (props) => {

	const [user, setUser] = useState({
		username: '',
		password: '',
		email:''
	});

	const submitJoin = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000/join", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(user)
		}).then(res => {
			return res.text();
		}).then(res => {
			if (res === "ok") {
				props.history.push("/loginForm");
			} else {
				alert('회원가입 실패');
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

			<Form.Group>
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Enter email" name="email" onChange={changeValue} />
			</Form.Group>
			<Button variant="primary" type="submit" onClick={submitJoin}>
				회원가입
  			</Button>
		</Form>
	);
};

export default JoinForm;