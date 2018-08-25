import React from "react";
import { renderRoutes } from "react-router-config";
import NavBar from "./shared/components/navbar";

const App = ({ route }) => {
	return (
		<div className="page__wrapper">
			<NavBar />
			{renderRoutes(route.routes)}
		</div>
	);
};

export default {
	component: App
};
