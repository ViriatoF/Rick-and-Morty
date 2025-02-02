import { NavLink } from "react-router-dom";
import "../../styles/header.css";
import useTheme from "../../utils/useTheme";

function Header() {
	const { theme, setTheme } = useTheme();

	return (
		<>
			<header>
				<img src="../rick_logo.png" alt="Website logo" />
				<nav>
					<ul>
						<li>
							<NavLink to={"/"}>Accueil</NavLink>
						</li>
						<li>
							<NavLink to={"login"}>Connection</NavLink>
						</li>
						<li>
							<input type="checkbox" onClick={() => setTheme(!theme)} />
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;
