import React, { useCallback, useMemo, useState } from 'react'
import { useForm } from '../hooks/useForm';
import { AvailableDates } from './AvailableDates';
import { Footer } from './Footer';

export const Reservaciones = () => {
    console.log('Reservaciones se volvio a dibujar')
    const [status, setStatus] = useState(false);
    const initialState ={
        customers:'',
        date:'',
        name:'',
        lastName:'',
        email:'',
        phone:''
    }
    const today = new Date().toISOString().split('T')[0];
    const [values,handleInputChange] = useForm(initialState);
    const {customers,date} = values;
    
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(customers.length ==0 || date.length ==0){
            console.log('Todos los campos son obligatorios')
            return;
        }else{
            setStatus(!status);
            
        }
    }
    
    
    
    

  return (
    
    <div className='reservaciones'>
        <h1 className='reservaciones_tittle'>Haz tu reservacion ya!</h1>
        <form className='form-group' onSubmit={handleOnSubmit}>
        <label htmlFor="customers">Customers:</label>
            <input className='input_date' type="number" placeholder='Numero de personas' value={customers} onChange ={handleInputChange} name = "customers"/>
            <label htmlFor="date">Fecha:</label>
            <input type="date" name="date"  min={today} value={date} onChange={handleInputChange}/>
            <button className='btn btn-primaryColor'>Buscar mesa</button>
        </form>
        <br/>
        {status && <AvailableDates reservacionInfo = {values}/>}
        
    </div>
    
    

  )
}
