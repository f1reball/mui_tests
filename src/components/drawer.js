import React from 'react';
import { Drawer as MUIDrawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';

import DataUsageIcon from '@mui/icons-material/DataUsage';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HelpIcon from '@mui/icons-material/Help';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    drawer: {
        width: '190px',
        height: '100vh'
    }
})



function Drawer() {

    const navigate = useNavigate();
    const classes = useStyles();

    const itemsList = [{
        text: 'Dashboard',
        icon: <DataUsageIcon />,
        onClick: () => navigate('/')
    }, {
        text: 'Students',
        icon: <PersonIcon />,
        onClick: () => navigate('/students')
    }, {
        text: 'Events',
        icon: <EventIcon />,
        onClick: () => navigate('/events')
    }, {
        text: 'Rankings',
        icon: <LeaderboardIcon />,
        onClick: () => navigate('/rankings')
    }, {
        text: 'Help',
        icon: <HelpIcon />,
        onClick: () => navigate('/help')
    }];


    return (
            <MUIDrawer variant="permanent" className={classes.drawer}>
                <List>
                    {itemsList.map((item) => {
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