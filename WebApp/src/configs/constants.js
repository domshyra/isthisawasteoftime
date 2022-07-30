import Challenges from "../components/challenges/Challenges";
import Home from "../components/shared/Home";
import HomeIcon from "@mui/icons-material/Home";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import React from "react";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WeatherForecast from "../components/WeatherForecast";

const primaryKey = "Id";

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

export const home = {
	path: "/",
	element: <Home />,
	label: "Music challenges app",
	icon: <HomeIcon />,
};

export const weather = {
	path: "/weather",
	element: <WeatherForecast />,
	apiPath: "WeatherForecast",
	label: "Weather forecast",
	icon: <ThermostatIcon />,
};
