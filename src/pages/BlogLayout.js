// Imports
import React from "react";
import { Outlet } from "react-router-dom";
import BlogActions from "../components/BlogActions";

// Component
const BlogLayout = () => {

    // Return
    return(
        <React.Fragment>
			<BlogActions/>
			<Outlet/>
        </React.Fragment>
    );

};

// Export
export default BlogLayout;