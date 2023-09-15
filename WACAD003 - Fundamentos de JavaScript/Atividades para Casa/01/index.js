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

let randomStory = `One day, JavaScript, a language designed for the functional paradigm, met Java, a language designed for objects orientation paradigm. JavaScript told Java that it was called that because its parents were big fans of it and that because of the name given to it, it was very inspired by Java. Java then asked if JavaScript knew about object orientation, to which he replied yes, which caused Java to immediately invite him to work at his company, Oracle. The invitation was accepted via JavaScript. On the first day of work, however, seeing how JavaScript fumbled with object-oriented concepts, noticing the tacky outfit he was wearing, and how he cursed the computer for unsuccessfully trying to use an "object" without having defined a model Overall for him, Java fired him because he saw that that wasn't his role, since JavaScript was a classless language
`

/* 
 * functional paradigm
 * objects orientation
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
