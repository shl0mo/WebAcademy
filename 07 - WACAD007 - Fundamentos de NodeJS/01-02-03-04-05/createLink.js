function createLink (dir, filename) {
	return `<a href="/${dir}/${filename}">${filename}</a><br>`
}

module.exports = { createLink }
