import React from 'react';

import GlobalStyles from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
