import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// Components
import Layout from './components/layout';
import Loading from './components/UI/Loading';
// Routes
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ExpensesPage = lazy(() => import('./pages/ExpensesPage/ExpensesPage'));
const EarningsPage = lazy(() => import('./pages/EarningsPage/EarningsPage'));
const LendingPage = lazy(() => import('./pages/LendingPage/LendingPage'));
const BorrowingPage = lazy(() => import('./pages/BorrowingPage/BorrowingPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
function App() {
   return (
      <Suspense
         fallback={<Loading heightStyle='100vh' classStyle='bg-primary' />}
      >
         <BrowserRouter>
            <Routes>
               <Route element={<Layout />}>
                  <Route index element={<HomePage></HomePage>}></Route>
                  <Route
                     path='expenses'
                     element={<ExpensesPage></ExpensesPage>}
                  ></Route>
                  <Route
                     path='earnings'
                     element={<EarningsPage></EarningsPage>}
                  ></Route>
                  <Route
                     path='lending'
                     element={<LendingPage></LendingPage>}
                  ></Route>
                  <Route
                     path='borrowing'
                     element={<BorrowingPage></BorrowingPage>}
                  ></Route>
               </Route>
               <Route path='*' element={<NotFoundPage />} />
            </Routes>
         </BrowserRouter>
      </Suspense>
   );
}

export default App;
