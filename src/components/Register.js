import React, { useEffect } from "react";
import styled from "styled-components";
import CustomInput from "./Input";
import CustomLink from "./CustomLink";
import Button from "./Button";
import { useAuthContext } from "../context/AuthContext";
import Card from "./Card";

const Register = () => {
	const {
		updateRegisterPage,
		name,
		lastname,
		email,
		password,
		password2,
		handleRegister,
		isLoading,
	} = useAuthContext();

	useEffect(() => {
		const callback = (e) => {
			if (e.key === "Enter") {
				handleRegister(e);
			}
		};

		document.addEventListener("keypress", callback);

		return () => {
			document.removeEventListener("keypress", callback);
		};
	}, []);

	return (
		<Card width="450px">
			<Div>
				<h1>Sing up</h1>
				<form onSubmit={handleRegister}>
					<CustomInput
						onchange={updateRegisterPage}
						value={name}
						placeholder="Name"
						name="name"
						type="text"
					/>
					<CustomInput
						onchange={updateRegisterPage}
						value={lastname}
						placeholder="Lastname"
						name="lastname"
						type="text"
					/>
					<CustomInput
						onchange={updateRegisterPage}
						value={email}
						placeholder="Email"
						name="email"
						type="email"
					/>
					<CustomInput
						onchange={updateRegisterPage}
						value={password}
						placeholder="Password"
						name="password"
						password
					/>
					<CustomInput
						onchange={updateRegisterPage}
						value={password2}
						placeholder="Password again"
						name="password2"
						password
					/>
					<Button loading={isLoading} full type="submit">
						Sign up
					</Button>
				</form>
				<p>
					Already have an account? <CustomLink to="/login">Login</CustomLink>
				</p>
			</Div>
		</Card>
	);
};

const Div = styled.div`
	h1 {
		font-size: 32px;
		text-align: center;
		color: ${(props) => props.theme.textColor};
		margin-bottom: 20px;
	}

	p {
		text-align: center;
		font-size: 13px;
		color: ${(props) => props.theme.textColorLight};
	}

	p {
		margin-top: 30px;
	}
`;

export default Register;
