const API_URL = "http://pselmonks.local/wp-json/wp/v2/";
const JWT_URL = "http://pselmonks.local/wp-json/jwt-auth/v1/token";

export async function authenticate() {
	fetch(JWT_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: "gabriel",
			password: "admin_m0nks",
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			localStorage.setItem("token", data.token);
			console.log("Autenticado com sucesso!");
		});
}

export async function fetchAPI(
	endpoint: string,
	parameters: string[] | null = null
): Promise<any> {
	if (parameters) {
		endpoint += "?";
		parameters.forEach((param) => {
			endpoint += `${param}&`;
		});
	}

	const response = await fetch(API_URL + endpoint);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return await response.json();
}

export async function sendNewsletter(data: any) : Promise<any> {
	if (!localStorage.getItem("token")) {
		console.log("Não foi possível autenticar o token");
	}

	const response = await fetch(API_URL + "newsletter-subs", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
		body: JSON.stringify({
			title: `${data.nome} ${data.sobrenome}`,
            status: 'publish',
			meta: {
				nome: data.nome,
				sobrenome: data.sobrenome,
				email: data.email,
				telefone: data.telefone,
			},
		}),
	})
		.catch((error) => console.log(error));

        return response;
}
