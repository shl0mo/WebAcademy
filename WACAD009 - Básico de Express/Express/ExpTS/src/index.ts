import express, { Request, Response, NextFunction } from 'express'
import { engine } from 'express-handlebars'
import sass from 'node-sass-middleware'
import dotenv from 'dotenv'


import logger from './middlewares/logger'
import { router } from './router/router'
import validateEnv from './utils/validateEnv'

dotenv.config()
validateEnv()

const app = express()
const PORT = process.env.PORT || 3333

app.engine('handlebars', engine({
	layoutsDir: `${__dirname}/views/layouts`,
	helpers: require(`${__dirname}/helpers/helpers.ts`)
}))
app.set('view engine', 'handlebars')
app.set('views', `${__dirname}/views`)

app.use(sass({
	src: `${__dirname}/../public/scss`,
	dest: `${__dirname}/../public/css`,
	outputStyle: 'compressed',
	prefix: '/css'
}))


app.use('/img', express.static(`${__dirname}/../public/img`))
app.use('/js', [
	express.static(`${__dirname}/../public/js`),
	express.static(`${__dirname}/../node_modules/bootstrap/dist/js`)
])
app.use('/css', express.static(`${__dirname}/../public/css`))
app.use('/webfonts', express.static(`${__dirname}/../node_modules/@fortawesome/fontawesome-free/webfonts`))

console.log(__dirname)

app.use(logger('completo'))
app.use(router)


app.get('/', (req: Request, res: Response) => {
	res.send('Hello world!')
})


app.listen(PORT, () => {
	console.log(`Express app iniciada na porta ${PORT}.`)
})
