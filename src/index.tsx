import React from 'react';
import ReactDOM from 'react-dom/client';
import Uppy from '@uppy/core';
import Transloadit from '@uppy/transloadit';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const uppy = new Uppy().use(Transloadit);

root.render(
  <React.StrictMode>
    <div>Test</div>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
