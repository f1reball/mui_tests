import './App.css';
import React, { useEffect, useState } from 'react';


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


import firebase from './firebase';


const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'calc(100vw - 220px)',
    float: 'right',
    position: 'relative',
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

  const [students, setStudents] = useState([]);


  const ref = firebase.firestore().collection("Events");

  const stu = firebase.firestore().collection("Students");

  function getDataStudents() {
    stu.onSnapshot((querySnapshot) => {
      const nameID = [];
      const nameArray = [];
      querySnapshot.forEach((doc) => {
        const p = doc.data();
        p.ID = doc.id;
        nameID.push(p);
        nameArray.push(p);
      });
      setStudents(nameArray);
    })
  }


  useEffect(() => {
    getDataStudents();
  }, []);


  return (

    <div className={classes.container}>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Drawer />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students studentList={students}/>} />
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
