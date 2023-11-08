import { Request, Response, NextFunction } from 'express';
import { schema } from 'joi';

export const validate = (schema: Schema) => {
	return (req: Request, res: Response, next: NextFunction) => {
		const { error } = schema.validate(req, body, {
			abortEarly: false
		});
		if (error) res.status(422).json({ error: error.details });
		else next();
	}
}
