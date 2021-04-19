import axios from 'axios';
import Cookies from 'universal-cookie';
import {useState} from 'react';
import Card from './Card.js';
function LandingPage ({ck,setck,admin,setAdmin})
{
    const logout =  (e=>{
        e.preventDefault();
    axios.get('http://localhost:8080/logout', {
        
        withCredentials: true 
    })
    .then(function (response) {
        console.log(response);
        const cookies = new Cookies();
        setck(cookies.get("loggedIn"));
        setAdmin(false);
        
    })
    .catch(function (error) {
        console.log(error);
    });
})
    
    const [credential,setCredential] = useState('');
    const [data,setdate] = useState('');

    return (
        <>
        <h1>Here is landing page for user</h1>
        
        <span><button onClick={logout}> Logout</button></span>
       
        
        {data.length>0&&data.map((item)=><Card val={item} people='User'/>)}
        </>

    );
}

export default LandingPage;