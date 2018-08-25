import React from "react";
import App from "./App";
import HomePage from "./shared/pages/homepage";
import NotFoundPage from "./shared/pages/notfound-page";
import AboutPage from "./shared/pages/aboutpage";

export default [
	{
		...App,
		routes: [
			{
				path: "/",
				exact: true,
				...HomePage
			},
			{
				path: "/about",
				...AboutPage
			},
			{
				...NotFoundPage
			}
		]
	}
];
