import Card from "../Card";
import "../../styles/home-page.css";

function HomePage() {
	return (
		<>
			<main>
				<h1>Rick and Morty</h1>
				<input type="text" placeholder="Recherchez un personnage..." />
				<Card />
			</main>
		</>
	);
}

export default HomePage;
