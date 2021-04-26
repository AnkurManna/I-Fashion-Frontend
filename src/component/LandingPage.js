import axios from 'axios';
import Cookies from 'universal-cookie';
import {useState,useEffect} from 'react';
import Card from './Card.js';

function LandingPage ({ck,setck,admin,setAdmin})
{
    const instance = axios.create({
        withCredentials: true
      })
      
    const logout =  (e=>{
        e.preventDefault();
    axios.get('https://localhost:8443/lgout', {
        
        withCredentials: true 
    })
    .then(function (response) {
        console.log(response);
        const cookies = new Cookies();
        //setck(cookies.get("loggedIn"));
        setAdmin(false);
        window.location.reload();
        
    })
    .catch(function (error) {
        console.log(error);
    });
        })
    
    const [credential,setCredential] = useState('');
    const [data,setdata] = useState('');

    useEffect(() => {
        axios.get('https://localhost:8443/item/findallItems', {
        
        withCredentials: true 
    },[data])
    .then(function (response) {
        console.log(response);
        setdata(response.data);
        
        
    })
    .catch(function (error) {
        console.log(error);
    })
        
    }, [])

    return (
        <>
        <h1>Here is landing page for user</h1>
        
        <span><button onClick={logout}> Logout</button></span>
        <label>
    Choose a browser from this list:
    <input list="browsers" name="myBrowser" />  
</label>   
<datalist id="browsers">
    <option value="Chrome" />
    <option value="Firefox" />
    <option value="Internet Explorer" />
    <option value="Opera" />
    <option value="Safari" />
    <option value="Microsoft Edge" />   
</datalist>


        {data.length>0&&data.map((item)=><Card ck={ck} val={item} people='User'/>)}
        </>

    );
}

export default LandingPage;