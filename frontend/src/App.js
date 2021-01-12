import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

/**
 * Component 
 * Property
 * State & Immutability
 */


function App() {
  //
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response =>{
      setProjects(response.data);
    })
  },[])

  function handleAddProject(){
    //projects.push(`New Project ${Date.now()}`);
    setProjects([...projects,`New Project ${Date.now()}`]);

  }

  return (
    <>
      <Header title="Projects"/>


      <ul>
        {projects.map(project => <li key={project.id} >{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add Project</button>
    </>
  );
}

export default App;