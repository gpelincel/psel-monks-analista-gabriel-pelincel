import "./categories.css";

export default function Badge(props:any){
    let nome = props.categoria.name;
    return (
        <div className="category-badge">
            <p>{nome}</p>
        </div>
    );
}