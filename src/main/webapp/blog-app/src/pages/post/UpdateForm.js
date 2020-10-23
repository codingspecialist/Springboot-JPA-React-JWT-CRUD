import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const UpdateForm = (props) => {

	let postId = props.match.params.id;

	const [post, setPost] = useState({
		title: '',
		content: ''
	});

	const updatePost = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000/post/"+postId, {
			method: "PUT",
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

	useEffect(() => {
		fetch("http://localhost:8000/post/" +postId , {
			method: "GET",
			headers: {
				"Authorization": localStorage.getItem("Authorization")
			}
		}).then(res => res.json()).then(res => {
			setPost(res);
		});
	}, []);

	return (
		<div>
			<h1>글수정</h1>
			<hr />
			<Form>
				<Form.Group>
					<Form.Label>Title</Form.Label>
					<Form.Control value={post.title} type="text" placeholder="Enter title" name="title" onChange={changeValue} />
				</Form.Group>

				<Form.Group>
					<Form.Label>Content</Form.Label>
					<Form.Control as="textarea" row={5} value={post.content} name="content" onChange={changeValue} />
				</Form.Group>
				<Button variant="primary" type="submit" onClick={updatePost}>
					글수정
  				</Button>
			</Form>
		</div>
	);
};

export default UpdateForm;