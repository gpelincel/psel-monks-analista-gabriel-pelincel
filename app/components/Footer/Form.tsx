import { useState } from "react";
import "./footer.css";
import { sendNewsletter } from "~/services/APIService";

interface Profile {
	nome: string;
    sobrenome: string;
    email: string;
    telefone: string | null;
}

export default function Form() {

	const [isDisabled, setDisabled] = useState<boolean>(false);
	const [messageClass, setMessageClass] = useState('success');

	const [formData, setFormData] = useState<Profile>({
		nome: "",
        sobrenome: "",
        email: "",
        telefone: null,
	});

	const [message, setMessage] = useState("");

	async function submitForm (e:any) {
		e.preventDefault();
		
		if (!formData.nome || !formData.sobrenome || !formData.email) {
			setMessageClass("error");
		
			let errorMsg = "";
			if (!formData.nome) errorMsg = "Por favor insira seu nome!";
			else if (!formData.sobrenome) errorMsg = "Por favor insira seu sobrenome!";
			else if (!formData.email) errorMsg = "Por favor insira seu e-mail!";
		
			setMessage(errorMsg);
			return;
		}
		
		const response = await sendNewsletter(formData);

		console.log(response);

		if (response.ok) {
			setDisabled(true);
			setMessageClass("success");
			setMessage("Obrigado por se cadastrar! Entraremos em contato em breve.");
		}
	}

	async function handleChange(e:any){
		setFormData({...formData, [e.target.name]: e.target.value });
	}

	return (
		<form onSubmit={submitForm} action="">
			<div className="form-text">
				<h2>Inscreva-se na Nossa Newsletter</h2>
				<p>
				Receba ofertas exclusivas, novidades e dicas de beleza diretamente no seu e-mail. Fique por dentro de tudo!
				</p>
				<small>*Campos obrigatórios</small>
				<small className={messageClass}>{message}</small>
			</div>
			<div className="input-group">
				<input onChange={handleChange} disabled={isDisabled} id="nome" name="nome" type="text" placeholder="Nome*" />
				<input onChange={handleChange} disabled={isDisabled} id="sobrenome" name="sobrenome" type="text" placeholder="Sobrenome*" />
				<input onChange={handleChange} disabled={isDisabled} id="email" name="email" type="email" placeholder="E-mail*"/>
				<input onChange={handleChange} disabled={isDisabled} id="telefone" name="telefone" type="text" placeholder="Telefone"/>
			</div>
			<div className="verify">
				<p>Verificação de Segurança</p>
				<div className="container-sum">
					<div className="verify-sum">
						<p className="number">427</p>
						<p>+</p>
						<p className="number">628</p>
					</div>
					<p>=</p>
				</div>
				<div>
					<input disabled={isDisabled} id="resultado-soma" name="resultado-soma" type="number" min="0" placeholder="Resultado*" />
				</div>
			</div>
			<button type="submit" hidden={isDisabled}>Inscrever-se</button>
		</form>
	);
}
