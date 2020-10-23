import React, { useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/post/Home';
import Header from './components/Header';
import SaveForm from './pages/post/SaveForm';
import Detail from './pages/post/Detail';
import LoginForm from './pages/user/LoginForm';
import { Container } from 'react-bootstrap';
import JoinForm from './pages/user/JoinForm';
import { useDispatch } from 'react-redux';
import { login } from './store';
import UpdateForm from './pages/post/UpdateForm';

function App() {

  const dispatch = useDispatch(); 

  useEffect(()=>{
    let jwtToken = localStorage.getItem("Authorization");
    if(jwtToken !== null ){
      dispatch(login());
    }
  },[]);

  return (
  	<div>
      <Header />
      <Container>
        <Route path="/" exact={true} component={Home} />
        <Route path="/saveForm" exact={true} component={SaveForm} />
        <Route path="/post/:id" exact={true} component={Detail} />
        <Route path="/loginForm" exact={true} component={LoginForm} />
        <Route path="/joinForm" exact={true} component={JoinForm} />
        <Route path="/updateForm/:id" exact={true} component={UpdateForm } />
      </Container>
    </div>
  );
}

export default App;


  // useEffect(()=>{
  //   // 인증 후 JWT토큰 로컬스토리지에 저장
  //   // 인증이 필요한 페이지 요청에는 header에 JWT토큰 담기
  //   fetch("http://localhost:8000/loginProc", {
  //     method: "POST",
  //     body: JSON.stringify(person),
  //     headers: {
  //       'Content-Type':"application/json; charset=utf-8",
  //     }
  //   }).then(res=> {
  //     console.log(1, res);
  //     for(let header of res.headers.entries()){
  //       if(header[0] == "authorization"){
  //         localStorage.setItem("Authorization", header[1]);
  //       }
  //     }  
      
  //     return res.text();
  //   }).then(res=> {
  //     console.log(3, res);
  //   });

  //   //localStorage.setItem("jwt", "fjdklsafjdklsajkl");
  //   //let jwtToken = localStorage.getItem("jwt");
  //   //console.log(jwtToken);
  // }, []);
