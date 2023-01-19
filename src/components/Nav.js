import React from 'react'
import logo from '../assets/logo.png'
import TextInput from './TextInput'
import Button from './Button'

const Nav = () =>   {
    return(
        <nav className='flex items-center justify-center pt-5'>
            <img src={logo} alt="busca animal logo" className="w-60 m-1"/>
            
            <ul>
                <li className="md:inline-block md:ml-10 ml-5">
                    <TextInput />
                </li>
                <li className="md:inline-block md:ml-10 ml-5">
                    <Button text={'Buscar'} />
                </li>

            </ul>
        </nav>
    )
}

export default Nav