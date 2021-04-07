import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
const axios = require('axios');
function App() {

  const [mail,setMail] = useState('');
  const [password,setPassword] = useState('');
  /*useEffect(()=>{
    axios.post('http://localhost:8080/addbook', {
      id:235,
      bookName:"harry potter",
      authorName:"JK Rowling"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  })*/
  const login =  (e=>{
    e.preventDefault();
    axios.get('http://localhost:8080/login', {
      params:{
      mail:mail,
      password:password},
      withCredentials: true 
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  })
  const chk = (e =>{
    axios.get('http://localhost:8080/check',{ withCredentials: true }).then(res=>{console.log(res)}).catch(e=>{console.log(e)})
  })
  return (
    <div className="App">
      <header className="App-header">
      <form className='add-form'>
        <div className='form-control'>
            <label>Mail</label>
            <input type='text' placeholder='mail'  value={mail} onChange={(e)=>setMail(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>password</label>
            <input type='text' placeholder='password' value={password}  onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button onClick={login}>login</button>
        </form>
        <button onClick={chk}>Check</button>
      </header>
    </div>
  );
}

export default App;
