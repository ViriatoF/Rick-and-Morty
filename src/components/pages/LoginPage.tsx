import "../../styles/login-form.css";

function LoginPage() {
	return (
		<section className="form-container">
			<form action="" id="login-form">
				<label className="label-form" htmlFor="">
					Your email
				</label>
				<input type="email" placeholder="Your email" required />

				<label className="label-form" htmlFor="">
					Your password
				</label>
				<input type="password" placeholder="***********" required />

				<button id="submit-button" type="submit">
					Connexion
				</button>
			</form>
		</section>
	);
}

export default LoginPage;
