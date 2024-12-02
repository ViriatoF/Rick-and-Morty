function LoginPage() {
	return (
		<form action="">
			<label htmlFor="">Your email</label>
			<input type="email" placeholder="Your email" required />

			<label htmlFor="">Your password</label>
			<input type="password" placeholder="***********" required />

			<button type="submit">Connexion</button>
		</form>
	);
}

export default LoginPage;
