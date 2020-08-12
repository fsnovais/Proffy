import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes)

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


app.listen(3333);