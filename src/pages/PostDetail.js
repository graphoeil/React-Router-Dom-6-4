// Imports
import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import { getPost } from "../utils/api";

// Loader
export const loader = ({ params }) => {
	const postId = params.id;
	return getPost(postId);
};

// Component
const PostDetail = () => {

	// Data from react-router loader
	const loaderData = useLoaderData();

    // Return
    return(
        <React.Fragment>
			<BlogPost title={ loaderData.title } text={ loaderData.body } />
        </React.Fragment>
    );

};

// Export
export default PostDetail;