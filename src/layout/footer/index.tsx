import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: '#CBC960',
    height: '300px',
    textAlign: 'center',
  },
}));

const Footer:FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.footer} alignItems="center" spacing={0}>
      <Grid item xs={12}>
        <Button>Click now!</Button>
      </Grid>
    </Grid>
  );
};
export default Footer;
