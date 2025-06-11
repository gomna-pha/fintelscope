
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import { TrendingUp, Target, AlertTriangle } from 'lucide-react'

const Analytics = () => {
  const performanceData = [
    { name: 'Jan', accuracy: 85, predictions: 120 },
    { name: 'Feb', accuracy: 88, predictions: 140 },
    { name: 'Mar', accuracy: 87, predictions: 160 },
    { name: 'Apr', accuracy: 91, predictions: 180 },
    { name: 'May', accuracy: 89, predictions: 200 },
    { name: 'Jun', accuracy: 92, predictions: 220 },
  ]

  const riskMetrics = [
    { metric: 'Portfolio Risk', value: '12.3%', change: '-2.1%', status: 'good' },
    { metric: 'Max Drawdown', value: '8.7%', change: '+1.2%', status: 'warning' },
    { metric: 'Sharpe Ratio', value: '1.85', change: '+0.15', status: 'good' },
    { metric: 'Beta', value: '0.92', change: '-0.03', status: 'good' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics & Performance</h1>
        <p className="mt-2 text-gray-600">Comprehensive analysis of model performance and risk metrics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Model Performance Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Model Accuracy Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="accuracy" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Predictions Volume */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Prediction Volume</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="predictions" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Risk Metrics */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <Target className="h-6 w-6 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">Risk Metrics</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {riskMetrics.map((metric) => (
            <div key={metric.metric} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-500">{metric.metric}</p>
                {metric.status === 'warning' ? (
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                ) : (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                )}
              </div>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              <p className={`text-sm ${
                metric.change.startsWith('+') && metric.status === 'warning' 
                  ? 'text-red-600' 
                  : metric.change.startsWith('-') 
                  ? 'text-green-600' 
                  : 'text-green-600'
              }`}>
                {metric.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Analytics
