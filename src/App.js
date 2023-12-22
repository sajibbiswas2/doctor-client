import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment';
import Login from './components/Login/Login';
import { createContext, useEffect, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Loading from './components/Loading/Loading';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';
import AllDoctros from './components/allDoctors/AllDoctros';
import DashboardMain from './components/Dashboard/DashboardMain';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Dashboard/Profile/Profile';
import UserAppointments from './components/Dashboard/Profile/UserAppointments/UserAppointments';
import AddAdmin from './components/AddAdmin/AddAdmin';
import Notice from './components/Notice/Notice';
import Contact from './components/Home/Contact/Contact';
export const userContext = createContext();


function App() {


  const [loggedInUser, setLoggedInUser] = useState({})
  const [isDoctor, setIsDoctor] = useState(false)
  useEffect(() => {
    fetch('https://server-six-wine.vercel.app/isDoctor', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(data => setIsDoctor(data))
  }, [])
  
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={ <Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/loading' element={<Loading></Loading>}></Route>
          <Route path='/profile' element={<PrivateRoute><Profile></Profile></PrivateRoute>}></Route>
          <Route path='/userAppointments' element={<PrivateRoute><UserAppointments></UserAppointments></PrivateRoute>}></Route>
          <Route path='/addAdmin' element={<PrivateRoute><AddAdmin></AddAdmin></PrivateRoute>}></Route>
          <Route path='/notice' element={<PrivateRoute><Notice></Notice></PrivateRoute>}></Route>
          <Route path='/dashboard/appointment' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}></Route>
          <Route path='/allPatients' element={<PrivateRoute><AllPatients></AllPatients></PrivateRoute>}></Route>
          <Route path='/allDoctors' element={<PrivateRoute><AllDoctros></AllDoctros></PrivateRoute>}></Route>
          <Route path='/addDoctor' element={<PrivateRoute><AddDoctor></AddDoctor></PrivateRoute>}></Route>

          <Route path='/dashboardMain' element={<PrivateRoute><DashboardMain></DashboardMain></PrivateRoute>}></Route>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/appointment' element={<PrivateRoute><Appointment></Appointment></PrivateRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
