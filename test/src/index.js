import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const fiber = { ...root._internalRoot };
// console.log(fiber);
// console.log(fiber.current);
// console.log(fiber.current.child);

root.render(
    <App node={fiber.current}/>
);

