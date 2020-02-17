import React from 'react'
import propTypes from 'prop-types'
import SearchBar from '../components/search-bar'
import WeatherReport from '../components/weather-report'
import './style.css'

const MainPage = ({ city }) => (<div className='app'>
  <header className='app-header'>
    <SearchBar value={city} />
  </header>
  <content className='app-content'>
    <WeatherReport city={city} />
  </content>
  <footer className='app-footer'>
      <span>(c) 2020</span>
  </footer>
</div>)

MainPage.propTypes = {
    city: propTypes.string
}

export default MainPage