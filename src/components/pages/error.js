import React from "react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    container: {
        fontSize: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#cccccc',
    },
    thinner: {
        fontWeight: '400',
        fontSize: '20px'
    }
})


function Error() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <ErrorOutlineIcon style={{ fontSize: 80 }}  />
            <h1 className={classes.thinner}>404 - Page Not Found</h1>
        </div>
    );
}

export default Error;