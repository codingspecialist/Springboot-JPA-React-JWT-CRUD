import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';

const Header = () => {

	const isLogin = useSelector((store) => store.isLogin);
	const dispatch = useDispatch();

	const logoutProc = () =>{
		localStorage.removeItem("Authorization");
		dispatch(logout());
	}

	return (
		<div>
			<Navbar bg="dark" expand="lg" variant="dark">
				<Link to="/" className="navbar-brand">블로그홈</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						{isLogin ?
							(
								<>
									<Link to="/saveForm" className="nav-link">글쓰기</Link>
									<Link className="nav-link" onClick={logoutProc}>로그아웃</Link>
								</>
							)
							:
							(
								<>
									<Link to="/loginForm" className="nav-link">로그인</Link>
									<Link to="/joinForm" className="nav-link">회원가입</Link>
								</>
							)
						}


					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
			<br />
		</div>
	);
};

export default Header;