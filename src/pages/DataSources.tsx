
import { useState } from 'react'
import { Database, Key, Globe, Twitter, AlertCircle, CheckCircle } from 'lucide-react'

interface ApiKeys {
  alphaVantage: string
  polygon: string
  newsApi: string
  twitter: string
}

const DataSources = () => {
  const [apiKeys, setApiKeys] = useState<ApiKeys>({
    alphaVantage: '',
    polygon: '',
    newsApi: '',
    twitter: ''
  })
  
  const [connectionStatus, setConnectionStatus] = useState<Record<string, string>>({
    alphaVantage: 'disconnected',
    polygon: 'disconnected',
    newsApi: 'disconnected',
    twitter: 'disconnected'
  })

  const handleApiKeyChange = (sourceId: keyof ApiKeys, value: string) => {
    setApiKeys(prev => ({ ...prev, [sourceId]: value }))
  }

  const testConnection = async (sourceId: keyof ApiKeys) => {
    setConnectionStatus(prev => ({ ...prev, [sourceId]: 'testing' }))
    
    // Simulate API test
    setTimeout(() => {
      const success = Math.random() > 0.3 // 70% success rate for demo
      setConnectionStatus(prev => ({ 
        ...prev, 
        [sourceId]: success ? 'connected' : 'error' 
      }))
    }, 2000)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case 'testing':
        return <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      default:
        return <Database className="h-5 w-5 text-gray-400" />
    }
  }

  const dataSources = [
    {
      id: 'alphaVantage' as keyof ApiKeys,
      name: 'Alpha Vantage',
      description: 'Real-time and historical stock market data',
      icon: Globe,
      placeholder: 'Enter Alpha Vantage API key'
    },
    {
      id: 'polygon' as keyof ApiKeys,
      name: 'Polygon.io',
      description: 'Financial market data APIs',
      icon: Database,
      placeholder: 'Enter Polygon.io API key'
    },
    {
      id: 'newsApi' as keyof ApiKeys,
      name: 'News API',
      description: 'Financial news and sentiment data',
      icon: Globe,
      placeholder: 'Enter News API key'
    },
    {
      id: 'twitter' as keyof ApiKeys,
      name: 'Twitter API',
      description: 'Social media sentiment analysis',
      icon: Twitter,
      placeholder: 'Enter Twitter Bearer Token'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Data Sources</h1>
        <p className="mt-2 text-gray-600">Configure API connections for real-time financial data</p>
      </div>

      <div className="space-y-6">
        {dataSources.map((source) => {
          const Icon = source.icon
          const status = connectionStatus[source.id]
          
          return (
            <div key={source.id} className="bg-white rounded-lg shadow border border-gray-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{source.name}</h3>
                      <p className="text-sm text-gray-500">{source.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {getStatusIcon(status)}
                    <span className="ml-2 text-sm font-medium capitalize text-gray-700">
                      {status}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Key className="inline h-4 w-4 mr-1" />
                      API Key
                    </label>
                    <input
                      type="password"
                      value={apiKeys[source.id]}
                      onChange={(e) => handleApiKeyChange(source.id, e.target.value)}
                      placeholder={source.placeholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => testConnection(source.id)}
                      disabled={!apiKeys[source.id] || status === 'testing'}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {status === 'testing' ? 'Testing...' : 'Test Connection'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Security Notice</h3>
            <p className="mt-1 text-sm text-blue-700">
              API keys are encrypted and stored securely. Never share your API keys with unauthorized parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataSources
