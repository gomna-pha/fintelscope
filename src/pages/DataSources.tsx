
import React, { useState } from 'react'
import { Database, Key, CheckCircle, XCircle, Loader } from 'lucide-react'

const DataSources = () => {
  const [apiKeys, setApiKeys] = useState({
    alphaVantage: '',
    polygon: '',
    newsApi: '',
    twitter: ''
  })
  
  const [connections, setConnections] = useState({
    alphaVantage: 'disconnected',
    polygon: 'disconnected',
    newsApi: 'disconnected',
    twitter: 'disconnected'
  })

  const dataSources = [
    {
      id: 'alphaVantage',
      name: 'Alpha Vantage',
      description: 'Real-time and historical stock market data',
      website: 'https://www.alphavantage.co/',
      features: ['Stock prices', 'Forex rates', 'Crypto data', 'Technical indicators']
    },
    {
      id: 'polygon',
      name: 'Polygon.io',
      description: 'Financial market data APIs',
      website: 'https://polygon.io/',
      features: ['Real-time quotes', 'Historical data', 'Options data', 'Market news']
    },
    {
      id: 'newsApi',
      name: 'NewsAPI',
      description: 'News articles from various sources',
      website: 'https://newsapi.org/',
      features: ['Financial news', 'Company mentions', 'Market sentiment', 'Breaking news']
    },
    {
      id: 'twitter',
      name: 'Twitter API',
      description: 'Social media sentiment analysis',
      website: 'https://developer.twitter.com/',
      features: ['Tweet sentiment', 'Trending topics', 'Influencer tracking', 'Real-time feeds']
    }
  ]

  const handleApiKeyChange = (sourceId, value) => {
    setApiKeys(prev => ({ ...prev, [sourceId]: value }))
  }

  const testConnection = async (sourceId) => {
    setConnections(prev => ({ ...prev, [sourceId]: 'testing' }))
    
    // Simulate API testing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // For demo purposes, randomly succeed or fail
    const success = Math.random() > 0.3
    setConnections(prev => ({ 
      ...prev, 
      [sourceId]: success ? 'connected' : 'error' 
    }))
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'connected':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'testing':
        return <Loader className="w-5 h-5 text-blue-500 animate-spin" />
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <Database className="w-5 h-5 text-gray-400" />
    }
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Data Sources</h1>
          <p className="mt-2 text-gray-600">
            Connect and configure your financial data sources for AI analysis
          </p>
        </div>

        <div className="grid gap-6">
          {dataSources.map((source) => (
            <div key={source.id} className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Database className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{source.name}</h3>
                    <p className="text-sm text-gray-500">{source.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(connections[source.id])}
                  <span className="text-sm text-gray-600 capitalize">
                    {connections[source.id] === 'testing' ? 'Testing...' : connections[source.id]}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {source.features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="password"
                      placeholder="Enter API key"
                      value={apiKeys[source.id]}
                      onChange={(e) => handleApiKeyChange(source.id, e.target.value)}
                      className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <button
                  onClick={() => testConnection(source.id)}
                  disabled={!apiKeys[source.id] || connections[source.id] === 'testing'}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Test Connection
                </button>
                <a
                  href={source.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Get API Key
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-900 mb-2">Data Pipeline Status</h3>
          <p className="text-blue-700 mb-4">
            Connected data sources will automatically feed into our AI models for real-time analysis.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dataSources.map((source) => (
              <div key={source.id} className="flex items-center">
                {getStatusIcon(connections[source.id])}
                <span className="ml-2 text-sm text-blue-700">{source.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataSources
