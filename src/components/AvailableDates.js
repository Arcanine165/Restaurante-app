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

export const AvailableDates = ({reservacionInfo}) => {
    const initialState ={
        customers:reservacionInfo.customers,
        date:reservacionInfo.date,
        time:'',
        name:'',
        lastName:'',
        email:'',
        phone:''
    }
    const [availableHours, setAvailableHours] = useState(["12:00","13:00"]);
    const [notAvailableHours, setNotAvailableHours] = useState([]);
    const [reservacion,handleInputChange] = useForm(initialState);
    
    const {name,lastName,email,phone} = reservacion;
      
    const getHorasDisponibles = () => {
        const horas = [];
        
        onSnapshot(collection(db,'horarios'),(snapshot) =>{
            snapshot.docs.forEach(hora => {
                horas.push(hora.data())
            })
        setNotAvailableHours(horas)
    })
        
    }
    const handleOnSubmit = async(e) => {
        e.preventDefault();
       await addDoc(collection(db,'mesas'),reservacion)
    }
    const setHoursAvailable = () => {
        const horas = notAvailableHours.map(hour => {
            if(availableHours.includes(hour)){
                return hour.status && hour; 
            }
        })
        setNotAvailableHours(horas);
    }
    useEffect(() => {
        getHorasDisponibles();
        setHoursAvailable();
     
    }, [])
    
    const [visible,setFormVisible] = useState(false);
    
    const handleOnClick = (e) => {
        setFormVisible(true);
        reservacion.time = e.target.innerHTML;
    }
    
    console.log(reservacion)

  return (
    <div>
        { notAvailableHours.length != 0 ? notAvailableHours.map((hour,index) => {
            return <button key={index} className='btn btn-primaryColor m-1' onClick={handleOnClick}>{hour.hora}</button>
        }) : <h1>No tenemos horarios disponibles!</h1>
        
        }
        {
            notAvailableHours.length != 0 && visible && 
            <div className='animate animate__backInLeft'>
                <h1 className='text-center'>Contacto</h1>
                <form className='form-group' onSubmit={handleOnSubmit}>
                    <input placeholder='Nombre' type="text" onChange={handleInputChange} name="name" value={name} className="input"/>
                    <input placeholder='Apellido'type="text" name="lastName" onChange={handleInputChange} value={lastName}className="input"/>
                    <input placeholder='correo' type="text" name="email" onChange={handleInputChange} value={email}className="input"/>
                    <input placeholder='numero de telefono' type="number" name="phone"onChange={handleInputChange} value={phone}className="input"/>
                    <button className='btn btn-primaryColor'>Reservar</button>
                </form>
            </div>
            
        }
        {

        }
    </div>
  )
}
