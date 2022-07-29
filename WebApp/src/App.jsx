import "./styles/custom.css";

import { Route, Routes } from "react-router-dom";
import { challenges, home } from "./configs/constants";

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
				</Routes>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
