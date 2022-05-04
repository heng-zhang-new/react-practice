import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
