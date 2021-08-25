import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/routes.js';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', (_, res) => {
    res.send({
        message: 'Bem vindo à API do APP financeiro. Acesse /financial e siga as origentações'
    })
})

app.use('/api/financial', routes)

const { DB_CONNECTION } = process.env

mongoose.connect(
    DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            // connectedToMongoDB = false;
            console.error(`Erro na conexão ao MongoDB - ${err}`);
        }
    }
)

const {connection} = mongoose;

connection.once('open', () => {
    // connectedToMongoDB = true;
    console.log('Conectado ao MongoDB');

    const APP_PORT = process.env.PORT || 3001;
    app.listen(APP_PORT, () => {
        console.log(`Servidor iniciado na porta ${APP_PORT}`);
    })
})