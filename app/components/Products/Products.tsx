import { useEffect, useState } from "react";
import Card from "./Card";
import "./products.css";
import { fetchAPI } from "~/services/APIService";

export default function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		try {
			fetchAPI("posts",['per_page=4']).then((products) => {
				setProducts(products);
			});
		} catch (error) {
			console.log(error);
		}
	}, []);

	const cardsList = products.map((product: any) => (
		<Card key={product.id} product={product}></Card>
	));

	return (
		<div className="products">
			<div className="products-container">
				<h2>Lorem ipsum dolor sit amet consectetur</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit
					scelerisque quis commodo
				</p>
			</div>
			<div className="card-list">
				{cardsList}
			</div>
		</div>
	);
}
