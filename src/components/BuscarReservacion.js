import React, { useEffect, useState } from 'react'
import {
  onSnapshot,
  collection,
  addDoc,
  doc,
  deleteDoc,
  setDoc
} from 'firebase/firestore'
import {db} from '../firebase/firebase.js'
import { useForm } from '../hooks/useForm';

export const BuscarReservacion = () => {
  const [mesa, setMesa] = useState({})
  
  const [mesas,setMesas] = useState([])
  const [visible,setVisble] = useState(false);
  const initialState = {
    code:''
  }
  const [code,handleInputChange] = useForm(initialState);
  
  const getMesas = () => {
    onSnapshot(collection(db,'mesas'),(snapshot) =>{
        snapshot.docs.forEach(reservacion => {
            setMesas(mesas => {
              return [...mesas,reservacion.data()]
            })  
          
                  
          })
  })
 
}
  const handleOnSubmit = (e) => {

      e.preventDefault();
      setMesa(mesas.find(mesa => mesa.code == code.code));
      console.log(mesa)
  }
  useEffect(() => {
      getMesas()
  }, [])
  
  
  return (
    <>
    <h1 className='text-center'>Busca tu reservacion!</h1>
    <form onSubmit={handleOnSubmit} className="formBusqueda">
      <input placeholder='codigo de reservacion' value={code.code} onChange={handleInputChange} name = "code"/>
      <button className='btn btn-primaryColor'>Buscar</button>
    </form>
    { mesa
       && 
      <div className='informacionReservacion'>
        <h1>Nombre: {mesa.name} {mesa.lastName}</h1>
        <p>Fecha: {mesa.date}</p>
        <p>Hora: {mesa.time}</p>
      </div>
    }
    </>
  )
}
