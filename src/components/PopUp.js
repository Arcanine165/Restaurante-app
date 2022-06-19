import React from 'react'
import image from '../img/check.jpg'
export const PopUp = ({reservacion}) => {
    const {code} = reservacion;
    const handleOnClick = ()=>{
        window.location.reload();
    }
    
  return (
    <div className='popup'>
        <div className='popup_checkImg'></div>
        <h1 className='text-center'>Tu codigo es:</h1>
        <h3>{code}</h3>
        <p>Your details has been succesfully submitted. Thanks!</p>
        <button className='btn btn-primaryColor' onClick={handleOnClick}>Salir</button>
    </div>
  )
}
