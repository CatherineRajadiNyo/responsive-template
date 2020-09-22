import { createMuiTheme } from '@material-ui/core';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    colors: {
      olivegreen: React.CSSProperties['color'],
      green: React.CSSProperties['color'],
      limegreen: React.CSSProperties['color'],
      grey: React.CSSProperties['color'],
      beige: React.CSSProperties['color'],
      yellow: React.CSSProperties['color'],
    },
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    colors: {
      olivegreen?: React.CSSProperties['color'],
      green?: React.CSSProperties['color'],
      limegreen?: React.CSSProperties['color'],
      grey?: React.CSSProperties['color'],
      beige?: React.CSSProperties['color'],
      yellow?: React.CSSProperties['color'],
    },
  }
}

export const lightTheme = createMuiTheme({
  colors: {
    olivegreen: '#4B5B1D',
    green: '#599529',
    limegreen: '#CBC960',
    grey: '#958B73',
    beige: '#FFE09F',
    yellow: '#FAD354',
  },
  typography: {
    fontFamily: 'Helvetica',
    fontSize: 16,
  },
  spacing: 0,
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '25px',
        background: 'linear-gradient(to right, #F7B800 , #FFD800)',
        backgroundColor: 'none',
        textTransform: 'none',
        '&:hover': {
          background: 'linear-gradient(to right, #F7B800 , #FFD800)',
          backgroundColor: 'none',
        },
      },
      text: {
        paddingLeft: '25px',
        paddingRight: '25px',
      },
    },
  },
});

export const darkTheme = createMuiTheme({
  colors: {
    olivegreen: '#152A38',
    green: '#29435C',
    limegreen: '#556E53',
    grey: '#D1D4C9',
    beige: '#222831',
    yellow: '#3E432E',
  },
  typography: {
    fontFamily: 'Helvetica',
    fontSize: 16,
  },
  spacing: 0,
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '25px',
        background: 'linear-gradient(to right, #F7B800 , #FFD800)',
        backgroundColor: 'none',
        textTransform: 'none',
        '&:hover': {
          background: 'linear-gradient(to right, #F7B800 , #FFD800)',
          backgroundColor: 'none',
        },
      },
      text: {
        paddingLeft: '25px',
        paddingRight: '25px',
        color: '#000000',
      },
    },
  },
});
