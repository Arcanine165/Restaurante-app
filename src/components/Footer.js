import React from 'react'
import face from '../img/face.png';
import twitter from '../img/gorjeo.png';
export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='links'>
                <ul className='footer_links'>
                    <li className='footer_link'><img className = "logoSocial" src={face}/><a className='a_link' href='#'>Facebook</a></li>
                    <li className='footer_link'><img className = "logoSocial" src={twitter}/><a className='a_link' href='#'>Twitter</a></li>
                </ul>
            </div>
            <div>
            <ul className='footer_links'>
                    <li className='footer_link'><img className = "logoSocial" src={face}/><a className='a_link' href='#'>Facebook</a></li>
                    <li className='footer_link'><img className = "logoSocial" src={twitter}/><a className='a_link' href='#'>Twitter</a></li>
                </ul>
            </div>
        </div>
        <h3 className='text-center footer_tittle'>Todos los derechos reservados</h3>
    </footer>

  )
}
