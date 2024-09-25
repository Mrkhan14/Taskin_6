import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { IS_LOGIN } from '../../constants/index';

const Header = () => {
   const handleLogout = () => {
      localStorage.removeItem(IS_LOGIN);
   };
   return (
      <header className='header-block'>
         <div>
            <div className='logo'>
               <img className='logo-img' src='/logo.png' alt='' />
               <span>Tinch</span>
            </div>

            <NavLink to='/login' onClick={handleLogout}>
               <img src='/icons/LoginIcon.svg' alt='' />
            </NavLink>
         </div>
      </header>
   );
};

export default Header;
