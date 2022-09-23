// Imports
import React from "react";
import styled from "styled-components";

// Component
const BlogPost = ({ title, text }) => {

    // Return
    return(
        <Wrapper>
			<h1>{ title }</h1>
			<p>{ text }</p>
        </Wrapper>
    );

};

// Styled
const Wrapper = styled.article`
	margin: 2rem auto;
	max-width: 40rem;
	text-align: center;
	text-transform: capitalize;
`;

// Export
export default BlogPost;