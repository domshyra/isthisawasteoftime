import { TableCell, TableRow } from "@mui/material";

import MyAppTable from "./shared/MyAppTable";
import React from "react";
import useFetch from "../tools/hooks/useFetch";
import { weather } from "../configs/constants";

export default function WeatherForecast() {
	const { loaded, data: tableItems, error } = useFetch(weather.path);

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
		<MyAppTable
			label={"Weather forcast"}
			loaded={loaded}
			error={error}
			tableRows={tableRows}
			tableHeaders={tableHeaders}
			tableItems={tableItems}
		/>
	);
}
