
import { useState } from 'react'
import { Brain, Play, Pause, Settings, BarChart3, TrendingUp } from 'lucide-react'

interface Model {
  id: string
  name: string
  type: string
  status: 'active' | 'inactive' | 'training'
  accuracy: number
  lastTrained: string
}

const Models = () => {
  const [models, setModels] = useState<Model[]>([
    {
      id: '1',
      name: 'LSTM Price Predictor',
      type: 'Neural Network',
      status: 'active',
      accuracy: 87.2,
      lastTrained: '2024-06-10'
    },
    {
      id: '2',
      name: 'Sentiment Analyzer',
      type: 'Transformer',
      status: 'active',
      accuracy: 91.3,
      lastTrained: '2024-06-09'
    },
    {
      id: '3',
      name: 'Risk Assessment',
      type: 'Random Forest',
      status: 'inactive',
      accuracy: 82.5,
      lastTrained: '2024-06-08'
    }
  ])

  const toggleModel = (modelId: string) => {
    setModels(prev => prev.map(model => 
      model.id === modelId 
        ? { ...model, status: model.status === 'active' ? 'inactive' : 'active' }
        : model
    ))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'training':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">AI Models</h1>
        <p className="mt-2 text-gray-600">Manage and monitor your financial prediction models</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Models List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Active Models</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {models.map((model) => (
                <div key={model.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Brain className="h-8 w-8 text-blue-600 mr-3" />
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{model.name}</h3>
                        <p className="text-sm text-gray-500">{model.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(model.status)}`}>
                        {model.status}
                      </span>
                      <button
                        onClick={() => toggleModel(model.id)}
                        className="p-2 text-gray-400 hover:text-gray-600"
                      >
                        {model.status === 'active' ? (
                          <Pause className="h-5 w-5" />
                        ) : (
                          <Play className="h-5 w-5" />
                        )}
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Settings className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Accuracy</p>
                      <p className="text-lg font-semibold text-gray-900">{model.accuracy}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Last Trained</p>
                      <p className="text-lg font-semibold text-gray-900">{model.lastTrained}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Model Stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">Performance</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Average Accuracy</p>
                <p className="text-2xl font-bold text-gray-900">87.0%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Active Models</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Predictions</p>
                <p className="text-2xl font-bold text-gray-900">15,420</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
            </div>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="font-medium text-gray-900">LSTM Model</p>
                <p className="text-gray-500">Generated 247 predictions</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-900">Sentiment Analyzer</p>
                <p className="text-gray-500">Processed 1,850 news articles</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-900">Risk Assessment</p>
                <p className="text-gray-500">Updated risk scores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Models
