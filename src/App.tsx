
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import DataSources from './pages/DataSources'
import Models from './pages/Models'
import Analytics from './pages/Analytics'

function App() {
  return (
    <Router basename="/fintelscope">
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/data-sources" element={<DataSources />} />
            <Route path="/models" element={<Models />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
