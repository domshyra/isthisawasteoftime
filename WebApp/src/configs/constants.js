import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import React from "react";

const primaryKey = "Id";

export const application = {
	label: "Music challenges app",
};

const challengesRoot = "/Challenges";
const challengesApiPath = "api/Challenges";
const challengesItemLabel = "Challenge";
const challengesLabel = `${challengesItemLabel}s`;

export const challenges = {
	label: challengesLabel,
	itemLabel: challengesLabel,
	path: challengesRoot,
	apiPath: challengesApiPath,
	primaryKey: primaryKey,
	icon: <MilitaryTechIcon />,
};
