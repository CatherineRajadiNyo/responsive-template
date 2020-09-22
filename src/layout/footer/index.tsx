import React, { FC, useContext } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ThemeContext } from '../../style/themeProvider';

const Footer: FC = () => {
  const theming = useTheme();
  const useStyles = makeStyles(() => createStyles({
    footer: {
      backgroundColor: theming.colors.limegreen,
      height: '300px',
      textAlign: 'center',
    },
  }));
  const classes = useStyles();

  const { themeName, setThemeName } = useContext(ThemeContext);
  const futureTheme = themeName === 'lightTheme' ? 'darkTheme' : 'lightTheme';

  return (
    <Grid container className={classes.footer} alignItems="center" spacing={0}>
      <Grid item xs={12}>
        <Button onClick={() => setThemeName(futureTheme)}>Click now!</Button>
      </Grid>
    </Grid>
  );
};
export default Footer;
