const twit = require('twit')
const config_twit = require('./config_twit')
const moon = require('./config_moon')
const { api_key, location } = require('./config') 

//const Twitter = new twit(config_twit)

//const tweet = function () {}

const calculate_moonphase = function (moonphase) {

    let mp = ''
    
    if (moonphase > 1 || moonphase < 0) {
        return mp;
    }
    else if (moonphase === 1) {
        mp = moon.new_moon;
    }
    else if (moonphase > 0.75) {
        mp = moon.waning_crescent;
    }
    else if (moonphase === 0.75) {
        mp = moon.last_quarter;
    }
    else if (moonphase > 0.5) {
        mp = moon.waning_gibbous;
    }
    else if (moonphase === 0.5) {
        console.log('fullmmon')
        mp = moon.full_moon;
    }
    else if (moonphase > 0.25) {
        mp = moon.waxing_gibbous;
    }
    else if (moonphase === 0.25) {
        mp = moon.first_quarter;
    }
    else if (moonphase > 0 && moonphase < 0.25) {
        mp = moon.waxing_crescent;
    }
    else if (moonphase === 0) {
        mp = moon.new_moon;
    }

    return mp;

}

console.log(calculate_moonphase(0.5))
console.log('🌕')
console.log(location)

//const fetch_moonphase = function () {}

//fetch moonphase
//parseFloat(moonphase)
//if moonphasethen claculate_moonphase(moonphase)
//if moonphase then tweet(moonphase)
