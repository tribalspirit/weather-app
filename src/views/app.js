import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import queryString from 'query-string'

import SearchBar from './components/search-bar'
import WeatherReport from './components/weather-report'
import './app.css'

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <div className='app'>
        <header className='app-header'>
          <SearchBar />
        </header>
        <content className='app-content'>
        <Route
          path='/'
          render={({ location: { search } }) => {
              const city = queryString.parse(search).city || ''
              return <WeatherReport city={city} />
            }}/> 
        </content>
        <footer className='app-footer'>
            <span>(c) 2020</span>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App
