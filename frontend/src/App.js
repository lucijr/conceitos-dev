import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpeg';

import Header from './components/Header';

/**
 * Component 
 * Property
 * State & Immutability
 */


function App() {
  //
  const [projects, setProjects] = useState(['App Development', 'Web Front-end']);

  /** 
   * useState returns an array with 2 positions.
   * 
   * 1. Variable with initial value.
   * 2. Function to update this value. 
   */
  
  //Start a fuction with handle = User Action.
  function handleAddProject(){
    //projects.push(`New Project ${Date.now()}`);
    setProjects([...projects,`New Project ${Date.now()}`]);

  }

  return (
    <>
      <Header title="Projects"/>

      <img width={350} src={backgroundImage}/>

      <ul>
        {projects.map(project => <li key={project} >{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add Project</button>
    </>
  );
}

export default App;