import { Usuario } from '@prisma/client';

export type CreateUsuarioDto = Pick<Produto, 'cpf' | 'nome' | 'sobrenome' | 'endereco'>;
export type UpdateUsuarioDto = Pick<Produto, 'cpf' | 'nome' | 'sobrenome' | 'endereco'>;
