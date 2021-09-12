import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import {
	AuthForm,
	AuthFormHeading,
	AuthFormInputDiv,
	AuthFormLabel,
	AuthFormInput,
	AuthFormSubmitDiv,
	AuthFormSubmitInput,
} from '../components/AuthFormComponents';

const Login = () => {
	const [email, setEmail] = useState({ email: '' });
	const [password, setPassword] = useState({ password: '' });
	const [error, setError] = useState(false);
	const [errorMssg, setErrorMssg] = useState('');
	const [loading, setLoading] = useState(false);

	return (
		<>
			<h2>hello</h2>
		</>
	);
};

export default Login;
