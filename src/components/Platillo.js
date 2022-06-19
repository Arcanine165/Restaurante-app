import React from 'react'

export const Platillo = ({platillo}) => {
    
  return (
    <div className='card'>
            <img src={platillo.img}/>
        <div className="card-body">
            <h5 className="card-title">{platillo.name}</h5>
            <p className="card-text">{platillo.ingredients}</p>
            <a href="#" className="btn btn-primaryColor">Ver platillo</a>
        </div>
    </div>
  )
}
