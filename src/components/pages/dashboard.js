import React from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex'
    },
})


function Dashboard() {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <p>Home</p>
        </div>
    );
}

export default Dashboard;