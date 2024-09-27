import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LendingPage = () => {
   const { lendingId } = useParams();
   const [status, setStatus] = useState('LOADING');
   const [debt, setDebt] = useState(null);

   useEffect(() => {
      const getData = async () => {
         await setStatus('LOADING');
         try {
            const debts = JSON.parse(localStorage.getItem('debts'));
            const newDebts = Array.isArray(debts) ? debts : [];
            const debt = newDebts.find(debt => debt?.id === lendingId);
            setDebt(debt);
            const status = debt ? 'SUCCESS' : 'ERROR';
            setStatus(status);
         } catch {
            setStatus('ERROR');
         }
      };
      getData();
   }, [lendingId]);
   return status === 'LOADING' ? (
      <div>Loading...</div>
   ) : status === 'SUCCESS' ? (
      <div>{JSON.stringify(debt)}</div>
   ) : (
      <div>Not found</div>
   );
};

export default LendingPage;
