import { Request, Response, NextFunction } from 'express'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

const PASTA_LOGS = process.env.PASTA_LOGS

function logger(tipo: 'simples' | 'completo') {
	if (tipo === 'simples') {
		return (req: Request, res: Response, next: NextFunction) => {
			const log = `${new Date().toISOString()} ${req.url} ${req.method}\n`
			fs.appendFile(`${__dirname}/logs.txt`, log, (err) => {
				if (err) throw err
				next()
			})
		}
	} else {
		return (req: Request, res: Response, next: NextFunction) => {
			const log = `${new Date().toISOString()} ${req.url} ${req.method} ${req.httpVersion} ${req.get('User-Agent')}\n`
			fs.appendFile(`${__dirname}/logs.txt`, log, (err) => {
				if (err) throw err
				next()
			})
		}
	}

}

export default logger
