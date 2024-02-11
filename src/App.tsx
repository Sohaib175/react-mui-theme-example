import { Box } from '@mui/material';
import * as React from 'react';
import Container from '@mui/material/Container';
import { Main } from './components/Main';

function App() {
  return (
    <Box className="app">
      <Container maxWidth="md">
        <Main />
      </Container>
    </Box>
  );
}

export default App;
