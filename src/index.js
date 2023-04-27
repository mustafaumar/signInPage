import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="660581844340-b5fnafombjgcbm9n97qq9vflt4sjrg6l.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
