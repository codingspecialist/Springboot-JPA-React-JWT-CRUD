import React, { useState, useEffect } from 'react';
import PostItem from '../../components/PostItem';
import { Pagination } from 'react-bootstrap';

const Home = () => {

	const [posts, setPosts] = useState([]);
	const [last, setLast] = useState('');
	const [page, setPage] = useState(0);

	useEffect(() => {
		fetch("http://localhost:8000?page="+page, {
			method: "GET"
		}).then(res => res.json())
			.then(res => {
				console.log(res);
				setPosts(res.content);
				setLast(res.last);
			});
	}, [page]);

	const prev = () =>{
		setPage(page-1);
	}

	const next = () =>{
		setPage(page+1);
	}

	return (
		<div>
			{posts.map(post => <PostItem key={post.id} id={post.id} title={post.title} />)}
			<br />
			<div className="d-flex justify-content-center">
				<Pagination>
					{page === 0 ? 
						<Pagination.Item onClick={prev} disabled>Prev</Pagination.Item> : 
						<Pagination.Item onClick={prev}>Prev</Pagination.Item>}
					{last === true ? 
						<Pagination.Item onClick={next} disabled>Next</Pagination.Item> : 
						<Pagination.Item onClick={next}>Next</Pagination.Item>}
				</Pagination>
			</div>
		</div>
	);
};

export default Home;