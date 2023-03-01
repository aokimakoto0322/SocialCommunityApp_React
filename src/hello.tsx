import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './compornents/Hello'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Hello />
    </React.StrictMode>
)