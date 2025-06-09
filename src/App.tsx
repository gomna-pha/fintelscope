import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router basename="/fintelscope">
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Fintelscope
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<div className="bg-white shadow rounded-lg p-6">Welcome to Fintelscope</div>} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
