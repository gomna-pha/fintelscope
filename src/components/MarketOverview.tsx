
import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react'

interface MarketData {
  date: string
  price: number
  volume: number
}

const MarketOverview = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call with mock data
    const mockData: MarketData[] = [
      { date: '2024-01', price: 150, volume: 1000000 },
      { date: '2024-02', price: 155, volume: 1200000 },
      { date: '2024-03', price: 148, volume: 900000 },
      { date: '2024-04', price: 162, volume: 1300000 },
      { date: '2024-05', price: 158, volume: 1100000 },
      { date: '2024-06', price: 165, volume: 1400000 },
    ]
    
    setTimeout(() => {
      setMarketData(mockData)
      setLoading(false)
    }, 1000)
  }, [])

  const stats = [
    { name: 'Market Cap', value: '$2.4T', change: '+2.3%', icon: DollarSign, positive: true },
    { name: 'Daily Volume', value: '$45.2B', change: '+5.1%', icon: Activity, positive: true },
    { name: 'Active Positions', value: '1,247', change: '-1.2%', icon: TrendingUp, positive: false },
    { name: 'Avg. Return', value: '12.4%', change: '+0.8%', icon: TrendingDown, positive: true },
  ]

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Market Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={marketData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default MarketOverview
