import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuth } from '../services/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { currentUser, isLoggedIn } = useAuth();

	return (
		<Route
			{...rest}
			render={(props) => {
				return isLoggedIn ? (
					<Component {...props} />
				) : (
					<Redirect to='/login' />
				);
			}}
		></Route>
	);
};

export default PrivateRoute;
