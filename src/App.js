import './App.css';

import Home from './components/pages/home';
import About from './components/pages/about';
import Drawer from './components/drawer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex'
  }
})


function App() {
  const classes = useStyles();

  return (

    <div className={classes.container}>
      <Drawer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
