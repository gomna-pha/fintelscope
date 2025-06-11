
import React, { useState } from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts'
import { Calendar, Download, Filter } from 'lucide-react'

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30d')

  const performanceData = [
    { date: '2024-01-01', portfolio: 100000, benchmark: 100000 },
    { date: '2024-01-05', portfolio: 102500, benchmark: 101200 },
    { date: '2024-01-10', portfolio: 105200, benchmark: 102800 },
    { date: '2024-01-15', portfolio: 103800, benchmark: 101500 },
    { date: '2024-01-20', portfolio: 107300, benchmark: 104200 },
    { date: '2024-01-25', portfolio: 109800, benchmark: 105800 },
    { date: '2024-01-30', portfolio: 111200, benchmark: 106500 }
  ]

  const riskMetrics = [
    { metric: 'Sharpe Ratio', value: 1.85, benchmark: 1.42 },
    { metric: 'Max Drawdown', value: -8.2, benchmark: -12.5 },
    { metric: 'Volatility', value: 14.3, benchmark: 18.7 },
    { metric: 'Beta', value: 0.92, benchmark: 1.00 }
  ]

  const sectorAllocation = [
    { sector: 'Technology', allocation: 35, performance: 12.5 },
    { sector: 'Healthcare', allocation: 20, performance: 8.3 },
    { sector: 'Financial', allocation: 15, performance: 6.7 },
    { sector: 'Consumer', allocation: 12, performance: 9.1 },
    { sector: 'Energy', allocation: 10, performance: -2.3 },
    { sector: 'Utilities', allocation: 8, performance: 4.2 }
  ]

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="mt-2 text-gray-600">
              Comprehensive analysis of your AI-driven investment strategies
            </p>
          </div>
          
          <div className="flex space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="7d">7 Days</option>
              <option value="30d">30 Days</option>
              <option value="90d">90 Days</option>
              <option value="1y">1 Year</option>
            </select>
            
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Total Return</h3>
            <p className="text-2xl font-bold text-green-600">+11.2%</p>
            <p className="text-sm text-gray-600">vs 6.5% benchmark</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Alpha Generated</h3>
            <p className="text-2xl font-bold text-blue-600">+4.7%</p>
            <p className="text-sm text-gray-600">Above market</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Win Rate</h3>
            <p className="text-2xl font-bold text-purple-600">73.2%</p>
            <p className="text-sm text-gray-600">Of predictions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">AI Confidence</h3>
            <p className="text-2xl font-bold text-orange-600">87.5%</p>
            <p className="text-sm text-gray-600">Average score</p>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Portfolio Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="portfolio" stroke="#2563eb" strokeWidth={2} name="AI Portfolio" />
              <Line type="monotone" dataKey="benchmark" stroke="#9ca3af" strokeWidth={2} name="Benchmark" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Risk Metrics */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Risk Metrics</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={riskMetrics} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="metric" width={100} />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" name="Portfolio" />
                <Bar dataKey="benchmark" fill="#9ca3af" name="Benchmark" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Sector Allocation */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Sector Performance</h3>
            <ResponsiveContainer width="100%" height={250}>
              <ScatterChart data={sectorAllocation}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="allocation" name="Allocation %" />
                <YAxis dataKey="performance" name="Performance %" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter dataKey="performance" fill="#8b5cf6" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Model Performance */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">AI Model Contribution</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Model
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Accuracy
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Predictions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contribution
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    FinBERT Sentiment
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">94.2%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,247</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+3.1%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    LSTM Price Prediction
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">87.5%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">892</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+2.3%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    XGBoost Risk Model
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">85.3%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">543</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+1.8%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Paused
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
