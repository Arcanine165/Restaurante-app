import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';
import {
    onSnapshot,
    collection,
    addDoc,
    doc,
    deleteDoc,
    setDoc
  } from 'firebase/firestore'

import {db} from '../firebase/firebase.js'
import { PopUp } from './PopUp';

export const AvailableDates = ({reservacionInfo}) => {
    const initialState ={
        customers:reservacionInfo.customers,
        date:reservacionInfo.date,
        time:'',
        name:'',
        lastName:'',
        email:'',
        phone:'',
        code:''
    }
    const [availableHours, setAvailableHours] = useState(["12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]);
    // const [notAvailableHours, setNotAvailableHours] = useState([]);
    const [reservacion,handleInputChange] = useForm(initialState);
    const [popUpVisible, setPopUpVisible] = useState(false)
    const {name,lastName,email,phone} = reservacion;
    
    const getHorasDisponibles = () => {
        
        let excludeHours = [];
        onSnapshot(collection(db,'mesas'),(snapshot) =>{
            snapshot.docs.forEach(hora => {
                if(availableHours.includes(hora.data().time) && hora.data().date == reservacionInfo.date){
                    excludeHours.push(hora.data().time)
                    
                }
                
            })
        console.log(excludeHours)
        setAvailableHours(availableHours.filter(hora => !excludeHours.includes(hora)))
        console.log(availableHours)
       
    })

        
    }
    const handleOnSubmit = async(e) => {
        e.preventDefault();
        if(name.length == 0 || lastName.length == 0 || email.length ==0 || phone.length ==0 ){
            return;
        }else{
            reservacion.code = "#"+ lastName.substring(0,2) + name.substring(0,2) + new Date().valueOf();
            await addDoc(collection(db,'mesas'),reservacion);
            setPopUpVisible(!popUpVisible);

        }
        

       
    }
    // const setHoursAvailable = () => {
    //     const horas = notAvailableHours.map(hour => {
    //         if(availableHours.includes(hour)){
    //             return hour.status && hour; 
    //         }
    //     })
    //     setNotAvailableHours(horas);
    // }
    useEffect(() => {
        getHorasDisponibles();
        
     
    }, [])
    
    const [visible,setFormVisible] = useState(false);
    
    const handleOnClick = (e) => {
        setFormVisible(true);
        reservacion.time = e.target.innerHTML;
    }
    
    console.log(reservacion)
    
  return (
    <div>
        { availableHours.length != 0 ? <div className='horarios'>
            {availableHours.map((hour,index) => {
            return <li key={index} className='btn btn-primaryColor m-1 item' onClick={handleOnClick}>{hour}</li>
        })}</div> : <h1>No tenemos horarios disponibles!</h1>
        
        }
        {
            availableHours.length != 0 && visible && 
            <div className='animate animate__backInLeft'>
                <h1 className='text-center'>Contacto</h1>
                <form className='form-group' onSubmit={handleOnSubmit}>
                    <input placeholder='Nombre' type="text" onChange={handleInputChange} name="name" value={name} className="input"/>
                    <input placeholder='Apellido'type="text" name="lastName" onChange={handleInputChange} value={lastName} className="input"/>
                    <input placeholder='correo' type="text" name="email" onChange={handleInputChange} value={email} className="input"/>
                    <input placeholder='numero de telefono' type="number" name="phone"onChange={handleInputChange} value={phone} className="input"/>
                    <button className='btn btn-primaryColor'>Reservar</button>
                </form>
            </div>
            
        }
        {
            popUpVisible && <PopUp reservacion={reservacion}/>
        }
    </div>
  )
}
