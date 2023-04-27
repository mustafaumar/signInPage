import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="660581844340-7fu46bi13e44gptk7n4p88cmvtfo9cm7.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
