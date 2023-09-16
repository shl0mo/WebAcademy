function loadImages () {
	thumbBar = document.querySelector('.thumb-bar')
	const imagesDescriptions = ['', '', '', '', '']
	const numberOfImages = imagesDescriptions.length
	for (let i = 0; i < numberOfImages; i++) {
		const newImage = document.createElement('img');
		newImage.setAttribute('src', `./images/pic${i+1}.jpg`);
		newImage.setAttribute('alt', imagesDescriptions[i]);
		thumbBar.appendChild(newImage);
	}

}

/*
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');*/
