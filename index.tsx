import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './src/index.css';
import { StyledEngineProvider } from '@mui/material/styles';
import MyThemeProvider from './src/theme/MyThemeProvider';
import App from './src/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <MyThemeProvider>
        <App />
      </MyThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
