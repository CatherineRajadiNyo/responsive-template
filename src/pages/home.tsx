import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) => createStyles({
  sidebarLeftWrapper: {
    order: 0,
    [theme.breakpoints.down('sm')]: {
      order: 1,
      paddingRight: '0 !important',
      paddingLeft: '0 !important',
      margin: '-8px 0',
    },
  },
  green: {
    backgroundColor: theme.colors.green,
    minHeight: '300px',
  },
  grey: {
    backgroundColor: '#958B73',
    minHeight: '300px',
  },
  contentWrapper: {
    flexGrow: 1,
    order: 0,
    [theme.breakpoints.up('sm')]: {
      order: 1,
    },
  },
  content: {
    backgroundColor: '#FFE09F',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      minHeight: '300px',
    },
  },
  sidebarRightWrapper: {
    order: 2,
  },
  sidebarRight: {
    backgroundColor: '#FAD354',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      minHeight: '600px',
    },
  },
}));

const Home: FC = () => {
  const classes = useStyles();

  return (
    <Grid item container spacing={2}>
      <Grid
        item
        container
        xs={12}
        sm={2}
        className={classes.sidebarLeftWrapper}
        spacing={2}
      >
        <Grid item xs={6} sm={12}>
          <Grid className={classes.green} />
        </Grid>
        <Grid item xs={6} sm={12}>
          <Grid className={classes.grey} />
        </Grid>
      </Grid>
      <Grid item container xs={12} sm={8} className={classes.contentWrapper}>
        <Grid item className={classes.content} />
      </Grid>
      <Grid item container xs={12} sm={2} className={classes.sidebarRightWrapper}>
        <Grid item className={classes.sidebarRight} />
      </Grid>
    </Grid>
  );
};

export default Home;
