import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// Components
import Layout from './components/layout';
import Loading from './components/UI/Loading';
import { IS_LOGIN } from './constants/index';

import './App.css';
// Routes
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ExpensesPage = lazy(() => import('./pages/ExpensesPage/ExpensesPage'));
const EarningsPage = lazy(() => import('./pages/EarningsPage/EarningsPage'));
const LendingsPage = lazy(() => import('./pages/LendingsPage/LendingsPage'));
const LendingPage = lazy(() => import('./pages/LendingsPage/LendingPage'));
const BorrowingsPage = lazy(() =>
   import('./pages/BorrowingsPage/BorrowingsPage')
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
                     path='lendings'
                     element={
                        isLogin ? <LendingsPage /> : <Navigate to='login' />
                     }
                  ></Route>
                  <Route
                     path='lendings/:lendingId'
                     element={
                        isLogin ? <LendingPage /> : <Navigate to='login' />
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
