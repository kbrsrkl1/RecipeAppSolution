import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../companents/nav/Navbar';
import { GlobalStyles } from '../companents/globalStyles/GlobalStyles';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import About from '../pages/about/About';
import Detail from '../pages/detail/Detail';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
    <GlobalStyles/>
    <Login/>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="about" element={<PrivateRouter/>}>
            <Route path="" element={<About/>}/>
        </Route>
        <Route path="detail" element={<PrivateRouter/>}>
            <Route path="" element={<Detail/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
