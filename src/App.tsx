import React, { FC } from 'react';
import ThemeProvider1 from './style/themeProvider';
import Layout from './layout';

const App: FC = () => (
  <ThemeProvider1>
    <Layout />
  </ThemeProvider1>

);
export default App;
