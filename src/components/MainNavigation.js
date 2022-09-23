// Imports
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Component
const MainNavigation = () => {

    // Return
    return(
        <Wrapper>
			<nav>
				<ul>
					<li>
						<NavLink to="/" className={({ isActive }) =>
							isActive ? 'active' : undefined } end>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/blog" className={({ isActive }) =>
							isActive ? 'active' : undefined} end>
							Blog
						</NavLink>
					</li>
				</ul>
			</nav>
        </Wrapper>
    );

};

// Styled
const Wrapper = styled.header`
	padding: 2rem;
	ul{
		display: flex;
		gap: 2rem;
		justify-content: center;
		a{
			color: #e5e5e5;
			font-size: 1.15rem;
			text-decoration: none;
			&:hover, &:active, &.active{
				color: #fcb66b;
			}
		}
	}
`;

// Export
export default MainNavigation;