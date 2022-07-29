import { AppBar, Box, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { application, challenges } from '../configs/constants';

import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from "react-router-dom";
import { theme } from "../styles/theme";

const MyAppBar = ({ isAuthenticated }) => {
    //for hamburger menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let menuItems = [
        { ...challenges },
    ];

    const hamburgerMenus = (items) => {
        return (items.map(item =>
            <Link underline="none" component={RouterLink} to={item.path} key={item.path}>
                <MenuItem onClick={handleClose} aria-label={`Show ${item.label}`} title={`Show ${item.label}`}>
                    <Box pr={1}>
                        {item.icon}
                    </Box>
                    {item.label}
                </MenuItem>
            </Link>
        ));
    };

    const mobileMenus = (items) => {
        return (items.map(item =>
            <Link underline="none" component={RouterLink} to={item.path} color="inherit" variant="h6" key={item.path}>
                <IconButton size="large" aria-label={`Show ${item.label}`} title={`Show ${item.label}`} color="inherit">
                    {item.icon}
                </IconButton>
            </Link>
        ));
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                background: theme.palette.primary.dark
            }}>
                <Toolbar>
                    {/* Do not display hamburger menu if user is not authenticated. */}
                    {isAuthenticated ? <><IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {hamburgerMenus(menuItems)}
                        </Menu></> : null}

                    <Link underline="none" to="/" component={RouterLink} color="white">
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            {application.Label}
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    {/*{Larger screens}*/}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                    </Box>
                    {/*{Compact screens}*/}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <Link underline="none" component={RouterLink} to="/" color="inherit" variant="h6">
                            <IconButton size="large" aria-label="Show home page" color="inherit">
                                <HomeIcon />
                            </IconButton>
                        </Link>
                        {mobileMenus(menuItems)}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default MyAppBar;