import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostItem = ({id, title}) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Link to={"/post/"+id} variant="primary" className="btn btn-primary">상세보기</Link>
			</Card.Body>
		</Card>
	);
};

export default PostItem;