import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function HomePage() {
   const borrowings = JSON.parse(localStorage.getItem('borrowings'));
   const newBorrowings = Array.isArray(borrowings) ? borrowings : [];
   const totalBorrowing = newBorrowings.reduce((total, item) => {
      total += parseInt(item?.borrowing);
      return total;
   }, 0);

   const debts = JSON.parse(localStorage.getItem('debts'));
   const newDebts = Array.isArray(debts) ? debts : [];
   const totalDebts = newDebts.reduce((total, item) => {
      total += parseInt(item?.debt);
      return total;
   }, 0);

   return (
      <div className='p-3'>
         <Row>
            <Col className='item-home debts m-2 d-flex justify-content-between'>
               <div>
                  <div className='title'>Debts Total</div>
                  <div className='total'>{totalDebts}</div>
               </div>
               <img src='/icons/LendingIcon.svg' alt='' />
            </Col>
            <Col className='item-home borrowing m-2 d-flex justify-content-between'>
               <div>
                  <div className='title'>Borrowing Total</div>
                  <div className='total'>{totalBorrowing}</div>
               </div>
               <img src='/icons/BorrowingIcon.svg' alt='' />
            </Col>
         </Row>
      </div>
   );
}

export default HomePage;
