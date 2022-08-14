import { TableCell, TableRow } from "@mui/material";
import { challenges, challengesForm } from "../../configs/constants";

import MyAppIndex from "../shared/MyAppIndex";
import React from "react";

export default function Challenges() {
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

	return (
		<MyAppIndex
			{...challenges}
			createPath={challengesForm.path}
			url={challenges.apiPath}
			tableRows={tableRows}
			tableHeaders={tableHeaders}
		/>
	);
}
