import "./categories.css";

export default function Badge(categoria:any){
    return (
        <div className="category-badge">
            <p>{categoria.categoria}</p>
        </div>
    );
}