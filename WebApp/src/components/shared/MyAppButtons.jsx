import { Button, Fab, Link } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

/**
 * Used to render an add button with a routerLink
 * @remarks used for mobile
 * @returns a Mui Floating action Add Button with a working router link
 */
 const FabAddButtonWithLink = (props) => {
	const fabStyle = {
		position: "fixed",
		bottom: 16,
		right: 16,
	};
	return (
		<Link component={RouterLink} to={props.createPath}>
			<Fab color="primary" title={props.title} aria-label={props.title} sx={{ ...fabStyle }}>
				<AddIcon />
			</Fab>
		</Link>
	);
};

FabAddButtonWithLink.propTypes = {
	title: PropTypes.string.isRequired,
	createPath: PropTypes.string.isRequired,
};

/**
 * Used to render an add button with a routerLink
 * @remarks used for mobile
 * @returns a Mui Floating action Add Button with a working router link
 */
const MobileCreateButton = ({title, onClick = () => {}}) => {
	const fabStyle = {
		position: "fixed",
		bottom: 16,
		right: 16,
	};
	return (
		<Fab color="primary" title={title} aria-label={title} sx={{ ...fabStyle }} onClick={onClick}>
			<AddIcon />
		</Fab>
	);
};

FabAddButtonWithLink.propTypes = {
	title: PropTypes.string.isRequired,
};

/**
 * Used to render a button with a routerLink
 * @remarks used for desktop
 * @param variant default is text
 * @param color default is primary
 * @returns a Mui Button with a working router link
 */
 const ButtonWithLinkAndStartIcon = ({ path, title, variant, color, component: Component, onClick = () => {} }) => {
	return (
		<Link underline="none" component={RouterLink} to={path}>
			<Button
				color={color ?? "primary"}
				variant={variant ?? "text"}
				title={title}
				aria-label={title}
				startIcon={<Component /> ?? <AddIcon />}
				onClick={onClick}
			>
				{title}
			</Button>
		</Link>
	);
};
ButtonWithLinkAndStartIcon.propTypes = {
	title: PropTypes.string.isRequired,
	createPath: PropTypes.string.isRequired,
	component: PropTypes.elementType.isRequired,
	variant: PropTypes.string,
	color: PropTypes.string,
};

/**
 * Used to render an add button with a routerLink
 * @remarks used for desktop
 * @returns a Mui Add Button with a working router link and add icon
 */
 const CreateButton = (props) => {
	return <ButtonWithLinkAndStartIcon {...props} path={props.createPath} component={AddIcon} />;
};

CreateButton.propTypes = {
	title: PropTypes.string.isRequired,
	createPath: PropTypes.string,
	variant: PropTypes.string,
};

export { ButtonWithLinkAndStartIcon, MobileCreateButton, CreateButton, FabAddButtonWithLink} 