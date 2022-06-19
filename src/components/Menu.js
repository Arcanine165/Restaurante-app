import React from 'react'
import { menu } from '../data/menu'
import { Footer } from './Footer'
import { Platillo } from './Platillo'
export const Menu = () => {
  return (
    <div>
        {menu.map((platillo => {
            return <Platillo key = {platillo.id} platillo={platillo}/>
        }))}
        
    </div>
  )
}
