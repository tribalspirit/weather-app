import moment from 'moment'

export const weatherReportToFE = res => {
    if (!res.list) return []
    const fiveDaysData = res.list.filter((i, idx) => !(idx % 8))
    return fiveDaysData.map(i => (
    {
        dateTime: moment(i.dt_txt).format('lll'),
        temperature: {
            current: i.main.temp,
            min: i.main.temp_min,
            max: i.main.temp_max,
            feels: i.main.feels_like
        },
        pressure: i.main.pressure,
        humidity: i.main.humidity,
        forecast: {
            main: i.weather.map(f => f.main).join(', '),
            description: i.weather.map(f => f.description).join('; '),
            clouds: i.clouds.all
        }
    }
    ))
}