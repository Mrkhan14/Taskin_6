import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';

const LendingPage = () => {
   const { debtId } = useParams();
   const [status, setStatus] = useState('LOADING');
   const [debt, setDebt] = useState(null);

   useEffect(() => {
      const getData = async () => {
         await setStatus('LOADING');
         try {
            const debts = JSON.parse(localStorage.getItem('debts'));
            const newDebts = Array.isArray(debts) ? debts : [];
            const debt = newDebts.find(debt => debt?.id === debtId);
            setDebt(debt);
            const status = debt ? 'SUCCESS' : 'ERROR';
            setStatus(status);
         } catch {
            setStatus('ERROR');
         }
      };
      getData();
   }, [debtId]);
   return status === 'LOADING' ? (
      <div>Loading...</div>
   ) : status === 'SUCCESS' ? (
      <div className='m-4'>
         <Card style={{ width: '100%' }}>
            <Card.Body>
               <Card.Title>
                  {debt?.firstName} {debt?.lastName}
               </Card.Title>
               <ListGroup variant='flush'>
                  <ListGroup.Item>{debt?.phoneNumber}</ListGroup.Item>
                  <ListGroup.Item>{debt?.debt} $</ListGroup.Item>
                  <ListGroup.Item>{debt?.date}</ListGroup.Item>
               </ListGroup>
            </Card.Body>
         </Card>
      </div>
   ) : (
      <div>Not found</div>
   );
};

export default LendingPage;
