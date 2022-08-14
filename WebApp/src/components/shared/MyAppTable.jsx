import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import PropTypes from 'prop-types';
import React from "react";

const MyAppTable = ({ label, tableHeaders, loaded, error, tableRows, tableItems }) => {

	const tableHeader = () => {
		return tableHeaders.map((item) => (
			<TableCell key={item.id} align={item.align ?? "left"}>
				{item.label}
			</TableCell>
		));
	};

    const skeletonHeader = () => {
		return (
			<TableCell>
				<Skeleton />
			</TableCell>
		);
	};
	const skeletonArray = Array(10).fill("");
	const skeletonTableBody = () => {
		return skeletonArray.map((item, index) => (
			<TableRow key={index}>
				<TableCell>
					<Skeleton />
				</TableCell>
			</TableRow>
		));
	};

	if (loaded && error) {
		console.log("error", error);
		return (
			<>
				<div>There was an error loading data.</div>
			</>
		);
	} else {
		return (
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 500 }} aria-label={`${label} table`}>
					<TableHead>
						<TableRow sx={{ borderBottomWidth: 2 }}>{loaded ? tableHeader() : skeletonHeader()}</TableRow>
					</TableHead>
					<TableBody>{loaded ? tableRows(tableItems) : skeletonTableBody()}</TableBody>
				</Table>
			</TableContainer>
		);
	}
};

MyAppTable.propTypes = {
	label: PropTypes.string,
	tableRows: PropTypes.func,
	tableHeaders: PropTypes.array,
	loaded: PropTypes.bool,
	error: PropTypes.object,
	tableItems: PropTypes.array,
};

export default MyAppTable;
