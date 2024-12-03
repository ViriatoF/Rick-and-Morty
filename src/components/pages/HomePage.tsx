import Card from "../Card";
import "../../styles/home-page.css";
import { useLoaderData } from "react-router-dom";

function HomePage() {
	const data = useLoaderData();
	const characters = data.results;
	return (
		<>
			<main>
				<h1>Rick and Morty</h1>
				<input
					type="text"
					id="search-bar"
					placeholder="Recherchez un personnage..."
				/>
				<section id="characters-section">
					{characters.map((element: RickData) => {
						return (
							<Card
								key={element.id}
								image={element.image}
								name={element.name}
								id={element.id}
							/>
						);
					})}
				</section>
			</main>
		</>
	);
}

export default HomePage;
