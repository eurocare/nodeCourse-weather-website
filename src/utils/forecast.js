const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=543b32d71cba55173a823c4ad4f0fe77&query=' + lat + ',' + long //weatherstack.com (eurocare@,darmar5429)
    request({
        url,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find a location. Try another search.',
                undefined)
        } else {
            callback(undefined, 'In ' + body.location.name + ' it is currently ' + body.current.temperature + ' degrees Celsius out. It feels like ' + body.current.feelslike + ' degrees.')

            console.log('lat=' + body.location.lat + '  long=' + body.location.lon)
        }
    })
}

module.exports = forecast