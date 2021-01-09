const { request, response } = require('express');
const express = require('express');
const { uuid, isUuid } = require('uuidv4');//Create Unique Universal ID

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

/**
 * Middleware:
 * 
 * Request interceptor that completely interrupts or changes the request data.
 */
const projects = [];

function logRequest(request, response, next){
    const { method, url} = request;

    const logLabel = `[${method.toUpperCase()}] ${url}`;
    console.log('1');
    console.time(logLabel);
    console.log('2');
    next(); // Next Middleware.
    console.timeEnd(logLabel);
    
}

function validateProjectId(request, response, next){
    const { id } = request.params

    if (!isUuid(id)){
        return response.status(400).json( {error: 'Invalid project ID.'})
    }

    return next();
}

app.use(logRequest);

app.use('/projects/:id', validateProjectId);

app.get('/projects', (request,response) => {
    const { title } = request.query;

    const results = title
        ? projects.filter(project => project.title.includes(title))
        : projects; 

    console.log('3');

        
    return response.json(results);
});

app.post('/projects', (request,response) => {
    const { title, owner } = request.body;

    const project = {id: uuid(),title,owner};

    projects.push(project); 

    return response.json(project);
});

app.put('/projects/:id', (request,response) => {
    const {id} = request.params;
    const { title, owner} = request.body;    

    const projectIndex = projects.findIndex(project =>project.id == id);//Find index in array.
    
    if(projectIndex < 0){
        return response.status(400).json({error:'Project not found.'});
    }

    const project= {
        id,
        title,
        owner,        
    };

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request,response) => {
    const {id}= request.params;
   
    const projectIndex = projects.findIndex(project =>project.id == id);//Find index in array.
    
    if(projectIndex < 0){
        return response.status(400).json({error:'Project not found.'});
    }
    
    projects.splice(id,1);
    
    return response.status(204).send();
});

app.listen(3333, () =>{
    console.log('☢ Back-end started!');
});

//Backend with Node.js module finished from Bootcamp.