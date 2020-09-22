import React, { FC } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Routes from '../routes';
import Topbar from './topbar';
import Footer from './footer';

const App: FC = () => (
  <>
    <CssBaseline />
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item container xs={12}><Topbar /></Grid>
        <Grid item container xs={12}><Routes /></Grid>
        <Grid item container xs={12} style={{ paddingBottom: 0 }}><Footer /></Grid>
      </Grid>
    </Container>
  </>
);

export default App;
