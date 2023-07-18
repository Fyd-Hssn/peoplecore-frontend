import React, { Suspense, lazy } from 'react';
import Nav from './components/common/Nav';
import Login from './components/pages/Login';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import ApplicantList from './components/pages/Recruitment';
import store from './redux/store';


const Dashboard = React.lazy(() => import('./components/pages/Dashboard'));
const Recruitment = React.lazy(() => import('./components/pages/Recruitment'));
const Employees = React.lazy(() => import('./components/pages/Employees'));
const Timekeeping = React.lazy(() => import('./components/pages/Timekeeping'));
const Performance = React.lazy(() => import('./components/pages/Performance'));

function App() {

  return (
    <Provider store={store}>
      {/**/}
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/recruitment" element={<ApplicantList />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/timekeeping" element={<Timekeeping />} />
          <Route path="/performance" element={<Performance />} />
        </Routes>
      </Suspense>


      {/*
      <Login />
      */}
    </Provider>
  );
}

export default App;
