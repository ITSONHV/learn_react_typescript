import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate, useNavigate, Link, Outlet } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from "./pages/Home";
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';

function App() {
  const navigate = useNavigate();
  let checkShowMenu = true;
  const isLogin = localStorage.getItem("isLoggedIn");
  if(isLogin == "false"){
    checkShowMenu = false;
  }
  const logOut = () => {
    localStorage.setItem("isLoggedIn", 'false');
    navigate('/login');
  }
  return (
    <Routes>
      <Route element={
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#333', color: '#fff', padding: '10px 20px' }}>
            <header style={{ backgroundColor: "rgb(0, 123, 255)", padding: '10px 0', marginBottom: '20px' }}>
              <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px'}}>
                <h1 style={{ margin: 0, color: '#fff' }}>Tên ứng dụng</h1>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center' }}>
                  <li style={{ marginRight: '20px',visibility:checkShowMenu ? "visible" : "hidden" }}><Link to="/home" style={{ color: '#fff', textDecoration: 'none' }}>Trang chủ</Link></li>
                  <li style={{ marginRight: '20px',visibility:checkShowMenu ? "visible" : "hidden" }}><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>Giới thiệu</Link></li>
                  <li style={{ marginRight: '20px',visibility:checkShowMenu ? "visible" : "hidden" }}><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Liên hệ</Link></li>
                  <li><a onClick={logOut} style={{ color: 'red',fontWeight : "bold", textDecoration: 'none', cursor: "pointer",visibility:checkShowMenu ? "visible" : "hidden" }}>Đăng xuất</a></li>
                </ul>
              </nav>
            </header>
          <main style={{ marginTop: '50px' }}> {/* Đảm bảo nội dung không bị che phủ bởi header */}
            <Outlet />
          </main>
          <footer style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "rgb(0, 123, 255)", color: '#fff', padding: '10px 20px' }}>
            <p>Footer</p>
          </footer>
        </div>
      }>
        <Route path='/' element={<Navigate to="/login" replace />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
      </Route>
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
