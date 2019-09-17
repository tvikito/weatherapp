import React from 'react';

import { ThemeProvider } from 'styled-components'

import Weather from './components/Weather'
import Header from './components/styled/Header';

const theme = {
  
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Weather />
      </Header>
    </ThemeProvider>
  );
}

export default App;
