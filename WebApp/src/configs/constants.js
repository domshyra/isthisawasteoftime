import Challenges from "../components/challenges/Index";
import ChallengesForm from "../components/challenges/Form";
import Home from "../components/shared/Home";
import HomeIcon from "@mui/icons-material/Home";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import React from "react";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WeatherForecast from "../components/WeatherForecast";

export const primaryKey = "Id";

const challengesPath = "/Challenges";
const challengesApiPath = `api${challengesPath}`;
const challengesItemLabel = "Challenge";
const challengesLabel = `${challengesItemLabel}s`;

export const challenges = {
	label: challengesLabel,
	itemLabel: challengesLabel,
	path: challengesPath,
	apiPath: challengesApiPath,
	primaryKey: primaryKey,
	icon: <MilitaryTechIcon />,
	element: <Challenges />,
};
export const challengesForm = {
	path: `${challengesPath}/Form`,
	element: <ChallengesForm />,
};

export const home = {
	path: "/",
	element: <Home />,
	label: "Music challenges app",
	icon: <HomeIcon />,
};

export const weather = {
	path: "/WeatherForecast",
	element: <WeatherForecast />,
	label: "Weather forecast",
	icon: <ThermostatIcon />,
};
