import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#FFFFFF',
      },
      background: {
        default: '#FAFAFA',
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: '100px',
          },
        },
      },
      MuiInputAdornment: {
        styleOverrides: {
          root: {
            marginRight: '8px',
          },
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp