import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Parent from './components/Parent.jsx'
import Parent1 from './components/Parent1.jsx'
import Parent2 from './components/Parent2.jsx'
import Parent3 from './components/Parent3.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Parent3 />
  </React.StrictMode>,
)
