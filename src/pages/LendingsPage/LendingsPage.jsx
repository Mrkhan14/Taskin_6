import React from 'react';
import LendingCard from '../../components/card/LendingCard';
import PlusIcon from '../../components/UI/PlusIcon';

const lending = [
   {
      id: 1,
      firstName: 'Abdulahadxon',
      lastName: 'Azimov',
      phone: '+998947615559',
      bebt: 400000,
      date: '15.10.2024',
   },
   {
      id: 2,
      firstName: 'Alisher',
      lastName: 'Orenov',
      phone: '+998947615559',
      bebt: 400000,
      date: '15.10.2024',
   },
];

function LendingPage() {
   return (
      <div>
         {lending.map((item, i) => (
            <LendingCard key={i} {...item}></LendingCard>
         ))}

         <button className='btn btn-outline-warning ui-style mx-3 rounded-circle'>
            <PlusIcon></PlusIcon>
         </button>
      </div>
   );
}

export default LendingPage;
