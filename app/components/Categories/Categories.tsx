import { useEffect, useState } from "react";
import Badge from "./Badge";
import "./categories.css";
import { fetchAPI } from "~/services/APIService";


export default function Categories() {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    try {
      fetchAPI('tags', ['per_page=50']).then(categorias => {
        setCategorias(categorias);
      });
    } catch (error) {
      console.log(error);
    }
  }, [])

  const categoriasList = categorias.map((categoria:any) => <Badge key={categoria.id} categoria={categoria}></Badge>);

	return (
		<div className="categories">
			<h2>Nossas Categorias em Destaque</h2>
			<div className="categories-list">{categoriasList}</div>
		</div>
	);
}
