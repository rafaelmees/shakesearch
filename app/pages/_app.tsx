import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
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
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
