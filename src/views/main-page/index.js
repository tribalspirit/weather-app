import React, { useState } from 'react'
import propTypes from 'prop-types'
import SearchBar from '../components/search-bar'
import ToggleSwitch from '../components/toggle-switch'
import WeatherReport from '../components/weather-report'
import { UNIT_LABELS, SOURCE_CODE_URL } from '../../config/consts'
import './style.css'

const MainPage = ({ city }) => {
  const [units, setUnits] = useState(UNIT_LABELS.METRIC)

  return (<div className='app'>
    <header className='app-header'>
      <SearchBar value={city} />
      <ToggleSwitch left={UNIT_LABELS.METRIC} right={UNIT_LABELS.IMPERIAL} onChange={u => setUnits(u)}/>
    </header>
    <content className='app-content'>
      <WeatherReport city={city} units={units}/>
    </content>
    <footer className='app-footer'>
        <span>(c) 2020 Source code can be found <a href={SOURCE_CODE_URL}>here</a></span>
    </footer>
  </div>)
}

MainPage.propTypes = {
    city: propTypes.string
}

export default MainPage