import React,{useState} from 'react'

import './Style.css'
const Card = ({menuData}) => {
      return(
      menuData.map((card)=>{
        
       const {id,badge,category,title,description,image} = card ;
        return (
            <div className="card" key={id}>
            <div className="card__badge">{badge}</div>
            <p className="card__category">{category}</p>
            <h2 className="card__title">{title}</h2>
            <p className="card__desc">{description}</p>
            <div className="card__divider"></div>
            <a href="#" className="card__read">Read</a>
            <img className="card__image" src={image}/>
             <button className="card__order">Order Now</button>
            </div>
        )
      })
   )
}

export default Card
