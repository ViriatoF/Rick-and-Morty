import { NavLink } from "react-router-dom";
import "../../styles/header.css";

function Header() {
	return (
		<>
			<header>
				<img src="rick_logo.png" alt="Website logo" />
				<nav>
					<ul>
						<NavLink to={"/"}>
							<li>Accueil</li>
						</NavLink>
						<NavLink to={"login"}>
							<li>Connection</li>
						</NavLink>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;
