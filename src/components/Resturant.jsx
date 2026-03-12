import React, { useState } from 'react'
import './Style.css'
import Menu from './Menu'
import Card from './Card'
import Navbar from './Navbar'

const uniqueList = [...new Set(Menu.map((currelem)=>{
  return currelem.category;
})),"All",]

const Resturant = () => {
    const [menuData,setMenuData] = useState(Menu)
    const [menuBar,setMenuBar]=useState(uniqueList)
    const filterItems =(category)=>{
       if(category=== "All"){
        setMenuData(Menu)
        return;
       }
        const updatedList = Menu.filter((card)=>{
            return card.category === category;
        })
        setMenuData(updatedList);
    }
  return (
   
    <>
    <h1>Our Menu</h1>
    <p className="subtitle">Fresh · Local · Delicious</p>
    <Navbar filterItems={filterItems} menuBar={menuBar} />
    <div className='flex flex-wrap gap-20 justify-center'>
     <Card menuData={menuData}/>
    </div>
    </>
  )
}

export default Resturant
