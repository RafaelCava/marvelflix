import '../styles/css/globals.css';
import {
  AppBar, Toolbar, Button, IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AppBar position="static" className="appbar">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit" href="/" className="button">Inicio</Button>
        </Toolbar>
      </AppBar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
