import "../styles/card.css";

function Card({ image, name }: RickData) {
	return (
		<>
			<figure>
				<img src={image} alt={name} />
				<figcaption>{name}</figcaption>
			</figure>
		</>
	);
}

export default Card;
