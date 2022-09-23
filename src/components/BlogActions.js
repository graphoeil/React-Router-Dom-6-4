// Imports
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Component
const BlogActions = () => {

	// Return
	return(
		<Wrapper>
			<Link className="button" to="/blog/new">Add Post</Link>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	max-width: 30rem;
	margin: 2rem auto;
	.button{
		font: inherit;
		background-color: #e5e5e5;
		color: #343232;
		border-radius: 4px;
		padding: 0.5rem 1.5rem;
		text-decoration: none;
		&:hover{
			background-color: #f9d3a9;
		}
	}
`;

// Export
export default BlogActions;