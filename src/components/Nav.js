import React from 'react'
import logo from '../assets/logo.png'
import TextInput from './TextInput'
import Button from './Button'
import getAnimals from '../api'
import { useRef, useState } from 'react';

const Nav = () => {
    const inputRef = useRef(null);

    const [updated, setUpdated] = useState('');
  
    const handleClick = () => {
      // 👇 "inputRef.current.value" is input value
      setUpdated(inputRef.current.value)
      console.log(updated)
    };
  

    return(
        <nav className='flex items-center justify-center pt-5'>
            <img src={logo} alt="busca animal logo" className="w-60 m-1"/>
            
            <ul>
                <li className="md:inline-block md:ml-10 ml-5">
                    <TextInput ref={inputRef} />
                </li>
                <li className="md:inline-block md:ml-10 ml-5">
                    <Button text={'Buscar'} onClick={handleClick} />
                </li>

            </ul>
        </nav>
    )
}

export default Nav