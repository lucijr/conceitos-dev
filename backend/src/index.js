const { request, response } = require('express');
const express = require('express');
const { uuidv4, uuid } = require('uuidv4');//Create Unique Universal ID

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

const projects = [];

app.get('/projects', (request,response) => {
    const { title } = request.query;

    const results = title
        ? projects.filter(project => project.title.includes(title))
        : projects; 

    
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