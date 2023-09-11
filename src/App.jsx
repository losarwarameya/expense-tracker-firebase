import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Auth} from './pages/auth/index'
import {ExprenseTracker} from './pages/expense-tracker/index'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Auth />} />
          <Route path='/expense-tracker' element={<ExprenseTracker />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App