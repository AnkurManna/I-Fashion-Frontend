import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {Router ,Switch,NavLink} from 'react-router';
import LandingPage from './component/LandingPage';
import Entry from './component/Entry';
import { useCookies } from 'react-cookie';
const axios = require('axios');

function App() {

 
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
  const [cook,setcook]=useState('');

  const chk = (e =>{
    axios.get('http://localhost:8080/check',{ withCredentials: true }).then(res=>{console.log(res)}).catch(e=>{console.log(e)})
  })
  const chk2 = (e =>{
    axios.get('http://localhost:8080/session',{ withCredentials: true }).then(res=>{console.log(res)}).catch(e=>{console.log(e)})
  })
  return (
    <div className="App">
      <header className="App-header">
      {cook?<LandingPage/>:<Entry ck={cook} setck={setcook}/>}
      </header>

     

      
       

    </div>
  );
}

export default App;

/**
 *  <Router>
          <div className={styles.mynav}>

            <span className={styles.navElement}>
           
                <NavLink to='/userLogin' exact >Users</NavLink>
                </span>
              
                <span className={styles.navElement}> 
                <NavLink to='/adminlogin'  exact >Admin</NavLink>
            </span>
          </div>

      
        <Switch>
        <div >
        
        <Route exact path="/userlogin" >
        <User/>
        </Route>
        <Route exact path="/adminlogin" component = {Admin}></Route>

        
        </div>
        
        </Switch>
        </Router>
 */