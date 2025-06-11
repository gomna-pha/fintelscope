
import React, { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react'
import MarketOverview from '../components/MarketOverview'
import SentimentAnalysis from '../components/SentimentAnalysis'
import PredictionModels from '../components/PredictionModels'

const Dashboard = () => {
  const [marketData, setMarketData] = useState({
    sp500: { value: 4150.25, change: 1.2 },
    nasdaq: { value: 12845.67, change: -0.8 },
    dow: { value: 33421.45, change: 0.5 },
    vix: { value: 18.45, change: -2.1 }
  })

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">S&P 500</dt>
                    <dd className="text-lg font-medium text-gray-900">{marketData.sp500.value.toLocaleString()}</dd>
                    <dd className={`text-sm ${marketData.sp500.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {marketData.sp500.change >= 0 ? '+' : ''}{marketData.sp500.change}%
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">NASDAQ</dt>
                    <dd className="text-lg font-medium text-gray-900">{marketData.nasdaq.value.toLocaleString()}</dd>
                    <dd className={`text-sm ${marketData.nasdaq.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {marketData.nasdaq.change >= 0 ? '+' : ''}{marketData.nasdaq.change}%
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Dow Jones</dt>
                    <dd className="text-lg font-medium text-gray-900">{marketData.dow.value.toLocaleString()}</dd>
                    <dd className={`text-sm ${marketData.dow.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {marketData.dow.change >= 0 ? '+' : ''}{marketData.dow.change}%
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrendingDown className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">VIX</dt>
                    <dd className="text-lg font-medium text-gray-900">{marketData.vix.value}</dd>
                    <dd className={`text-sm ${marketData.vix.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {marketData.vix.change >= 0 ? '+' : ''}{marketData.vix.change}%
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
          <MarketOverview />
          <SentimentAnalysis />
        </div>

        <PredictionModels />
      </div>
    </div>
  )
}

export default Dashboard
