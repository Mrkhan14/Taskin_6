import React from 'react';
import LendingCard from '../../components/card/LendingCard';
import PlusIcon from '../../components/UI/PlusIcon';
import { Button, Form, Modal } from 'react-bootstrap'

const DebtsPage = ( { debts, show, validated, debt, selected, search, handleSubmit, handleClose, handleChange, deleteDebt, editDebt, openModal, setSearch } ) => {
   return (
      <div>


          <div>
            <input value={search} type="text" className="form-control" placeholder="Searching" onChange={( e ) => setSearch( e.target.value )} />
          </div>
       
         {debts.filter(debt => debt.firstName.toLowerCase().includes(search.trim().toLowerCase())).map((item, i) =>
            <LendingCard key={i} {...item} deleteDebt={deleteDebt} editDebt={editDebt} />)}

         <button onClick={openModal} className='btn btn-outline-warning ui-style mx-3 rounded-circle'>
            <PlusIcon></PlusIcon>
         </button>

         <Modal show={show} onHide={handleClose}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Debt data</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className='mb-3' controlId="firstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    onChange={handleChange} value={debt.firstName}
                    type="text"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId="lastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    onChange={handleChange} value={debt.lastName}
                    type="text"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId="phoneNumber">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    required
                    onChange={handleChange} value={debt.phoneNumber}
                    type="text"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId="debt">
                  <Form.Label>Debt</Form.Label>
                  <Form.Control
                    required
                    onChange={handleChange} value={debt.debt}
                    type="number"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    required
                    onChange={handleChange} value={debt.date}
                    type="date"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                {/* <Button type='submit' variant="primary">
                  {selected === null ? "Add" : "Update"}
             </Button> */}
             <Button type='submit' variant="primary">
                  Add
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
      </div>
   );
}

export default DebtsPage;
