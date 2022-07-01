import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<h1>Hello, World!</h1>)

//Root in "index.html"
const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);