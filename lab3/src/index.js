import React from 'react';
import ReactDOM from 'react-dom';
import { PhoneInput } from './PhoneInput';
import { SortTable } from './SortTable';

ReactDOM.render(
  <React.StrictMode>
    <PhoneInput style="phoneInput" />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <SortTable />
  </React.StrictMode>,
  document.getElementById('root2')
);

