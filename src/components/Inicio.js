
import React from 'react'
import restaurante from '../img/restaurante.jpg'
import { Footer } from './Footer'
import {Link} from 'react-router-dom'
export const Inicio = () => {
  return (
    <div className='info'>
        <div className='mainInformation'>
            <img src={restaurante}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales dui sit amet turpis cursus, vel ornare felis fermentum. Nullam fringilla, odio non condimentum blandit, velit sem tempor est, sed bibendum leo neque quis ligula. Maecenas ut purus accumsan, cursus neque sed, molestie dolor. Morbi nec erat sit amet ante imperdiet tincidunt. Integer ac pellentesque massa. Nulla a elit leo. Etiam ac vestibulum augue. Aliquam quis porttitor dolor. Quisque porttitor, ex sit amet dapibus aliquam, urna ipsum aliquet tortor, vitae lacinia leo eros a lectus. Praesent vel tortor scelerisque, commodo metus in, semper nulla. Nam laoreet neque ut lorem volutpat, sit amet placerat elit feugiat. Nullam ac interdum metus, sed convallis ex. Etiam molestie at ex porta egestas.
            </p>
            
            
        </div>
        <Link to='/reservaciones' className='btn btn-primaryColor-inicio'>Hacer una Reservacion</Link>

    </div>
  )
}
