// Imports
import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Error from "./pages/Error";
import BlogLayout from "./pages/BlogLayout";
import BlogPosts, { loader as blogPostsLoader } from "./pages/BlogPosts";
import NewPost, { action as newPostAction } from "./pages/NewPost";
import PostDetail, { loader as postDetailLoader } from "./pages/PostDetail";
import Welcome from "./pages/Welcome";

// Router
const router = createBrowserRouter(createRoutesFromElements(
	// No more use Routes, just nested route
	// We must define <Outlet/> component in RootLayout, as well as BlogLayout
	// We can indicate error element on the parent for all this childs
	<Route path="/" element={ <RootLayout/> } errorElement={ <Error/> }>
		<Route index element={ <Welcome/> }/>
		<Route path="/blog" element={ <BlogLayout/> }>
			{/* The loader allows us to pre-load the content ,-) */}
			<Route index element={ <BlogPosts/> } loader={ blogPostsLoader } />
			{/* Error element for managing error state state instead of try catch in useEffect ... */}
			<Route path=":id" element={ <PostDetail/> } loader={ postDetailLoader } 
				errorElement={ <Error/> } />
		</Route>
		{/* When the url target /blog/new => newPostAction is invoked */}
		<Route path="/blog/new" element={ <NewPost/> } action={ newPostAction }/>
	</Route>
));

// Component
const App = () => {

	// Return
	return(
		<RouterProvider router={ router }/>
	);

};

// Export
export default App;