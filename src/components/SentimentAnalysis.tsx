
import { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { MessageSquare, TrendingUp, AlertTriangle } from 'lucide-react'

interface SentimentData {
  name: string
  value: number
  color: string
}

const SentimentAnalysis = () => {
  const [sentimentData, setSentimentData] = useState<SentimentData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const mockData: SentimentData[] = [
      { name: 'Positive', value: 45, color: '#10B981' },
      { name: 'Neutral', value: 35, color: '#6B7280' },
      { name: 'Negative', value: 20, color: '#EF4444' },
    ]
    
    setTimeout(() => {
      setSentimentData(mockData)
      setLoading(false)
    }, 800)
  }, [])

  const insights = [
    { title: 'Social Media Mentions', value: '12.4K', trend: '+15%', icon: MessageSquare },
    { title: 'News Sentiment', value: '72%', trend: '+8%', icon: TrendingUp },
    { title: 'Risk Alerts', value: '3', trend: '-2', icon: AlertTriangle },
  ]

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6">Market Sentiment Analysis</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={sentimentData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {sentimentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Insights */}
        <div className="space-y-4">
          {insights.map((insight) => {
            const Icon = insight.icon
            return (
              <div key={insight.title} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Icon className="h-6 w-6 text-blue-600 mr-3" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500">{insight.title}</p>
                  <p className="text-xl font-semibold text-gray-900">{insight.value}</p>
                </div>
                <span className="text-sm text-green-600 font-medium">{insight.trend}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SentimentAnalysis
