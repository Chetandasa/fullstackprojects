import React from 'react';
import  { createRoot }  from 'react-dom/client';

import App from './App';
import './index.css';

// this is googlechrome one 
const root = createRoot(document.getElementById('root'));
root.render(
    <App />
);


// this is mine 
// createRoot(document.getElementById('root')).render(<App />);

// JSMastery sir 
// ReactDom.render(<App />,document.getElementById('root'));