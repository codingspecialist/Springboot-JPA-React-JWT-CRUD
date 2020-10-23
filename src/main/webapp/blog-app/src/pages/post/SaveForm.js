import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SaveForm = (props) => {

	const [post, setPost] = useState({
		title: '',
		content: ''
	});

	const submitPost = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000/post", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Authorization": localStorage.getItem("Authorization")
			},
			body: JSON.stringify(post)
		}).then(res => {
			return res.text();
		}).then(res => {
			if (res === "ok") {
				props.history.push("/");
			} else {
				alert('글등록 실패');
			}
		});
	}

	const changeValue = (e) => {
		setPost({
			...post,
			[e.target.name]: e.target.value
		});
	}

	return (
		<div>
			<h1>글쓰기</h1>
			<hr />
			<Form>
				<Form.Group>
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" placeholder="Enter title" name="title" onChange={changeValue} />
				</Form.Group>

				<Form.Group>
					<Form.Label>Content</Form.Label>
					<Form.Control as="textarea" row={5} name="content" onChange={changeValue} />
				</Form.Group>
				<Button variant="primary" type="submit" onClick={submitPost}>
					글등록
  				</Button>
			</Form>
		</div>
	);
};

export default SaveForm;