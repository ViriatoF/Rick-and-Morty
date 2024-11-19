import Card from "../Card";

function HomePage() {
	return (
		<>
			<h1>Rick and Morty</h1>
			<input type="text" placeholder="Recherchez un personnage..." />
			<Card />
		</>
	);
}

export default HomePage;
