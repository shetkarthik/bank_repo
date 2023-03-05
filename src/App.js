import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Components/home';
import { Login } from './Components/login';
import { Manage } from './Components/manage';
import { Register } from './Components/register';
import { Navbar } from './Components/Navbar/navbar';
import { ToastContainer } from 'react-toastify';
const App = () => {

  return (
    <>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route index element={<Navbar />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </>
  );
}

export default App;