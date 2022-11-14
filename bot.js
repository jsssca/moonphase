const twit = require('twit')
const axios = require('axios')
const config_twit = require('./config_twit')
const moon = require('./config_moon') // contains unicode for the moon phases
const { weather_req } = require('./config') // weather API request 

//TODO: Log Errors, add twit module and dotenv, comments!!

const Twitter = new twit(config_twit)

const tweeted = function (err, reply) {
    if (err !== undefined) {
        console.log(err);
    }
    else {
        console.log(`Tweeted: ${reply.text}`);
    }
}

const tweet = function (moonphase) {
    Twitter.post("statuses/update", {
        status: moonphase
    }, tweeted);
}

const calculate_moonphase = function (moonphase) {  // if NaN ?????

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

const tweet_moonphase = function () {
    const weather_data = async () => {
        try {
            return await axios.get(weather_req); //The default GET retrieves 15 days worth of data. TODO: fetch only the current day's data 
        } catch (err) {
            console.log(err);
        }
    }

    const moonphase = async () => {
        const wd = await weather_data();

        if(wd.data) {
            let mp = wd.data['days'][0]['moonphase']; // select today's moonphase from the expected JSON

            let mp_unicode = calculate_moonphase(parseFloat(mp)); // find the corresponding unicode

            if (mp_unicode) {
                //put moon in sky
                //console.log(mp_unicode);
                tweet(mp_unicode); // Tweet today's moonphase!
            }
            else {
                console.log(`Unicode for the moonphase ${mp} could not be found `);
            }
        }
        else {
            console.log('Weather data could not be found');
        }
    }
    
    moonphase();
}

//set interval 
tweet_moonphase()

