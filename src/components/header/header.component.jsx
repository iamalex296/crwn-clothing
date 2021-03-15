import React from 'react';
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as HomePageLogo } from '../../assets/home.svg'

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link style={{padding: '2px 0px'}} className='logo-container' to="/">
      <HomePageLogo style={{width: '50px', height: '50px', opacity: '80%', padding: '0px'}} className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
    </div>
  </div>
)

export default Header;