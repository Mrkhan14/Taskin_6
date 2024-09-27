import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
   return (
      <footer>
         <ul className='nav d-flex justify-content-start align-items-center'>
            <li className='nav-item me-4'>
               <NavLink className='nav-link' to='/'>
                  <img src='/icons/HomeIcon.svg' alt='' />
                  <span className='name-block'>Home</span>
               </NavLink>
            </li>
            <li className='nav-item me-4'>
               <NavLink className='nav-link' to='/expenses'>
                  <img src='/icons/ExpensesIcon.svg' alt='' />
                  <span className='name-block'>Expenses</span>
               </NavLink>
            </li>
            <li className='nav-item me-4'>
               <NavLink className='nav-link' to='/earnings'>
                  <img src='/icons/EarningsIcon.svg' alt='' />
                  <span className='name-block'>Earnings</span>
               </NavLink>
            </li>
            <li className='nav-item me-4'>
               <NavLink className='nav-link' to='/debts-page'>
                  <img src='/icons/LendingIcon.svg' alt='' />
                  <span className='name-block'>Lending</span>
               </NavLink>
            </li>
            <li className='nav-item me-4'>
               <NavLink className='nav-link' to='/borrowings'>
                  <img src='/icons/BorrowingIcon.svg' alt='' />
                  <span className='name-block'>Borrowing</span>
               </NavLink>
            </li>
         </ul>
      </footer>
   );
};

export default Footer;
