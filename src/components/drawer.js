import React from 'react';
import { Drawer as MUIDrawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';

import DataUsageIcon from '@mui/icons-material/DataUsage';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HelpIcon from '@mui/icons-material/Help';
import { Route } from 'react-router-dom';

const useStyles = makeStyles({
    drawer: {
        width: '190px'
    }
})



function Drawer() {
    
    const classes = useStyles();

    const itemsList = [{
        text: 'Dashboard',
        icon: <DataUsageIcon />,
        onClick: () => console.log("HI")
    }, {
        text: 'Students',
        icon: <PersonIcon />,
        onClick: () => console.log("HI")
    }, {
        text: 'Events',
        icon: <EventIcon />,
        onClick: () => console.log("HI")
    }, {
        text: 'Rankings',
        icon: <LeaderboardIcon />,
        onClick: () => console.log("HI")
    }, {
        text: 'Help',
        icon: <HelpIcon />,
        onClick: () => console.log("HI")
    }];


    return (
            <MUIDrawer variant="permanent" className={classes.drawer}>
                <List>
                    {itemsList.map((item, index) => {
                        const { text, icon, onClick} = item
                        return (
                            <ListItem button key={text} onClick={onClick}>
                                    {icon && <ListItemIcon >{icon}</ListItemIcon>}
                                    <ListItemText primary={text} />
                                </ListItem>
                        );
                        })}
                </List>
            </MUIDrawer>
    )
}

export default Drawer;