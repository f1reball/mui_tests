import './App.css';

import Dashboard from './components/pages/dashboard';
import Students from './components/pages/students';
import Events from './components/pages/events';
import Rankings from './components/pages/rankings';
import Help from './components/pages/help';
import Error from './components/pages/error';

import Drawer from './components/drawer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: 'calc(100vh - 64px)',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'calc(100vw - 220px)',
    float: 'right',
    position: 'relative',
    marginTop: '64px',
    //background: '#121212'
  }, 
})

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const classes = useStyles();

  return (

    <div className={classes.container}>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Drawer />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/events" element={<Events />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>

    </div>
  );
}

export default App;
