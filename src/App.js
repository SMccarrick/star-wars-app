import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './components/Routes/Routes';
import theme from './assets/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
