import "babel-polyfill";
import express from "express";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-config";
import Routes from "../common/routes";
import renderer from "./renderer";
import createStore from "./createStore";

import { API_URL, HOST, PORT } from "../common/shared/constants";

const app = express();

app.use(
	"/api/",
	proxy(API_URL, {
		proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
			proxyReqOpts.headers["X-Forwarded-Host"] = "localhost:3000";
			return proxyReqOpts;
		},

		proxyReqPathResolver: function(req) {
			return "/api/v1" + require("url").parse(req.url).path;
		}
	})
);
app.use(express.static("public"));

app.get("*", (req, res) => {
	const store = createStore(req);

	const promises = matchRoutes(Routes, req.path)
		.map(({ route }) => {
			return route.loadData ? route.loadData(store) : null;
		})
		.map(promise => {
			if (promise) {
				return new Promise((resolve, reject) => {
					promise.then(resolve).catch(resolve);
				});
			}
		});

	Promise.all(promises).then(() => {
		const context = {};
		const content = renderer(req, store, context);

		if (context.notFound) {
			res.status(404);
		}

		if (context.url) {
			return res.redirect(301, context.url);
		}

		res.send(content);
	});
});



app.listen(PORT, HOST, () => {
	console.log(`Listening ${HOST} : ${PORT}`);
});
