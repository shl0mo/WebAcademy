import { PrismaClient, Usuario } from '@prisma/client';
import { CreateUsuarioDto, UpdateUsuarioDto } from './usuario.types';

const prisma = new PrismaClient();

export async function getAllUsuarios () : Promise<Usuario[]>  {
	return await prisma.usuario.findMany();
}

export async function createUsuario (usuario: CreateUsuarioDto) : Promise<Usuario> {
	return await prisma.usuario.create({ data: usuario });
}

export async function jaExiste (cpf: string) : Promise<boolean>{
	const usuario = await (prisma.usuario.findUnique({ where: { cpf } }));
	return !!(usuario);
}

export async function jaExisteID (id: string) : Promise<boolean> {
	const usuario = await (prisma.usuario.findUnique({ where: { id } }));
	return !!(usuario);
}

export async function readUsuario (id: string) : Promise<Usuario | null> {
	return await prisma.usuario.findUnique({ where: { id } });
}

export async function updateUsuario (id: string, usuario: UpdateUsuarioDto): Promise<Usuario>  {
	return await prisma.usuario.update({ data: usuario, where: { id: id }});
}

export async function removeUsuario (id: string) : Promise<Usuario | null> {
	return await prisma.usuario.delete({ where: { id: id } });
}
