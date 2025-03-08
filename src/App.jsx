import { Sidebar } from './components/Sidebar';
import { useState } from 'react';

function App() {
  const [projects, setProjects] = useState([]);


  return (
    <div className="flex flex-col">
      <Sidebar />   
    </div>
  );
}

export default App;
