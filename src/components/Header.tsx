
import { Link, useLocation } from 'react-router-dom'
import { BarChart3, Database, Brain, TrendingUp } from 'lucide-react'

const Header = () => {
  const location = useLocation()

  const navigation = [
    { name: 'Dashboard', href: '/', icon: BarChart3 },
    { name: 'Data Sources', href: '/data-sources', icon: Database },
    { name: 'AI Models', href: '/models', icon: Brain },
    { name: 'Analytics', href: '/analytics', icon: TrendingUp },
  ]

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Fintelscope</h1>
            <p className="ml-3 text-sm text-gray-500">AI-Powered Financial Intelligence</p>
          </div>
          
          <nav className="flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
