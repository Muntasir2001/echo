import React, { createContext, useContext, useState, useEffect } from 'react';

import Gun from 'gun';
import 'gun/sea';
import 'gun/axe';

const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

/* database */
export const db = Gun();

/* gun user */
export const user = db.user().recall({ sessionStorage: true });

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	const login = (username, password) => {
		return user.auth(username, password, ({ err }) => err && alert(err));
	};

	const createAccount = (username, password) => {
		return user.create(username, password, ({ err }) => {
			if (err) {
				alert(err);
			} else {
				login();
			}
		});
	};

	const isLoggedIn = () => {
		return user.is;
	};

	const value = {
		login,
		createAccount,
		isLoggedIn,
		currentUser,
	};

	useEffect(() => {
		const setUsername = () => {
			if (user.is) {
				setCurrentUser(user.get('alias'));
				setLoading(false);
				console.log('logged in', currentUser);
			} else {
				console.log('loggedo out');
			}
		};

		return setUsername();
	}, []);

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
