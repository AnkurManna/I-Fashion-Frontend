
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import styles from '../myStyles.module.css';
import axios from 'axios';
import {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const Card = ({val,people}) => {

    const [updvisibility ,setUpdvisibility] = useState(false);
    const [ArrivalCity, setArrivalCity] = useState('');
    const [DepartureCity, setDepartureCity] = useState('');
    const [Start, setStart] = useState('');
    const [End, setEnd] = useState('');
    const [Cost, setCost] = useState('');
    const [IsSpecial, setSpecial] = useState(1);
    const del = (id) =>{
        let apiUrl = 'http://localhost:8080/Test1/dr';
        apiUrl = apiUrl+'?' + "Id=" +id+'&op=' + 'delete';
        axios.get(apiUrl)
        .then(res=>{
            console.log(res)
        })
        .catch(e=>{
            console.log(e);
        })
    }

    const upd = (id) => {
        setUpdvisibility(!updvisibility);
        setArrivalCity(val.arrivalCity);
        setDepartureCity(val.departureCity);
        setCost(val.cost);
        setStart(val.startTime);
        setEnd(val.endTime);
        setSpecial(val.isSpecial);
    }
    const update = (id) =>{
        let val = {ArrivalCity:ArrivalCity,DepartureCity:DepartureCity,StartTime:Start,EndTime:End,Cost:Cost,IsSpecial:IsSpecial};
        const apiUrl = 'http://localhost:8080/Test1/dr';
        console.log(val);
      val["op"]="update";
      val["Id"] = id;
      axios.post(apiUrl,val)
      .then((response)=>console.log(response))
      .catch(e=>{console.log(e)})
    }
  return (
    <div className={styles.bar}>
    
    <span  className={styles.info}>Brand : {val.brand}</span>
    <span  className={styles.info}>Type : {val.type}</span>
    <span  className={styles.info}>Price : ₹{val.price}</span>
    <span  className={styles.info}>Gender: {val.gender}</span>
    <span  className={styles.info}>Current Discount: {val.current_discount}</span>
    <span  className={styles.info}>Discount Duration: {val.discount_duration}</span>

    {people==='User'?<span><button className={styles.mybtn}>Book</button></span>:<span  ><button className={styles.mybtn} onClick={()=>upd(val)}>Update</button>
    <button className={styles.mybtn} onClick={()=>del(val.id)}>Delete</button></span>}
    {updvisibility?
    <div>
      
      <Modal isOpen={updvisibility} >
          <form>
      <div className='form-control'>
            <label>ArrivalCity</label>
            <input type='text' placeholder='ArrivalCity'  value={ArrivalCity} onChange={(e)=>setArrivalCity(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>DepartureCity</label>
            <input type='text' placeholder='DepartureCity' value={DepartureCity}  onChange={(e)=>setDepartureCity(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>StartingDate</label>
            <input type='text' placeholder='StartingDate' value={Start} onChange={(e)=>setStart(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>EndingDate</label>
            <input type='text' placeholder='EndingDate' value={End} onChange={(e)=>setEnd(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>Cost</label>
            <input type='text' placeholder='Cost' value={Cost} onChange={(e)=>setCost(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>Speciality</label>
            <input type='text' placeholder='IsSpecial' value={IsSpecial} onChange={(e)=>setSpecial(e.target.value)}/>
        </div>
        <ModalFooter>
          <Button color="primary" onClick={update(val.id)}>update</Button>{' '}
          <Button color="secondary" onClick={upd}>Cancel</Button>
        </ModalFooter>
        </form>
      </Modal>
    </div>:''}

      
    </div>
  );

};



export default Card;
