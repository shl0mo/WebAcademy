import express, { Request, Response } from 'express'
import { loremIpsum } from 'lorem-ipsum'

export const index = (req: Request, res: Response) => {
	res.end('Welcome to Web Academy')
}

export const lorem = (req : Request, res :  Response) => {
	const number_of_paragraphs : number = parseInt(req.params.paragrafos)
	res.send(
		loremIpsum({
			count: number_of_paragraphs,
			format: 'html',
			paragraphLowerBound: 3,
			paragraphUpperBound: 15,
			random: Math.random,
			sentenceLowerBound: 5,
			sentenceUpperBound: 30,
			suffix: '<br>',
			units: 'paragraphs'
		})
	)
}

export const ui = (req : Request, res : Response) => {
	res.render('main/ui')
}

export const bemvindo = (req : Request, res : Response) => {
	res.end('Bem vindo')
}

export const hb1 = (req : Request, res : Response) => {
	res.render('main/hb1', {
		mensagem: 'Olá, você está aprendendo Express + HBS!'
	})
}

export const hb2 = (req : Request, res: Response) => {
	res.render('main/hb2', {
		nome: 'React',
		tipo: 'library',
		poweredByNodejs: true
	})
}

export const hb3 = (req : Request, res : Response) => {
	const profes = [
		{ nome: 'Daivd Fernandes', sala: 1238 },
		{ nome: 'Horacio Fernandes', sala: 1233 },
		{ nome: 'Edleno Moura', sala: 1236 },
		{ nome: 'Elaine Harada', sala: 1232 }
	]
	res.render('main/hb3', { profes })
}

export const hb4 = (req : Request, res : Response) => {
	const technologies = [
		{  name: 'Express', type: 'Framework', poweredByNodejs: true },
		{  name: 'Laravel', type: 'Framework', poweredByNodejs: false },
		{  name: 'React', type: 'Library', poweredByNodejs: true },
		{  name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
		{  name: 'Django', type: 'Framework', poweredByNodejs: false },
		{  name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
		{  name: 'Sequelize', type: 'ORM toll', poweredByNodejs: true },
	]
	res.render('main/hb4', { technologies })
}
