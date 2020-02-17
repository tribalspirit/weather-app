import React from 'react'
import propTypes from 'prop-types'

const ForecastCard = ({ dateTime, temperature, pressure, humidity, forecast }) => (
    <div className='forecast-card'>
        <h2>{dateTime}</h2>
        <div className='forecast-block'>
            <div className='forecast'>{forecast.main}</div>
            <div className='forecast-details'>{forecast.description}</div>
        </div>

        <div className='temperature-block'>
            <div className='current'>Current: {temperature.current}</div>
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
    forecast: propTypes.shape({
        main: propTypes.string,
        description: propTypes.string,
        clouds: propTypes.string
    })
}

export default ForecastCard