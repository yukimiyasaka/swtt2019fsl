import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './index.css';

const wrapper = document.getElementById('root');
if (wrapper) {
    ReactDOM.render(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>,
        wrapper
    );
} else {
    console.error('Error on load wrapper');
}