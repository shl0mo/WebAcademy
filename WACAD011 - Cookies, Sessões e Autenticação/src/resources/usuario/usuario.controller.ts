import { Request, Response } from 'express';
import { getAllUsuarios, createUsuario, readUsuario, updateUsuario, removeUsuario, jaExiste, jaExisteID } from './usuario.service';
import { CreateUsuarioDto, UpdateUsuarioDto } from './usuario.types';

async function index (req: Request, res: Response) {
	try {
		const usuarios = await getAllUsuarios();
		res.status(200).json(usuarios);
	} catch (error) {
		res.status(500).json(error);
	}
}

async function create (req: Request, res: Response) {
	const usuario = req.body as CreateUsuarioDto;
	try {
		if (await jaExiste(usuario.cpf)) {
			return res.status(400).json({ msg: 'Usuário já existe' });		
		}
		const newUsuario = await createUsuario(usuario);
		res.status(201).json(newUsuario);
	} catch (error) {
		res.status(500).json(error);
	}
}

async function read (req: Request, res: Response) {
	const id = req.params.id;
	try {
		const usuario = await readUsuario(id);
		if (!usuario) return res.status(404).json ({ msg: 'Usuário não encontrado' })
		res.status(200).json(usuario);
	} catch (error) {
		res.status(500).json(error);
	}
}

async function update (req: Request, res: Response) {
	const id = req.params.id;
	const usuario = req.body as UpdateUsuarioDto;
	try {
		const usuarioAtual = await readUsuario(id);
		if (!usuarioAtual) return res.status(404).json({ msg: 'Usuário não encontrado' });
		if (usuarioAtual?.cpf !== usuario.cpf && (await jaExiste(usuario.cpf))) {
			return res.status(400).json({ msg: 'Já existe um usuário com o cpf informado'});
		}
		const usuarioAtualizado = await updateUsuario(id, usuario);
		return res.status(200).json(usuarioAtualizado);
	} catch (error) {
		res.status(500).json(error);
	}
}

async function remove (req: Request, res: Response) {
	const id = req.params.id;
	try {
		if (!(await jaExisteID(id))) return res.status(409).json({ msg: 'O usuário informado não existe' });
		removeUsuario(id);
		res.status(200).json({ msg: 'Usuário removido com sucesso'});
	} catch (error) {
		res.status(500).json(error);
	}
}

export default { index, create, read, update, remove };
