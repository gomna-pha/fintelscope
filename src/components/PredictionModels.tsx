
import { useState, useEffect } from 'react'
import { Brain, Target, Zap, TrendingUp } from 'lucide-react'

interface ModelData {
  model: string
  accuracy: number
  prediction: string
}

const PredictionModels = () => {
  const [models, setModels] = useState<ModelData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const mockModels: ModelData[] = [
      { model: 'LSTM Neural Network', accuracy: 87.2, prediction: 'Bullish' },
      { model: 'Random Forest', accuracy: 82.5, prediction: 'Neutral' },
      { model: 'Transformer Model', accuracy: 91.3, prediction: 'Bullish' },
    ]
    
    setTimeout(() => {
      setModels(mockModels)
      setLoading(false)
    }, 1200)
  }, [])

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-6">
        <Brain className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-medium text-gray-900">AI Prediction Models</h3>
      </div>

      <div className="space-y-4">
        {models.map((model, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">{model.model}</h4>
              <div className="flex items-center text-sm text-gray-500">
                <Target className="h-4 w-4 mr-1" />
                Accuracy: {model.accuracy}%
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Prediction:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  model.prediction === 'Bullish' 
                    ? 'bg-green-100 text-green-800' 
                    : model.prediction === 'Bearish'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {model.prediction}
                </span>
              </div>
              
              <div className="flex items-center text-sm text-blue-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                Active
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Zap className="h-4 w-4 mr-2" />
          Run New Prediction
        </button>
      </div>
    </div>
  )
}

export default PredictionModels
