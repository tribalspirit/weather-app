export const SOURCE_CODE_URL = 'https://github.com/tribalspirit/weather-app'
export const OPENWEATHER_API_KEY = '46398ffaca17274d9acd066967a7b2dc'
export const OPENWEATHER_API_URLBASE = 'http://api.openweathermap.org/data/2.5/forecast'

export const UNITS = {
    METRIC: 'metric',
    IMPERIAL: 'imperial'
}

export const UNIT_LABELS = {
    METRIC: {
        label: '\u00b0C',
        value: UNITS.METRIC
    },
    IMPERIAL: {
        label: '\u00b0F',
        value: UNITS.IMPERIAL
    }
}

export const CONDITIONS = {
    CLOUDS: 'Clouds',
    CLEAR: 'Clear',
    RAIN: 'Rain'
}

export const JACKET_TRESHOLD = {
    [UNITS.METRIC]: 25,
    [UNITS.IMPERIAL]: 77
}

export const BEST_DAY_LABELS = {
    JACKET: 'Best day to sell your jacket',
    UMBRELLA: 'Best day to sell your umbrella'
}

export const DATE_FORMAT = 'llll'