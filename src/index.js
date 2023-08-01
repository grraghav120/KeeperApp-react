import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Clock from './useStateAssignment/Clock';
// import Welcome from './ConditionalAssignment/Welcome';
// import Home from './Question 3/Home';
// import Count from './useState/Count';
// import Car from './useStateAssignment/Car';
// import Sample from './EventHandling/Sample';
// import MultipleInput from './EventHandling/MultipleInputs';
// import Question1 from './MultipleInputsAssignment/Question1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
    {/* <Home />  */}
    {/* <Welcome /> */}
    {/* <Count /> */}
    {/* <Clock /> */}
    {/* <Car /> */}
    {/* <Sample /> */}
    {/* <MultipleInput/> */}
    {/* <Question1 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
