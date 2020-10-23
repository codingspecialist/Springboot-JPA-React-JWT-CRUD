import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';

const Detail = (props) => {

	const [post, setPost] = useState({
		id:'',
		title:'',
		content:'',
		user: {
			id:0
		}
	});

	const [userId, setUserId] = useState();

	const isLogin = useSelector((store)=> store.isLogin);

	useEffect(()=>{
		let jwtTokenTemp = localStorage.getItem("Authorization");
		let jwtToken = jwtTokenTemp.replace('Bearer ', '');

		setUserId(jwt_decode(jwtToken).id); 

		if(!isLogin){
			alert('로그인 후 이용할 수 있습니다.');
			props.history.push("/");  
		}
		
		fetch("http://localhost:8000/post/"+props.match.params.id, {
			method: "GET",
			headers:{
				"Authorization": localStorage.getItem("Authorization")
			}
		}).then(res=>res.json()).then(res=>{
			setPost(res); 
		});
	}, [] );

	const deletePost = (postId) => {
		fetch("http://localhost:8000/post/"+postId, {
			method: "DELETE",
			headers:{
				"Authorization": localStorage.getItem("Authorization")
			}
		}).then(res=>res.text()).then(res=>{
			if(res === "ok"){
				alert('삭제완료');
				props.history.push("/");  
			}else{
				alert('삭제실패');
			}
		});
	}

	return (
		<div>
			{post.user.id === userId ?
				<>
				<Link to={"/updateForm/"+post.id} className="btn btn-warning">수정</Link >
				{' '}
				<Button className="btn btn-danger" onClick={()=>deletePost(post.id)}>삭제</Button>
				</>
				: ''
			}

			<br/><br/> 
			<h1>{post.title}</h1>
			<hr/>
			<div>
				{post.content }
			</div>
		</div>
	);
};

export default Detail;