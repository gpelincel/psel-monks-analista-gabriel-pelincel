import LogoSVG from "../LogoSVG";
import "./navigation.css";

export default function Navigation() {
	return (
		<nav className="desktop-navigation">
			<div>
				<LogoSVG></LogoSVG>
			</div>
			<ul>
				<li>
					<a href="">Categoria 1</a>
				</li>
				<li>
					<a href="">Categoria 2</a>
				</li>
				<li>
					<a href="">Categoria 3</a>
				</li>
				<li>
					<a href="">Categoria 4</a>
				</li>
			</ul>
		</nav>
	);
}
