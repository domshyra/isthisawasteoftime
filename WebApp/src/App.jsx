import "./styles/custom.css";

import { Route, Routes } from "react-router-dom";
import { challenges, challengesForm, home, primaryKey, weather } from "./configs/constants";

import { Layout } from "./components/shared/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Routes>
					<Route exact {...home} />
					<Route exact {...challenges} />
					<Route exact path={`${challengesForm.path}/:${primaryKey}`} {...challengesForm} />
					<Route exact {...challengesForm} />
					<Route exact {...weather} />
				</Routes>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
