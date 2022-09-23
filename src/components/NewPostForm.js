// Imports
import React from "react";
import styled from "styled-components";
import { Form } from "react-router-dom";

// Component
const NewPostForm = ({ onCancel, onSubmit, submitting }) => {

    // Return
    return(
        <Wrapper>
			<Form method="post" action="/blog/new">
				<fieldset>
					<label htmlFor="title">Title</label>
					<input id="title" type="text" name="title" required minLength={ 5 } />
				</fieldset>
				<fieldset>
					<label htmlFor="text">Post Text</label>
					<textarea id="text" name="post-text" required minLength={10} rows={5}/>
				</fieldset>
				<button type="button" className="cancelBtn" onClick={ onCancel } disabled={ submitting }>
					Cancel
				</button>
				<button type="submit" disabled={ submitting }>
					{ submitting ? 'Submitting...' : 'Create Post' }
				</button>
			</Form>
        </Wrapper>
    );

};

// Styled
const Wrapper = styled.div`
	margin: 2rem auto;
	max-width: 20rem;
	fieldset{
		border: none;
		margin: 0.5rem 0;
		input, label, textarea{
			font: inherit;
			display: block;
		}
		input, textarea{
			width: 100%;
			border-radius: 4px;
			padding: 0.5rem;
		}
		label{
			font-weight: bold;
			margin-bottom: 0.5rem;
		}
	}
	button{
		font: inherit;
		padding: 0.5rem 1.5rem;
		border-radius: 4px;
		border: none;
		cursor: pointer;
		background-color: #e5e3e3;
		&:hover{
			background-color: #fcb66b;
		}
		&:disabled{
			background-color: #a2a1a1;
			color: #515151;
		}
		&.cancelBtn{
			background-color: transparent;
			color: #c7c4c4;
			&:hover{
				color: #fcb66b;
			}
			&:disabled{
				color: #515151;
				background-color: transparent;
			}
		}
	}
`;

// Export
export default NewPostForm;