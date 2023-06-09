import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmergencyFundCalculator from './components/EmergencyFundCalculator';
import Budget from './components/Budget';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <Router>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="text-white font-bold">
                  My App
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/emergency-fund-calculator" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Emergency Fund Calculator
                  </Link>
                  <Link to="/budget" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Budget
                  </Link>
                  <Link to="/shopping-list" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Shopping List
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<EmergencyFundCalculator />} />
        <Route path="/emergency-fund-calculator" element={<EmergencyFundCalculator />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
      </Routes>
    </Router>
  );
}

export default App;
