import '@babel/polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './rt';

const rootElement = document.querySelector('#root');
ReactDOM.render(<Root />, rootElement);
