const http = require('node:http')
const fs = require('fs')
require('dotenv').config()

if (process.argv.length < 3) {
	throw new Error('Número de arumentos inválido')
}

const PORT = process.env.PORT
const dir = process.argv[2]

const server= http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
	fs.readdir(dir, (err, files) => {
		if (err) throw new Error(err)
		files.forEach(file => res.write(`${file}<br>`))
		res.end()
	})
})

server.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`)
})
