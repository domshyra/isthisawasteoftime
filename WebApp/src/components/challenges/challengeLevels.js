import { blue, brown, deepPurple, green, orange, red, yellow } from "@mui/material/colors";

import Battery0BarIcon from "@mui/icons-material/Battery0Bar";
import Battery1BarIcon from "@mui/icons-material/Battery1Bar";
import Battery2BarIcon from "@mui/icons-material/Battery2Bar";
import Battery3BarIcon from "@mui/icons-material/Battery3Bar";
import Battery4BarIcon from "@mui/icons-material/Battery4Bar";
import Battery5BarIcon from "@mui/icons-material/Battery5Bar";
import Battery6BarIcon from "@mui/icons-material/Battery6Bar";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import BatterySaverIcon from "@mui/icons-material/BatterySaver";

// prettier-ignore
export const difficultyLevels = [
	{ difficulty: 0, color: "#FFFFFF", 			icon: <Battery0BarIcon />, 			label: "white", 	id: "white" },
	{ difficulty: 1, color: yellow[500], 		icon: <Battery1BarIcon />, 			label: "yellow", 	id: "yellow" },
	{ difficulty: 2, color: orange[500], 		icon: <Battery2BarIcon />, 			label: "orange", 	id: "orange" },
	{ difficulty: 3, color: blue[500], 			icon: <Battery3BarIcon />, 			label: "blue", 		id: "blue" },
	{ difficulty: 4, color: deepPurple[500],	icon: <Battery4BarIcon />,  		label: "purple", 	id: "purple" },
	{ difficulty: 5, color: green[500], 		icon: <Battery5BarIcon />, 			label: "green", 	id: "green" },
	{ difficulty: 6, color: red[500], 			icon: <Battery6BarIcon />, 			label: "red", 		id: "red" },
	{ difficulty: 7, color: brown[500], 		icon: <BatteryFullIcon />, 			label: "brown", 	id: "brown" },
	{ difficulty: 8, color: "#000000", 			icon: <BatterySaverIcon />, 		label: "black", 	id: "black" },
];
