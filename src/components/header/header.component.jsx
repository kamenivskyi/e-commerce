import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header-wrapper'>
    <div className='container'>
      <header className='header'>
        <Link to='/' className='logo-containers'>
          <Logo className='logo' />
        </Link>
        <div className='options'>
          <Link to='/shop' className='option'>
            SHOP
          </Link>
          <Link to='/shop' className='option'>
            CONTACT
          </Link>
          {currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
          )}
        </div>
      </header>
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
