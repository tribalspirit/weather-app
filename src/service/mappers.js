import moment from 'moment'
import { JACKET_TRESHOLD, CONDITIONS, DATE_FORMAT } from '../config/consts'

const findBestDaySellJacket = (data, units) => data.find(i => i.temperature.feels >= JACKET_TRESHOLD[units])
const findBestDaySellUmbrella = data => data.find(i => i.forecast.find(f => f.condition === CONDITIONS.CLEAR))

export const weatherReportToFE = (res, units) => {
    if (!res.list) return []

    const fiveDaysData = res.list.filter((i, idx) => !(idx % 8)).map(i => ( // A bit clumsy way to get 5 days from 5d/3h data set, but the proper API for that is paid. 
 
        {   
            id: i.dt,
            dateTime: moment(i.dt_txt).format(DATE_FORMAT),
            temperature: {
                main: Math.round(i.main.temp),
                min: Math.round(i.main.temp_min),
                max: Math.round(i.main.temp_max),
                feels: Math.round(i.main.feels_like)
            },
            pressure: i.main.pressure,
            humidity: i.main.humidity,
            forecast:  i.weather.map(i => ({
                condition: i.main,
                description: i.description
            })),
            bestSellJacket: false,
            bestSellUmbrella: false
        }
        ))

        const bestDaySellJacket = findBestDaySellJacket(fiveDaysData, units)
        const bestDaySellUmbrella = findBestDaySellUmbrella(fiveDaysData)
        bestDaySellJacket && (bestDaySellJacket.bestSellJacket = true)
        bestDaySellUmbrella && (bestDaySellUmbrella.bestSellUmbrella = true)

    return fiveDaysData
}