import React from "react";

import Page from "./page";

const NotFoundPage = ({ staticContext = {} }) => {
	staticContext.notFound = true;

	return (
		<Page>
			<div className="container">
				<h1>Ooops nothing was found!</h1>
			</div>
		</Page>
	);
};

export default {
	component: NotFoundPage
};
