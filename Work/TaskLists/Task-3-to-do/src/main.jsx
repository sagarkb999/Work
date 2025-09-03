import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const DATA= [
  { id: "todo-0", name: "Task1", completed: false},
  { id: "todo-1", name: "Task2", completed: false},
  { id: "todo-2", name: "Task3", completed: false}
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={DATA} />
  </StrictMode>,
)
