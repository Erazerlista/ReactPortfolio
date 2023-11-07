import './App.scss'
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout'

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={Layout />} />
    <Route index element=<Home />}
    </Routes>
    </Routes>
    </>
  )
}

export default App
