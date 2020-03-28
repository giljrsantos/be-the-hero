const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    //Executando as Migrations
    beforeEach( async () => {
       //desfazendo todas as migrations, zerando o banco de dados
       await connection.migrate.rollback();
       //executando todas as migrations
       await connection.migrate.latest();
    });

    //[ afterAll ]Executando algo depois de todo o teste
    afterAll( async () => {
        //Destruindo conexão com o banco de dados
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD2",
                email: "contator@gmail.com",
                whatsapp: "00000000000",
                city: "Vitoria",
                uf: "ES"                
            });

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    });
});