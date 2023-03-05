import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './compornents/Hello'
import Name from './compornents/Name'
import Message from './compornents/Message';
import ContainerSample from './compornents/ContainerSample'
import ContextSample from './compornents/ContextSample'
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/hello' element={<Hello />} />
        <Route path='/name' element={<Name />} />
        <Route path='/message' element={<Message />} />
        <Route path='/container' element={<ContainerSample />} />
        <Route path='/context' element={<ContextSample />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
