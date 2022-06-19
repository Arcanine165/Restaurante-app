import React, { useEffect, useLayoutEffect, useState } from 'react'
import {Outlet,Link} from 'react-router-dom'

export const StaticInformation = () => {
    // const  innerWidth: width, innerHeight: height } = window;
    const [width, setWidth] = useState(window.innerWidth)
    const [status, setStatus] = useState(false);
    const [menuStatus, setMenuStatus] = useState(false);
    useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        if(width>800){
            setStatus(false);
            setMenuStatus(true);
        }else{
            setMenuStatus(false);
            setStatus(true);
        }
        return () => window.removeEventListener("resize", handleResize);
      }, [width]);

    const handleOnClick = (e) => {
        setMenuStatus(!menuStatus);
    }
    
  return (
    <>
        <nav className='navbar'>
            
            <div className='navbar_brand' >

            </div>
            {
                status 
                    &&
                <div className='menu' onClick={handleOnClick}>
                
                </div> 

            }
            {menuStatus &&
                <div className='navbar_links'>
                    <Link to= '/' className='navbar_link'>Inicio</Link>
                    <Link to ='/menu' className='navbar_link'>Menu</Link>
                    <Link to ='/reservaciones' className='navbar_link'>Reservaciones</Link>
                    <Link to ='/nosotros' className='navbar_link'>Nosotros</Link>
                </div>
            }
            
            
        </nav>
        <Outlet/>
    </>
  )
}
