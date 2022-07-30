import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import React from "react";
import useFetch from "../tools/hooks/useFetch";
import { weather } from "../configs/constants";

export default function WeatherForecast() {
	const { loaded, data: tableItems, error } = useFetch(weather.apiPath);

	const tableRows = (result) => {
		return result.map((item, index) => (
			<TableRow key={item.id}>
				<TableCell component="th" scope="row">
					{item.summary}
				</TableCell>
				<TableCell>{item.temperatureC}</TableCell>
				<TableCell>{item.date}</TableCell>
			</TableRow>
		));
	};

	const tableHeaders = [
		{
			id: "summary",
			label: "summary",
		},
		{
			id: "temperatureC",
			label: "temperatureC",
		},
		{
			id: "date",
			label: "date",
		},
	];

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
				<Table sx={{ minWidth: 500 }} aria-label={`Weather table`}>
					<TableHead>
						<TableRow sx={{ borderBottomWidth: 2 }}>{loaded ? tableHeader() : skeletonHeader()}</TableRow>
					</TableHead>
					<TableBody>{loaded ? tableRows(tableItems) : skeletonTableBody()}</TableBody>
				</Table>
			</TableContainer>
		);
	}
}
