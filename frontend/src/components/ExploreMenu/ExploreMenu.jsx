import React from 'react'
import './ExploreMenu.css'
import {menu_list} from "../../assets/frontend_assets/assets"
const ExploreMenu = () => {
  return (
  <>
    <div className="menu">
        <h1>food item</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, atque.</p>
        <div className="menu-items">
            {menu_list.map((item,index) =>{
                return(
                    <div className="single-menu-item" key={index}>
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  </>
  )
}

export default ExploreMenu
