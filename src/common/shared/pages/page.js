import React, { Component } from "react";

class Page extends Component {
	render() {
		return (
			<main className="main" role="main" itemScope itemProp="mainContentOfPage">
				{this.props.children}
			</main>
		);
	}
}

export default Page;
