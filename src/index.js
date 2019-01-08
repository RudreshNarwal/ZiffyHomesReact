import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import bugsnag from '@bugsnag/js'
import bugsnagReact from '@bugsnag/plugin-react'

const bugsnagClient = bugsnag('9676fa94c1678fa7f90e456add5505c1')
bugsnagClient.use(bugsnagReact, React)

// wrap your entire app tree in the ErrorBoundary provided
const ErrorBoundary = bugsnagClient.getPlugin('react')
// For testing bugsnag remove comment from next line. It will generate test error in your React App
// bugsnagClient.notify(new Error('Test error'))


ReactDOM.render(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
