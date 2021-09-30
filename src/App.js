import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Layout } from './components/Utils';
import { AuthProvider } from './services/AuthContext';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<>
			<Router>
				<AuthProvider>
					<Switch>
						<Layout>
							<Route exact path='/login' component={Login} />

							<PrivateRoute
								exact
								path='/create-account'
								component={CreateAccount}
							/>
						</Layout>
					</Switch>
				</AuthProvider>
			</Router>
		</>
	);
}

export default App;
