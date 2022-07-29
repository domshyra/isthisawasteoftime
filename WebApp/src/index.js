import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import reportWebVitals from "./reportWebVitals";

const store = configureStore();
const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename={baseUrl}>
				<ReduxProvider store={store}>
					<App />
			
				</ReduxProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
