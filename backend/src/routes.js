const express = require('express');

const OngCotroller = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');

const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Rota Login
routes.post("/sessions", SessionController.create);

//Rota de Listagem das ONG's
routes.get('/ongs', OngCotroller.index);

//Rota de Criação da ONG
routes.post('/ongs', OngCotroller.create);

//Rota para listar os Incidents
routes.get('/incidents', IncidentsController.index);
//Rota para trazer somente um Incident
routes.get('/profile', ProfileController.index);
//Rota de Criação de Incidents
routes.post('/incidents', IncidentsController.create);
//Rota para deletar um incidents
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;