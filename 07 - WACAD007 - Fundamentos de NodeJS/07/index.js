const http = require('http')
const fsPromisses = require('fs').promisses
require('dotenv').config()

const PORT = process.env.PORT

const readFile = async(filePath) => {
	try {
		return await fsPromises.readFile(filePath, 'utf-8')
	} catch (err) {
		console.error(er)
	}
}


const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
	readFile('index.html').then((data) => {
		try {
			console.log(data)
		} catch (err) {
			
		}
	})
})


server.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`)
})
