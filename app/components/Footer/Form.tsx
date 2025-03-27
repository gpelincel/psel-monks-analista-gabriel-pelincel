import "./footer.css";

export default function Form() {
	return (
		<form action="">
			<div className="form-text">
				<h2>Lorem ipsum dolor sit amet consectetur</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit
					scelerisque
				</p>
				<small>*Lorem ipsum dolor sit amet consectetur</small>
			</div>
			<div className="input-group">
				<input type="text" placeholder="Categoria*" />
				<input type="text" placeholder="Categoria*" />
				<input type="text" placeholder="Categoria*" />
				<input type="text" placeholder="Categoria*" />
			</div>
			<div className="verify">
				<p>Verificação de Segurança</p>
				<div className="verify-sum">
					<p className="number">427</p>
					<p>+</p>
					<p className="number">628</p>
				</div>
				<p>=</p>
				<input type="text" placeholder="Resultado*" />
			</div>
		</form>
	);
}
