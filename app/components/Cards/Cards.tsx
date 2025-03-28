import { useEffect, useState } from "react";
import Card from "./Card";
import "./card.css";
import { fetchAPI } from "~/services/APIService";

export default function Cards(){
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchAPI('tags', ['per_page=3'])
        .then(categorias => {
            setCategories(categorias);
        })
    }, []);

    const cards = categories.map((category:any) => <Card key={category.id} category={category}></Card>);

    return (
        <div className="cards">
            {cards}
        </div>
    );
}