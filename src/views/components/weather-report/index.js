import React, { PureComponent } from 'react'


class WeatherReport extends PureComponent {
    render () {
        const { city } = this.props

        return (<div className='weather-report'>
            { city }
        </div>)
    }
}

export default WeatherReport