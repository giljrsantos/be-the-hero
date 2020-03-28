const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');
//const crypto = require('crypto');

module.exports = {

    //Metodo de listagem das ONG
    async index (req, res) {
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);
    },

    //Metodo do cadstrado da ONG
    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return res.json({ id });
    }
};