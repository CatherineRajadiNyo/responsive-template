import React, { FC } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Themes from './theme';
import Layout from './layout';

const App: FC = () => (
  <ThemeProvider theme={Themes}>
    <Layout />
  </ThemeProvider>
);
export default App;
