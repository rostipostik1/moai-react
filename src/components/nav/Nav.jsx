import React, { useState } from 'react'
import { navMenu } from '../../utils/data'
import { Link } from 'react-router'

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
              <Link 
                to={item.to} 
                className={`menu-link ${activeId === item.id ? 'active': ''}`}
                onClick={() => handleClick(item.id)}
              >{item.label}</Link>
            </li>
          ))
        )}

      </ul>
      <a href="" className="header-link ">Get a Quote</a>
    </nav>
  )
}
