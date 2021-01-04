const { request, response } = require('express');
const express = require('express');

const app = express();

app.use(express.json());
/**
 * HTTP methods:
 * 
 * GET: Search for information on the backend.
 * POST: Create information on the backend.
 * PUT/PATCH: Change information on the backend. 
 * DELETE: Delete information on the backend. 
 */

/**
 * Param types:
 *  
 * Query params: Filters and Pagination
 * Route params: Identify Resources (Update / Delete)
 * Request Body: Content when creating and editing resources. (JSON)
 */

app.get('/projects', (request,response) => {
    const { title, owner } = request.query;

    console.log(title);
    console.log(owner);

    return response.json([
        'Project 1',
        'Project 2'
    ]);
});

app.post('/projects', (request,response) => {
    const { title, owner } = request.body

    console.log(title);
    console.log(owner);

    return response.json([
        'Project 1',
        'Project 2',
        'Project 3'
    ]);
});

app.put('/projects/:id', (request,response) => {
    const {id} = request.params;

    console.log( id );

    return response.json([
        'Project 4',
        'Project 2',
        'Project 3'
    ]);
});

app.delete('/projects/:id', (request,response) => {
    return response.json([
        'Project 2',
        'Project 3'
    ]);
});

app.listen(3333, () =>{
    console.log('☢ Back-end started!');
});