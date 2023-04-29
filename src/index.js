import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { dark } from './theme/dark-theme';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/test-traffic-devils/">
      <ThemeProvider theme={dark}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
