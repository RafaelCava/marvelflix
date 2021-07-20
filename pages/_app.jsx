import '../styles/css/globals.css'
import { Button, ThemeProvider, createTheme } from '@material-ui/core';

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000"
      },
      secondary: {
        main:"#3f51b5"
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
