import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/context/Auth';
import { ToastContainer } from 'react-toastify';
// import  { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <AuthProvider>
        <BrowserRouter>
         <App />
         <ToastContainer position="top-right" />
         </BrowserRouter>
     </AuthProvider> 
);

