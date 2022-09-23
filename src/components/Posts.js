// Imports
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Component
const Posts = ({ blogPosts }) => {

    // Return
    return(
        <Wrapper>
			{
				blogPosts.map((post) => {
					const { id, title } = post;
					return(
						<li key={ id }>
							<Link to={ id.toString() }>
								<h2>{ title }</h2>
							</Link>
						</li>
					);
				})
			}
        </Wrapper>
    );

};

// Styled
const Wrapper = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	max-width: 40rem;
	margin: 2rem auto;
	a{
		border-radius: 4px;
		padding: 1rem;
		background-color: #343232;
		text-decoration: none;
		color: inherit;
		display: block;
		&:hover{
			background-color: #665a4d;
		}
		h2{
			text-transform: capitalize;
			font-size: 1.15rem;
			font-weight: normal;
		}
	}
`;

// Export
export default Posts;