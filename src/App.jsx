import { useState, useRef } from 'react';
import Sidebar from './components/SideBar';
import NewProject from './components/NewProject';

function App() {
  const [projects, setProjects] = useState([]);
  const addProject = useRef();

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects} />
      <NewProject />
    </main>
  );
}

export default App;
