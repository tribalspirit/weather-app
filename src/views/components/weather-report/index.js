import React, { PureComponent } from 'react'
import { getWeatherReport } from '../../../service'
import propTypes from 'prop-types'
import ForecastCard from '../forecast-card'
import Spinner from '../spinner'
import { labelPropType } from '../../../config/prop-types'
import './style.css'

class WeatherReport extends PureComponent {
    state = {
        weatherData: [],
        errorMessage: null,
        isLoading: false
    }

    async componentDidMount () {
        const { city, units } = this.props
        if (city === '') return
        await this.getWeatherData({ city, units: units.value })
    }

    async componentDidUpdate (prevProps) {
        const { city, units } = this.props
        if (prevProps.city === city && prevProps.units === units) return
        await this.getWeatherData({ city, units: units.value })
    }

    getWeatherData = (params) => {
        this.setState({
            isLoading: true,
            errorMessage: null,
            weatherData: []
        }, async () => {
            const res = await getWeatherReport(params)
            res.data && this.setState({
                weatherData: res.data,
                errorMessage: null,
                isLoading: false
            })

            res.error && this.setState({
                errorMessage: res.error.message,
                isLoading: false
            })
        })
    }

    render () {
        const { city, units } = this.props
        const { isLoading, weatherData, errorMessage } = this.state

        return (<div className='weather-report'>
            <h2>{city}</h2>
            <div className='forecast-container'>
                { isLoading && (<Spinner />) }
                { weatherData.map(card => (<ForecastCard key={card.id} {...card} unitsLabel={units.label} />)) }
            </div>
            { errorMessage && (<div>Something went wrong: {errorMessage}</div>) }
        </div>)
    }
}

WeatherReport.propTypes = {
    city: propTypes.string,
    units: labelPropType
}

export default WeatherReport