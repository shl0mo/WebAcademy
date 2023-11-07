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
			return res.status(400).json({ msg: 'Usu�rio j� existe' });		
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
		if (!usuario) return res.status(404).json ({ msg: 'Usu�rio n�o encontrado' })
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
		if (!usuarioAtual) return res.status(404).json({ msg: 'Usu�rio n�o encontrado' });
		if (usuarioAtual?.cpf !== usuario.cpf && (await jaExiste(usuario.cpf))) {
			return res.status(400).json({ msg: 'J� existe um usu�rio com o cpf informado'});
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
		if (!(await jaExisteID(id))) return res.status(409).json({ msg: 'O usu�rio informado n�o existe' });
		removeUsuario(id);
		res.status(200).json({ msg: 'Usu�rio removido com sucesso'});
	} catch (error) {
		res.status(500).json(error);
	}
}

export default { index, create, read, update, remove };
