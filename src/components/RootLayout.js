// Imports
import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

// Component
const RootLayout = () => {

    // Return
    return(
        <React.Fragment>
			<MainNavigation/>
			<main>
				<Outlet/>
			</main>
        </React.Fragment>
    );

};

// Export
export default RootLayout;