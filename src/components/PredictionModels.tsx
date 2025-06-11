
import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const PredictionModels = () => {
  const [predictions, setPredictions] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPredictions = async () => {
      setIsLoading(true)
      
      // Simulate AI model predictions
      await new Promise(resolve => setTimeout(resolve, 1200))
      
      const modelPredictions = [
        { model: 'LSTM Neural Network', accuracy: 87.5, prediction: 'Bullish' },
        { model: 'Random Forest', accuracy: 82.1, prediction: 'Neutral' },
        { model: 'XGBoost', accuracy: 85.3, prediction: 'Bullish' },
        { model: 'Transformer', accuracy: 89.2, prediction: 'Bullish' },
        { model: 'SVM', accuracy: 78.9, prediction: 'Bearish' }
      ]
      
      setPredictions(modelPredictions)
      setIsLoading(false)
    }

    fetchPredictions()
  }, [])

  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">AI Model Predictions</h3>
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-6">AI Model Predictions</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-md font-medium text-gray-700 mb-4">Model Accuracy</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={predictions}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="model" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="accuracy" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div>
          <h4 className="text-md font-medium text-gray-700 mb-4">Current Predictions</h4>
          <div className="space-y-3">
            {predictions.map((pred, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">{pred.model}</p>
                  <p className="text-xs text-gray-500">Accuracy: {pred.accuracy}%</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  pred.prediction === 'Bullish' ? 'bg-green-100 text-green-800' :
                  pred.prediction === 'Bearish' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {pred.prediction}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PredictionModels
