import "./gallery.css";

export default function Gallery() {
	return (
		<div className="gallery">
			<div className="gallery-text">
				<div>
					<h2>Lorem ipsum dolor sit amet consectetur</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus
						sit scelerisque quis commodo
					</p>
				</div>
				<img src="https://placehold.co/800x800" alt="" />
			</div>
            <div className="gallery-image">
				<img src="https://placehold.co/600x400" alt="" />
				<img src="https://placehold.co/600x400" alt="" />
            </div>
		</div>
	);
}
