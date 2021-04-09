import React from 'react';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/Logo/crown.svg'
import { auth } from '../../firebase/firebase.utils'

import { connect } from 'react-redux';
import { hiddenSelector } from '../../Redux/cart/cart.selectors';
import { currentUserSelector } from '../../Redux/User/user.selectors';
 
import Cart from '../Cart/cart.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';

const Header = ({ currentUser, history, hidden}) => (
    <div className='header'>
        <div className='logo-container'>
            <div className='logo' onClick={()=> history.push('')}><Logo /></div>
        </div>
        <div className='options'>
            <div className='option'>
                <Link to='./shop'>SHOP</Link>
            </div>
            <div className='option'>
                <Link to='./contact'>CONTACT</Link>
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
    currentUser: currentUserSelector(state),
    hidden : hiddenSelector(state)
})



export default withRouter(connect(mapStateToProps)(Header));