import { useEffect, useState } from "react";
import Card from "./Card";
import "./products.css";
import { fetchAPI } from "~/services/APIService";

export default function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		try {
			fetchAPI("posts", ["per_page=4", "categories=3"]).then((products) => {
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
				<h2>Produtos de Beleza e Bem-Estar para Você</h2>
				<p>
					Encontre perfumes irresistíveis, maquiagens de alta performance, cuidados
					para pele e cabelos, além de fragrâncias para deixar sua casa ainda mais
					aconchegante. Qualidade e sofisticação para seu dia a dia!
				</p>
			</div>
			<div className="card-list">{cardsList}</div>
		</div>
	);
}
