import { useState, useRef } from 'react';
import Sidebar from './components/SideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  const [projects, setProjects] = useState([]);
  const addProject = useRef();

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects} />
      <NoProjectSelected />
    </main>
  );
}

export default App;
