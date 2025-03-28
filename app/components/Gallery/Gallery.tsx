import { fetchAPI } from "~/services/APIService";
import "./gallery.css";
import { useEffect, useState } from "react";

export default function Gallery() {
	const [images, setImages] = useState<any[]>([]);
	useEffect(() => {
		try {
			fetchAPI("media", ["per_page=3"]).then((response) => {
				setImages(response);
			});
		} catch (error) {
			console.log(error);
		}
	}, []);

	console.log(images);

	return (
		<div className="gallery">
			<div className="gallery-text">
				<h2>Venha Conhecer Nosso Espaço</h2>
				<p>
				Conheça nosso espaço e descubra uma experiência única de compras com atendimento personalizado e os melhores produtos de beleza e bem-estar.
				</p>
			</div>
			{images.length >= 3 && (
				<>
					<img
						className="image-1"
						src={images[0].source_url}
						alt={images[0].alt_text}
					/>
					<img
						className="image-2"
						src={images[1].source_url}
						alt={images[1].alt_text}
					/>
					<img
						className="image-3"
						src={images[2].source_url}
						alt={images[2].alt_text}
					/>
				</>
			)}
		</div>
	);
}
