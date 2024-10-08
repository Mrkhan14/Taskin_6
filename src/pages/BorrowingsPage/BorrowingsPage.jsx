import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import PlusIcon from '../../components/UI/PlusIcon';
import LendingCard from '../../components/card/LendingCard';
const defaultBorrowing = {
   id: 0,
   firstName: '',
   lastName: '',
   phoneNumber: '+998',
   borrowing: '',
   date: '',
};
function BorrowingPage() {
   const [show, setShow] = useState(false);
   const [borrowings, setBorrowings] = useState([]);
   const [borrowing, setBorrowing] = useState(defaultBorrowing);
   const [validated, setValidated] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [search, setSearch] = useState('');
   const [selected, setSelected] = useState(null);

   const handleSubmit = e => {
      e.preventDefault();
      if (e.currentTarget.checkValidity()) {
         if (selected === null) {
            const newUpdateBorrowings = [
               ...borrowings,
               { ...borrowing, id: v4() },
            ];
            setBorrowings(newUpdateBorrowings);
            localStorage.setItem(
               'borrowings',
               JSON.stringify(newUpdateBorrowings)
            );
            toast.success("Malumot qo'shildi");
         } else {
            const newAddBorrowings = borrowings.map(item =>
               item.id === selected ? borrowing : item
            );
            localStorage.setItem(
               'borrowings',
               JSON.stringify(newAddBorrowings)
            );
            setBorrowings(newAddBorrowings);
            toast.success("Malumot o'zgardi");
         }
         setBorrowing(defaultBorrowing);
         setValidated(false);
         handleClose();
      } else {
         setValidated(true);
         toast.error('Erverda xatolik bor');
      }
   };

   const handleChange = e => {
      setBorrowing({ ...borrowing, [e.target.id]: e.target.value });
   };

   const deleteData = id => {
      let newBorrowings = borrowings.filter(borrowing => borrowing.id !== id);
      if (newBorrowings) {
         setBorrowings(newBorrowings);
         localStorage.setItem('borrowings', JSON.stringify(newBorrowings));
         toast.success("Malumot o'chrildi");
      } else {
         toast.error('Erverda xatolik bor');
      }
   };

   const editData = id => {
      const moneyFound = borrowings.find(borrowing => borrowing.id === id);
      setSelected(id);
      setBorrowing(moneyFound);
      handleShow();
   };

   const openModal = () => {
      handleShow();
      setSelected(null);
      setBorrowing(defaultBorrowing);
   };

   useEffect(() => {
      const borrowings = JSON.parse(localStorage.getItem('borrowings'));
      const newData = Array.isArray(borrowings) ? borrowings : [];
      setBorrowings(newData);
   }, []);
   return (
      <div>
         <button
            onClick={openModal}
            className='btn btn-outline-warning ui-style mx-3 rounded-circle'
         >
            <PlusIcon></PlusIcon>
         </button>

         <div>
            <input
               value={search}
               type='text'
               className='form-control'
               placeholder='Searching'
               onChange={e => setSearch(e.target.value)}
            />
         </div>

         {borrowings
            .filter(
               borrowing =>
                  borrowing.firstName
                     .toLowerCase()
                     .includes(search.trim().toLowerCase()) ||
                  borrowing.lastName
                     .toLowerCase()
                     .includes(search.trim().toLowerCase())
            )
            .map((item, i) => (
               <LendingCard
                  key={i}
                  {...item}
                  path='borrowings'
                  data={item?.borrowing}
                  deleteData={deleteData}
                  editData={editData}
               />
            ))}

         <Modal show={show} onHide={handleClose}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
               <Modal.Header closeButton>
                  <Modal.Title>borrowing data</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Form.Group className='mb-3' controlId='firstName'>
                     <Form.Label>First name</Form.Label>
                     <Form.Control
                        required
                        onChange={handleChange}
                        value={borrowing.firstName}
                        type='text'
                     />
                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                     <Form.Control.Feedback type='invalid'>
                        Please fill!
                     </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='lastName'>
                     <Form.Label>Last name</Form.Label>
                     <Form.Control
                        required
                        onChange={handleChange}
                        value={borrowing.lastName}
                        type='text'
                     />
                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                     <Form.Control.Feedback type='invalid'>
                        Please fill!
                     </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='phoneNumber'>
                     <Form.Label>Phone number</Form.Label>
                     <Form.Control
                        required
                        onChange={handleChange}
                        value={borrowing.phoneNumber}
                        type='text'
                     />
                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                     <Form.Control.Feedback type='invalid'>
                        Please fill!
                     </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='borrowing'>
                     <Form.Label>borrowing</Form.Label>
                     <Form.Control
                        required
                        onChange={handleChange}
                        value={borrowing.borrowing}
                        type='number'
                     />
                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                     <Form.Control.Feedback type='invalid'>
                        Please fill!
                     </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='date'>
                     <Form.Label>Date</Form.Label>
                     <Form.Control
                        required
                        onChange={handleChange}
                        value={borrowing.date}
                        type='date'
                     />
                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                     <Form.Control.Feedback type='invalid'>
                        Please fill!
                     </Form.Control.Feedback>
                  </Form.Group>
               </Modal.Body>
               <Modal.Footer>
                  <Button variant='secondary' onClick={handleClose}>
                     Close
                  </Button>
                  <Button type='submit' variant='primary'>
                     {selected === null ? 'Add' : 'Update'}
                  </Button>
               </Modal.Footer>
            </Form>
         </Modal>
      </div>
   );
}

export default BorrowingPage;
