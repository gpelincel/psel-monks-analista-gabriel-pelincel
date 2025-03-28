import "./categories.css";

export default function Badge(props:any){
    let categoria = props.categoria;
    return (
        <a href={categoria.link} className="category-badge">
            <p>{categoria.name}</p>
        </a>
    );
}