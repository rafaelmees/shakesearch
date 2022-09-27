import { createTheme, ThemeProvider } from '@mui/material'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}