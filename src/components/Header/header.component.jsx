import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/Logo/crown.svg'
import { auth } from '../../firebase/firebase.utils'

import { connect } from 'react-redux';

import Cart from '../Cart/cart.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';

const Header = ({ currentUser, hidden}) => (
    <div className='header'>
        <div className='logo-container'>
            <Link className='logo' to='./'><Logo /></Link>
        </div>
        <div className='options'>
            <div className='option'>
                <Link to='./shop'>SHOP</Link>
            </div>
            <div className='option'>
                <Link to='./'>CONTACT</Link>
            </div>
            {
                currentUser ?
                <div className='option' onClick={() =>auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='./signin'>SIGN IN</Link>
            }
            <Cart />
        </div>
        {
            !hidden ? <CartDropdown /> : null 
        }
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden : state.cart.hidden
})



export default connect(mapStateToProps)(Header);