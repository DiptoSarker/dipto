import React from 'react';
import "./Navbar.css";
import {MenuList} from "./MenuList";
import {NavLink} from "react-router-dom";

const Navbar = () => {

   const menuList = MenuList.map(({url, title}, index) => {
     return (
       <li key={index}>
         <a exact={true} href={url} >{title}</a>
       </li>
     );
   });
  return (
    <nav>
      <div className='logo'>
        Dip<font>to.</font>
      </div>
      <ul className='menu-list'>
          {menuList}
      </ul>
    </nav>
  );
}

export default Navbar;