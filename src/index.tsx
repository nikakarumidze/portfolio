import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';

const container: HTMLDivElement = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica',
  },
});

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
