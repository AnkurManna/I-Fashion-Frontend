import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {Router ,Switch,NavLink,Route} from 'react-router-dom';
import LandingPage from './component/LandingPage';
import LandingPageAdmin from './component/LandingPageAdmin';
import Entry from './component/Entry';
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';
import { createBrowserHistory } from "history";
import styles from './myStyles.module.css';
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
  const history = createBrowserHistory();
  const [cook,setcook]=useState('');
  const [admin,setAdmin] = useState(false)
  
   useEffect(()=>{
    const cookies = new Cookies();
    setcook(cookies.get("loggedIn"));

  })

  const chk = (e =>{
    axios.get('http://localhost:8080/check',{ withCredentials: true }).then(res=>{console.log(res)}).catch(e=>{console.log(e)})
  })
  const chk2 = (e =>{
    axios.get('http://localhost:8080/session',{ withCredentials: true }).then(res=>{console.log(res)}).catch(e=>{console.log(e)})
  })
  return (
    <div className="App">
      

      <Router history={history}>
          <div >

            <span>
           
                {!admin&&<NavLink to='/userLogin' exact >Users</NavLink>}
                </span>
              
                <span > 
                <NavLink to='/adminlogin'  exact >Admin</NavLink>
                </span>

          
          
          </div>

      
        <Switch>
        <div >
        
        {!admin&&<Route exact path="/userlogin" >
        {cook?<LandingPage ck={cook} setck={setcook} admin={admin} setAdmin={setAdmin} />:<Entry ck={cook} setck={setcook} admin={admin} setAdmin={setAdmin} peo="user"/>}
        </Route>}
        <Route exact path="/adminlogin">
        {cook?<LandingPageAdmin ck={cook} setck={setcook} admin={admin} setAdmin={setAdmin}/>:<Entry ck={cook} setck={setcook} admin={admin} setAdmin={setAdmin} peo="admin"/>}
        </Route>

        
        </div>
        
        </Switch>
        </Router>


   


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