import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
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
          <CartIcon />
        </div>
        {!hidden && <CartDropdown />}
      </header>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
