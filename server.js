//import { createServer } from 'node:http'

//const server = createServer ((request, response) => { 
   // response.write("daddasdaa")

   // return response.end()
//})

//server.listen(3333)

import { fastify } from "fastify";
import { DatabaseMemory } from "./database.memory.js";

const database = new DatabaseMemory()

const server = fastify()


server.post('/videos', (request, reply) => {
    const {title, description, duration} = request.body


    database.create({
        title,
        description,
        duration,
    })

    return reply.status(201).send()
})

server.get('/videos', () => {
    const videos = database.list()

    return videos
})

server.put('/videos/:id', (request, reply) => {
    const videoId = Request.params.id
    const {title, description, duration} = request.body

    database.update(videoId, {

        title,
        description,
        duration

    }) 
 
    return reply.status(204).send()

})

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id 

    database.delete(videoId)

    return reply.status(203).send()
})

server.listen({
    port: 3333,
})

