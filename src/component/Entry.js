import {useState} from 'react';
import Login from './Login';
import Register from './Register';
function Entry ({ck,setck})
{
    const [willlog,setwilllog] = useState(true);
    
    if(willlog)
    return <Login flag={willlog} func={setwilllog} ck={ck} setck={setck} />;
    else
    return <Register flag={willlog} func={setwilllog}/>;
    
}
export default Entry;