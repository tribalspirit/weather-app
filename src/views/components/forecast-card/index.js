import React from 'react'
import propTypes from 'prop-types'
import { BEST_DAY_LABELS } from '../../../config/consts'
import ForecastIcon from '../forecast-icon'
import './style.css'

const ForecastCard = ({ unitsLabel, dateTime, temperature, pressure, humidity, forecast, bestSellJacket, bestSellUmbrella }) => (
    <div className='forecast-card'>
        <h4>{dateTime}</h4>
        <div className='forecast-block'>
            { forecast.map(f => (<div key={f.condition.toLowerCase()} className='forecast'>
                <div className='forecast-details'><span className='label'>{f.condition}</span>: {f.description}</div>
                <ForecastIcon condition={f.condition} />
            </div>))}
        </div>

        <div className='temperature-block'>
            <div className='main'><span className='label'>Temperature:</span> {temperature.main} {unitsLabel}</div>
            <div className='feels-like'><span className='label'>Feels like:</span> {temperature.feels} {unitsLabel}</div>
        </div>

        <div className='others-block'>
            <div className='humidity'><span className='label'>Humidity:</span> {humidity}%</div>
            <div className='pressure'><span className='label'>Pressure:</span> {pressure} hPa</div>
        </div>

        { (bestSellJacket || bestSellUmbrella) && <div className='best-day'>
            {bestSellJacket && <div className='best-day-label'>{BEST_DAY_LABELS.JACKET}</div>}
            {bestSellUmbrella && <div className='best-day-label'>{BEST_DAY_LABELS.UMBRELLA}</div>}
        </div> }

    </div>
)

ForecastCard.propTypes = {
    unitsLabel: propTypes.string,
    dateTime: propTypes.string,
    temperature: propTypes.shape({
        current: propTypes.number,
        min: propTypes.number,
        max: propTypes.number,
        feels: propTypes.number
    }),
    pressure: propTypes.number,
    humidity: propTypes.number,
    forecast: propTypes.arrayOf(propTypes.shape({
        condition: propTypes.string,
        description: propTypes.string
    })),
    bestSellJacket: propTypes.bool,
    bestSellUmbrella: propTypes.bool
}

export default ForecastCard