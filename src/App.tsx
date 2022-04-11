//@ts-nocheck
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.scss'

import { Menu } from './components/Menu'
import { Search } from './pages/search/search'
import { Tokens } from './pages/tokens/tokens'
import { Token } from './pages/token/token'

function App() {
  const tokenSymbol = window.location.pathname.split('/')[1]
  const [activePage, setActivePage] = React.useState(tokenSymbol)

  return (
    <div className="app">
      <Menu activePage={activePage} setActivePage={(e) => setActivePage(e)} />

      <div className="content">
        <Routes>
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/tokens/:symbol"
            element={<Token setActivePage={(e) => setActivePage(e)} />}
            exact
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
