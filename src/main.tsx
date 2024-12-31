import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { CssBaseline } from '@mui/material';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';

import { store } from './redux/store';
import App from './App.tsx';
import { backgroundBlue, denimBlue, grey, purple } from './styles.ts';

import './index.css';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    stepTitle: React.CSSProperties;
    stepSubtitle: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    stepTitle?: React.CSSProperties;
    stepSubtitle?: React.CSSProperties;
  }

  interface Palette {
    purple: Palette['primary'];
  }

  interface PaletteOptions {
    purple?: PaletteOptions['primary'];
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    stepTitle: true;
    stepSubtitle: true;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides {
    purple: true;
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: denimBlue,
      dark: '#164A8A',
      contrastText: 'white',
    },
    secondary: {
      main: purple,
      dark: '#928CFF',
    },
    purple: {
      main: purple,
    },
    background: {
      default: backgroundBlue,
    },
  },
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
    stepTitle: {
      display: 'block',
      width: '100%',
      fontSize: 32,
      fontWeight: 'bold',
      color: denimBlue,
    },
    stepSubtitle: {
      display: 'block',
      width: '100%',
      fontSize: 16,
      lineHeight: '25px',
      color: grey,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
