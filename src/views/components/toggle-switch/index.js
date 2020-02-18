import React, { useState } from 'react'
import propTypes from 'prop-types'
import { labelPropType } from '../../../config/prop-types'
import './style.css'

const ToggleSwitch = ({ left, right, onChange }) => {
    const [checked, setChecked] = useState(false)

    return (<div className='toggle-switch'>
        <span className='toggle-label'>{left.label}</span>
        <input className='toggle' type='checkbox' onChange={() => {
            onChange && onChange(checked ? left : right)
            setChecked(!checked)
         }} />
        <span className='toggle-label'>{right.label}</span>
    </div>)
}

ToggleSwitch.propTypes = {
    left: labelPropType,
    right: labelPropType,
    onChange: propTypes.func
}

export default ToggleSwitch