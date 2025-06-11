
import { useState } from 'react'
import MarketOverview from '../components/MarketOverview'
import SentimentAnalysis from '../components/SentimentAnalysis'
import PredictionModels from '../components/PredictionModels'

const Dashboard = () => {
  const [marketData] = useState([])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Financial Intelligence Dashboard</h1>
        <p className="mt-2 text-gray-600">Real-time market analysis powered by AI</p>
      </div>

      <div className="space-y-8">
        <MarketOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SentimentAnalysis />
          <PredictionModels />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
