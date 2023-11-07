import Joi from 'joi';

export const schema = Joi.object({
	nome: Joi.String().min(3).max(100).required(),
	preco: Joi.number().required(),
	estoque: Joi.number().integer().required()
})
