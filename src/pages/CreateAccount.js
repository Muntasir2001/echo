import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
	AuthFormParent,
	AuthForm,
	AuthFormHeading,
	AuthFormInputDiv,
	AuthFormLabel,
	AuthFormInput,
	AuthFormSubmitDiv,
	AuthFormSubmitInput,
	AuthFormButtonDiv,
	AuthFormButton,
} from '../components/AuthFormComponents';

const CreateAccount = () => {
	const [username, setUsername] = useState({ email: '' });
	const [password, setPassword] = useState({ password: '' });

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
				<AuthFormHeading>Create Account</AuthFormHeading>
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

					<AuthFormInputDiv marginTop='20px'>
						<AuthFormLabel>Password</AuthFormLabel>
						<AuthFormInput
							type='password'
							name='password'
							onChange={onPasswordChange}
							required
						/>
					</AuthFormInputDiv>

					<AuthFormSubmitDiv marginTop='30px'>
						<AuthFormSubmitInput
							type='submit'
							name='submit'
							value='Create Account'
							onChange={onPasswordChange}
							required
						/>
					</AuthFormSubmitDiv>

					<AuthFormButtonDiv>
						<Link to='/login'>
							<AuthFormButton>Login</AuthFormButton>
						</Link>
					</AuthFormButtonDiv>
				</AuthForm>
			</AuthFormParent>
		</>
	);
};

export default CreateAccount;
