let randomStoryEn = `One upon a time JavaScript, a language designed for the functional paradigm, met Java, a language designed for object orientation paradigm. JavaScript told Java that his name was like that because his parents were big fans of Java and because of it he was very inspired by Java. Java then asked if JavaScript knew about object orientation, to which he replied yes, which caused Java to immediately invite him to work at his company the Oracle. The invitation was accepted by JavaScript. On the first day of work, however, seeing how JavaScript fumbled with object-oriented concepts, noticing the tacky outfit he was wearing, and how he cursed the computer for unsuccessfully trying to use an "object" without having defined a overall model for it, Java fired him because he saw that that wasn't his function, since JavaScript was a classless language
`

let randomStoryPtBr = `Certo dia, JavaScript, uma linguagem pensada para o paradigma funcional, conheceu Java, uma linguagem feita para orientação a objetos. JavaScript disse a Java que se chamava assim porque seus pais eram grandes fãs deste e que por causa do nome que lhe foi dado, se inspirava muito em Java. Java então, questionou se JavaScript sabia sobre orientação a objetos, o qual respondeu que sim, o que fez com que Java imediatamente o convidade para trabalhar em sua empresa, a Oracle. O convite foi aceito por JavaScript. No primeiro dia de trabalho, no entanto, ao ver como JavaScript se atrapalhava nos conceitos de orientação a objetos, ao notar a roupa cafona que ele estava usando e como xingava o computador por tentar sem sucesso usar um "objeto" sem ter definido um modelo geral para ele, Java o demitiu por ver que aquela não era a sua função, já que JavaScript era uma linguagem sem classe
`

function replaceWords (name1, name2, text, oldWords, newWords) {
	const story = document.querySelector('.story')
	while (text.includes('JavaScript')) text = text.replace('JavaScript', name1)
	while (text.includes('Java')) text = text.replace('Java', name2)
	for (let i = 0; i < oldWords.length; i++) {
		while (text.includes(oldWords[i])) text = text.replace(oldWords[i], newWords[i])
	}
	story.innerText = text
	story.style.visibility = 'visible'
}

function result (language) {
	const customName1 = document.getElementById('customname-1')
	const customName2 = document.getElementById('customname-2')
	const name1 = customName1.value
	const name2 = customName2.value
	if (name1 === '' || name2 === '') {
		alert('Enter custom names')
		return
	}
	if (document.getElementById('us').checked) {
		const oldWords = ['functional', 'object', 'parents', 'Oracle', 'outfit', 'computer', 'class']
		const newWords = []
		fetch('https://random-word-api.herokuapp.com/all').then((res) => {
			return res.json().then((data) => {
				const data_length = data.length
				for (let i = 0; i < oldWords.length; i++) {
					const random = Math.floor(Math.random() * data_length)
					if (i === 3) {
						const randomWord = data[random]
						const randomWordCapital = data[random].replace(/^./, randomWord[0].toUpperCase())
						newWords.push(randomWordCapital)	
					} else {
						newWords.push(data[random])
					}
				}
				replaceWords(name1, name2, randomStoryEn, oldWords, newWords)
			})
		})
	}
	if (document.getElementById('br').checked) {
		const oldWords = ['funcional', 'objeto', 'pais', 'Oracle', 'roupa', 'computador', 'classe']
		const newWords = []
		const promises = []
		for (let i = 0; i < oldWords.length; i++) {
			const p = new Promise(function (resolve, reject) {
				fetch('https://api.dicionario-aberto.net/random').then((res) => {
					return res.json().then((data) => {
						resolve(newWords.push(data.word))
					})
				})
			})
			promises.push(p)
		}
		Promise.all(promises).then(function () {
			newWords[3] = newWords[3].replace(/^./, newWords[3][0].toUpperCase())
			replaceWords(name1, name2, randomStoryPtBr, oldWords, newWords)
		})
	}
}

function randomValueFromArray (array) {
	const random = Math.floor(Math.random() * array.length)
	return array[random]
}

function labelsInEn () {
	const labels = document.querySelectorAll('label')
	const button = document.querySelector('button')
	labels[0].innerText = 'Character 1 name:'
	labels[1].innerText = 'Character 2 name:'
		button.innerText = 'Generate random story'
}

function labelsInPtBr () {
	const labels = document.querySelectorAll('label')
	const button = document.querySelector('button')
	labels[0].innerText = 'Nome do personagem 1:'
	labels[1].innerText = 'Nome do personagem 2:'
	button.innerText = 'Gerar história aleatória'
}


/* 
 * functional
 * object
 * parents
 * Oracle
 * computer
 * class
 * 
*/

const interval = setInterval(function () {	
	if (document.contains(document.querySelector('.randomize'))) {
		const randomize = document.querySelector('.randomize')
		randomize.addEventListener('click', result)
		document.querySelector('#us').addEventListener('click', labelsInEn)
		document.querySelector('#br').addEventListener('click', labelsInPtBr)
		clearInterval(interval)
	}
}, 500)

