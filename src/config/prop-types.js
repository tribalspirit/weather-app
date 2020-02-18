import propTypes from 'prop-types'

export const labelPropType = propTypes.shape({
    label: propTypes.string,
    value: propTypes.string
}).isRequired
