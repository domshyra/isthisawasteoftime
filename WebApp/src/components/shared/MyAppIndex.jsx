import { Box, Grid, IconButton, Typography } from "@mui/material";
import { CreateButton, MobileCreateButton } from "./MyAppButtons";

import MyAppTable from "./MyAppTable";
import PropTypes from "prop-types";
import React from "react";
import useFetch from "../../tools/hooks/useFetch";

const MyAppIndex = ({ itemLabel, label, createPath, url, icon, tableHeaders, tableRows }) => {
	const { data: tableItems, loaded, error } = useFetch(url);

	//SVG used for header
	const pageIcon = React.cloneElement(icon, { fontSize: "large" });

	const header = () => {
		return (
			<Box pb={1} mb={1}>
				<Grid container direction="row" alignItems="center" alignContent="center">
					<IconButton>{pageIcon}</IconButton>
					<Typography variant="h4">{label}</Typography>
					<Grid item sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: "none", md: "block" } }}>
						{createPath !== undefined ? (
							<CreateButton title={`Create ${itemLabel}`} createPath={createPath} />
						) : null}
					</Box>
				</Grid>
			</Box>
		);
	};

	return (
		<Box mb={2} pb={2}>
			{header()}
			<Box>
				<Box sx={{ display: { xs: "block", md: "none" } }}>
					{createPath !== undefined ? (
						<MobileCreateButton title={`Add ${itemLabel}`} createPath={createPath} />
					) : null}
				</Box>
				<MyAppTable
					title={label}
					tableHeaders={tableHeaders}
					tableRows={tableRows}
					loaded={loaded}
					error={error}
					tableItems={tableItems}
				/>
			</Box>
		</Box>
	);
};

MyAppIndex.propTypes = {
	label: PropTypes.string,
	itemLabel: PropTypes.string,
	singleton: PropTypes.string,
	tableRows: PropTypes.func,
	tableHeaders: PropTypes.array,
	icon: PropTypes.element,
	createPath: PropTypes.string,
};

export default MyAppIndex;
