import "./styles/custom.css";

import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import { Layout } from "./components/shared/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
