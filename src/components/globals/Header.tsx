import { NavLink } from "react-router-dom";
import "../../styles/header.css";

function Header() {
	return (
		<>
			<header>
				<img src="rick_logo.png" alt="Website logo" />
				<nav>
					<ul>
						<li>
							<NavLink to={"/"}>Accueil</NavLink>
						</li>
						<li>
							<NavLink to={"login"}>Connection</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;
