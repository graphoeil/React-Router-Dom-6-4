// Imports
import React from "react";
import { useLoaderData } from "react-router-dom";
import Posts from "../components/Posts";
import { getPosts } from "../utils/api";

// Fetching with react-router-dom 6.4
// See integration in App.js
export const loader = () => {
	return getPosts();
};

// Component
const BlogPosts = () => {

	// Get data from loader
	const loaderData = useLoaderData();

    // Return
    return(
        <React.Fragment>
			<h1>Our Blog Posts</h1>
			<Posts blogPosts={ loaderData } />
        </React.Fragment>
    );

};

// Export
export default BlogPosts;