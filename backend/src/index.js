const { request, response } = require('express');
const express = require('express');

const app = express();

/**
 * HTTP methods:
 * 
 * GET: Search for information on the backend.
 * POST: Create information on the backend.
 * PUT/PATCH: Change information on the backend. 
 * DELETE: Delete information on the backend. 
 */

app.get('/projects', (request,response) => {
    return response.json([
        'Project 1',
        'Project 2'
    ]);
});

app.post('/projects', (request,response) => {
    return response.json([
        'Project 1',
        'Project 2',
        'Project 3'
    ]);
});

app.put('/projects/:id', (request,response) => {
    return response.json([
        'Project 4',
        'Project 2',
        'Project 3'
    ]);
});

app.put('/projects/:id', (request,response) => {
    return response.json([
        'Project 2',
        'Project 3'
    ]);
});

app.listen(3333, () =>{
    console.log('☢ Back-end started!');
});