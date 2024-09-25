import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const LendingCard = props => {
   const { id, firstName, lastName, phone, bebt, date } = props;
   return (
      <div className='user'>
         <div className='user-top p-3 d-flex justify-content-between align-items-center'>
            <div className='user-name'>
               {id} {firstName} {lastName}
            </div>
            <div className='btns'>
               <Link to={`/lendings/${id}`} className='btn btn-outline-primary'>
                  M
               </Link>
               <button className='btn btn-outline-warning mx-3'>E</button>
               <button className='btn btn-outline-danger'>D</button>
            </div>
         </div>
         <div className='p-3 d-flex justify-content-between align-items-center'>
            <div>
               Phone: <b>{phone}</b>
            </div>
            <div>
               Bebt: <b>{bebt}</b>
            </div>
            <div>
               Date: <b>{date}</b>
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
   phone: PropTypes.string,
};
export default LendingCard;
