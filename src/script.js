function validar_email (email) {
	const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
	return emailRegex.test(email)
}

function validar_cep (cep) {
	const cepRegex = /^\d{5}-\d{3}$/
	return cepRegex.test(cep)
}

function validar_cpf (cpf) {
	// escreva seu código aqui
}

function validar_telefone (telefone) {
	// escreva seu código aqui
}
