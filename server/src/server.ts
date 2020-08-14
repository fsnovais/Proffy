import express from 'express';
import cors from 'cors'
import routes from './routes';

const app = express();
app.use(cors())
app.use(express.json());
app.use(routes)


app.listen(3333);

// Rotes
//localhost:3333/users
//localhost:3333/contacts

// Resources
// users
// contacts 

//method
//GET: Byscar ou listar uma informação
//POST: Criar uma informação 
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

// Params
// Corpo (Request Body) : Dados para criação ou atualizaçãoi de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Qeury Params: Paginação, filtros, ordenação

