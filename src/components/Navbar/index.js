import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import whiteLogo from '../../assets/images/rosie-logo-white.png'

const Navbar = () =>
{
    return (
        <>
            <div className='navbar-container'>
                {/* container to hold links */}
                <div className='logo-container'>
                    <img alt="Rosie's Gracious Heart logo" src={whiteLogo}/>
                </div>
                <div className='navbar-links'>
                    {/* navigational links */}
                    <NavLink exact='true' to='/'>Home</NavLink>
                    <NavLink exact='true' to='about'>About</NavLink>
                    <NavLink exact='true' to='activites'>Activites</NavLink>
                    <NavLink exact='true' to='resources'>Resources</NavLink>
                    <NavLink exact='true' to='contact'>Contact</NavLink>
                    <NavLink exact='true' to='takeAction'>
                        <div className='action-button'>
                            take action
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar