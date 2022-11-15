/**
 * API request
 * Fetches JSON
 * Location and time can be changed for different timezones, hemispheres etc
 */
const location = 'London,UK'
const req = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?unitGroup=metric&key=' + process.env.WEATHER_API_KEY + '&contentType=json';

module.exports = {
    weather_req: req
}