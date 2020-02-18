import React from 'react'
import propTypes from 'prop-types'
import { CONDITIONS } from '../../../config/consts'
import { ReactComponent as RainIcon } from '../../../assets/rain.svg'
import { ReactComponent as CloudIcon } from '../../../assets/clouds.svg'
import { ReactComponent as ClearIcon } from '../../../assets/sunny.svg'
import './style.css'

const ForecastIcon = ({ condition }) => (<div className='forecast-icon'>
    { condition === CONDITIONS.CLEAR && <ClearIcon />}
    { condition === CONDITIONS.RAIN && <RainIcon />}
    { condition === CONDITIONS.CLOUDS && <CloudIcon />}
</div>)

ForecastIcon.propTypes = {
    condition: propTypes.oneOf(Object.values(CONDITIONS))
}

export default ForecastIcon