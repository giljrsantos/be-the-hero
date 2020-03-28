const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

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
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngCotroller.create);

//Rota para listar os Incidents
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}), IncidentsController.index);

//Rota para trazer somente um Incident
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        Authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

//Rota de Criação de Incidents
routes.post('/incidents', IncidentsController.create);

//Rota para deletar um incidents
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}), IncidentsController.delete);

module.exports = routes;