/**
 * Adds some noise to a value.<br />
 * You may use seedRandom() before using this function as it will influence the generated noise.
 * A timeless noise can be achieved with <code>seedRandom(index,true)</code> for example.
 * @function
 * @param {number|number[]} val The value to add noise to.
 * @param {float} quantity The quantity of noise. A percentage. 100 means the value can range from (val * 0) to (val * 2).
 * @example
 * seedRandom(index, true) // a timeless noise
 * addNoise(value, 50 ); // the property value will have noise between (value * 0.5) and (value * 1.5) which won't vary through time.
 * @example
 * seedRandom(index, false);
 * addNoise(value, 33 ); // the noise will change at each frame, varying between (value * .66) and (value * 1.33)
 */
function addNoise( val, quantity ) {
  // a true random value to make sure all properties have a differente noise
  // even with the same start value
  var randomValue = random(0.9,1.1);
  // generate a noise from the start value
  // (which means properties with a similar value won't be to far away from each other)
  var noiseValue = noise(valueAtTime(0) * randomValue);
  noiseValue = noiseValue * (quantity / 100);
  return val * ( noiseValue + 1 );
}