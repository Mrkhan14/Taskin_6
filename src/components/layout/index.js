import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
   return (
      <Fragment>
         <div className='app-project'>
            <Header />
            <main className='position-relative'>
               <Outlet />
            </main>
            <Footer />
         </div>
      </Fragment>
   );
};

export default Layout;
