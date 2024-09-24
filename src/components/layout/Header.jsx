import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
   return (
      <header>
         <Container>
            <ul className='nav d-flex justify-content-start'>
               <li className='nav-item me-4'>
                  <NavLink className='nav-link' to='/'>
                     Home
                  </NavLink>
               </li>
               <li className='nav-item me-4'>
                  <NavLink className='nav-link' to='/expenses'>
                     expenses
                  </NavLink>
               </li>
               <li className='nav-item me-4'>
                  <NavLink className='nav-link' to='/earnings'>
                     earnings
                  </NavLink>
               </li>
               <li className='nav-item me-4'>
                  <NavLink className='nav-link' to='/lending'>
                     lending
                  </NavLink>
               </li>
               <li className='nav-item me-4'>
                  <NavLink className='nav-link' to='/borrowing'>
                     borrowing
                  </NavLink>
               </li>
            </ul>
         </Container>
      </header>
   );
};

export default Header;
