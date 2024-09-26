import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { v4 } from 'uuid'
// Components
import Layout from './components/layout';
import Loading from './components/UI/Loading';
import { IS_LOGIN } from './constants/index';

import './App.css';
// Routes
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ExpensesPage = lazy(() => import('./pages/ExpensesPage/ExpensesPage'));
const EarningsPage = lazy(() => import('./pages/EarningsPage/EarningsPage'));
const DebtsPage = lazy(() => import('./pages/DebtsPage/DebtsPage'));
const DebtPage = lazy(() => import('./pages/DebtsPage/DebtPage'));
const BorrowingsPage = lazy(() =>
   import('./pages/BorrowingsPage/BorrowingsPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const defaultDebt = {
  firstName: '',
  lastName: '',
  phoneNumber: "+998",
  debt: '',
  date: ''
}


function App() {
   const [isLogin, setIsLogin] = useState(localStorage.getItem(IS_LOGIN));
   const [show, setShow] = useState(false);
  const [ debts, setDebts ] = useState( [] );
  const [ debt, setDebt ] = useState( defaultDebt )
   const [ validated, setValidated ] = useState( false );
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
     const [ search, setSearch ] = useState( '' )
  const [ selected, setSelected ] = useState( null );


   const handleSubmit = (e) => { 
      e.preventDefault();
      if ( e.currentTarget.checkValidity() ) {
         if ( selected === null ) {
         setDebts( [ ...debts, { ...debt, id: v4() } ] )
         } else {
         const newDebts = debts.map( item => debt.id === selected ? debt : item )
            setDebts( newDebts )
         }
         handleClose()
         setDebt( defaultDebt )
         setValidated( false )
      } else {
         setValidated( true )
      } 
   }
  
   const handleChange = (e) => {
      setDebt( { ...debt, [ e.target.id ]: e.target.value } )
   }
   

  const deleteDebt = ( id ) => {
      let newDebts = debts.filter( debt => debt.id !== id );
      setDebts( newDebts )
   }

  const editDebt = ( id ) => {
      const debtFound = debts.find( debt => debt.id === id );
      setSelected( id );
      setDebt( debtFound );
      handleShow();
   }

   const openModal = () => {
      handleShow();
      setSelected( null );
      setDebt( defaultDebt )
   }

   const debtsPageProps = { debts, show, validated, debt, selected,  search, handleClose, handleShow, handleSubmit, handleChange, deleteDebt, editDebt, openModal, setSearch }
   return (
      <Suspense
         fallback={<Loading heightStyle='100vh' classStyle='bg-primary' />}
      >
         <BrowserRouter>
            <ToastContainer />
            <Routes>
               <Route
                  path='login'
                  element={<LoginPage setIsLogin={setIsLogin}></LoginPage>}
               ></Route>
               <Route element={<Layout />}>
                  <Route
                     index
                     element={isLogin ? <HomePage /> : <Navigate to='login' />}
                  ></Route>
                  <Route
                     path='expenses'
                     element={
                        isLogin ? <ExpensesPage /> : <Navigate to='login' />
                     }
                  ></Route>
                  <Route
                     path='earnings'
                     element={
                        isLogin ? <EarningsPage /> : <Navigate to='login' />
                     }
                  ></Route>
                  <Route
                     path='lendings'
                     element={
                        isLogin ? <DebtsPage  {...debtsPageProps} /> : <Navigate to='login' />
                     }
                  ></Route>
                  <Route
                     path='lendings/:lendingId'
                     element={
                        isLogin ? <DebtPage  /> : <Navigate to='login' />
                     }
                  ></Route>
                  <Route
                     path='borrowings'
                     element={
                        isLogin ? <BorrowingsPage /> : <Navigate to='login' />
                     }
                  ></Route>
               </Route>
               <Route path='*' element={<NotFoundPage />} />
            </Routes>
         </BrowserRouter>
      </Suspense>
   );
}

export default App;
