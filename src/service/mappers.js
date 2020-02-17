import moment from 'moment'

export const weatherReportToFE = res => {
    if (!res.list) return []
    const fiveDaysData = res.list.filter((i, idx) => !(idx % 8))
    return fiveDaysData.map(i => (
    {   
        id: i.dt,
        dateTime: moment(i.dt_txt).format('lll'),
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
        }))
    }
    ))
}