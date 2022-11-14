
/**
 * Places the moon in a random starry sky.
 * The sky is both aesthetic and prevents a duplicate status error from Twitter! 
 */

const HEIGHT = 10; // height of sky
const WIDTH = 12; // width of sky

const shuffle = function (stars) { 
    var m = stars.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = stars[m];
      stars[m] = stars[i];
      stars[i] = t;
    }
  
    return stars;
};

function get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
};

const place_moon = function (stars, moon) {
    const row = get_random_int(0, HEIGHT + 1);
    const col = get_random_int(0, WIDTH + 1);
    
    stars[row*WIDTH + col] = moon;
};

const add_new_line = function (stars) {

    let sky = '';

    for (let i = 0; i < stars.length; i += WIDTH) {
        sky += stars.slice(i, i+ WIDTH).join(" ");
        sky += '\n';
    }

    return sky;
};

const put_in_sky = function (moon) {

    let stars = [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
                '*', '*', '*', '*', '*', '*', '*', '*', ' ', ' ', '.', '.', 
                ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
                ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
                ' ', ' ', ' ', ' ', ' ', '✹', ' ', ' ', ' ', ' ', ' ', ' ', 
                ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
                ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
                ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
                ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',  
                '⚹', '⚹', '⚹', ' ', ' ', ' ', '✰', ' ', '★', ' ', '✧', '✦']; 

    shuffle(stars);

    place_moon(stars, moon);

    return add_new_line(stars);
};

console.log(put_in_sky('🌔'));


