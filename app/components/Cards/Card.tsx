import "./card.css";

export default function Card(props:any){
    let category = props.category;
    return (
        <div className="category-card">
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <button>Saiba Mais</button>
        </div>
    );
}