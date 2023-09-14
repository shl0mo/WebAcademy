/* 1. COMPLETE VARIABLE AND FUNCTION DEINITIONS */
const story = document.querySelector('.story')

function randomValueFromArray (array) {
	const random = Math.floor(Math.random() * array.length)
	return array[random]
}

/* 2. TEXT STRING VARIABLE */

const random_story = `
	Certo dia, JavaScript, uma linguagem pensada para o paradigma funcional, conheceu Java, uma linguagem feita para orientação a objetos. JavaScript disse a Java que se chamava assim porque seus pais eram grandes fãs deste e que por causa do nome que lhe foi dado, se inspirava muito em Java. Java então, questionou se JavaScript sabia sobre orientação a objetos, o qual respondeu que sim, o que fez com que Java imediatamente o convidadesse este para trabalhar em sua empresa, a Oracle. O convite foi aceito por JavaScript. No primeiro dia de trabalho, no entanto, ao ver como JavaScript se atrapalhava nos conceitos de orientação a objetos, ao notar a roupa cafona que ele estava usando e como xingava o computador por tentar sem sucesso usar um "objeto" sem ter definido um modelo geral para ele, Java o demitiu por ver que aquela não era a sua função, já que JavaScript era uma linguagem sem classe
`

/* 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION */

const interval = setInterval(function () {
	const randomize = document.querySelector('.randomize')
	randomize.addEventListener('click', result)
}, 500)


function result () {
	const customName = document.getElementById('customname')
	if (customName.value !== '') {
		const name = customName.value
	}
	if (document.getElementById('uk').checked) {
		const weight = Math.round(300)
		const temperature = Math.round(94)
	}

	story.textContext = ''
	story.style.visibility = 'visible'
}
