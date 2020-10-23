import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(()=>{

    let person = {
      username:"love",
      password:"1234"
    }

    // 인증 후 JWT토큰 로컬스토리지에 저장
    // 인증이 필요한 페이지 요청에는 header에 JWT토큰 담기
    fetch("http://localhost:8000/loginProc", {
      method: "POST",
      body: JSON.stringify(person),
      headers: {
        'Content-Type':"application/json; charset=utf-8",
      }
    }).then(res=> {
      console.log(1, res);
      for(let header of res.headers.entries()){
        if(header[0] == "authorization"){
          localStorage.setItem("Authorization", header[1]);
        }
      }  
      
      return res.text();
    }).then(res=> {
      console.log(3, res);
    });

    //localStorage.setItem("jwt", "fjdklsafjdklsajkl");
    //let jwtToken = localStorage.getItem("jwt");
    //console.log(jwtToken);
  }, []);

  return (
  	<div>1</div>
  );
}

export default App;
