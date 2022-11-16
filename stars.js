
/**
 * Places the moon in a random starry sky.
 * The sky is both aesthetic and prevents a duplicate status error from Twitter! 
 */

const HEIGHT = 8; // height of sky
const WIDTH = 16; // width of sky

//Fisher–Yates shuffle
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

const place_moon = function (stars, moon) {
    const row = Math.floor(Math.random() * HEIGHT);
    const col = Math.floor(Math.random() * WIDTH);
    
    // put moon in a random place in stars
    stars[row*WIDTH + col] = moon;
};

const add_new_line = function (stars) { 

    let sky = '';

    //add a newline at the end of each row
    for (let i = 0; i < HEIGHT*WIDTH; i += WIDTH) {
        sky += stars.slice(i, i+ WIDTH).join(" ");
        sky += '\n';
    }

    return sky; // return a string that depicts a HEIGHTxWIDTH starry sky 
};

const put_in_sky = function (moon) {

    let stars = [ '.', '.', '.', '.', '.', '.', '.', '.', '.', ' ', ' ', ' ', '˚', '*·', ' ', ' ', 
                '*', '*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '.', '.', '·*', ' ', ' ', ' ',
                ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
                ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '✰', ' ', ' ', ' ',   
                ' ', ' ', ' ', ' ', ' ', '✹', ' ', ' ', ' ', ' ', ' ', ' ', '✵', ' ', ' ', ' ',
                ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '✧', '✦', ' ', '˚',
                ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '˚', '˚',
                '.', '.', '.', '.', '.', '.', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
                '.', '.', '.', '.', '.', '.', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
                '.', '.', '.', '.', '.', '.', '⊹', '⊹', '⊹', ' ', ' ', '✵', ' ', ' ', ' ', ' ',
                ' ', ' ', ' ', ' ', ' ', ' ', ' ', '★', ' ', ' ', ' ', '✫', ' ', ' ', ' ', ' '];

    shuffle(stars);

    place_moon(stars, moon);

    return add_new_line(stars);
};

module.exports = put_in_sky;

//console.log(put_in_sky('🌖'));

