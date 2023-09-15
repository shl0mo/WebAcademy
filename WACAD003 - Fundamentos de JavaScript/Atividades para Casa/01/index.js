const oldWords = ['functional', 'object', 'parents', 'Oracle', 'computer', 'class']
const newWords = []


let randomStory = `One day, JavaScript, a language designed for the functional paradigm, met Java, a language designed for object orientation paradigm. JavaScript told Java that his name was like that because his parents were big fans of Java and because of it he was very inspired by Java. Java then asked if JavaScript knew about object orientation, to which he replied yes, which caused Java to immediately invite him to work at his company the Oracle. The invitation was accepted by JavaScript. On the first day of work, however, seeing how JavaScript fumbled with object-oriented concepts, noticing the tacky outfit he was wearing, and how he cursed the computer for unsuccessfully trying to use an "object" without having defined a overall model for it, Java fired him because he saw that that wasn't his function, since JavaScript was a classless language
`

function replaceWords (name1, name2) {
	const story = document.querySelector('.story')
	while (randomStory.includes('JavaScript')) randomStory = randomStory.replace('JavaScript', name1)
	while (randomStory.includes('Java')) randomStory = randomStory.replace('Java', name2)
	for (let i = 0; i < oldWords.length; i++) {
		while (randomStory.includes(oldWords[i])) randomStory = randomStory.replace(oldWords[i], newWords[i])
	}
	console.log(randomStory)
	story.innerText = randomStory
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
		fetch('https://random-word-api.herokuapp.com/all').then((res) => {
			return res.json().then((data) => {
				const data_length = data.length
				for (let i = 0; i < 6; i++) {
					const random = Math.floor(Math.random() * data_length)
					if (i === 3) {
						const randomWord = data[random]
						const randomWordCapital = data[random].replace(/^./, randomWord[0].toUpperCase())
						newWords.push(randomWordCapital)	
					} else {
						newWords.push(data[random])
					}
				}
				console.log(newWords)
				replaceWords(name1, name2)
			})
		})
	}
	if (language === 'BR') {
		const url = 'https://api.dicionario-aberto.net/random'
	}
}

function randomValueFromArray (array) {
	const random = Math.floor(Math.random() * array.length)
	return array[random]
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

/* 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION */

const interval = setInterval(function () {
	const randomize = document.querySelector('.randomize')
	randomize.addEventListener('click', result)
}, 500)
