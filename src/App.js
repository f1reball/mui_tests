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

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  }
})


function App() {
  const classes = useStyles();

  return (

    <div className={classes.container}>
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

    </div>
  );
}

export default App;
