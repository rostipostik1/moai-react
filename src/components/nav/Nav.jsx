import React, { useState } from 'react'
import { navMenu } from '../../utils/data'
import { Link, NavLink } from 'react-router'

export const Nav = () => {
  const [activeId, setActiveId] = useState(1);
  const handleClick = (id) => {
    setActiveId(id);
  };

  return (
    <nav className="nav">
      <ul className="menu">
        {navMenu && (
          navMenu.map(item => (
            <li key={item.id} className="menu-item">
              <NavLink 
                to={item.to} 
                className={ ({isActive}) => `menu-link ${isActive ? 'active' : ''}` }
                onClick={() => handleClick(item.id)}
              >{item.label}</NavLink>
            </li>
          ))
        )}

      </ul>
      <a href="" className="header-link ">Get a Quote</a>
    </nav>
  )
}
