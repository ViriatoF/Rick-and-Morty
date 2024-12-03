import { useLoaderData } from "react-router-dom";
import "../../styles/detail.css";

function Detail() {
	const data = useLoaderData();
	console.log(data);

	return (
		<>
			<main id="detail-main">
				<section id="detail-character">
					<aside>
						<img src={data.image} alt={`Representation of ${data.name}`} />
					</aside>
					<section id="character-details">
						<h2>{data.name}</h2>
						<p>{data.status}</p>
						<p>{data.species}</p>
						<p>Last location : {data.location.name}</p>
					</section>
				</section>
			</main>
		</>
	);
}

export default Detail;
