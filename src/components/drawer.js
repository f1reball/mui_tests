import React from 'react';
import { Drawer as MUIDrawer, List, ListItem, ListItemText, ListItemIcon, AppBar, Toolbar, Typography, Divider} from '@mui/material';
import { makeStyles } from '@mui/styles';

import DataUsageIcon from '@mui/icons-material/DataUsage';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HelpIcon from '@mui/icons-material/Help';
import { useNavigate, useLocation } from 'react-router-dom';


const useStyles = makeStyles({
    drawer: {
        display: 'flex',
        flexDirection: 'column',
        width: '220px'
    },
    wrapper: {
        display: 'flex'
    }
})



function Drawer() {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const classes = useStyles();

    const itemsList = [{
        text: 'Dashboard',
        icon: <DataUsageIcon />,
        destination: '/',
        onClick: () => navigate('/')
    }, {
        text: 'Students',
        icon: <PersonIcon />,
        destination: '/students',
        onClick: () => navigate('/students')
    }, {
        text: 'Events',
        icon: <EventIcon />,
        destination: '/events',
        onClick: () => navigate('/events')
    }, {
        text: 'Rankings',
        icon: <LeaderboardIcon />,
        destination: '/rankings',
        onClick: () => navigate('/rankings')
    }, {
        text: 'Help',
        icon: <HelpIcon />,
        destination: '/help',
        onClick: () => navigate('/help')
    }];


    return (
        <div>


        <AppBar position="fixed" className={classes.wrapper} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Orienteering Tracking
          </Typography>
        </Toolbar>
        </AppBar>

            <MUIDrawer variant="permanent" >
                <Toolbar />
                <List className={classes.drawer} >
                    {itemsList.map((item) => {
                        const { text, icon, destination, onClick} = item
                        return (
                            <ListItem button key={text} onClick={onClick} selected={destination === pathname} >
                                    {icon && <ListItemIcon >{icon}</ListItemIcon>}
                                    <ListItemText primary={text} />
                                </ListItem>
                        );
                        })}
                </List>
                <Divider />
            </MUIDrawer>
        </div>
    )
}

export default Drawer;