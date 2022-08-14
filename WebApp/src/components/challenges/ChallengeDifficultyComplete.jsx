import { Autocomplete, Box, Grid, InputAdornment, Skeleton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Item from "@mui/material/Grid";
import PropTypes from "prop-types";
import { difficultyLevels } from "./challengeLevels";
import { styled } from "@mui/material/styles";

/**
 * Changes color based on difficulty levels
 * @param {*} param0
 * @returns
 */
const ChallengeDifficultyComplete = ({ id, loaded = true, initialValue = difficultyLevels[0].label }) => {
	const [selected, setSelected] = useState(difficultyLevels[0]);

	const width = 150;
	const height = 30;
	const styleOptions = {
		shouldForwardProp: (prop) => prop !== "fontColor",
	};

	const StyledTextField = styled(
		TextField,
		styleOptions
	)(({ fontColor }) => ({
		input: {
			color: fontColor,
		},
	}));

	const onValueChanged = (event, newValue) => {
		setSelected(newValue);
	};

	const getOptionByLabel = (options, label) => {
		return options.find((s) => s.label === label);
	};

	useEffect(() => {
		setSelected(getOptionByLabel(difficultyLevels, initialValue));
	}, [initialValue]);

	return (
		<Box px={1} ml={1}>
			{!loaded ? (
				<Skeleton variant="text" sx={{ width: width, height: height }} />
			) : (
				<Autocomplete
					disablePortal
					disableClearable
					id={id}
					value={selected}
					onChange={onValueChanged}
					options={difficultyLevels.sort((a, b) => a.difficulty - b.difficulty)}
					isOptionEqualToValue={(option, value) => option.id === value.id}
					sx={{ width: width }}
					renderOption={(props, option) => (
						<Box key={option.key} component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
							<Typography
								variant="body2"
								component="div"
								title={option.label}
								sx={{ color: option.color, px: 1 }}
							>
								<Grid container spacing={2}>
									<Grid item xs={3}>
										<Item>{React.cloneElement(option.icon, { fontSize: "small" })}</Item>
									</Grid>
									<Grid item xs={9}>
										<Item>{option.label}</Item>
									</Grid>
								</Grid>
							</Typography>
						</Box>
					)}
					renderInput={(params) => (
						<StyledTextField
							{...params}
							fullWidth
							color="primary"
							variant="standard"
							fontColor={selected.color}
							InputProps={{
								...params.InputProps,
								startAdornment: (
									<InputAdornment position="start" sx={{ color: selected.color }}>
										{selected.icon}
									</InputAdornment>
								),
								endAdornment: <> {params.InputProps.endAdornment} </>,
							}}
						/>
					)}
				/>
			)}
		</Box>
	);
};

ChallengeDifficultyComplete.propTypes = {
	id: PropTypes.string.isRequired,
	loaded: PropTypes.bool.isRequired,
	initialValue: PropTypes.string,
};

export default ChallengeDifficultyComplete;
