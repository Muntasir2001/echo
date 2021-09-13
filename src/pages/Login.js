import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import {
	AuthFormParent,
	AuthForm,
	AuthFormHeading,
	AuthFormInputDiv,
	AuthFormLabel,
	AuthFormInput,
	AuthFormSubmitDiv,
	AuthFormSubmitInput,
} from '../components/AuthFormComponents';

const Login = () => {
	const [username, setUsername] = useState({ email: '' });
	const [password, setPassword] = useState({ password: '' });
	// const [error, setError] = useState(false);
	// const [errorMssg, setErrorMssg] = useState('');
	// const [loading, setLoading] = useState(false);

	const onUsernameChange = (e) => {
		setUsername(() => {
			return {
				[e.target.name]: e.target.value,
			};
		});
	};

	const onPasswordChange = (e) => {
		setPassword(() => {
			return {
				[e.target.name]: e.target.value,
			};
		});
	};

	return (
		<>
			<AuthFormParent>
				<AuthFormHeading>Login</AuthFormHeading>
				<AuthForm>
					<AuthFormInputDiv>
						<AuthFormLabel>Username</AuthFormLabel>
						<AuthFormInput
							type='text'
							name='username'
							onChange={onUsernameChange}
							required
						/>
					</AuthFormInputDiv>
					<AuthFormInputDiv>
						<AuthFormLabel>Password</AuthFormLabel>
						<AuthFormInput
							type='password'
							name='password'
							onChange={onPasswordChange}
							required
						/>
					</AuthFormInputDiv>
				</AuthForm>
			</AuthFormParent>
		</>
	);
};

export default Login;
