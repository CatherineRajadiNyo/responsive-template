import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  topbar: {
    backgroundColor: '#4B5B1D',
    height: '50px',
    textAlign: 'center',
  },
}));

const Topbar:FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.topbar} alignItems="center">
      <Grid item xs={12}>
        Topbar
      </Grid>
    </Grid>
  );
};

export default Topbar;
