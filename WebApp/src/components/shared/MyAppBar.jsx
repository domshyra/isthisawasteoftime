import { AppBar, Box, Grid, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { challenges, home } from "../../configs/constants";

import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { theme } from "../../styles/theme";

const MyAppBar = () => {
	//for hamburger menu
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	let menuItems = [{ ...challenges }];

	const hamburgerMenus = (items) => {
		return items.map((item) => (
			<Link underline="none" component={RouterLink} to={item.path} key={item.path}>
				<MenuItem onClick={handleClose} aria-label={`Show ${item.label}`} title={`Show ${item.label}`}>
					<Grid container direction="row" alignContent="center" alignItems="center">
						<IconButton color="primary">{item.icon}</IconButton>
						<Typography>{item.label}</Typography>
					</Grid>
				</MenuItem>
			</Link>
		));
	};

	const mobileMenus = (items) => {
		return items.map((item) => (
			<Link underline="none" component={RouterLink} to={item.path} color="inherit" variant="h6" key={item.path}>
				<IconButton size="large" aria-label={`Show ${item.label}`} title={`Show ${item.label}`} color="inherit">
					{item.icon}
				</IconButton>
			</Link>
		));
	};

	return (
		<Box sx={{ flexGrow: 1 }} mb={2}>
			<AppBar
				position="static"
				sx={{
					background: theme.palette.primary.dark,
				}}
			>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						aria-expanded={open ? "true" : undefined}
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
							"aria-labelledby": "basic-button",
						}}
					>
						{hamburgerMenus(menuItems)}
					</Menu>

					<Link underline="none" to={home.path} component={RouterLink} color="white">
						<Typography variant="h6" noWrap component="div" sx={{ display: { xs: "none", sm: "block" } }}>
							{home.label}
						</Typography>
					</Link>
					<Box sx={{ flexGrow: 1 }} />
					{/*{Larger screens}*/}
					<Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
					{/*{Compact screens}*/}
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<Link underline="none" component={RouterLink} to={home.path} color="inherit" variant="h6">
							<IconButton size="large" aria-label="Show home page" color="inherit">
								{home.icon}
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
