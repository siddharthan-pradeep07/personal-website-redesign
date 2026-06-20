import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Projects from './projects.jsx'
import Cursor from './cursor.jsx'
import Blog from './Blog.jsx'
import Femto from './Femto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Cursor />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/app" element={<App />} />
        <Route path="/" element={<Projects />} />
        <Route path="/femto" element={<Femto />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
