
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/lutador', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createlutador(body);
    return reply.status(201).send();
})

// READE
server.get('/lutador', async () => {
    const lutador = await databasePostgres.listlutador();
    return lutador;
});

// UPDATE
server.put('/lutador/:id', async (request, reply) => {
    const lutadorID = request.params.id;
    const body = request.body;
    await databasePostgres.updatelutador(lutadorID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/lutador/:id', async (request, reply) => {
    const lutadorID = request.params.id;
    await databasePostgres.deletelutador(lutadorID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
