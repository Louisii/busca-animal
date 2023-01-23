import logo from '../assets/logo.png'
import Search from './Search'
import React, { useState } from 'react';

const Nav = () => {
   

    return(
        <nav className='flex items-center justify-center pt-5'>
            <img src={logo} alt="busca animal logo" className="w-60 m-1"/>
            
            <Search />
        </nav>
    )
}

export default Nav