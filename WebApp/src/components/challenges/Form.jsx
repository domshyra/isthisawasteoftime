import { Box, Grid } from "@mui/material";

import ChallengeDifficultyComplete from "./ChallengeDifficultyComplete";
import React from "react";

export default function Form() {
	return (
		<Box component="form" noValidate autoComplete="off">
			<Grid container direction="row" justify="flex-start" alignItems="flex-start">
				<ChallengeDifficultyComplete id="difficulty" />
			</Grid>
		</Box>
	);
}
