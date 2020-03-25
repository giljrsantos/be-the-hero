const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);

/*
    Rota / Recurso
*/
/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar alguma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados enviado na rota após "?" (Filtros, paginação)
  * Route Params: Parêmtros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * noSQL: MongoDB, CouchDB, etc
   */
  /**
   * Driver: SELET * FROM users
   * Query Builder: Table('users').select('*').where()
   */

app.listen(3333, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("API Rodando na porta 3333");
    }
});