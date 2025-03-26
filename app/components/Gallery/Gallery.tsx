import "./gallery.css";

export default function Gallery() {
	return (
		<div className="gallery">
			<div className="gallery-text">
				<h2>Lorem ipsum dolor sit amet consectetur</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit
					scelerisque quis commodo
				</p>
			</div>
			<img className="image-1" src="/assets/img/gallery-1.png" alt="" />
			<img className="image-2" src="/assets/img/gallery-2.png" alt="" />
			<img className="image-3" src="/assets/img/gallery-3.png" alt="" />
		</div>
	);
}
