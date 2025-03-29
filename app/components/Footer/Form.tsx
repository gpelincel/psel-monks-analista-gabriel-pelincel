import { useEffect, useState } from "react";
import "./footer.css";
import { sendNewsletter } from "~/services/APIService";

export default function Form() {

	const [isDisabled, setDisabled] = useState<boolean>(false);
	const [messageClass, setMessageClass] = useState('success');
	const [verifySum, setVerifySum] = useState<number[]>([]);

	const generateRandomNumber = () => {
		return Math.floor(Math.random() * (999 - 1 + 1) + 1);
	}

	useEffect(()=> {
		let sum = [
			generateRandomNumber(),
			generateRandomNumber(),
		];

		setVerifySum(sum);
	}, [])

	const [formData, setFormData] = useState({
		nome: "",
        sobrenome: "",
        email: "",
        telefone: null,
		soma: 0
	});

	const [message, setMessage] = useState("");

	async function submitForm (e:any) {
		e.preventDefault();

		let sumResult = verifySum[0] + verifySum[1];
		let verify_sum = Number(formData.soma) !== sumResult;

		console.log(sumResult);
		console.log(formData.soma);
		
		if (!formData.nome || !formData.sobrenome || !formData.email || !formData.soma || verify_sum) {
			setMessageClass("error");

			console.log(formData.soma);
		
			let errorMsg = "";
			if (!formData.nome) errorMsg = "Por favor insira seu nome!";
			else if (!formData.sobrenome) errorMsg = "Por favor insira seu sobrenome!";
			else if (!formData.email) errorMsg = "Por favor insira seu e-mail!";
			else if (!formData.soma) errorMsg = "Por favor insira a soma dos números.";
			else if (verify_sum) errorMsg = "Por favor insira a soma correta dos números.";
		
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
		if (e.target.name !== "resultado-soma") {
			setFormData({...formData, [e.target.name]: e.target.value });
		} else {
			
		}
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
						<p className="number">{verifySum[0]}</p>
						<p>+</p>
						<p className="number">{verifySum[1]}</p>
					</div>
					<p>=</p>
				</div>
				<div>
					<input onChange={handleChange} disabled={isDisabled} id="soma" name="soma" type="number" min="0" placeholder="Resultado*" />
				</div>
			</div>
			<button type="submit" hidden={isDisabled}>Inscrever-se</button>
		</form>
	);
}
