// Import
import React from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

// Component
const Error = () => {

	// Get the error message throw by api
	const error = useRouteError();

	// Return
	return(
		<React.Fragment>
			<MainNavigation/>
			<main id="error-content">
				<h1>An error occured !</h1>
				<p>{ error.message }</p>
			</main>
		</React.Fragment>
	);

};

// Export
export default Error;