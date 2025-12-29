import React, { useEffect, useState } from 'react'
import { Nav } from '../nav/Nav'
import logo from '../../assets/logo.png'
import './header.scss'
import { FaBarsStaggered, FaArrowsToCircle } from "react-icons/fa6";

const Header = () => {
  //   console.log('hello');
  const [fixed, setFixed] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleScroll = () => {
    setFixed(window.scrollY > 50)
  }

  const handleClick = () => {
    setIsOpenMenu(prev => !prev);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // console.log('afrer useefect');

  }, [])

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflowY = "hidden"; // запрещаем скролл
    } else {
      document.body.style.overflowY = ""; // возвращаем по умолчанию
    }

    // cleanup: если компонент размонтируется, убираем блокировку
    return () => {
      document.body.style.overflowY = "";
    };
  }, [isOpenMenu]);
  return (

    <header className="header header-gradient">
      <div className={`header-wrapper ${fixed ? 'fixed' : ''}`}>
        <div className="container">
          <div className="header-fixed">
            <a href="/" className="header-logo"><img src={logo} alt="logo" /></a>
            <Nav isOpenMenu={isOpenMenu} />
            <div className="mobile" onClick={handleClick}>
              {isOpenMenu ? <FaArrowsToCircle /> : <FaBarsStaggered />}
            </div>
          </div>
        </div>

      </div>
    </header>

  )
}

export default Header