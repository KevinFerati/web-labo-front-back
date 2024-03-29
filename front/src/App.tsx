import React, { useEffect, useState } from 'react';
import './App.css';

interface TaskDTO {
  description: string;
  finished: boolean;
}
const apiUrl = "http://localhost:3001/api/tasks";

function Task({task}: {task: TaskDTO}) {
  return (
    <div>
      <h3>{task.description}</h3> <br />
      Terminé ? <input type="checkbox" checked={task.finished} disabled />
    </div>
  )
}

function CreateTaskForm({onSent}: {onSent: (tasks: TaskDTO[]) => void}) {
  const [finished, setFinished] = useState(false);
  const [description, setDescription] = useState('');
  function sendTask() {
    let task: TaskDTO = {
      description, finished
    }
    fetch(apiUrl, {
      method: 'POST', body: JSON.stringify(task), headers: {"Content-Type": "application/json"}})
      .then(r => r.json())
      .then(onSent)
      .catch(console.error);
  }

  return (
    <div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)}>
        </textarea>
      </div>
      <div>
        <label>Terminé ?</label>
        <input type="checkbox" onChange={e => setFinished(e.target.checked)} checked={finished} />
      </div>
      <button onClick={sendTask}>Créer</button>
    </div>
  )
}

export default function App() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(t => {
        console.log(t);
        setTasks(t)
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      {tasks.length == 0
        ? "Pas de tâches"
        : tasks.map(task => <Task task={task} />) }
      <CreateTaskForm onSent={setTasks} />
    </div>
  );
}
