import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';

const Topbar: FC = () => {
  const theming = useTheme();
  const useStyles = makeStyles(() => createStyles({
    topbar: {
      backgroundColor: theming.colors.olivegreen,
      height: '50px',
      textAlign: 'center',
    },
  }));
  const classes = useStyles();

  return (
    <Grid container className={classes.topbar} alignItems="center">
      <Grid item xs={12} />
    </Grid>
  );
};

export default Topbar;
