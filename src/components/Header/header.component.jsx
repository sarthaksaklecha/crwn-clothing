import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/Logo/crown.svg'

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <Link className='logo' to='./'><Logo /></Link>
        </div>
        <div className='options'>
            <div className='option'>
                <Link to='./shop'>SHOP</Link>
            </div>
            <div className='option'>
                <Link>CONTACT</Link>
            </div>
        </div>
    </div>
)

export default Header;