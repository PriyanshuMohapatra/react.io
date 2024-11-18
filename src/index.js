import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Para from './para';
// import {secpara,thirdpara} from './para';
// import * as data from './para';
// import {add,sub,mul,div} from './calc';
// import Employee from './employee';

// const myele=(
//   <>
//     <data.secpara/>
//     <data.thirdpara/>

//   </>
// );
// const ele=(
//   <>
//     <ol>
//       <li>
//         {add(30,5)}
//       </li>
//       <li>
//         {sub(30,5)}
//       </li>
//       <li>
//         {mul(30,5)}
//       </li>
//       <li>
//         {div(30,5)}
//       </li>
//     </ol>
//   </>
// );
// root.render(ele);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
