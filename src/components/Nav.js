import React from 'react'
import '../sass/main.scss'
import { AiOutlineHome, AiOutlineThunderbolt } from 'react-icons/ai'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { TiFolderOpen } from 'react-icons/ti'
import { RiUserLine } from 'react-icons/ri'

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__icons'>
        <button className='nav__btn'>
          <AiOutlineHome />
          <span>HOME</span>
        </button>
        <button className='nav__btn'>
          <AiOutlineThunderbolt />
          <span>TRENDING</span>
        </button>
        <button className='nav__btn'>
          <HiOutlineBadgeCheck />
          <span>VERIFIED</span>
        </button>
        <button className='nav__btn'>
          <TiFolderOpen />
          <span>COLLECTIONS</span>
        </button>
        <button className='nav__btn'>
          <RiUserLine />
          <span>ACCOUNT</span>
        </button>
      </div>
      <div className='nav__logo'>
        <div className='logo__img'>
          <img src='logo.png' alt='logo' />
        </div>
      </div>
    </nav>
  )
}

export default Nav
