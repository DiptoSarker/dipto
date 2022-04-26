import React,{useState} from 'react';
import "./Navbar.css";
import {MenuList} from "./MenuList";
import {NavLink} from "react-router-dom";

const Navbar = () => {
   const [clicked, setClicked] = useState(false);
   const menuList = MenuList.map(({url, title}, index) => {
     return (
       <li key={index}>
         <a  href={url}> {title} </a>
       </li>
     );
   });

   const handleClick = ()=>{
     setClicked(!clicked);
   }
 
   return (
    <nav>
      <div className='logo'>
        Dip<font>to.</font>
      </div>
      <div className='menu-icon' onClick={handleClick}>
         <i className= {clicked? "fa-solid fa-xmark" : "fa-solid fa-bars"} ></i>
      </div>
      <ul className={clicked?'menu-list' : 'menu-list close'}>
          {menuList}
      </ul>
    </nav>
  );
}

export default Navbar;