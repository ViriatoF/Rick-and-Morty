import Card from "../Card";
import "../../styles/home-page.css";
import { useLoaderData } from "react-router-dom";
import { type ChangeEvent, useState } from "react";
import type RickData from "../../types/home";
import useTheme from "../../utils/useTheme";

function HomePage() {
	const { theme } = useTheme();
	const data = useLoaderData();
	const characters = data.results;

	const [value, setValue] = useState("");

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setValue(event.target.value);
	}

	const filteredArray =
		value !== ""
			? characters?.filter((el: RickData) =>
					el.name.toLowerCase().includes(value),
				)
			: characters;

	return (
		<>
			<main className={`home ${theme && "light"} `}>
				<h1>Rick and Morty</h1>
				<input
					type="text"
					id="search-bar"
					placeholder="Recherchez un personnage..."
					onChange={handleChange}
				/>
				<section id="characters-section">
					{filteredArray?.map((element: RickData) => {
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
				{!filteredArray?.length && (
					<figure className="no-results">
						<img
							src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/74/Rick_et_Morty_Logo_FR.png/1200px-Rick_et_Morty_Logo_FR.png"
							alt="Rick and Morty banner, displayed when no results"
						/>
						<figcaption>
							Aucun personnage ne correspond à la recherche
						</figcaption>
					</figure>
				)}
			</main>
		</>
	);
}

export default HomePage;
