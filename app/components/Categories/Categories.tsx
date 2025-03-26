import Badge from "./Badge";
import "./categories.css";

export default function Categories() {
	const categorias = [
        { id: 1, nome: "Perfumaria" },
        { id: 2, nome: "Corpo e banho" },
        { id: 3, nome: "Hidratante" },
        { id: 4, nome: "Desodorante" },
        { id: 5, nome: "Cabelos" },
        { id: 6, nome: "Maquiagem" },
        { id: 7, nome: "Rosto" },
        { id: 8, nome: "Casa" },
        { id: 9, nome: "Infantil" },
        { id: 10, nome: "Shampoo" },
        { id: 11, nome: "Sabonete" },
        { id: 12, nome: "Body splash" },
        { id: 13, nome: "Óleo corporal" },
        { id: 14, nome: "Corretivo" },
        { id: 15, nome: "Proteção solar" }
      ];
      

    const categoriasList = categorias.map(c => <Badge key={c.id} categoria={c.nome}></Badge>);

	return (
		<div className="categories">
			<h2>Lorem ipsum dolor sit amet consectetur</h2>
			<div className="categories-list">
				{categoriasList}
			</div>
		</div>
	);
}
