import "./cta.css";

export default function CTA() {
	return (
		<div className="cta">
			<div className="cta-content">
				<div className="cta-text">
					<h2>Baixe o App e Tenha Tudo na Palma da Mão</h2>
					<p>
						Acesse ofertas exclusivas, novidades e compre seus produtos favoritos com
						praticidade e segurança, onde quer que esteja!
					</p>
				</div>
				<div className="app-btns">
					<a href="">
						<img src="/assets/img/apple_btn.png" alt="" />
					</a>
					<a href="">
						<img src="/assets/img/play_store_btn.png" alt="" />
					</a>
				</div>
			</div>
		</div>
	);
}
