import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Projects from './projects.jsx'
import Cursor from './cursor.jsx'
import Blog from './Blog.jsx'
import Femto from './Femto.jsx'
import Roles from "./roles.jsx";
import Allprojects from "./allprojects.jsx";
import Quotes from "./quotes.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Cursor />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/app" element={<App />} />
        <Route path="/" element={<Projects />} />
        <Route path="/femto" element={<Femto />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/all-projects" element={<Allprojects />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
