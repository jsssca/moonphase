/**
 * Places the moon in a random starry sky.
 * The sky is both aesthetic and prevents a duplicate status error from Twitter!
 */

const HEIGHT = 8; // height of sky
const WIDTH = 16; // width of sky

// returns random integer between 0 and max
const getRndInt = function (max) {
  return Math.floor(Math.random() * max);
};

//Fisher–Yates shuffle
const shuffle = function (stars) {
  var m = stars.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = getRndInt(m--);

    // And swap it with the current element.
    t = stars[m];
    stars[m] = stars[i];
    stars[i] = t;
  }

  return stars;
};

const place_moon = function (stars, moon) {
  const row = getRndInt(HEIGHT);
  const col = getRndInt(WIDTH);

  // put moon in a random place in stars
  stars[row * WIDTH + col] = moon;
};

// returns a string that depicts a HEIGHTxWIDTH starry sky
const getString = function (stars) {
  let sky = "";

  //add a newline at the end of each row
  for (let i = 0; i < HEIGHT * WIDTH; i += WIDTH) {
    sky += stars.slice(i, i + WIDTH).join(" ");
    sky += "\n";
  }

  return sky;
};

const put_in_sky = function (moon) {
  // prettier-ignore
  let stars = [ ".", ".", ".", ".", ".", ".", ".", ".", ".", " ", " ", " ", "˚", "*·", " ", " ", 
  "*", "*", " ", " ", " ", " ", " ", " ", " ", " ", ".", ".", "·*", " ", " ", " ", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "✰", " ", " ", " ", 
  " ", " ", " ", " ", " ", "✹", " ", " ", " ", " ", " ", " ", "✵", " ", " ", " ", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "✧", "✦", " ", "˚", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "˚", "˚", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
  ".", ".", ".", ".", ".", ".", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
  ".", ".", ".", ".", ".", ".", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", 
  ".", ".", ".", ".", ".", ".", "⊹", "⊹", "⊹", " ", " ", "✵", " ", " ", " ", " ", 
  " ", " ", " ", " ", " ", " ", " ", "★", " ", " ", " ", "✫", " ", " ", " ", " ", ];

  shuffle(stars);

  place_moon(stars, moon);

  return getString(stars);
};

module.exports = put_in_sky;

//console.log(put_in_sky("🌖"));
