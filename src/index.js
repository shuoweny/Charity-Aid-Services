import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@aws-amplify/ui-react';
import './index.css';
import App from './App';
import { Amplify, Auth, Storage, API } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
Auth.configure(config);
Storage.configure(config);
API.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);