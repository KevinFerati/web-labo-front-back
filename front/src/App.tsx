import React, {useState} from 'react';
import './App.css';

interface Task {
  description: string;
  finished: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
