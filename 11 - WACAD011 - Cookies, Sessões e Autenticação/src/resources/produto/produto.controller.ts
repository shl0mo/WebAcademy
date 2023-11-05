import { Request, Response } from 'express';
import { getAllProdutos, createProduto, readProduto, updateProduto, removeProduto, jaExiste, jaExisteID } from './produto.service';
import { CreateProdutoDto } from './produto.types';

async function index (req: Request, res: Response) {
	try {
		const produtos = await getAllProdutos();
		res.status(200).json(produtos);
	} catch (error) {
		res.status(500).json(error);
	}
}

async function create (req: Request, res: Response) {
	const produto = req.body as CreateProdutoDto;
	try {
		if (await jaExiste(produto.nome)) {
			return res.status(400).json({ msg: 'Produto já existe' });		
		}
		const newProduto = await createProduto(produto);
		res.status(201).json(newProduto);
	} catch (error) {
		res.status(500).json(error);
	}
}

async function read (req: Request, res: Response) {
	const id = req.params.id;
	try {
		const produto = await readProduto(id);
		if (!produto) return res.status(404).json ({ msg: 'Produto n�o encontrado' })
		res.status(200).json(produto);
	} catch (error) {
		res.status(500).json(error);
	}
}

async function update (req: Request, res: Response) {
	const id = req.params.id;
	const produto = req.body;
	try {
		const produtoAtual = await readProduto(id);
		if (!produtoAtual) return res.status(404).json({ msg: 'Produto nao encontrado' });
		if (produtoAtual?.nome !== produto.nome && (await jaExiste(produto.nome))) {
			return res.status(400).json({ msg: 'Já existe um produto com o nome informado'});
		}
		const produtoAtualizado = await updateProduto(id, produto);
		return res.status(200).json(produtoAtualizado);
	} catch (error) {
		res.status(500).json(error);
	}
}

async function remove (req: Request, res: Response) {
	const id = req.params.id;
	try {
		if (!(await jaExisteID(id))) return res.status(409).json({ msg: 'O produto informado nao existe' });
		removeProduto(id);
		res.status(200).json({ msg: 'Produto removido com sucesso'});
	} catch (error) {
		res.status(500).json(error);
	}
}

export default { index, create, read, update, remove };
