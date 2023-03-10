import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          p: '0 2%',
        }}
      >
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </Box>
    </>
  );
};
