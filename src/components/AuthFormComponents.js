import styled from 'styled-components';

export const AuthFormParent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #dddddd;
	/* width: 100%; */
`;

export const AuthForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* border: 1px solid #999999;
	border-radius: 10px; */
	padding: 30px 0px;
	margin-top: 50px;
	width: 100%;
`;

export const AuthFormHeading = styled.h1`
	margin-top: 150px;
`;

export const AuthFormInputDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}` : '0')};
`;

export const AuthFormLabel = styled.label`
	font-size: 1rem;
`;

export const AuthFormInput = styled.input`
	padding: 0px 5px;
	border: 1px solid #999999;
	margin-top: 8px;
	font-size: 1.9rem;
	width: 100%;
	background-color: #f3f3f3;
`;

export const AuthFormSubmitDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}` : '0')};
`;

export const AuthFormSubmitInput = styled.input`
	padding: 8px 5px;
	border: 1px solid #999999;
	margin-top: 8px;
	font-size: 1.2rem;
	width: 100%;
	background-color: #f3f3f3;

	&:hover {
		cursor: pointer;
		background-color: #c2c2c2;
	}
`;
