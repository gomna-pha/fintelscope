
import React, { useState } from 'react'
import { Brain, Play, Pause, Settings, TrendingUp } from 'lucide-react'

const Models = () => {
  const [runningModels, setRunningModels] = useState(new Set(['sentiment', 'lstm']))

  const aiModels = [
    {
      id: 'sentiment',
      name: 'FinBERT Sentiment Analysis',
      description: 'Analyzes market sentiment from news and social media',
      accuracy: '94.2%',
      lastTrained: '2024-01-15',
      status: 'running',
      type: 'NLP'
    },
    {
      id: 'lstm',
      name: 'LSTM Price Prediction',
      description: 'Predicts stock price movements using historical data',
      accuracy: '87.5%',
      lastTrained: '2024-01-14',
      status: 'running',
      type: 'Time Series'
    },
    {
      id: 'transformer',
      name: 'Transformer Market Analysis',
      description: 'Multi-modal analysis of market conditions',
      accuracy: '89.1%',
      lastTrained: '2024-01-13',
      status: 'stopped',
      type: 'Transformer'
    },
    {
      id: 'xgboost',
      name: 'XGBoost Risk Assessment',
      description: 'Evaluates portfolio risk and optimization',
      accuracy: '85.3%',
      lastTrained: '2024-01-12',
      status: 'stopped',
      type: 'Ensemble'
    }
  ]

  const toggleModel = (modelId) => {
    setRunningModels(prev => {
      const newSet = new Set(prev)
      if (newSet.has(modelId)) {
        newSet.delete(modelId)
      } else {
        newSet.add(modelId)
      }
      return newSet
    })
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">AI Models</h1>
          <p className="mt-2 text-gray-600">
            Manage and monitor your AI models for financial analysis
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {aiModels.map((model) => {
            const isRunning = runningModels.has(model.id)
            
            return (
              <div key={model.id} className="bg-white shadow rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Brain className="w-8 h-8 text-purple-600 mr-3" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{model.name}</h3>
                      <p className="text-sm text-gray-500">{model.description}</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    isRunning ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {isRunning ? 'Running' : 'Stopped'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-medium text-gray-500">Type</p>
                    <p className="text-sm font-medium text-gray-900">{model.type}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Accuracy</p>
                    <p className="text-sm font-medium text-gray-900">{model.accuracy}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Last Trained</p>
                    <p className="text-sm font-medium text-gray-900">{model.lastTrained}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => toggleModel(model.id)}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                      isRunning
                        ? 'bg-red-100 text-red-700 hover:bg-red-200'
                        : 'bg-green-100 text-green-700 hover:bg-green-200'
                    }`}
                  >
                    {isRunning ? (
                      <>
                        <Pause className="w-4 h-4 mr-2" />
                        Stop Model
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Start Model
                      </>
                    )}
                  </button>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Settings className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <TrendingUp className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {isRunning && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Recent Predictions:</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>AAPL</span>
                        <span className="text-green-600">+2.3% (Bullish)</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>TSLA</span>
                        <span className="text-red-600">-1.5% (Bearish)</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>MSFT</span>
                        <span className="text-green-600">+0.8% (Bullish)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-yellow-900 mb-2">Model Performance</h3>
          <p className="text-yellow-700 mb-4">
            Our AI models are continuously learning and improving their accuracy based on real market data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-900">94.2%</p>
              <p className="text-sm text-yellow-700">Average Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-900">12.5M</p>
              <p className="text-sm text-yellow-700">Data Points Processed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-900">2.3s</p>
              <p className="text-sm text-yellow-700">Average Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Models
