import Card from "./Card";
import "./products.css";

export default function Products() {
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
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
		</div>
	);
}
