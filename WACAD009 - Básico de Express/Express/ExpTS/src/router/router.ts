import express, { Request, Response } from 'express'
import { index } from '../controllers/main'
import { lorem } from '../controllers/main'
import { hb1 } from '../controllers/main'
import { hb2 } from '../controllers/main'
import { hb3 } from '../controllers/main'
import { hb4 } from '../controllers/main'
import { ui } from '../controllers/main'

export const router = express.Router()

router.get('/', index) 

router.get('/lorem/:paragrafos', lorem)

router.get('/hb1', hb1)

router.get('/hb2', hb2)

router.get('/hb3', hb3)

router.get('/hb4', hb4)

router.get('/ui', ui)
