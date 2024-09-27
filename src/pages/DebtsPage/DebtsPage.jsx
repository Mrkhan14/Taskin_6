import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import LendingCard from '../../components/card/LendingCard';
import PlusIcon from '../../components/UI/PlusIcon';
const defaultDebt = {
   id: 0,
   firstName: '',
   lastName: '',
   phoneNumber: '+998',
   debt: '',
   date: '',
};
const DebtsPage = () => {
   const [show, setShow] = useState(false);
   const [debts, setDebts] = useState([]);
   const [debt, setDebt] = useState(defaultDebt);
   const [validated, setValidated] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [search, setSearch] = useState('');
   const [selected, setSelected] = useState(null);

   const handleSubmit = e => {
      e.preventDefault();
      if (e.currentTarget.checkValidity()) {
         if (selected === null) {
            const newDebts = [...debts, { ...debt, id: v4() }];
            setDebts(newDebts);
            localStorage.setItem('debts', JSON.stringify(newDebts));
            toast.success("Malumot qo'shildi");
         } else {
            const newDebts = debts.map(item =>
               item.id === selected ? debt : item
            );
            localStorage.setItem('debts', JSON.stringify(newDebts));
            setDebts(newDebts);
            toast.success("Malumot o'zgardi");
         }
         setDebt(defaultDebt);
         setValidated(false);
         handleClose();
      } else {
         setValidated(true);
         toast.error('Erverda xatolik bor');
      }
   };

   const handleChange = e => {
      setDebt({ ...debt, [e.target.id]: e.target.value });
   };

   const deleteData = id => {
      let newDebts = debts.filter(debt => debt.id !== id);
      if (newDebts) {
         setDebts(newDebts);
         localStorage.setItem('debts', JSON.stringify(newDebts));
         toast.success("Malumot o'chrildi");
      } else {
         toast.error('Erverda xatolik bor');
      }
   };

   const editData = id => {
      const debtFound = debts.find(debt => debt.id === id);
      setSelected(id);
      setDebt(debtFound);
      handleShow();
   };

   const openModal = () => {
      handleShow();
      setSelected(null);
      setDebt(defaultDebt);
   };

   useEffect(() => {
      const debts = JSON.parse(localStorage.getItem('debts'));
      const newDebts = Array.isArray(debts) ? debts : [];
      setDebts(newDebts);
   }, []);

   return (
      <div>
         <div>
            <input
               value={search}
               type='text'
               className='form-control'
               placeholder='Searching'
               onChange={e => setSearch(e.target.value)}
            />
         </div>

         {debts
            .filter(
               debt =>
                  debt.firstName
                     .toLowerCase()
                     .includes(search.trim().toLowerCase()) ||
                  debt.lastName
                     .toLowerCase()
                     .includes(search.trim().toLowerCase())
            )
            .map((item, i) => (
               <LendingCard
                  key={i}
                  {...item}
                  deleteData={deleteData}
                  editData={editData}
                  path='debts-page'
                  data={item?.debt}
               />
            ))}

         <button
            onClick={openModal}
            className='btn btn-outline-warning ui-style mx-3 rounded-circle'
         >
            <PlusIcon></PlusIcon>
         </button>

         <Modal show={show} onHide={handleClose}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
               <Modal.Header closeButton>
                  <Modal.Title>Debt data</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Form.Group className='mb-3' controlId='firstName'>
                     <Form.Label>First name</Form.Label>
                     <Form.Control
                        required
                        onChange={handleChange}
                        value={debt.firstName}
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
                        value={debt.lastName}
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
                        value={debt.phoneNumber}
                        type='text'
                     />
                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                     <Form.Control.Feedback type='invalid'>
                        Please fill!
                     </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='debt'>
                     <Form.Label>Debt</Form.Label>
                     <Form.Control
                        required
                        onChange={handleChange}
                        value={debt.debt}
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
                        value={debt.date}
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
};

export default DebtsPage;
