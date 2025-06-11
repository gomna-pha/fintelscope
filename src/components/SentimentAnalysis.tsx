
import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const SentimentAnalysis = () => {
  const [sentimentData, setSentimentData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSentimentData = async () => {
      setIsLoading(true)
      
      // Simulate API call to sentiment analysis service
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const data = [
        { name: 'Bullish', value: 45, color: '#10b981' },
        { name: 'Neutral', value: 32, color: '#f59e0b' },
        { name: 'Bearish', value: 23, color: '#ef4444' }
      ]
      
      setSentimentData(data)
      setIsLoading(false)
    }

    fetchSentimentData()
  }, [])

  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Market Sentiment</h3>
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Market Sentiment Analysis</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={sentimentData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {sentimentData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-gray-600">
        <p>Based on analysis of 10,000+ social media posts and news articles</p>
      </div>
    </div>
  )
}

export default SentimentAnalysis
