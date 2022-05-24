import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
const Display=()=>{
    return(
        <div>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </div>
        )
}
ReactDOM.render(<Display />,document.getElementById('root'));
