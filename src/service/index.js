import request from 'superagent'
import { OPENWEATHER_API_KEY, OPENWEATHER_API_URLBASE, UNITS } from '../consts'
import { weatherReportToFE } from './mappers'

export const getWeatherReport = async ({ city, units = UNITS.METRIC }) => {
    const res = {
        data: null,
        error: null
    }
    try {
        const data = await request.get(OPENWEATHER_API_URLBASE)
        .query({
            q: city,
            appid: OPENWEATHER_API_KEY,
            units
        })

        res.data = weatherReportToFE(data.body)
    }
    catch (error) {
        res.error = error
    } 

    return res
}