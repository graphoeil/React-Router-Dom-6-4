// Imports
import React from "react";
import { redirect, useActionData, useNavigate, useNavigation } from "react-router-dom";
import NewPostForm from "../components/NewPostForm";
import { savePost } from "../utils/api";

// Post action with react-router-dom 6.4
export const action = async({ request }) => {
	// request object contain the data submitted by the form
	// we can extract data by using the name of the input (name matter !)
	const formData = await request.formData();
	const post = {
		title:formData.get('title'),
		body:formData.get('post-text')
	};
	try {
		await savePost(post);
	} catch (error){
		if (error.status === 422){
			// Validation error
			// We return the error, then we stay on the page
			// and so we could show the error message here
			return error;
		}
		throw error;
	}
	return redirect('/blog');
};

// Component
const NewPost = () => {

	// Error
	const data = useActionData();

	// Indicate is submitting
	const navigation = useNavigation();

	// Navigate
	const navigate = useNavigate();

	// Submit form
	// Now in react-router-dom 6.4

	// Cancel
	const cancel = () => {
		navigate('/blog');
	};

    // Return
    return(
        <React.Fragment>
			{ data && data.status && <p>{ data.message }</p> }
			<NewPostForm onCancel={ cancel } submitting={ navigation.state === 'submitting' }/>
        </React.Fragment>
    );

};

// Export
export default NewPost;