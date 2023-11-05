import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const PORT = 5000;

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Cria uma instância do modelo do Consumidor
const consumidor = prisma.consumidor;

// Verifica se um determinado CPF já está cadastrado no banco de dados, associado a um consumidor
const alreadyExists = async (cpf: string) => {
	const consumer = await (consumidor.findUnique({ where: { cpf } }));
	return !!(consumer);
}

// Lê todos os consumidores
app.get('/get_consumers', async (req: Request, res: Response) => {
	try {
		const consumers = await consumidor.findMany();
		return res.status(200).json(consumers);
	} catch (error) {
		return res.status(500).json(error);
	}
});

// Lê o consumidor que possui o CPF passado como parâmetro
app.get('/get_consumer/:cpf', async (req: Request, res: Response) => {
	const cpf: string = req.params.cpf;
	try {
		if (await alreadyExists(cpf)) {
			const consumer = await consumidor.findUnique({ where: { cpf }});
			return res.status(200).json(consumer);
		}
		return res.status(404).json({ msg: 'Consumidor nao encontrado' }); // Caso o CPF passado como parâmetro não esteja associado a nenhum consumidor, uma mensagem de erro é exibida
	} catch (error) {
		return res.status(500).json(error);
	}
});

// Cria um consumidor
app.post('/create_consumer', async (req: Request, res: Response) => {
	const consumer = req.body;
	try {
		if (await alreadyExists(consumer.cpf)) {
			return res.status(400).json({ msg: 'Falha ao cadastrar: CPF ja cadastrado' }); // Será criado apenas se o seu CPF não estiver associado a outro consumidor no banco de dados
		}
		const new_consumer = await consumidor.create({ data: consumer });
		return res.status(201).json(new_consumer);
	} catch (error) {
		return res.status(500).json(error);
	}
});

// Atualiza o consumidor que possui o CPF passado como parâmetro
app.put('/update_consumer/:cpf', async (req: Request, res: Response) => {
	const cpf: string = req.params.cpf;
	const updated_consumer = req.body;
	console.log(cpf);
	console.log(updated_consumer);
	try {
		if (!(await alreadyExists(cpf))) {
			return res.status(404).json({ msg: 'O consumidor informado nao existe' }); // A operação será realizada apenas se o CPF passado como parâmetro pertencer a algum consumidor no banco de dados
		}
		await consumidor.update({ where: { cpf: cpf },  data: updated_consumer });
		return res.status(201).json(updated_consumer);
	} catch (error) {
		return res.status(500).json(error);
	}
});

// Deleta o consumidor que possui o CPF passado como parâmetro
app.delete('/delete_consumer/:cpf', async (req: Request, res: Response) => {
	const cpf: string = req.params.cpf;
	try {
		if (await alreadyExists(cpf)) {
			await consumidor.delete({ where: { cpf } });
			return res.status(200).json({ msg: 'Consumidor removido com sucesso' });
		}
		res.status(409).json({ msg: 'Falha ao remover: consumidor informado nao encontrado no banco de dados' }) // A operação será realizada apenas se o CPF estiver associado a algum consumidor no banco de dados
	} catch (error) {
		return res.status(500).json(error);
	}
});


app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
