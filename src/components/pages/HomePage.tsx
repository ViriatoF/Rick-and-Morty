import Card from "../Card";
import "../../styles/home-page.css";
import { useLoaderData } from "react-router-dom";

function HomePage() {
	const data = useLoaderData();
	const characters = data.results;
	console.log(characters);
	return (
		<>
			<main>
				<h1>Rick and Morty</h1>
				<input type="text" placeholder="Recherchez un personnage..." />
				{characters.map((element: RickData) => {
					console.log(element);

					return (
						<Card key={element.id} image={element.image} name={element.name} />
					);
				})}
			</main>
		</>
	);
}

export default HomePage;
