import { ConfigProvider, theme } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ConfigProvider
			theme={{
				algorithm: theme.darkAlgorithm,
				token: {
					colorPrimary: "green",
					colorBorder: "blue",
					colorBgBase: "red",
				},
			}}
			space="small"
		// componentSize="large"
		>
			<ConfigProvider
				theme={{
					components: {
						Button: {
							colorBgBase: "brown",
							// fontSize: "35px",
							borderRadius: "10px",
							// colorBgContainer: "red",
						},
					},
				}}
			>
				<App />
			</ConfigProvider>
		</ConfigProvider>
	</React.StrictMode>,
);
