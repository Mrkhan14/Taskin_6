// Root
import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// Constants
import { IS_LOGIN } from './constants/index';
// Components
import './App.css';
import Layout from './components/layout';
import Loading from './components/UI/Loading';
// Routes
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ExpensesPage = lazy(() => import('./pages/ExpensesPage/ExpensesPage'));
const EarningsPage = lazy(() => import('./pages/EarningsPage/EarningsPage'));
const DebtsPage = lazy(() => import('./pages/DebtsPage/DebtsPage'));
const DebtPage = lazy(() => import('./pages/DebtsPage/DebtPage'));
const BorrowingsPage = lazy(() =>
   import('./pages/BorrowingsPage/BorrowingsPage')
);
const BorrowingPage = lazy(() =>
   import('./pages/BorrowingsPage/BorrowingPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
   const [isLogin, setIsLogin] = useState(localStorage.getItem(IS_LOGIN));
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
                     path='debts-page'
                     element={isLogin ? <DebtsPage /> : <Navigate to='login' />}
                  ></Route>
                  <Route
                     path='debts-page/:debtId'
                     element={isLogin ? <DebtPage /> : <Navigate to='login' />}
                  ></Route>
                  <Route
                     path='borrowings'
                     element={
                        isLogin ? <BorrowingsPage /> : <Navigate to='login' />
                     }
                  ></Route>
                  <Route
                     path='borrowings/:borrowingId'
                     element={
                        isLogin ? <BorrowingPage /> : <Navigate to='login' />
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
