import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';

const Home: FC = () => {
  const theming = useTheme();

  const useStyles = makeStyles((theme: Theme) => createStyles({
    sidebarLeftWrapper: {
      order: 0,
      [theme.breakpoints.down('sm')]: {
        order: 1,
      },
    },
    green: {
      backgroundColor: theming.colors.green,
      minHeight: '300px',
    },
    grey: {
      backgroundColor: theming.colors.grey,
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
      backgroundColor: theming.colors.beige,
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        minHeight: '300px',
      },
    },
    sidebarRightWrapper: {
      order: 2,
    },
    sidebarRight: {
      backgroundColor: theming.colors.yellow,
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        minHeight: '600px',
      },
    },
  }));

  const classes = useStyles();

  return (
    <Grid item container spacing={2}>
      <Grid item xs={12} sm={2} className={classes.sidebarLeftWrapper}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={12}>
            <Grid className={classes.green} />
          </Grid>
          <Grid item xs={6} sm={12}>
            <Grid className={classes.grey} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} sm={8} className={classes.contentWrapper}>
        <Grid item xs={12} className={classes.content} />
      </Grid>
      <Grid item container xs={12} sm={2} className={classes.sidebarRightWrapper}>
        <Grid item xs={12} className={classes.sidebarRight} />
      </Grid>
    </Grid>
  );
};

export default Home;
