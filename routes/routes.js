import express from 'express'
import {create, findAll} from '../services/periodService.js'

const periodRouter = express.Router();

periodRouter.post('/addPeriod', create);
periodRouter.get('/getAllPeriods', findAll)

export default periodRouter