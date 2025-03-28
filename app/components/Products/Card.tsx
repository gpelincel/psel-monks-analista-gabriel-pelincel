import "./products.css";

export default function Card(props:any) {
	let product = props.product;

	return (
		<div className="card">
			<img src={product.featured_image_url} alt={product.title.rendered}/>
			<div className="card-content">
				<h3>{product.title.rendered}</h3>
				<p>{product.content.text}</p>
			</div>
		</div>
	);
}
