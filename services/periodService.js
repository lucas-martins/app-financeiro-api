import {PeriodModel} from '../models/PeriodModel.js';

export const create = async (req, res) => {
    const {month, year} = req.body

    if (!month || !year) throw new Error("month e year são obrigatórios");

    const period = new PeriodModel({
        month,
        year
    })

    try {
        const data = await period.save()

        res.send(data)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

export const findAll = async (req, res) => {
    try {
        const data = await period.find()

        res.send(data)
    } catch (error) {
        res.status(500).send({message: 'Erro ao buscar período'});
    }
}