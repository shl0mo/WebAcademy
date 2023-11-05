import express, { Request, Response } from 'express';
import v1Router from './v1Router'
import v2Router from './v2Router'

export const router = express.Router();

router.use('/v1', v1Router);

router.use('/v2', v2Router);
