import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const LendingCard = props => {
   const {
      id,
      firstName,
      lastName,
      phoneNumber,
      debt,
      date,
      deleteDebt,
      editDebt,
   } = props;
   return (
      <div className='user'>
         <div className='user-top p-3 d-flex justify-content-between align-items-center'>
            <div className='user-name'>
               {firstName} {lastName}
            </div>
            <div className='btns'>
               <Link to={`/lendings/${id}`} className='btn btn-outline-primary'>
                  M
               </Link>
               <button
                  className='btn btn-outline-warning mx-3'
                  onClick={() => editDebt(id)}
               >
                  E
               </button>
               <button
                  className='btn btn-outline-danger'
                  onClick={() => deleteDebt(id)}
               >
                  D
               </button>
            </div>
         </div>
         <div className='p-3 d-flex justify-content-between align-items-center'>
            <div>
               phoneNumber: <b>{phoneNumber}</b>
            </div>
            <div>
               debt: <b>{debt}</b>
            </div>
            <div>
               date: <b>{date}</b>
            </div>
         </div>
      </div>
   );
};

LendingCard.prototype = {
   id: PropTypes.number,
   bebt: PropTypes.number,
   firstName: PropTypes.string,
   lastName: PropTypes.string,
   phoneNumber: PropTypes.string,
};
export default LendingCard;
