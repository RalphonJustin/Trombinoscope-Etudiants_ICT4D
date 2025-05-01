import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import App from './App.jsx';
import StudentsPage from './pages/StudentsPage';
import StudentDetail from './components/StudentDetail';
//import MobileVersionPage from './pages/MobileVersionPage';
import './index.css';

const hideSplashScreen = () => {
  const splashScreen = document.getElementById('splash-screen');
  if (splashScreen) {
    splashScreen.style.opacity = '0';
    setTimeout(() => {
      splashScreen.style.display = 'none';
    }, 500); // Transition de 500ms
  }
};

hideSplashScreen();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<App />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/student/:id" element={<StudentDetail />} />
      
    </Routes>
  </BrowserRouter>
);