import React, { PureComponent } from 'react'
import { getWeatherReport } from '../../../service'
import propTypes from 'prop-types'
import ForecastCard from '../forecast-card'
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
        await this.getWeatherData({ city, units })
    }

    async componentDidUpdate (prevProps) {
        const { city, units } = this.props
        if (prevProps.city === city && prevProps.units === units) return
        await this.getWeatherData({ city, units })
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
        const { city } = this.props
        const { isLoading, weatherData, errorMessage } = this.state

        return (<div className='weather-report'>
            <h1>{city}</h1>
            { isLoading && (<div className='isLoading'>...Loading</div>) }
            <div className='forecast-container'>
                { weatherData.map(card => (<ForecastCard key={card.id} {...card} />)) }
            </div>
            { errorMessage && (<div>Something went wrong: {errorMessage}</div>) }
        </div>)
    }
}

WeatherReport.propTypes = {
    city: propTypes.string,
    units: propTypes.string
}

export default WeatherReport