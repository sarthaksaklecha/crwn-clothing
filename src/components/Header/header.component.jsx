import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/Logo/crown.svg'
import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser }) => (
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
            {
                currentUser ?
                <div className='option' onClick={() =>auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='./signin'>SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header;