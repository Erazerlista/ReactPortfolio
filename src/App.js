import { Route, Routes } from 'react-router-dom'
import Home from './components/Layout/Home'
import About from './components/Layout/About'
import Contact from './components/Layout/Contact'
import Layout from './components/Layout/Home'
import Portfolio from './components/Layout/Portfolio'
import Dashboard from './components/Layout/Dashboard'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App