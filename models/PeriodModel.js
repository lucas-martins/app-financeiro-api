import mongoose from 'mongoose'

let schema = mongoose.Schema({
    month: String,
    year: Number
})

export const PeriodModel = mongoose.model('period', schema)
