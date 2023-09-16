function loadImages () {
	const thumbBar = document.querySelector('.thumb-bar')
	const imagesDescriptions = [
		'Closeup of a human eye',
		'',
		'Purple and white flowers',
		'Anubis and his bros on an Egyptian mural',
		''
	]
	const numberOfImages = imagesDescriptions.length
	for (let i = 0; i < numberOfImages; i++) {
		const newImage = document.createElement('img')
		newImage.setAttribute('src', `./images/pic${i+1}.jpg`)
		newImage.setAttribute('alt', imagesDescriptions[i])
		newImage.addEventListener('click', displayImage)
		thumbBar.appendChild(newImage);
	}
	addDarkenButtonListener()
}

function displayImage (event) {
	const currentDisplayedImage = document.querySelector('.displayed-img')
	const newDisplayedImageSrc = event.target.src
	currentDisplayedImage.setAttribute('src', newDisplayedImageSrc)
}

function addDarkenButtonListener () {
	document.querySelector('.dark').addEventListener('click', darken)
}

function darken () {
	const overlay = document.querySelector('.overlay')
	if (overlay.style.backgroundColor === '') {
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
	} else {
		overlay.style.backgroundColor = ''
	}
}
