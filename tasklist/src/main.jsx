import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const DATA = [
  { id: "td-0", name: "Task1", completed: true },
  { id: "td-1", name: "Task2", completed: false },
  { id: "td-2", name: "Task3", completed: false },
];
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={DATA}/>
  </StrictMode>,
)
