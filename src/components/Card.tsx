import { NavLink } from "react-router-dom";
import "../styles/card.css";

function Card({ image, name, id }: RickData) {
	return (
		<>
			<figure>
				<NavLink to={`detail/${id}`}>
					<img src={image} alt={name} />
				</NavLink>
				<figcaption>{name}</figcaption>
			</figure>
		</>
	);
}

export default Card;
