import axios from 'axios';
import Cookies from 'universal-cookie';
import {useState} from 'react';
function LandingPage ({ck,setck})
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
    const [admin,setAdmin]=useState(false);
    const [credential,setCredential] = useState('');
    
    return (
        <>
        <h1>Here is landing page for Admin</h1>
        
        <span><button onClick={logout}> Logout</button></span>
        </>

    );
}

export default LandingPage;