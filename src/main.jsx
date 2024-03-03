import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min.js'
import GoodHealthPage from '../src/components/Good Health/GoodHealth.jsx'
import SustainableCitiesPage from '../src/components/Sustainable Cities/SustainableCities.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Route exact path='/' component={App} />
      <Route path='/GoodHealthPage' component={GoodHealthPage} />
      <Route path='/SustainablePage' component={SustainableCitiesPage} />
    </Router>
  </div>
)
