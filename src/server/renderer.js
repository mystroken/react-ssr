import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import serialize from "serialize-javascript";
import Routes from "../common/routes";

export default (req, store, context) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={context}>
				<div className="page">{renderRoutes(Routes)}</div>
			</StaticRouter>
		</Provider>
	);

	const helmet = Helmet.renderStatic();

	return `
	<!doctype html>
	<html lang="fr">
		<head>
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
  		<meta name="viewport" content="width=device-width, initial-scale=1">
			${helmet.meta.toString()}
			${helmet.title.toString()}
			<link rel="stylesheet" href="bundle.css">
		</head>
		<body>
				<div id="root" style="height:100%;width:100%">${content}</div>
				<script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
				<script src="bundle.js"></script>
		</body>
	</html>
  `;
};
