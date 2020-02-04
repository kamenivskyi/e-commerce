import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => {
  return (
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
          </div>
        </header>
      </div>
    </div>
  );
};
export default Header;
