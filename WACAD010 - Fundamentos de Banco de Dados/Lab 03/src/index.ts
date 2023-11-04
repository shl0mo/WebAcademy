import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const PORT = 5000;

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

const consumidor = prisma.consumidor;

const alreadyExists = async (cpf: string) => {
	const consumer = await (consumidor.findUnique({ where: { cpf } }));
	return !!(consumer);
}

app.get('/get_consumers', async (req: Request, res: Response) => {
	try {
		const consumers = await consumidor.findMany();
		return res.status(200).json(consumers);
	} catch (error) {
		return res.status(500).json(error);
	}
});

app.get('/get_consumer/:cpf', async (req: Request, res: Response) => {
	const cpf: string = req.params.cpf;
	try {
		if (await alreadyExists(cpf)) {
			const consumer = await consumidor.findUnique({ where: { cpf }});
			return res.status(200).json(consumer);
		}
		return res.status(404).json({ msg: 'Consumidor nao encontrado' });
	} catch (error) {
		return res.status(500).json(error);
	}
});

app.post('/create_consumer', async (req: Request, res: Response) => {
	const consumer = req.body;
	try {
		if (await alreadyExists(consumer.cpf)) {
			res.status(400).json({ msg: 'Falha ao cadastrar: CPF ja cadastrado' });
		}
		const new_consumer = await consumidor.create({ data: consumer });
		res.status(201).json(new_consumer);
	} catch (error) {
		res.status(500).json(error);
	}
});

app.put('/update_consumer/:cpf', async (req: Request, res: Response) => {
	const cpf: string = req.params.cpf;
	const updated_consumer = req.body;
	console.log(cpf);
	console.log(updated_consumer);
	try {
		if (!(await alreadyExists(cpf))) {
			res.status(404).json({ msg: 'O consumidor informado nao existe' });
		}
		await consumidor.update({ where: { cpf: cpf },  data: updated_consumer });
		res.status(201).json(updated_consumer);
	} catch (error) {
		res.status(500).json(error);
	}
});

app.delete('/delete_consumer/:cpf', async (req: Request, res: Response) => {
	const cpf: string = req.params.cpf;
	try {
		if (await alreadyExists(cpf)) {
			await consumidor.delete({ where: { cpf } });
			return res.status(200).json({ msg: 'Consumidor removido com sucesso' });
		}
		res.status(409).json({ msg: 'Falha ao remover: consumidor informado nao encontrado no banco de dados' })
	} catch (error) {
		return res.status(500).json(error);
	}
});


app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
