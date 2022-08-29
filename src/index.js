import React from 'react';
import ReactDOM from 'react-dom';
import App from './setup/App';
import { AppProvider } from './setup/context'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

