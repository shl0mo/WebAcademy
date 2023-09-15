/* 1. COMPLETE VARIABLE AND FUNCTION DEINITIONS */
function fetchNames () {
	fetch('https://random-word-api.herokuapp.com/all')
	.then((res) => {
		return res.json().then((data) => {
			console.log(data)
		})
	})
}

function randomValueFromArray (array) {
	const random = Math.floor(Math.random() * array.length)
	return array[random]
}

/* 2. TEXT STRING VARIABLE */

let randomStory = `
	Certo dia, JavaScript, uma linguagem pensada para o paradigma funcional, conheceu Java, uma linguagem feita para orientação a objetos. JavaScript disse a Java que se chamava assim porque seus pais eram grandes fãs deste e que por causa do nome que lhe foi dado, se inspirava muito em Java. Java então, questionou se JavaScript sabia sobre orientação a objetos, o qual respondeu que sim, o que fez com que Java imediatamente o convidadesse este para trabalhar em sua empresa, a Oracle. O convite foi aceito por JavaScript. No primeiro dia de trabalho, no entanto, ao ver como JavaScript se atrapalhava nos conceitos de orientação a objetos, ao notar a roupa cafona que ele estava usando e como xingava o computador por tentar sem sucesso usar um "objeto" sem ter definido um modelo geral para ele, Java o demitiu por ver que aquela não era a sua função, já que JavaScript era uma linguagem sem classe
`

/* 
 * o paradigma funcional
 * orientação a objetos
 * pais
 * Oracle
 * computador
 * "objeto"
 * classe
 * */

/* 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION */

const interval = setInterval(function () {
	const randomize = document.querySelector('.randomize')
	randomize.addEventListener('click', result)
}, 500)


function result () {
	const customName1 = document.getElementById('customname-1')
	const customName2 = document.getElementById('customname-2')
	let story = document.querySelector('.story')
	if (customName1.value !== '' || customName2.value !== '') {
		const name1 = customName1.value
		const name2 = customName2.value
		randomStory = randomStory.replace('JavaScript', name1)
		randomStory = randomStory.replace('Java', name2)
	}
	if (document.getElementById('uk').checked) {

	}
	fetchNames()
	console.log(randomStory)
	story.innerText = randomStory
	story.style.visibility = 'visible'
}
