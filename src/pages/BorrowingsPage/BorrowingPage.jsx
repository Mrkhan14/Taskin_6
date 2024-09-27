import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';

const LendingPage = () => {
   const { borrowingId } = useParams();
   const [status, setStatus] = useState('LOADING');
   const [borrowing, setBorrowing] = useState(null);

   useEffect(() => {
      const getData = async () => {
         await setStatus('LOADING');
         try {
            const borrowings = JSON.parse(localStorage.getItem('borrowings'));
            const newBorrowings = Array.isArray(borrowings) ? borrowings : [];
            const borrowing = newBorrowings.find(
               borrowing => borrowing?.id === borrowingId
            );
            setBorrowing(borrowing);
            const status = borrowing ? 'SUCCESS' : 'ERROR';
            setStatus(status);
         } catch {
            setStatus('ERROR');
         }
      };
      getData();
   }, [borrowingId]);
   return status === 'LOADING' ? (
      <div>Loading...</div>
   ) : status === 'SUCCESS' ? (
      <div className='m-4'>
         <Card style={{ width: '100%' }}>
            <Card.Body>
               <Card.Title>
                  {borrowing?.firstName} {borrowing?.lastName}
               </Card.Title>
               <ListGroup variant='flush'>
                  <ListGroup.Item>{borrowing?.phoneNumber}</ListGroup.Item>
                  <ListGroup.Item>{borrowing?.borrowing} $</ListGroup.Item>
                  <ListGroup.Item>{borrowing?.date}</ListGroup.Item>
               </ListGroup>
            </Card.Body>
         </Card>
      </div>
   ) : (
      <div>Not found</div>
   );
};

export default LendingPage;
