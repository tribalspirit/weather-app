import React from 'react'
import propTypes from 'prop-types'
import './style.css'

const ForecastCard = ({ dateTime, temperature, pressure, humidity, forecast }) => (
    <div className='forecast-card'>
        <h3>{dateTime}</h3>
        <div className='forecast-block'>
            { forecast.map(f => (<div key={f.condition.toLowerCase()} className='forecast'><span className='forecast-details'>{f.condition}: {f.description}</span></div>))}
        </div>

        <div className='temperature-block'>
            <div className='main'>Temperature: {temperature.main}</div>
            <div className='feels-like'>Feels like: {temperature.feels}</div>
        </div>

        <div className='others-block'>
            <div className='humidity'>Humidity: {humidity}%</div>
            <div className='pressure'>Pressure: {pressure} hPa</div>
        </div>

    </div>
)

ForecastCard.propTypes = {
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
    }))
}

export default ForecastCard